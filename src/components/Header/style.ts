import styled from "styled-components";
import { colors } from "../../styles/colors";

export const HeaderStyle = styled.header`
  width: 100%;
  background: ${colors.grayDark};
  height: 5.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 3px solid ${colors.grayDark};

  span {
    width: 100%;
    border-bottom: 1px solid ${colors.grayLight};
    display: flex;
    justify-content: center;

    img {
      background: ${colors.grayDark};
      padding-top: 0.1rem;
      width: 30.25rem;
      height: 3.8rem;
    }
  }
`;

export const NavStyle = styled.nav`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: row;

  ul {
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;

    li {
      font-size: 0.9em;
      text-align: center;
      display: inline-block;
      font-weight: bold;
      margin-top: 0.5em;
      margin-bottom: 1.25em;
    }
  }

  div {
    width: 100%;

    background-color: ${colors.black};
  }
`;
