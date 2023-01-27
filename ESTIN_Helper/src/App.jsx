import React from 'react'
import {Route, Routes} from "react-router-dom"
import Splash from "./pages/Splash.jsx"
import SignIn from "./pages/SignIn.jsx"
import SignUp from "./pages/SignUp.jsx"
import ForgotPassword from "./pages/ForgotPassword.jsx"
import Home from "./pages/Home.jsx"
import PrivateRoutes from './utils/PrivateRoutes'
import { PrivateRoute } from './utils/PrivateRoutes'
import { AuthProvider } from './context/AuthContext'

function App() {
    return (
        <Routes>
            <Route element={<AuthProvider/>}>
                <Route element={<PrivateRoutes/>}>
                    <Route path="/Sign-in" element={<SignIn />} />
                    <Route path="/Sign-up" element={<SignUp />} />
                    <Route path="/" element={<Splash />} />
                </Route>
                <Route element={<PrivateRoute/>}>
                    <Route path="/Home" element={<Home />} />
                </Route>     
            </Route>
            <Route path="/Forgot-password" element={<ForgotPassword />} />
        </Routes>
    );
}

export default App;
