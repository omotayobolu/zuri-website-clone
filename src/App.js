import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import New from "./New To industry/New";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="New">
        <Route index element={<New />} />
      </Route>
    </Routes>
  );
}
