import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TamaguiProvider } from 'tamagui'
import axios from 'axios';

import './index.css'
import App from './App.jsx'
import LoginScreen from './LoginScreen.jsx'
import RegisterScreen from './RegisterScreen.jsx'
import tamaguiConfig from './tamagui.config'
import CartScreen from './CartScreen.jsx';
import Product from './Product.jsx';

const token = localStorage.getItem("accessToken");
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TamaguiProvider config={tamaguiConfig}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </TamaguiProvider>
  </StrictMode>
);
