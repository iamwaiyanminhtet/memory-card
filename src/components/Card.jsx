import "../styles/card.css"

const Card = ({card, shuffleHandler}) => {

  return (
    <div className={`card`} onClick={() => shuffleHandler(card)}>
        <img className="card-img" src={card.src} alt="" />
    </div>
  )
}

export default Card;