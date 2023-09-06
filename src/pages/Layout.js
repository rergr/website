import { Outlet } from "react-router-dom";
import Navbar from "../elements/Navbar";
import Footbar from "../elements/Footbar";

const Layout = () => {
    return (
        <div className="overflow-x-hidden">
            <Navbar/>
            <Outlet/>
            <Footbar/>
        </div>
    )
};

export default Layout;