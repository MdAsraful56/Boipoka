import { Outlet } from "react-router";
import Navber from "../Navber/Navber";
import Footer from "../Footer/Footer";


const RootLayout = () => {
    return (
        <div>
            <Navber />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;