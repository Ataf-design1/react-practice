import React from "react";
import Todo from "./component/Todo";
import { Routes, Route } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Navbar from "./component/Navbar";
import Page3 from "./pages/Page3";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/p1" element={<Page1 />} />
        <Route path="/p2" element={<Page2 />} />
        <Route path="/p3" element={<Page3/>} />
      </Routes>
      
    </div>
  );
};

export default App;
