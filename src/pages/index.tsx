import type { NextPage } from 'next';
import React from 'react';
import Layout from "../components/common/Layout";
import Button from "../components/shared/Button";
import DatePicker from "../components/shared/DatePicker";
import SearchInput from "../components/shared/SearchInput";
import PriceRange from "../components/shared/PriceRange";
import HotelCard from "../components/modules/HotelCard";
import { Hotel } from "../models/Hotel";
import { getTotalNights } from "../utils/Helpers";
// get Hotels Data
export const getStaticProps = async () => {
  try {
    const res = await fetch("https://run.mocky.io/v3/6e1ef542-08f6-45a8-a430-9fceee74e7f0");
    const data = await res.json();
    return {
      props: { hotels: data }
    }
  } catch (e: any) {
    return { notFound: true };
  }
}

const HomePage: NextPage = ({ hotels }: any) => {
  const [state, setState] = React.useState({
    searchValue: '',
    searchFromDate: '',
    searchToDate: '',
    searchPrice: 0,
    filteredHotelsData: hotels,
    sortByValue: '',
    totalNights: 1
  })
  // Search Hotels By keywords
  const searchHotels = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ 
      ...state, 
      filteredHotelsData: state.filteredHotelsData.filter((hotel: Hotel) => hotel.name.toLowerCase().includes(event.target.value.toLowerCase())),
      searchValue: event.target.value
    })
  }

  // searchFrom Date Update state
  const searchFromDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, searchFromDate: event.target.value })
  }

  // searchTo Date Update state
  const searchToDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, searchToDate: event.target.value })
  }

  //price change update State 
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      searchPrice: Number(event.target.value),
      filteredHotelsData: state.filteredHotelsData.filter((hotel: Hotel) =>
        hotel.price <= event.target.value
      )
    })
  }

  // handle search by date
  const searchHotelByDate = () => {
    const startDate = new Date(state.searchFromDate);
    const endDate = new Date(state.searchToDate);
    setState({
      ...state, 
      filteredHotelsData: state.filteredHotelsData.filter((hotel: Hotel) => 
        new Date(hotel.available_on).getTime() >= startDate.getTime() && new Date(hotel.available_on).getTime() <= endDate.getTime()
      ),
      totalNights: getTotalNights(startDate, endDate)
    })
  }

  //Sort By Name 
  const sortByName = () => {
    setState({ 
      ...state,
      sortByValue: 'name',
      filteredHotelsData: state.filteredHotelsData.sort((obj1: Hotel, obj2: Hotel) =>
        obj1.name > obj2.name ? 1 : obj2.name > obj1.name ? -1 : 0
      )
    })
  }
  //Sort By Price 
  const sortByPrice = () => {
    setState({ 
      ...state,
      sortByValue: 'price',
      filteredHotelsData: state.filteredHotelsData.sort((obj1: Hotel, obj2: Hotel) =>
        parseFloat(obj1.price) - parseFloat(obj2.price)
      )
    })
  }
  return (
    <>
      <Layout>
        <h1 className="text-5xl text-center mb-10">Search Hotel:</h1>
        <div className="flex items-center	justify-between my-10 flex-wrap">
          <div className="from-date items-center flex">
            <span className="mr-4 text-lg	font-bold">From:</span>
            <div className="border-2 py-4 px-12 border-black bg-white">
              <DatePicker
                id="fromDatePicker"
                name="from-date-picker"
                value={state.searchFromDate}
                onChange={searchFromDate}
                fromDate="2021-11-1"
                toDate="2021-12-31"
              />
            </div>
          </div>
          <div className="to-date items-center flex">
            <span className="mr-4 text-lg	font-bold">To:</span>
            <div className="border-2 py-4 px-12 border-black bg-white">
              <DatePicker
                id="toDatePicker"
                name="to-date-picker"
                value={state.searchToDate}
                onChange={searchToDate}
                fromDate="2021-11-1"
                toDate="2021-12-31"
              />
            </div>

          </div>
          <Button
            border="none"
            height="60px"
            onClick={searchHotelByDate}
            radius="2px"
            width="20%"
            text="Search"
            classes="text-white bg-black"
          />
        </div>
        <div className="lg:flex lg:px-0 px-4">
          <div className="lg:w-1/4 lg:mt-20">
            <SearchInput
              placeholder="Hotel Name"
              onChange={searchHotels}
              border="1px solid #000"
              value={state.searchValue}
              bgcolor="white"
              height="40px"
              radius="25px"
              width="85%"
              classes="my-6 pl-9 outline-none"
            />
            <h3 className="text-gray-700 my-2">Price Filter</h3>
            <PriceRange
              id="PriceRange"
              name="price-range"
              min={200}
              max={400}
              step={5}
              value={state.searchPrice}
              onChange={handlePriceChange}
              classes="h-3 w-10/12"
            />
          </div>
          <div className="w-full">
            <div className="flex justify-between items-center flex-wrap lg:mt-0 mt-6">
              <div className="total-nights text-xl font-bold lg:my-0 my-6">
              {state.totalNights?  'Total Nights ' + state.totalNights : '' }
              </div>
              <div className="sorting flex">
                <Button
                  border="1px solid #000"
                  height="60px"
                  onClick={sortByName}
                  radius="2px"
                  width=""
                  text="Sort by Name"
                  classes={state.sortByValue === 'name' ? "bg-black text-white mr-4 px-10 shadow-xl":
                  "text-black mr-4 px-10 bg-gray-100 hover:bg-black hover:text-white"}
                />
                <Button
                  border="1px solid #000"
                  height="60px"
                  onClick={sortByPrice}
                  radius="2px"
                  width=""
                  text="Sort by Price"
                  classes={state.sortByValue === 'price' ? "bg-black text-white mr-4 px-10 shadow-xl":
                  "text-black mr-4 px-10 bg-gray-100 hover:bg-black hover:text-white"}
                />
              </div>
            </div>
            <div className={state.filteredHotelsData?.length ? "grid grid-cols-2 mt-10 gap-4": ""}>
              {state.filteredHotelsData?.length ? (
                state.filteredHotelsData.map((hotel: Hotel) => (
                    <HotelCard
                      key={hotel.name}
                      name={hotel.name}
                      price={parseInt(hotel.price) * state.totalNights}
                      currency="UAE"
                      city={hotel.city}
                    />
                ))) :
              (<div className="text-lg py-12 text-center bg-gray-50 mt-12">
                <h3 className="font-bold text-2xl">No Result found</h3>
                <p>Try Again with different criteria!</p>
              </div>)}

              </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default HomePage;
