import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Home from "./pages/home/home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
   <div className="p-4 h-screen flex item-center justify-center">
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
   </div>
  );
}

export default App;
