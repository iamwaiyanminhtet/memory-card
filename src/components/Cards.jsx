import { useEffect, useState } from "react";
import "../styles/cards.css";
import Card from "./Card";

const Cards = ({data}) => {
  let [cards, setCards] = useState(data);

  // shuffle array
  const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }; 

  // shuffle cards state change
  function shuffleHandler() {
    setCards(shuffle([...cards]))
  }

  return (
    <div className="cards">
      {
        cards.map( card => <Card src={card.src} shuffleHandler={shuffleHandler} key={card.id} />)
      }
    </div>
  )
}

export default Cards;