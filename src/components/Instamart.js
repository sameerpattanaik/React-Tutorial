import { useState } from "react";

const Sections = ({title, description, isVisiable,setIsVisiable}) => {

    return (
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>
            {
            isVisiable ? (
            <button 
                onClick={() => setIsVisiable()} 
                className="cursor-pointer underline">
                {/* Hide */}
            </button>
             ) : (
            <button 
                onClick={() => setIsVisiable()} 
                className="cursor-pointer underline">
                Show
            </button>
            )}   
            {isVisiable && <p> {description}</p>}
        </div>
    )
}

const Instamart = () => {
    const [visibleSection, setIsVisisbleSection] = useState();

    return <div>
        <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
        <Sections 
            title={"About Instamart"}
            description={"An 'About Us' page is a spot for your founding story, a place to show off your business wins, and a sales page that answers the most pressing question new customers have about your business"+
            "What an 'About Us' page should be is a goal-oriented sales page, one that focuses on highlighting the biggest selling points of your story and brand at the top of the page, making a strong first impression on curious customers"+
            "In Shopify’s customer trust research, we found that shoppers navigate to an About Us page to learn more about the brand and the people behind the products. Your 'About Page' should address those two curiosities shoppers have to help with decision making."+ 
            "Shoppers are also interested in a company’s mission. They’ll use the About Us page to determine if they share core values with the business and to decide if they want to shop with the business or not. This is the about sections of Instamart"
        }
        isVisiable={visibleSection === "about"}
        setIsVisiable = {() => setIsVisisbleSection("about")}
        />

        <Sections 
            title={"Team Of Instamart"}
            description={"An 'About Us' page is a spot for your founding story, a place to show off your business wins, and a sales page that answers the most pressing question new customers have about your business"+
            "What an 'About Us' page should be is a goal-oriented sales page, one that focuses on highlighting the biggest selling points of your story and brand at the top of the page, making a strong first impression on curious customers"+
            "In Shopify’s customer trust research, we found that shoppers navigate to an About Us page to learn more about the brand and the people behind the products. Your 'About Page' should address those two curiosities shoppers have to help with decision making."+ 
            "Shoppers are also interested in a company’s mission. They’ll use the About Us page to determine if they share core values with the business and to decide if they want to shop with the business or not. This is the about sections of Instamart"
        }
        isVisiable={visibleSection === "team"}
        setIsVisiable = {() => setIsVisisbleSection("team")}
        />

        <Sections 
            title={"Carreers At Instamart"}
            description={"An 'About Us' page is a spot for your founding story, a place to show off your business wins, and a sales page that answers the most pressing question new customers have about your business"+
            "What an 'About Us' page should be is a goal-oriented sales page, one that focuses on highlighting the biggest selling points of your story and brand at the top of the page, making a strong first impression on curious customers"+
            "In Shopify’s customer trust research, we found that shoppers navigate to an About Us page to learn more about the brand and the people behind the products. Your 'About Page' should address those two curiosities shoppers have to help with decision making."+ 
            "Shoppers are also interested in a company’s mission. They’ll use the About Us page to determine if they share core values with the business and to decide if they want to shop with the business or not. This is the about sections of Instamart"
        }
        isVisiable={visibleSection === "carreers"}
        setIsVisiable = {() => setIsVisisbleSection("carreers")}
        />
    </div>
}

export default Instamart;