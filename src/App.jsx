import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import DistributorPage from './pages/DistributorPage'
import AboutPage from './pages/AboutPage'
import FranchisePage from './pages/FranchisePage'
import StorePage from './pages/StorePage'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/distributorpage" element={<DistributorPage />} />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path="/franchisepage" element={<FranchisePage />} />
          <Route path="/storepage" element={<StorePage />} />
        </Routes>
  </BrowserRouter>
    
  )
}

export default App;
