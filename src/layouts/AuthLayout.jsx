import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
    return (
        <div className="bg-gray-100">
            <header>
                <Navbar />
            </header>
            <Outlet />
        </div>
    );
};

export default AuthLayout;
