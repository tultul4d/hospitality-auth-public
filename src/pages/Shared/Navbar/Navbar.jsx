import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSingOut = () => {
        logOut()
            .then()
            .catch()
    }
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/animation">About Us</NavLink></li>
        {/* <li><NavLink to="login">Login</NavLink></li> */}
        {
            user ?
                <>
                    <li><NavLink to="/profile">Update Profile</NavLink></li>

                    <li><NavLink to="/user">UserProfile</NavLink></li>
                </>
                :
                <></>
        }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Dream Hotel</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <button onClick={handleSingOut}>Log Out</button>
                            {/* <div className="w-10 rounded-full">
                                <img alt="" src={user?.photoURL} />
                            </div> */}
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className="btn btn-circle m-1"><div className="w-10 rounded-full">
                                <img className="rounded-full" alt="" src={user?.photoURL} />
                            </div></div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box lg:w-36 w-20 -ml-10">
                                    <li><a>{user?.displayName}</a></li>
                                </ul>
                            </div>
                        </>
                        :
                        <Link to="/login" ><button>Login</button></Link>

                }
            </div>


        </div>

    );
};

export default Navbar;