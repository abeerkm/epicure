import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import restaurantsReducer from './pages/Resturants/slicers/restaurantsSlicer'
import specificRestaurantsReducer from './pages/Resturants/slicers/specificRestaurant'
import dishesReduser from './pages/Resturants/slicers/dishSlice'
import { persistCombineReducers ,persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage'
import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1';
import chefsReduser from './pages/Chefs/chefSlice'
import UserReduser from './Components/user/UserSlice';
import dishArrayReduser from './pages/Resturants/slicers/dishArray';
const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel1,
};
const _persistedReducer = persistCombineReducers (
  persistConfig,
  {
  restaurants: restaurantsReducer,
  restaurant:specificRestaurantsReducer,
  dishes:dishesReduser,
  chefs:chefsReduser,
  user:UserReduser,
  dishArray:dishArrayReduser
  }
);

export const store= configureStore({
  reducer: _persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER
      ],
    },
  }),
});
export const persistor = persistStore(store)

