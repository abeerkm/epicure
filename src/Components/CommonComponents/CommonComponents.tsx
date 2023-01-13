//import { BiSearchAlt } from "react-icons/bi"
import arrow from "../../images/arrow.png"
import { SearchResult, LinkContainer, ResturantsLink, Arrow, SearchBox, Icon, SearchInput, List, ItemList, SearchTitle, ResContainer } from "./CommonStyle"
import search from "../../images/search.svg"
import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { specificRestaurant } from "../../pages/Resturants/slicers/specificRestaurant"
import { useNavigate } from "react-router-dom"

export const ResturantLink = () => {

  return (
    <LinkContainer>
      <ResturantsLink href="/Resturants">All resturants </ResturantsLink>
      <Arrow src={arrow} title="arrow"></Arrow>
    </LinkContainer>
  )
}
export const SearchComponent = () => {
  const [searchInput, setSearchInput] = useState('')
  const restaurants = useSelector((state: any) => state.restaurants.value);
  const dishes = useSelector((state: any) => state.dishArray.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <SearchBox>
      <Icon src={search} />
      <SearchInput
        placeholder='Search for restaurant cuisine, chef'
        onChange={(e) => setSearchInput(e.target.value)}>
      </SearchInput>
      <SearchResult value={searchInput}>
        <List>
          <SearchTitle>Restaurants</SearchTitle>
          {restaurants && restaurants.filter((restaurant: any) => (
            restaurant.name.toLowerCase().includes(searchInput)))
            .map((res: any) => (searchInput.length > 0 &&
              <ItemList key={res._id} onClick={() => { dispatch(specificRestaurant(res)); navigate('/Resturants/RestaurantPage') }}>{res.name}</ItemList>
            ))}
          <SearchTitle>Dishes</SearchTitle>
          {dishes && dishes.filter((dish: any) => (
            dish.dishName.toLowerCase().includes(searchInput)))
            .map((res: any) => (searchInput.length > 0 &&
              <ItemList key={res._id}>{res.dishName}</ItemList>
            ))}
        </List>
      </SearchResult>
    </SearchBox>
  )
}



