import { BiSearchAlt } from "react-icons/bi"
import arrow from "../../images/arrow.png"
import { LinkContainer, ResturantsLink, Arrow, SearchBox, Icon, SearchInput } from "./CommonStyle"


export const ResturantLink = () => {
  return (
    <LinkContainer>
    <ResturantsLink href="/Resturants">All resturants </ResturantsLink>
    <Arrow src={arrow} title="arrow"></Arrow>
    </LinkContainer>
  )
}
export const SearchComponent =() => {
  return(
  <SearchBox>
    <Icon>
      <BiSearchAlt/>
    </Icon>
    <SearchInput placeholder='Search for restaurant cuisine, chef'></SearchInput>
  </SearchBox>)
}



