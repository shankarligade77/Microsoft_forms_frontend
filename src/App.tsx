import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FirstPage from "./pages/FirstPage";
import { Route, Routes } from "react-router-dom";

import path from "path";
import Forms from "./pages/Forms";
import AllForms from "./pages/AllForms";
import Preview from "./pages/Preview";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<FirstPage />} path={"/"}></Route>
        <Route element={<Forms />} path={"/forms"}></Route>
        <Route element={<Preview />} path={"/preview"}></Route>
        <Route element={<AllForms />} path={"/all"}></Route>
      </Routes>
    </div>
  );
}

export default App;
