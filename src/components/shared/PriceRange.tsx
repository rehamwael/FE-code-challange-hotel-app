import React from "react";

interface Props {
  id: string;
  name: string;
  onChange: () => void;
  min: number;
  max: number;
  step: number;
  classes: string;
}

const PriceRange: React.FC<Props> = ({ 
    id,
    name,
    onChange,
    min,
    max,
    step,
    classes

  }) => { 
  return (
    <input type="range" 
           id={id}
           name={name}
           min={min}
           max={max}
           step={step}
           onChange={onChange}
           className={classes}
    />
  );
}

export default PriceRange;