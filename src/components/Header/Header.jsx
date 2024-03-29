import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const links = (
        <>
            <li>
                {/* //!NavLink provide 'active' class. Nav doesn't provide 'active' class */}
                <NavLink to={"/"}>
                    <button className="btn btn-outline btn-success">Home</button>
                </NavLink>
            </li>

            <li>
                <NavLink to={"/listedBooks"}>
                    <button className="btn btn-outline btn-success">Listed Books</button>
                </NavLink>
            </li>
            <li>
                <NavLink to={"/pageToRead"}>
                    <button className="btn btn-outline btn-success">Pages to Read</button>
                </NavLink>
            </li>
        </>
    );

    return (
        //! https://daisyui.com/components/navbar/
        <div className="mb-24">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {/* //!Here the menu */}
                            {links}
                        </ul>
                    </div>
                    <a className="hidden lg:block text-green-500 font-extrabold text-xl">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {/* //!Here the menu */}
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-accent mr-4 px-7 py-4">Sign In</a>
                    <a className="btn bg-[#59C6D2] px-7 py-4">Sign Up</a>
                </div>
            </div>
            <div className="block lg:hidden text-center">
                <a className="text-green-500 font-extrabold text-4xl">Book Vibe</a>
            </div>
        </div>
    );
};

export default Header;