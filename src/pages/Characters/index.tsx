import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { CoverImage } from "../../components/CoverImage";

import api from "../../services/api";

import {
  Container,
  Pagination,
  PaginationButton,
  PaginationItem,
  CardList,
  Card,
  BannerDiv,
} from "./styles";

interface ResponseData {
  id: string;
  name: string;
  description: string;

  thumbnail: {
    path: string;
    extension: string;
  };
}

// interface PageData {
//   i: number;
//   arrayPages: [];
// }

function Characters() {
  const [characters, setCharacters] = useState<ResponseData[]>([]);

  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(30);
  const [pages, setPages] = useState<number[]>([1]);
  const [currentPage, setCurrentPage] = useState(0);
  const history = useHistory();

  function handleClick(characterId: string) {
    history.push(`charDetail/${characterId}`);
  }

  useEffect(() => {
    async function loadCharacters() {
      const response = await api.get(
        `/characters?limit=${limit}&offset=${currentPage}`
      );
      console.log(response);

      setTotal(response.data.data.total);
      console.log(response.data.data.total);

      const pageNumbers: number[] = [];

      const totalPages = Math.ceil(total / limit);

      for (let i = 1; i <= totalPages; i++) {
        if (
          i <= 5 || //the first five pages
          i == totalPages || //the last page
          Math.abs(currentPage - i) <= 1 //the current page and the one before and after
        )
          pageNumbers.push(i);
      }

      setPages(pageNumbers);
      setCharacters(response.data.data.results);
    }

    loadCharacters();
  }, [currentPage, limit, total]);

  // const limits = useCallback((e) => {
  //   setLimit(e.target.value);
  //   setCurrentPage();
  // }, []);

  return (
    <>
      <Header />
      <CoverImage />

      <Container>
        <h1>LISTA DE PERSONAGENS DA MARVEL</h1>

        <BannerDiv></BannerDiv>
        <CardList>
          {characters.map((characters) => {
            return (
              <Card
                key={characters?.id}
                thumbnail={characters?.thumbnail}
                onClick={() => handleClick(characters?.id)}
              >
                <div id="img" />
                <h2>{characters.name}</h2>
              </Card>
            );
          })}
        </CardList>

        <Pagination>
          {/* <div>Qtd {total}</div> */}
          <PaginationButton>
            {currentPage > 1 && (
              <PaginationItem
                isSelect={false}
                onClick={() => setCurrentPage(currentPage - 30)}
              >
                Previous
              </PaginationItem>
            )}
            {pages.map((offset) => (
              <PaginationItem
                isSelect={offset === currentPage / 30 + 1}
                key={offset}
                onClick={() => setCurrentPage((offset - 1) * 30)}
              >
                {offset}
              </PaginationItem>
            ))}
            {currentPage < pages.length && (
              <PaginationItem
                isSelect={false}
                onClick={() => setCurrentPage(currentPage + 30)}
              >
                Next
              </PaginationItem>
            )}
          </PaginationButton>
        </Pagination>
      </Container>
      <Footer />
    </>
  );
}

export default Characters;

// const pageNumbers: number[] = [];
// const totalPages = Math.ceil(total / limit);

// for (let i = 1; i <= totalPages; i++) {
//   pageNumbers.push(i);
// }

// setPages(pageNumbers);
