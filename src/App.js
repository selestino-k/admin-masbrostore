import {BrowserRouter as  Router ,Routes,Route}from "react-router-dom";

import UserorderList from "./components/userorderList.jsx";
import Gameslist from "./components/gamesList.jsx";

import Adduserorder from "./components/adduserorder.jsx";
import Edituserorder from "./components/edituserorder.jsx";

import Addgames from "./components/addgames.jsx";
import Editgames from "./components/editgames.jsx";

import MainLayout from "./components/mainlayout.jsx";


import "bulma/css/bulma.css";
import "./stylesheets/home.css";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route exact path="/"  element={<MainLayout/>}>
          <Route path="dashboard" element={''}/>
          <Route path="user" element={''}/>

          <Route exact path="order" element={<UserorderList/>}/>
          <Route path="order/addorder" element={<Adduserorder/>}/>
          <Route exact path="order/editorder/:id" element={<Edituserorder/>}/>

          <Route path="games" element={<Gameslist/>}/>
          <Route path="games/addgame" element={<Addgames/>}/>
          <Route exact path="games/editgame/:id" element={<Editgames/>}/>
          
        </Route>

      </Routes>
    </Router>
  );
}
export default App;
