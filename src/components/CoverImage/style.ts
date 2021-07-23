import React from "react";
import styled from "styled-components";
import imgBkg from "../../assets/images/backgroundPrincipal.jpg";

// const imageSize = 'detail';

export const CoverImageContainerBG = styled.div`
  background-color: black;
  position: relative;

  h1 {
    position: absolute;
    top: 10px;
    color: white;
  }
`;

export const Image = styled.div`
  position: relative;
  width: 100%;
  height: 28rem;

  background: url(${imgBkg}) no-repeat center / cover;
  opacity: 0.5;
`;

export const Title = styled.h1`
  color: white;
  padding: 1rem;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  font-size: 5rem;
  z-index: 1;
  @media screen and (max-width: 800px) {
    font-size: 4rem;
  }
`;

export const SubTitle = styled.h3`
  color: white;
  padding: 1rem;
  font-size: 2rem;
  text-align: center;
  z-index: 1;
`;
