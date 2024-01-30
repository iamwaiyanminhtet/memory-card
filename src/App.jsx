import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header';
import Cards from './components/Cards';
import dcLego from './data-files/dcLego';
import UNO from './data-files/unoCards';
import ScoreBoard from './components/ScoreBoard';
import { WonDialog, LostDialog } from './components/Dialog';

function App() {

  const lego = dcLego();
  const unoCards = UNO();

  const [cardTheme, setCardTheme] = useState(unoCards);
  const [score, setScore] = useState({cur : 0, best : 0});
  const [result, setResult] = useState('');
  const [difficulty, setDifficulty] = useState(5);

  // handle card theme
  function handleCardTheme(value) {
    if(value === 'uno') {
      console.log(value)
      setCardTheme(unoCards);
    }
    if(value === 'dc-lego') {
      console.log(value)
      setCardTheme(lego);
    }
  }

  // update cur score
  function updateCurScore() {
    setScore((prev) => ({...prev, cur : prev.cur + 1}))
  }

  // determineScore
  function determineScore() {
    if(score.cur > score.best) {
      setScore((prev) => ({cur: 0, best: prev.cur}));
    }
  }

  function resetScore() {
    setScore((prev) => ({...prev, cur : 0}));
  }

  // close result dialog modal
  function closeModal() {
    setResult('');
  }

  // choose difficulty
  function difficultyHandler(value) {
    if(value === "easy") {
      setDifficulty(5)
    }
    if(value === "medium") {
      setDifficulty(10)

    }
    if(value === "hard") {
      setDifficulty(15)

    }
  }

  return (
   <>
    <Header logo={cardTheme.logo} difficultyHandler={difficultyHandler} handleCardTheme={handleCardTheme}/>
    <ScoreBoard score={score}/>
    <Cards difficulty={difficulty} data={cardTheme.data} updateCurScore={updateCurScore}
    resetScore={resetScore} determineScore={determineScore} setResult={setResult}  />

    {result === 'won' && (
      <WonDialog closeModal={closeModal} bestScore={score.best}/>
    )}
    {result === 'lost' && (
      <LostDialog closeModal={closeModal} bestScore={score.best}/>
    )}
   </>
  )
}

export default App
