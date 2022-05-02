import React from "react";
import { BrowseContainer, BrowseHeadline, MoviesWrapper } from "./BrowseStyles";
import MovieItem from "../MovieItem/MovieItem";

const Browse = ({ movieList, searchTerm }) => {
  const headline =
    (searchTerm.length > 0 && `Search Results for '${searchTerm}'`) ||
    "Most Recent Movies";

  return (
    <BrowseContainer>
      <BrowseHeadline>{headline}</BrowseHeadline>
      <MoviesWrapper>
        {movieList.map((movieInfo, ind) => {
          return <MovieItem key={`movie-${ind}`} movieInfo={movieInfo} />;
        })}
      </MoviesWrapper>
    </BrowseContainer>
  );
};

export default Browse;
