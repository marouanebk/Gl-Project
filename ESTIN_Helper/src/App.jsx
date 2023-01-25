import React from 'react'
import {Route, Routes} from "react-router-dom";
import Splash from "./pages/Splash.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Home from "./pages/Home.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/Sign-in" element={<SignIn />} />
            <Route path="/Sign-up" element={<SignUp />} />
            <Route path="/Forgot-password" element={<ForgotPassword />} />
            <Route path="/Home" element={<Home />} />
        </Routes>
    );
}

export default App;
