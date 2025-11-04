import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './ui/pages/Home.jsx';
import RecipePage from './ui/pages/RecipePage.jsx';
import FavoritesPage from './ui/pages/FavoritesPage.jsx';
import './ui/css/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
        <Route path="/favorites" element={<FavoritesPage />} /> 
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

