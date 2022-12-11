import {  HeroImage, SearchContainer, Sentence } from './SearchBarStyle'
import { BiSearchAlt } from "react-icons/bi";
import { SearchComponent } from '../CommonComponents/CommonComponents';

export const SearchBar = () => {
  return (
    <HeroImage>
      <SearchContainer>
        <Sentence>
        Epicure works with the top chef restaurants in Tel Aviv
        </Sentence>
        <SearchComponent/>
      </SearchContainer>
    </HeroImage>
  )
}
