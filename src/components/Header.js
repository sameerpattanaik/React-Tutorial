import { LOGO_URL } from "../utils/constants";
import { useEffect, useState, useContext } from "react";
import Logo from "../assets/img/foodvilla-logo.png";
import { Link, link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const loggedInUser = () => {
    //API call to check authentication
    return true;
}
const Title = () => {

};

const Header = () => {
    // const [title, setTitle] = useState("Food Villa");
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const isOnline = useOnline();

    const user = useContext(UserContext);

    useEffect( () => {
        console.log("useEffect called");
    })

    console.log("header rendered");
    return (
        
        <div className="flex justify-between bg-pink-50 shadow-lg" >
            <div className="logo-container">
                <img 
                className="h-28 p-2"
                src={Logo} />
            </div>
            <Title />
            {/* <h1>{title}</h1> */}
            {/* <button onClick={() => setTitle("New Food App")}>Change Title</button> */}

            <div className="nav-items">
                <ul className="flex py-10">
                    <li className="px-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/about">About Us</Link>
                    </li>                    
                    <li className="px-2">
                        <Link to="/contact">Contat Us</Link>
                    </li>
                    <li className="px-2">Cart</li>
                    <li className="px-2">
                        <Link to="/instamart">Instamart</Link>
                    </li>
                </ul>
            </div>
            <h1>{isOnline?"✅":"🛑"}</h1>
            {
                isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(false)}> Logout </button>
                ) : 
                (
                <button onClick={() => setIsLoggedIn(true)}> Login </button>)
            }
          
        </div>
    );
};

export default Header;