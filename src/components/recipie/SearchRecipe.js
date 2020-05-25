import React from 'react';


export default function SearchRecipe({filter}){
       
    return (
        <>
            <input type="text" onChange={e => filter(e.target.value)}></input>
        </>
    ) 

}