import "../styles/header.css";

const Header = ({logo}) => {
  return (
    <header>
        <nav>
            <ul>
                <li><img src={logo} alt="" width="70px"/></li>
                <li>
                    <div>
                        <button>Rules</button>
                        <select name="cardTheme" id="">
                            <option value="dc-lego">DC LEGO</option>
                        </select>
                    </div>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;