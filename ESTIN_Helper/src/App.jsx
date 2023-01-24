import React from 'react'
import {Route, Routes} from "react-router-dom";
import Splash from "./pages/Splash.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/Sign-in" element={<SignIn />} />
            <Route path="/Sign-up" element={<SignUp />} />
        </Routes>
    );
}

export default App;
