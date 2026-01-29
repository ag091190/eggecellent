import {Route, Routes, useLocation} from "react-router";
import LoginPage from './LoginPage.jsx'
import RegisterPage from "./RegisterPage.jsx";
import {AnimatePresence} from "motion/react"

const AuthLayout = () => {
    const location = useLocation();

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-[#f9f7f2] overflow-hidden relative font-sans text-stone-900">

            {/* 1. The "Morning Sun" Background Blobs */}
            <div
                className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#FFD700]/15 rounded-full blur-[120px] z-0"/>
            <div
                className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-amber-100/30 rounded-full blur-[100px] z-0"/>

            {/* 2. The Artisan Eggshell Card */}
            <div
                className="z-10 w-full max-w-md p-10 rounded-[2.5rem] bg-white shadow-[0_30px_60px_-15px_rgba(120,80,20,0.08)] border border-stone-200/60 mx-4">

                {/* Logo/Icon: The "Garnish" */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-serif font-bold text-stone-800 tracking-tight">
                        The Golden Yolk
                    </h1>
                    <div className="h-0.5 w-12 bg-[#FFD700] mx-auto mt-3 rounded-full"/>
                </div>

                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="login" element={<LoginPage/>}/>
                        <Route path="register" element={<RegisterPage/>}/>
                    </Routes>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default AuthLayout;