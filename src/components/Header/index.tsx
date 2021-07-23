import logoImg from "../../assets/images/marvel_logo.svg";
import { HeaderStyle, NavStyle } from "./style";

// function handleClick() {
//   history.push("/");
// }

export function Header() {
  return (
    <>
      <HeaderStyle>
        <span>
          <img src={logoImg} alt="Marvel Logo"></img>
        </span>
        <NavStyle>
          <ul>
            <li className="li_characters">
              <a> CHARACTERS</a>
            </li>
          </ul>
        </NavStyle>
      </HeaderStyle>
    </>
  );
}
