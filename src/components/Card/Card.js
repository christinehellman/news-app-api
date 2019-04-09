import React from 'react';

const Card = (props) => {
  const imageStyle = {
    background: 'lightgray',
  }
  return (
    <div className="card">
      {props.image === null ? <img style={imageStyle} alt={""} /> : <img src={props.image} alt={`${props.title}`} /> }
      <div className="card-inner">
        <h2>{props.title}</h2>
        <h3>{props.source}</h3>
        {props.description === "" || props.description === null ? <p>No description available</p> : <p>{props.description}</p>}
      </div>
      <div className="card-footer">
        <button><a href={props.url} target="_blank" rel="noopener noreferrer">READ MORE</a></button>
      </div>
    </div>
  )
}

export default Card;