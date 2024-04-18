import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import Mission from "./components/Mission";
import WrongPath from "./components/WrongPath";
import History from "./components/History";
import Company from "./components/Company";
import Team from "./components/Team";
import Members from "./components/Members";
import MemberDetail from "./components/MemberDetail";
import React from "react";

const LazyAboutUs = React.lazy(() => import("./components/AboutUs"));
// importu React.lazy ile yapıp değişkene atayarak yükleme işlemini daha senkron kullanırız.

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* path calışacak yolu simgeler. "/", bu localhost urlsi demektir(ana dizin)), içine url'de verebiliriz. */}
          {/* element, hangi componentin çalışmasını istiyorsak onu veririz.  */}

          {/*  Lazy load için react suspense içine tanımladığımız değişkeni atarız. */}
          <Route
            path="/aboutUs"
            element={
              <React.Suspense>
                <LazyAboutUs />
              </React.Suspense>
            }
          />

          <Route path="/mission" element={<Mission />} />

          {/* nested route kullanımı. History içerisinden kullandığımız için orada Outlet i import etmeliyiz */}
          <Route path="/history" element={<History />}>
            <Route path="company" element={<Company />} />
            {/* nested route kullanırken pathi '/' kullanmadan veririz. Çünkü otomatik olarak / atar. */}
            <Route path="team" element={<Team />} />
          </Route>

          <Route path="/members" element={<Members />} />
          {/* ':' kullanarak bir müsteri veya üye sayfasına yönlendirme gibi verileri tuttugumuz dizine yönlendirebiliriz. */}
          <Route path="/members/:memberId" element={<MemberDetail />} />

          <Route path="*" element={<WrongPath />} />
          {/* path içerisine * verdiğimiz zaman tanımlanan diğer pathler dışında bir url yazılırsa anlamını ifade eder.(onlar yoksa wrongpath'e git.)
          hata göndermek için kullanılabilir. */}
        </Routes>
      </div>
    </>
  );
}

export default App;
