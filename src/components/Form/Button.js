import React from "react";

const Button = props => {
  const buttonDisabled= {
    pointerEvents: 'none',
    backgroundColor: 'lightgray'
  }

  return (
    <div>
    {props.disabled ?
      <button 
        style={buttonDisabled}
        className="disabled"
      >
        Please Select
      </button> 
      : 
      <button
        className={props.type === "primary" ? "btn btn-primary" : "btn btn-secondary"}
        onClick={props.action}
      >
        {props.title}
      </button>
      }
    </div>
  );
};


export default Button;