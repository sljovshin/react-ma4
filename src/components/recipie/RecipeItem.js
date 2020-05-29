import React from 'react';
import PropTypes from "prop-types";


export default function RecipeItem({data}){

    const toggleDetails = (e) => {
        e.target.classList.toggle('toggleOn')
    }
       
    return (
        <>
            <div className="RecipeItem">
                <p className="RecipeTitle">{data.title}</p>
                <p className="ToggleMore" onClick={(e)=>toggleDetails(e)}>{'<'}</p>
            </div>
            <div className="IngridientBox">
                <ul>
                    {
                        data.ingredients.split(', ').map((item, index) => (
                            <li key={index}><p>{item}</p></li>
                        ))
                    }
                </ul>
            </div>
        </>
    )

}

RecipeItem.propTypes = {
    data: PropTypes.object.isRequired
}