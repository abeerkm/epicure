import arrow from "../../images/arrow.png"
import { LinkContainer, ResturantsLink, Arrow } from "./CommonStyle"


export const ResturantLink = () => {
  return (
    <LinkContainer>
    <ResturantsLink href="/Resturants">All resturant </ResturantsLink>
    <Arrow src={arrow}></Arrow>
    </LinkContainer>
  )
}



