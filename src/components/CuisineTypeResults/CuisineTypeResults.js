import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import CardLayout from '../Card/Card';
import Loader from '../UI/Loader/Loader';

const CuisineTypeResults = ({ match }) => {
    const APP_KEY = process.env.REACT_APP_API_KEY;
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const type = match.params.type;

    useEffect(() => {
        const getRecipes = async () => {
            try {
                const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${type}&apiKey=${APP_KEY}&addRecipeInformation=true`)
                const data = await response.json();
                setLoading(false);
                setResults(data.results)

            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        getRecipes();
    }, [type]);

    let errorMessage;

    if (error) {
        errorMessage = <h2>Something went wrong</h2>
    }else{
        errorMessage = <h2>No results found</h2>
    }

    const style = {
        textAlign: 'center',
        color: '#8e8e8e',
        height: '20vh',
        paddingTop: '5vh',
        margin: 'auto',
    }

    return loading ? <Loader /> : (
        <div className="container">
            <div className="row">
                {results.length > 0 ? results.map(recipe => {
                    return (
                        <div className="col-md-6 col-xl-4 mt-4" key={recipe.id}>
                            <Link to={`/recipe/${recipe.id}`}> <CardLayout
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

export default CuisineTypeResults
