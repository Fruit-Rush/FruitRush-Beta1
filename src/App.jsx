import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import DistributorPage from './pages/DistributorPage'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/distributorpage" element={<DistributorPage />} />
        </Routes>
  </BrowserRouter>
    
  )
}

export default App;
