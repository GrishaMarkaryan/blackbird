import React from "react";
import Hero from "../Components/Hero/hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/newCollections.jsx";
import Newsletter from "../Components/Newsletter/Newsletter.jsx";

const Shop = () => {
    return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollections/>
        <Newsletter/>
        
    </div>
)}

export default Shop