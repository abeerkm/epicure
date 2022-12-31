import { configureStore } from '@reduxjs/toolkit';
import restaurantsReducer from './pages/Resturants/slicers/restaurantsSlicer'
import specificRestaurantsReducer from './pages/Resturants/slicers/specificRestaurant'
 
export default configureStore({
  reducer: {
      restaurants: restaurantsReducer,
      restaurant:specificRestaurantsReducer,
  },

})

