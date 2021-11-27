import React from "react";

interface Props {
  id: string;
  name: string;
  value: string;
  onChange: () => void;
  fromDate: string;
  toDate: string;
}

const DatePicker: React.FC<Props> = ({ 
    id,
    name,
    value,
    onChange,
    fromDate,
    toDate,
  }) => { 
  return (
    <input
        type="date"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        min={fromDate}
        max={toDate}
        className="outline-none bg-transparent"
    />
  );
}

export default DatePicker;