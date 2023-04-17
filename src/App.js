import {BrowserRouter as  Router ,Routes,Route}from "react-router-dom";

import UserorderList from "./components/userorderList.jsx";
import Gameslist from "./components/gamesList.jsx";
import Adduserorder from "./components/adduserorder.jsx";
import Edituserorder from "./components/edituserorder.jsx";
import MainLayout from "./components/mainlayout.jsx";

import "bulma/css/bulma.css";
import "./stylesheets/home.css";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="order/addorder" element={<Adduserorder/>}/>
        <Route path="edit/:id" element={<Edituserorder/>}/>
        <Route path="/games" element={<Gameslist/>}/>
        <Route path="/order" element={<UserorderList/>}/>


        <Route path="/admin" element={<MainLayout/>}>
          <Route path="games" element={<Gameslist/>}/>
          <Route path="order" element={<UserorderList/>}/>
        </Route>

      </Routes>
    </Router>
  );
}
export default App;
