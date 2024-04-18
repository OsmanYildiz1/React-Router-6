import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div>Home</div>
      <button onClick={() => navigate("/mission")}>Mission'a Git</button>
      {/* useNavigate ile butona tıkladığında başka compononeta gitmesini sağlarız. tanımladığımız değişkene atayıp
      gitmek istediğimiz url'yi yazarız. */}
    </>
  );
}

export default Home;
