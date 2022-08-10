import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import New from "./New To industry/New";
import Talent from "./Experience/Talent";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="New">
        <Route index element={<New />} />
      </Route>
      <Route path="Talent">
        <Route index element={<Talent />} />
      </Route>
    </Routes>
  );
}
