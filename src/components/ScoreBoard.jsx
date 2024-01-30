import "../styles/score-board.css";

const ScoreBoard = ({score}) => {
  return (
    <>
    <div className="score-board">
      <p className="cur-score">Current Score : {score.cur}</p>
      <p className="best-score">Best Score : {score.best}</p>
    </div>
    </>
  )
}

export default ScoreBoard