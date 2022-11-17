import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './layouts/Header/Header';
import Homepage from './pages/HomePage/homepage';
import Resturants from './pages/Resturants/Resturants';
function App() {
  return (
            <BrowserRouter>
            <Header/>
                 <Routes>
                  <Route>
                  <Route index element={<Homepage />} />
                  <Route path="/Resturants" element={<Resturants />} />

                 </Route>
                   </Routes>
                           
                 </BrowserRouter>
  );

}

export default App;
