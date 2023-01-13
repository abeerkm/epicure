import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layouts/Header/Header';
import Homepage from './pages/HomePage/homepage';
import Resturants from './pages/Resturants/Resturants';
import Footer from './layouts/Footer/Footer';
import { RestaurantPage } from './pages/Resturants/restaurantPage/restaurantPage';
import { ToastContainer } from 'react-toastify';
import { Dish } from './Order/Dish';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
         />
      <Routes>
        <Route>
          <Route index element={<Homepage />} />
          <Route path="/Resturants" element={<Resturants />} />
          <Route path="/Resturants/RestaurantPage" element={<RestaurantPage />} />
          <Route path="/Order" element={<Dish />} />

        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );

}

export default App;
