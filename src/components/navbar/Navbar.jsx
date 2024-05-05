import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";
import "./nav.css";

// Import your logo image
import logoImage from "./sofa logo.png";
import logocart from "./cart.png";

const Navbar = () => {
    // Get user from localStorage 
    const user = JSON.parse(localStorage.getItem('users'));

    // Navigate 
    const navigate = useNavigate();

    // Logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login");
    }

    // CartItems
    const cartItems = useSelector((state) => state.cart);

    // Render navList conditionally
    const renderNavList = () => (
        <ul className="flex space-x-3 text-black font-bold text-md px-5">

            {/* Home */}
            <li>
                <Link to={'/'}>Home</Link>
            </li>

            {/* All Product */}
            <li>
                <Link to={'/allproduct'}>Products</Link>
            </li>

            <li>
                <Link to={'/Aboutus'}>About Us</Link>
            </li>

            {/* Signup */}
            {!user && (
                <>
                    <li>
                        <Link to={'/signup'}>Signup</Link>
                    </li>
                    <li>
                        <Link to={'/login'}>Login</Link>
                    </li>
                </>
            )}

            {/* User */}
            {user?.role === "user" && (
                <li>
                    <Link to={'/user-dashboard'}>User</Link>
                </li>
            )}

            {/* Admin */}
            {user?.role === "admin" && (
                <li>
                    <Link to={'/admin-dashboard'}>Admin</Link>
                </li>
            )}

            {/* Logout */}
            {user && (
                <li className="cursor-pointer" onClick={logout}>
                    Logout
                </li>
            )}

            {/* Cart */}
            <li>
                <Link to={'/cart'} className="flex items-center">
                    {/* Insert your logo image here */}
                    <img src={logocart} alt="Logo" className="h-6 mr-2" />({cartItems.length})
                </Link>
            </li>
        </ul>
    );

    return (
        <nav className="bg-white sticky top-0 shadow-md z-10">
            <div className="container mx-auto py-3">
                <div className="flex flex-wrap justify-between items-center">
                    
                    <div className="logo flex items-center mb-4 md:mb-0">
                        <Link to={'/'}>
                            <img src={logoImage} alt="Logo" className="h-12 md:h-14 w-auto md:w-auto mr-8" />
                        </Link>
                        <span className="text-xl font-bold">Shree Kalishvari Furnitures</span>
                    </div>
                    {/* <div className=" text-black">
                        <span className="text-xl font-bold"> Shree Kalishvari Furnitures</span>
                    </div> */}
                    <div className="w-full md:w-auto flex items-center justify-end">
                        <div style={{width: '300px', Color: 'black'}}> {/* Adjust width and background color as needed */}
                            <SearchBar />
                        </div>
                    </div>

                  
                    <div className="nav mt-4 md:mt-0 w-full md:w-auto">
                        {renderNavList()}
                    </div>

                    
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
