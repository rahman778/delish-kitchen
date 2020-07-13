import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/UI/Loader/Loader';
import CardLayout from '../components/Card/Card';

const Recipes = () => {
    const APP_KEY = process.env.REACT_APP_API_KEY;
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
   
    useEffect(() => {
        const getRecipe = async () => {
            const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&excludeIngredients=pork&apiKey=${APP_KEY}`)
            const data = await response.json();
            setResults(data.recipes)
            setLoading(false)
        }
        getRecipe();
    }, [])

    return (
        <div className="container mt-5">
                <div className="row">
                {loading ? <Loader /> : results.map(recipe => {
                    return (
                        <div className="col-md-6 col-xl-4" key={recipe.id}>
                            <Link to={`/recipe/${recipe.id}`}> <CardLayout //(/recipe/reci[e.id])
                                title={recipe.title}
                                image={recipe.image}
                                description={recipe.summary}
                            /></Link>
                        </div>)
                })} 
                </div>
            </div>
    )
}

export default Recipes
