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
        
        <Route path="/" exact element={<MainLayout/>}>
          <Route path="dashboard" element={''}/>
          <Route path="user" element={''}/>

          <Route path="games" element={<Gameslist/>}/>
          <Route path="order" element={<UserorderList/>}/>
          <Route path="order/addorder" element={<Adduserorder/>}/>
          <Route path="order/editorder" element={<Edituserorder/>}/>
        </Route>

      </Routes>
    </Router>
  );
}
export default App;
