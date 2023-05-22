import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import Logo from "../assets/img/foodvilla-logo.png";
import { Link, link } from "react-router-dom";
import useOnline from "../utils/useOnline";

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

    useEffect( () => {
        console.log("useEffect called");
    })

    console.log("header rendered");
    return (
        
        <div className="flex" >
            <div className="h">
                <img 
                className="logo"
                src={Logo} />
            </div>
            <Title />
            {/* <h1>{title}</h1> */}
            {/* <button onClick={() => setTitle("New Food App")}>Change Title</button> */}

            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>                    
                    <li>
                        <Link to="/contact">Contat Us</Link>
                    </li>
                    <li>Cart</li>
                    <li>
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