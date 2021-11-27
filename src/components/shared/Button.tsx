import React from "react";

interface Props {
  border: string;
  bgcolor: string;
  text: string;
  height: string;
  onClick: () => void;
  radius: string
  width: string;
  classes: string;
}

const Button: React.FC<Props> = ({ 
    border,
    bgcolor,
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
         backgroundColor: bgcolor,
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