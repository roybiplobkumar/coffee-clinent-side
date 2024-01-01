import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";


const Layout = () => {
    return (
        <div>
            <h1 className="bg-red-600">this is main layout</h1>
            <Navber></Navber>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Layout;