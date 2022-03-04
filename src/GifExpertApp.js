import React, { useState } from "react";
import { AddCategories } from "./components/AddCategories";
import { GifGrid } from "./components/GifGrid";

    
export const GifExpertApp = () => {


    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setcategories] = useState(['One Punch'])

    // const handleCategoriesAdd = () => {
        
    //     setcategories([...categories,'Los Expedientes Secretos X']);

    // }
    

    return (
        <>
            <h2>GifExpertApp</h2>
            
            <AddCategories setCategories={setcategories} />
            
            <hr />

           
            <ol className="list-ol">
                {
                    // categories.map(category =>
                        
                    //      <li key={category}>{category}</li>

                    // )
                    
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
            
        </>
    )
};




