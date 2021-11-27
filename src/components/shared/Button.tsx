import React from "react";

interface Props {
  border: string;
  text: string;
  height: string;
  onClick: any;
  radius: string
  width: string;
  classes: string;
}

const Button: React.FC<Props> = ({ 
    border,
    text,
    height,
    onClick, 
    radius,
    width,
    classes
  }) => { 
  return (
    <button 
      onClick={onClick}
      className={classes}
      style={{
         border,
         borderRadius: radius,
         height,
         width
      }}
    >
    {text}
    </button>
  );
}

export default Button;