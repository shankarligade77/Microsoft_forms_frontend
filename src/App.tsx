import "./App.css";
import FirstPage from "./pages/FirstPage";
import { Route, Routes } from "react-router-dom";

import Forms from "./pages/Forms";
import MyForms from "./pages/MyForms";
import Preview from "./pages/Preview";
import EditForm from "./pages/EditForm";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<FirstPage />} path={"/"}></Route>
        <Route element={<Forms />} path={"/forms"}></Route>
        <Route element={<Preview />} path={"/preview"}></Route>
        <Route element={<MyForms />} path={"/all"}></Route>
        <Route element={<EditForm/>} path={"/editform"}></Route>
      </Routes>
    </div>
  );
}

export default App;
