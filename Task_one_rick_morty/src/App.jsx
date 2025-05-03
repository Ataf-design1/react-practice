import { Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CharDetail from './CharDetail';
import Home from './Home';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/character/:id" element={<CharDetail />} />
    </Routes>
  );
}

export default App;