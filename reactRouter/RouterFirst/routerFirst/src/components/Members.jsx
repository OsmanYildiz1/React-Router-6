import React from "react";
import { useSearchParams } from "react-router-dom";

function Members() {
  const [searchParams, setSearchParams] = useSearchParams();
  // useState mantığıyla aynı değişken ve güncelleyen fonksiyon

  const isActive = searchParams.get("filter") === "active"; // searchParamstaki değer active ise değiskene true deger aktarılacak.

  return (
    <>
      <div>Members</div>{" "}
      <button onClick={() => setSearchParams({ filter: "active" })}>
        {/* aktif olan üyeleri görüntüle. */}
        Aktif Üyeler
      </button>
      <button onClick={() => setSearchParams()}>Tüm Üyeler</button>
      {/* resetler. boşaltır. */}
      {isActive ? <h2>Aktif Üyeler</h2> : <h2>Tüm Üyeler</h2>}
    </>
  );
}

export default Members;
