import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  padding-top: 20px;
  z-index: 1;
  background: #ffffff;
  width: 100vw;
  display: flex;
  justify-content: center;
`;
export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 21px;
  border-bottom: 1px solid #c0c4cc;
  max-width: 1190px;
  @media (max-width: 1223px) {
    width: 890px;
  }
  @media (max-width: 921px) {
    width: 590px;
  }
  @media (max-width: 619px) {
    width: 280px;
    flex-direction: column;
  }
`;

export const Logo = styled.img``;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 180px;
  height: 36px;
  background: #ffffff;
  border: 1px solid #c0c4cc;
  box-sizing: border-box;
  border-radius: 2px;
  @media (max-width: 619px) {
    width: 280px;
    margin-top: 10px;
  }
`;

export const SearchIcon = styled.img`
  width: 14px;
  height: 14px;
`;

export const SearchInput = styled.input`
  border: none;
  padding-left: 10px;
  &:focus {
    outline: none;
  }
  overflow: hidden;
`;
