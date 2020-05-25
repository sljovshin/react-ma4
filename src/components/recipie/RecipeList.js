import React, {useState, useEffect} from 'react';
import RecipeItem from './RecipeItem'
import SearchRecipe from './SearchRecipe';


export default function RecipeList (){

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState(null);

    useEffect(() => {
        fetch('https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/')
        .then(res => res.json())
        .then(json => setData(json.results))
        .catch(setData('error loading data'))
        .finally(() => setLoading(false));
    }, []);

    const filterData = (text) => {
        if(text === '') text = null;
        setFilter(text);
    }

    if (loading) return <h1>Loading Recipes</h1>
    return (
        <>
        <h1>Search for Recipes</h1>
        <SearchRecipe filter={filterData}/>
        {
        data.map((item, index) => (
            filter === null 
            ? <RecipeItem key={index} data={item} /> 
            : (
                item.title.toLowerCase().includes(filter) ? <RecipeItem key={index} data={item} /> : null
            )
        ))
        }
        </>
    )
}
