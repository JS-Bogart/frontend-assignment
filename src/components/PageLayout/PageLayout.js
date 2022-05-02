import React, { useEffect, useState } from "react";
import Browse from "../Browse/Browse";
import Header from "../Header/Header";
import { PageLayoutContainer } from "./PageLayoutStyles";
import getLatestMovies from "../../utils/getLatestMovies";

const PageLayout = () => {
  const [latestMovies, setLatestMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const movieList = searchTerm.length > 0 ? searchResults : latestMovies;

  useEffect(() => {
    getLatestMovies().then((movieResults) => {
      setLatestMovies(movieResults);
    });
  }, []);

  return (
    <PageLayoutContainer>
      <Header
        setSearchTerm={setSearchTerm}
        setSearchResults={setSearchResults}
      />
      <Browse movieList={movieList} searchTerm={searchTerm} />
    </PageLayoutContainer>
  );
};

export default PageLayout;
