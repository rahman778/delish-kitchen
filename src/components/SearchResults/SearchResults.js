import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardLayout from '../Card/Card';
import Loader from '../UI/Loader/Loader';


const SearchResults = (props) => {
    const APP_KEY = process.env.REACT_APP_API_KEY;
    const query = props.match.params.query;
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getRecipes = async () => {
            try {
                const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&excludeIngredients=pork&addRecipeInformation=true&apiKey=${APP_KEY}`)
                const data = await response.json();
                setLoading(false)
                setRecipes(data.results)
               
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        getRecipes();
    }, [query]);

    let errorMessage;

    if (error) {
        errorMessage = <h2>Something went wrong</h2>
    }else{
        errorMessage = <h2>No results found</h2>
    }

    const style = {
        textAlign: 'center',
        color: '#ccc',
        height: '20vh',
        paddingTop: '5vh',
        margin: 'auto'
    }

    return loading ? <Loader />: (
        <div className="container">
            <div className="row">
                {recipes.length > 0 ? recipes.map(recipe => {
                    return (
                        <div className="col-md-6 col-xl-4 mt-4" key={recipe.id}>
                            <Link to={`/recipe/${recipe.id}`}> <CardLayout //(/recipe/reci[e.id])
                                title={recipe.title}
                                image={recipe.image}
                                description={recipe.summary}
                            /></Link>
                        </div>)
                }) : <div style={style}>{errorMessage}</div>}
            </div>
        </div>
    )
}

export default SearchResults
