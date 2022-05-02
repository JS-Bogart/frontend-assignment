import React, { useEffect, useState } from "react";
import logo from "../../images/logo.svg";
import searchIcon from "../../images/search-icon.png";
import useDebounce from "../../utils/useDebounce";
import searchMovies from "../../utils/searchMovies";
import {
  HeaderContainer,
  HeaderWrapper,
  Logo,
  SearchWrapper,
  SearchIcon,
  SearchInput,
} from "./HeaderStyles";

const Header = ({ setSearchTerm, setSearchResults }) => {
  const [searchbarInput, setSearchbarInput] = useState("");
  const debouncedSearchTerm = useDebounce(searchbarInput, 500);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (searchbarInput.length > 0) {
      handleUpdate(debouncedSearchTerm);
    } else if (searchbarInput.length === 0 && isSearching) {
      setSearchTerm("");
    }
  }, [debouncedSearchTerm]);

  const handleInput = () => {
    return (event) => {
      event.preventDefault();
      setSearchbarInput(event.target.value);
      setIsSearching(true);
    };
  };

  const handleUpdate = (value) => {
    if (value) {
      setSearchTerm(value);
      callSearchMovies(value);
    }
  };

  const callSearchMovies = (value) => {
    searchMovies(value).then((searchResults) => {
      setSearchResults(searchResults);
    });
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo src={logo} alt="Timescale" />
        <SearchWrapper>
          <SearchIcon src={searchIcon} />
          <SearchInput
            placeholder="Search for a movie"
            value={searchbarInput}
            onChange={handleInput()}
          />
        </SearchWrapper>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
