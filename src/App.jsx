import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import Cards from './components/Cards';
import dcLego from './data-files/dcLego';

function App() {

  const [cardTheme, setCardTheme] = useState(dcLego());

  return (
   <>
   <Header logo={cardTheme.logo}/>
   <Cards data={cardTheme.data} />
   </>
  )
}

export default App
