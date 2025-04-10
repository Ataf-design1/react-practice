import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
      <Link to='/'>Todo</Link>
      <Link to='/p1'> Page1</Link>
      <Link to='/p2'>Page2</Link>
      <Link to='/p3'>Page3</Link>
    </div>
  );
};

export default Navbar;
