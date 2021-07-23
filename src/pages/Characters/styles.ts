import styled from "styled-components";
import imgNova from "../../assets/images/noimage.jpg";

interface ThumbnailData {
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface SelectType {
  isSelect: boolean;
}

export const BannerDiv = styled.div`
  display: flex;
  justify-content: center;

  .img_banner {
    width: 100%;
    height: 350px;
  }
`;

export const Container = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1240px;
  margin: auto;

  h1 {
    margin-top: 30px;
    font-size: 25px;
  }
`;

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

// {
//   characters?.description === ""
//     ? "No description provided"
//     : characters?.description;
// }

const urlImg = (props: ThumbnailData) =>
  props.thumbnail.path ===
  "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
    ? `${imgNova}`
    : `${props.thumbnail.path}.${props.thumbnail.extension}`;

export const Card = styled.div`
  color: white;
  height: 350px;
  width: 190px;
  background-color: #151515;
  box-shadow: 2px 3px px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  margin: 20px 10px;
  border-radius: 0px 0 20px 0px;

  h2 {
    text-transform: uppercase;
    color: var(--white);
    margin-top: 13px;
    margin-left: 10px;
    width: auto;
    font-size: 16px;

    &:hover {
      background-color: #e62429;
    }
  }

  div#img {
    border-bottom: 3.5px solid #e62429;
    height: 210px;
    background: url(${urlImg}) no-repeat;
    background-size: 190px 209px;
  }
  &:hover {
    div#img {
      width: 190px;
      height: 209px;
      -webkit-transform: scaleX(1);
      -ms-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  margin-bottom: 3rem;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const SearchBar = styled.input`
  padding: 0.5rem 1rem 0 1rem;
  width: 50%;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1.5rem;
  border: none;
  border-bottom: 3px solid black;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: lightgray;
  }
  :-ms-input-placeholder {
    color: lightgray;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    margin-top: 3rem;
  }
`;

export const FilterText = styled.span`
  font-size: 1rem;
  color: #202020;
  margin-right: 2rem;
  @media screen and (max-width: 800px) {
    margin-right: 0;
    margin-bottom: 3rem;
  }
`;

export const Pagination = styled.div`
  display: flex;
  min-width: 500px;
  max-width: 900px;
  justify-content: space-between;
  margin-top: 10px;

  font-family: RobotoCondensed, Trebuchet MS, Helvetica, Arial, sans-serif;
  font-size: 1.125rem;
  text-transform: uppercase;
`;

export const PaginationButton = styled.div`
  display: flex;
`;

export const PaginationItem = styled.div`
  margin: 0 10px;
  cursor: pointer;
  ${(props: SelectType) =>
    props.isSelect && {
      background: "#6d6d6d",
      padding: "0 5px",
    }}
`;
