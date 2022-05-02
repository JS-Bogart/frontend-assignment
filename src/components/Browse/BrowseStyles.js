import styled from "styled-components";

export const BrowseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 619px) {
    padding-top: 92px;
  }
`;

export const BrowseHeadline = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.01em;
  color: #000000;
  margin-top: 37px;
  margin-bottom: 23px;
  width: 1190px;
  @media (max-width: 1223px) {
    width: 890px;
  }
  @media (max-width: 921px) {
    width: 590px;
  }
  @media (max-width: 619px) {
    width: 280px;
  }
`;

export const MoviesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  overflow-y: scroll;
`;
