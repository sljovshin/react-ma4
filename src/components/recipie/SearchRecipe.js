import React from 'react';
import PropTypes from "prop-types";


export default function SearchRecipe({filter}){

       
    return (
        <>
            <input type="text" onChange={e => filter(e.target.value)}></input>
        </>
    ) 

}



SearchRecipe.propTypes = {
    filter: PropTypes.func
}
