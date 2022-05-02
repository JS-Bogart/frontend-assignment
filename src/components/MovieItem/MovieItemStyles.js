import styled from "styled-components";

export const MovieItemContainer = styled.div`
  width: 282px;
  height: 348px;
  border: 1px solid #e1e3e6;
  box-sizing: border-box;
  box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 10px 20px 10px;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

export const RatingWrapper = styled.div`
  position: absolute;
  width: 34px;
  height: 34px;
  left: 15px;
  top: 15px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const Rating = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: #000000;
  text-align: center;
`;

export const Poster = styled.img`
  width: 280px;
  height: auto;
  border-radius: 7px 7px 0px 0px;
  overflow: hidden;
`;

export const Title = styled.div`
  margin-top: 10px;
  margin-bottom: 15px;
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #000000;
`;
