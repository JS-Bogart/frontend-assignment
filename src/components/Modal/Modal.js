import React from "react";
import {
  ModalContainer,
  ModalCard,
  ModalHeader,
  MovieTitle,
  CloseButton,
  ModalBody,
  ModalInfo,
  ModalPoster,
  DateWrapper,
  Release,
  Date,
  Overview,
  RatingWrapper,
  Rating,
  RatingDetails,
} from "./ModalStyles";
import closeIcon from "../../images/close-icon.svg";
import moment from "moment";

const Modal = ({ movieInfo, showModal, toggle, posterSrc }) => {
  const { title, vote_average, overview, release_date, vote_count } = movieInfo;

  if (showModal) {
    return (
      <ModalContainer>
        <ModalCard>
          <ModalHeader>
            <MovieTitle>{title}</MovieTitle>
            <CloseButton onClick={toggle} src={closeIcon} alt="close-modal" />
          </ModalHeader>
          <ModalBody>
            <ModalPoster src={posterSrc} alt={title} />
            <ModalInfo>
              <DateWrapper>
                <Release>Release Date: </Release>
                <Date>{moment(release_date).format("LL")}</Date>
              </DateWrapper>
              <Overview>{overview}</Overview>
              <RatingWrapper>
                <Rating>{vote_average}</Rating>
                <RatingDetails>{` / 10 (${vote_count} total votes)`}</RatingDetails>
              </RatingWrapper>
            </ModalInfo>
          </ModalBody>
        </ModalCard>
      </ModalContainer>
    );
  } else {
    return null;
  }
};

export default Modal;
