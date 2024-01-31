import "../styles/header.css";
import { useEffect, useState } from "react";

const Header = ({logo, difficultyHandler, handleCardTheme}) => {

    const [isCoffeeDisabled, setIsCoffeeDisabled] = useState(true);

    useEffect(() => {
        // Set a timeout to remove the 'disabled' attribute after 30 seconds
        const timeoutId = setTimeout(() => {
        setIsCoffeeDisabled(false);
        }, 40000);

        // Clean up the timeout when the component unmounts or when the state changes
        return () => clearTimeout(timeoutId);
    }, []);

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
                            {/* later should add loading screen insead of this */}
                            <option value="coffee" disabled={isCoffeeDisabled}>Coffee</option>
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