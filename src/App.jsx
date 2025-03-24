import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import DistributorPage from './pages/DistributorPage';
import AboutPage from './pages/AboutPage';
import FranchisePage from './pages/FranchisePage';
import StorePage from './pages/StorePage';

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/contactpage", element: <ContactPage /> },
  { path: "/distributorpage", element: <DistributorPage /> },
  { path: "/aboutpage", element: <AboutPage /> },
  { path: "/franchisepage", element: <FranchisePage /> },
  { path: "/storepage", element: <StorePage /> },
];

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          {routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;