import {BrowserRouter,Routes,Route}from "react-router-dom";

import UserorderList from "./components/userorderList.jsx";
import Adduserorder from "./components/adduserorder.jsx";
import Edituserorder from "./components/edituserorder.jsx";

import "bulma/css/bulma.css";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<UserorderList/>}/>
      <Route path="add" element={<Adduserorder/>}/>
      <Route path="edit/:id" element={<Edituserorder/>}/>

    </Routes>
    </BrowserRouter>
  );
}
export default App;
