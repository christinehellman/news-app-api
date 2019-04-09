import React from "react";

const SelectBox = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}> {props.placeholder} </label>
      <select
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        className="form-control"
        
      >
        <option value="" disabled>
          News Sources
        </option>
       
        {props.options.map(option => {
          return (
            <option key={option.id} value={option.id} label={option.name}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectBox;
