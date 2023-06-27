import "./App.css";
import FirstPage from "./pages/FirstPage";
import { Route, Routes } from "react-router-dom";

import Forms from "./pages/Forms";
import MyForms from "./pages/MyForms";
import Preview from "./pages/Preview";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<FirstPage />} path={"/"}></Route>
        <Route element={<Forms />} path={"/forms"}></Route>
        <Route element={<Preview />} path={"/preview"}></Route>
        <Route element={<MyForms />} path={"/all"}></Route>
      </Routes>
    </div>
  );
}

export default App;
