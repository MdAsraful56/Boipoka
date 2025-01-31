import { NavLink } from "react-router";
import "./Navber.css"


const Navber = () => {

    const links = <>
        <li><NavLink to='/' >Home</NavLink></li>
        <li><NavLink to='/listbooks' >Listed Books</NavLink></li>
        {/* <li><NavLink to='/pagetoread' >Pages to Read</NavLink></li> */}
    </>

    return (
    <div className="navbar bg-base-100 shadow-sm lg:px-24">
        <div className="navbar-start">
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
            </div>
            <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                {
                        links
                }
            </ul>
        </div>
        <a className="lg:text-2xl text-xl font-semibold">Boipoka</a>
        </div>
        <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {
                    links
            }
        </ul>
        </div>
        <div className="navbar-end gap-3">
        <a className="btn text-white btn-success text-xs lg:text-sm">Sign In</a>
        <a className="btn text-white btn-info text-xs lg:text-sm">Sign Up</a>
        </div>
        </div>
    );
};

export default Navber;