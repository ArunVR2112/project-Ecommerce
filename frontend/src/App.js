import React, { useState } from "react";
import NavBar from "./Component/NavBar";
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage.js';
import Category from './Pages/Category.jsx';
import Product from './Pages/ProductPage.jsx';
import AppState from "./context/AppContext/AppState.js";
import { Toaster } from "react-hot-toast";
import CartComponent from "./Component/CartComponent.js";
import WishListComponent from './Component/WishListComponent.js';
import LogIn from "./Model/LogIn.js";
import Registration from "./Model/Registration.tsx";
import { UserProvider } from "../src/context/dataContext/DataContext.tsx";
import Footer from "./Section/Footer.tsx";
import ScrollToTop from "./Section/ScrollerToTop.tsx";
import DashBoard from "./DashBoard/DashBoard.tsx";
import ErrorPage from "./Component/ErrorPage.tsx";
import Checkout from "./Pages/Checkout.jsx";
import SearchResultsPage from "./Pages/SearchResultsPage.jsx"
import { OrderProvider } from "./context/orderContext/OrderContext.js";

function App() {
  const [openCart, setOpenCart] = useState(false);
  const [openWishList, setOpenWishList] = useState(false);
  const [user, setUser] = useState({ status: 200, data: { userinfoid: '12345' } });

  return (
    <div className="flex flex-col min-h-screen">

      <UserProvider>
        <ScrollToTop />
        <AppState>
          <Toaster />

          <CartComponent openCart={openCart} setOpenCart={setOpenCart} />
          <WishListComponent openWishList={openWishList} setOpenWishList={setOpenWishList} />
          <NavBar setOpenCart={setOpenCart} setOpenWishList={setOpenWishList} />
          <main className="flex-grow">
            <Routes>
              <Route index element={<HomePage />} />
              <Route path='home/' element={<HomePage />} />
              <Route path='category/:id' element={<Category />} />
              <Route path='product/:id' element={<Product />} />
              <Route path="login" element={<LogIn />} />
              <Route path="registration" element={<Registration />} />
              <Route path="/dashboard/*" element={<DashBoard />} />
              <Route path="/product/order/checkout" element={<Checkout/>} />
              <Route path="/search" element={<SearchResultsPage />} />

              <Route path="*" element={<ErrorPage />} />

            </Routes>
          </main>

        </AppState>
      </UserProvider>
      <Footer />
    </div>
  );
}

export default App;
