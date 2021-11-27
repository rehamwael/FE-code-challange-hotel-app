import type { NextPage } from 'next'
import Layout from "../components/common/Layout"
import Button from "../components/shared/Button"
import DatePicker from "../components/shared/DatePicker"
import SearchInput from "../components/shared/SearchInput"
import PriceRange from "../components/shared/PriceRange"
import HotelCard from "../components/modules/HotelCard"
export const getStaticProps = async () => {
  const res = await fetch("https://run.mocky.io/v3/6e1ef542-08f6-45a8-a430-9fceee74e7f0");
  const data = await res.json();
  return {
    props: { hotels: data }
  }
}

const HomePage: NextPage = ({ hotels }: any) => {
  return (
    <>
    <Layout>
    <h1 className="text-5xl	text-center mb-6">Search Hotel:</h1>
    <div className="flex items-center	justify-between my-10 flex-wrap">
      <div className="from-date items-center flex">
        <span className="mr-4 text-lg	font-bold">From:</span>
        <div className="border-2 py-4 px-12 border-black bg-white">
          <DatePicker 
            id="fromDatePicker"
            name="from-date-picker"
            value=""
            onChange={(value: void) => console.log(value)}
            fromDate="2021-11-1"
            toDate="2021-12-31"
          />
        </div>
      </div>
      <div className="to-date items-center flex">
        <span className="mr-4 text-lg	font-bold">To:</span>
        <div className="border-2 py-4 px-12 border-black bg-white">
        <DatePicker 
          id="fromDatePicker"
          name="from-date-picker"
          value=""
          onChange={(value: void) => console.log(value)}
          fromDate="2021-11-1"
          toDate="2021-12-31"
        />
        </div>

      </div>
      <Button 
          border="none"
          bgcolor="#000"
          height="60px"
          onClick={() => console.log("Button Clicked!")}
          radius="2px"
          width="20%"
          text="Search"
          classes="text-white"
        />
    </div>
    <div className="lg:flex lg:px-0 px-4">
      <div className="lg:w-1/4 lg:mt-20">
        <SearchInput 
            placeholder="Hotel Name"
            onChange={(value: void) => console.log(value)}
            border="1px solid #000"
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
            min={0}
            max={10000}
            step={1}
            onChange={(value: void) => console.log(value)}
            classes="h-3 w-10/12"
        />
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center flex-wrap lg:mt-0 mt-6">
          <div className="total-nights text-xl font-bold lg:my-0 my-6">
            Total Nights 5
          </div>
          <div className="sorting flex">
            <Button 
              border="1px solid #000"
              bgcolor="#fff"
              height="60px"
              onClick={() => console.log("Button Clicked!")}
              radius="2px"
              width=""
              text="Sort by Name"
              classes="text-black mr-4 px-10"
            />
            <Button 
              border="1px solid #000"
              bgcolor="#fff"
              height="60px"
              onClick={() => console.log("Button Clicked!")}
              radius="2px"
              width=""
              text="Sort by Price"
              classes="text-black px-10"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 mt-10 gap-4">
          {hotels.map((hotel: any) => (
            <HotelCard 
              name={hotel.name} 
              price={hotel.price} 
              currency="UAE" 
              city={hotel.city} 
            />
          ))}
        </div>
      </div>
    </div>
    </Layout>
    </>
  )
}

export default HomePage;
