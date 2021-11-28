import React from "react";

interface Props {
  id: string;
  name: string;
  onChange: any;
  min: number;
  max: number;
  step: number;
  value: number;
  classes?: string;
}

const PriceRange: React.FC<Props> = ({ 
    id,
    name,
    onChange,
    min,
    max,
    step,
    value,
    classes

  }) => { 
  return (
    <input type="range" 
           id={id}
           name={name}
           min={min}
           max={max}
           value={value}
           step={step}
           onChange={onChange}
           className={classes}
    />
  );
}

export default PriceRange;