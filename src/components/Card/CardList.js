import React from 'react';
import Card from './Card';
import './Card.css'


const CardList = ({ articles, onClick}) => {

  const cardComponent = articles.map((data) => {

  
    return (
     
      <Card 
        onClick={onClick}
        source={data.source.name}
        image={data.urlToImage}
        key={data.url}
        title={data.title}
        description={data.description}
        url={data.url}
      />
    )
  })
  return (
    <div className="card-list">
      {cardComponent}
    </div>
  )
}



export default CardList;