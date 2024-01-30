import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header';
import Cards from './components/Cards';
import dcLego from './data-files/dcLego';
import ScoreBoard from './components/ScoreBoard';
import { WonDialog, LostDialog } from './components/Dialog';

function App() {

  const [cardTheme, setCardTheme] = useState(dcLego());
  const [score, setScore] = useState({cur : 0, best : 0});
  const [result, setResult] = useState('');

  // update cur score
  function updateCurScore() {
    setScore((prev) => ({...prev, cur : prev.cur + 1}))
  }

  // determineScore
  function determineScore() {
    if(score.cur > score.best) {
      setScore(() => ({cur : 0, best : score.cur + 1}))
    }
  }

  function closeModal() {
    setResult('');
  }

  return (
   <>
    <Header logo={cardTheme.logo}/>
    <ScoreBoard score={score}/>
    <Cards data={cardTheme.data} updateCurScore={updateCurScore} determineScore={determineScore} setResult={setResult}/>

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
