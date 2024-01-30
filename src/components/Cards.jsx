import { useEffect, useState } from "react";
import "../styles/cards.css";
import Card from "./Card";

const Cards = ({data, updateCurScore, determineScore, setResult, difficulty, resetScore}) => {

  // const copyData = data.map(card => ({ ...card }));
  let copyData = [];
  for(let i = 0; i < difficulty; i++) {
    copyData.push({...data[i]});
  }

  // generate cards based on difficulty
  useEffect(() => {
    let copyData = [];
    for(let i = 0; i < difficulty; i++) {
      copyData.push({...data[i]});
    }
    setCards([...copyData]);
    resetScore();
  }, [difficulty, data]);

  let [cards, setCards] = useState([...copyData]);

  // shuffle array
  const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }; 

  // shuffle cards state change
  function shuffleHandler(curCard) {
    if(curCard.isClicked === true) {
      determineScore()
      setResult('lost')
      setCards([...copyData])
    }
    if(curCard.isClicked === false) {
      cards.forEach(card => card.id === curCard.id ? card.isClicked = true : null)
      setCards(shuffle([...cards]));
      updateCurScore();
    }

    if(cards.every(card => card.isClicked === true)) {
      determineScore();
      setCards([...copyData])
      setResult('won');
    }
    
  } 

  return (
    <div className="cards">
      {
        cards.map( card => <Card card={card} shuffleHandler={shuffleHandler} key={card.id} />)
      }
    </div>
  )
}

export default Cards;