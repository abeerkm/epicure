import {  HeroImage, Icon, SearchBox, SearchContainer, SearchInput, Sentence } from './SearchBarStyle'
import { BiSearchAlt } from "react-icons/bi";

export const SearchBar = () => {
  return (
    <HeroImage>
      <SearchContainer>
        <Sentence>
        Epicure works with the top chef restaurants in Tel Aviv
        </Sentence>
        <SearchBox>
          <Icon>
            <BiSearchAlt/>
          </Icon>
          <SearchInput placeholder='Search for restaurant cuisine, chef'></SearchInput>
        </SearchBox>
      </SearchContainer>
    </HeroImage>
  )
}
