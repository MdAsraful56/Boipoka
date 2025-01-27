import { Outlet } from "react-router";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Outlet />
            <Banner />
        </div>
    );
};

export default Home;