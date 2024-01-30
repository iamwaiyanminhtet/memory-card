import "../styles/header.css";

const Header = ({logo, difficultyHandler, handleCardTheme}) => {
  return (
    <header>
        <nav>
            <ul>
                <li><img src={logo} alt="" width="70px"/></li>
                <li>
                    <div className="options">
                        <span className="options-text">Options : </span>
                        {/* <button>Rules</button> */}
                        <select name="cardTheme" id="" onClick={(e) => handleCardTheme(e.target.value)}>
                            <option value="uno">UNO</option>
                            <option value="dc-lego">DC LEGO</option>
                        </select>
                        <select onChange={(e) => difficultyHandler(e.target.value)}>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;