import { useState, useContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Details from "./pages/details";
import Dashboard from "./pages/dashboard";
import { AppContext, GlobalContext } from "./context/GlobalContext";
import AddVehicle from './pages/addVehicle';
import AddCarOwner from './pages/addCarOwner';
import ViewCarOwners from './pages/viewCarOwners';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useContext(AppContext);
  if(user){
    setIsLoggedIn(true)
  }

  return (
    <GlobalContext>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/details/:id" element={<Details />} />
        {/* <Route path="/dashboard" element={<Protected  isLoggedIn={isLoggedIn} component={ <Dashboard />}/>} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-candidate" element={<AddVehicle />} />
        <Route path="/view-car-owners" element={<ViewCarOwners />} />
        <Route path="/add-owner" element={<AddCarOwner />} />
      </Routes>
    </GlobalContext>
  );
}

export default App;
