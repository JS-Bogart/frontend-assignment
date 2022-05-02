import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalCard = styled.div`
  width: 583px;
  height: 474px;
  background: #ffffff;
  padding: 0px 27px;
  @media (max-width: 690px) {
    width: fit-content;
    max-width: 583px;
    height: auto;
    margin: 0px 50px;
  }
`;

export const ModalHeader = styled.div`
  height: 57px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MovieTitle = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.01em;
  color: #000000;
`;

export const CloseButton = styled.img`
  width: 20px;
  height: 20px;
`;

export const ModalBody = styled.div`
  display: flex;
  @media (max-width: 690px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ModalPoster = styled.img`
  width: 266px;
  height: 389px;
  margin-right: 22px;
  margin-bottom: 27px;
  @media (max-width: 690px) {
    margin-right: 0px;
  }
`;

export const ModalInfo = styled.div``;

export const DateWrapper = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #000000;
  margin-top: 0px;
`;

export const Release = styled.strong`
  font-weight: 600;
`;

export const Date = styled.span``;

export const Overview = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.01em;
  color: #000000;
`;

export const RatingWrapper = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #000000;
`;

export const Rating = styled.strong`
  font-weight: 600;
`;
export const RatingDetails = styled.span``;
