import React from "react";

interface Props {
  name: string;
  price: number;
  currency: string;
  city: string;
}

const HotelCard: React.FC<Props> = ({ 
    name,
    price,
    currency,
    city,
  }) => { 
  return (
      <div className="card border-2 border-black lg:p-6 p-4">
          <div><span className="font-bold">Name:</span> {name}</div>
          <div><span className="font-bold">Price:</span> {price} {currency}</div>
          <div><span className="font-bold">City:</span> {city}</div>
      </div>
  );
}

export default HotelCard;