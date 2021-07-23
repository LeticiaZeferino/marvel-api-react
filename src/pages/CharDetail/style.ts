import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border: 1px solid #d8d8d8;
  /* width: 900px;
  height: 500px; */
  margin: 0 12% 0 12%;
  margin-top: 50px;
  box-shadow: 0px 6px 6px #d8d8d8;

  img {
    margin-left: 0px;
    width: 35%;
    height: 420px;
  }

  .text {
    display: flex;
    flex-direction: column;
    margin: 20px 20px 20px 20px;
    max-width: 60%;

    h2 {
      text-align: center;
      margin-bottom: 15px;
    }

    p {
      color: #656565;
    }
    a {
      color: #656565;
      margin-top: 15px;

      &:hover {
        color: #e62429;
      }
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: end;
  max-width: 1240px;
  margin: auto;
`;

export const SeriesEventsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 6.5rem;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
