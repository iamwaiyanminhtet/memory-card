import "../styles/card.css"

const Card = ({src, shuffleHandler}) => {

  return (
    <div className={`card`} onClick={() => shuffleHandler()}>
        <img className="card-img" src={src} alt="" />
    </div>
  )
}

export default Card;