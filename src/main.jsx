import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TamaguiProvider } from 'tamagui'
import axios from 'axios';

import './index.css'
import App from './App.jsx'
import LoginScreen from './LoginScreen.jsx'
import tamaguiConfig from './tamagui.config'
import DetailProduk from './DetailProduk.jsx';
import Dashboard from './Dashboard.jsx';

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
          <Route path="/detail" element={<DetailProduk />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </TamaguiProvider>
  </StrictMode>
);
