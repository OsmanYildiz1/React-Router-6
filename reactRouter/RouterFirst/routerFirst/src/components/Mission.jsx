import React from "react";
import { useNavigate } from "react-router-dom";

function Mission() {
  const navigate = useNavigate();
  return (
    <>
      <div>Mission</div>
      <button onClick={() => navigate("/")}>Geriye Dön</button>
      {/* bir önceki sayfaya dönmek için navigate içerisine url yerine -1'de yazılabilir */}
    </>
  );
}

export default Mission;
