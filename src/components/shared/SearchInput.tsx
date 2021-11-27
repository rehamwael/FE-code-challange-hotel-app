import React from "react";

interface Props {
  placeholder: string;
  onChange: any;
  border: string;
  bgcolor: string;
  height: string;
  radius: string
  width: string;
  classes: string;
  value: string
}

const SearchInput: React.FC<Props> = ({ 
    placeholder,
    onChange,
    border,
    bgcolor,
    value,
    height,
    radius,
    width,
    classes
  }) => { 
  return (
    <div className="search-input relative">
      <img src="https://cdn-icons-png.flaticon.com/512/54/54481.png" className="h-4 w-4 absolute top-9 left-3"/>
      <input 
        placeholder={placeholder}
        onChange={onChange}
        className={classes}
        value={value}
        style={{
          backgroundColor: bgcolor,
          border,
          borderRadius: radius,
          height,
          width
      }}
      />
    </div>
  );
}

export default SearchInput;