import "../styles/header.css";

const Header = ({logo, difficultyHandler}) => {
  return (
    <header>
        <nav>
            <ul>
                <li><img src={logo} alt="" width="70px"/></li>
                <li>
                    <div>
                        <span className="options">Options : </span>
                        {/* <button>Rules</button> */}
                        <select name="cardTheme" id="">
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