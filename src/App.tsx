import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layouts/Header/Header';
import Homepage from './pages/HomePage/homepage';
import Resturants from './pages/Resturants/Resturants';
import Footer from './layouts/Footer/Footer';
import { RestaurantPage } from './pages/Resturants/restaurantPage/restaurantPage';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route>
          <Route index element={<Homepage />} />
          <Route path="/Resturants" element={<Resturants />} />
          <Route path="/Resturants/RestaurantPage" element={<RestaurantPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );

}

export default App;
