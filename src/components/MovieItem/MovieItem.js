import React from "react";
import Modal from "../Modal/Modal";
import ModalSwitch from "../../utils/ModalSwitch";
import {
  MovieItemContainer,
  RatingWrapper,
  Rating,
  Poster,
  Title,
} from "./MovieItemStyles";

const MovieItem = ({ movieInfo }) => {
  const { title, vote_average, poster_path } = movieInfo;
  const posterSrc = `${process.env.REACT_APP_API_BASE_IMAGE_URL}/${poster_path}`;
  const { toggle, showModal } = ModalSwitch();

  return (
    <MovieItemContainer onClick={toggle}>
      <RatingWrapper>
        <Rating>{vote_average}</Rating>
      </RatingWrapper>
      <Poster src={posterSrc} alt={title} />
      <Title>{title}</Title>
      <Modal
        movieInfo={movieInfo}
        toggle={toggle}
        showModal={showModal}
        posterSrc={posterSrc}
      />
    </MovieItemContainer>
  );
};

export default MovieItem;
