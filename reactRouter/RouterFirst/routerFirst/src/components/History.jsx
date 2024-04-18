import React from "react";
import { Link, Outlet } from "react-router-dom";
// iç içe route kullanmak için outleti import ettik.
function History() {
  return (
    <>
      <div>History</div>
      <nav>
        <Link to="company">Our Companies</Link>
        <Link to="team">Team</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default History;
