import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const loggedInUser = () => {
    //API call to check authentication
    return true;
}
const Title = () => {

};

const Header = () => {
    // const [title, setTitle] = useState("Food Villa");
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        
        <div className="header" >
            <div className="logo-container">
                <img 
                className="logo"
                src={LOGO_URL} />
            </div>
            <Title />
            {/* <h1>{title}</h1> */}
            {/* <button onClick={() => setTitle("New Food App")}>Change Title</button> */}

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contat Us</li>
                    <li>Cart</li>
                </ul>
            </div>
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