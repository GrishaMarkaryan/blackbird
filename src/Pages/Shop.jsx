import React, {useRef} from "react";
import Hero from "../Components/Hero/hero";
import Popular from "../Components/Popular/Popular";
import NewCollections from "../Components/NewCollections/newCollections.jsx";
import Newsletter from "../Components/Newsletter/Newsletter.jsx";

const Shop = () => {
    const popularRef = useRef(null)

    return (
    <div>
        <Hero targetRef={popularRef}/>
        <Popular ref={popularRef}/>
        <NewCollections/>
        <Newsletter/>
        
    </div>
)}

export default Shop