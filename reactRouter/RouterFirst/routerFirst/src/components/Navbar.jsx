import React from "react";
import { NavLink } from "react-router-dom"; // linki kullanacağımız için

function Navbar() {
  return (
    <>
      <nav className="mainNav">
        {/* Linkleri yönlendirmek için to özelliğiyle path veririz. Linkler a etiketi olarak gözükürler */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/aboutUs">About</NavLink>
        <NavLink to="/history">History</NavLink>
      </nav>
    </>
  );
}

export default Navbar;
