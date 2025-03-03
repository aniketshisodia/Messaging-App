import Login from "./pages/login/login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/home";
import { Route, Routes } from "react-router-dom";
import {Toaster} from "react-hot-toast"

function App() {
  return (
   <div className="p-4 h-screen flex item-center justify-center">
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    <Toaster/>
   </div>
  );
}

export default App;
