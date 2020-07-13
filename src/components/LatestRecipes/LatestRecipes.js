import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './LatestRecipes.module.css';

import CardLayout from '../Card/Card'
import Loader from '../UI/Loader/Loader';

const LatestRecipes = (props) => {
    const APP_KEY = process.env.REACT_APP_API_KEY;
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
   
    useEffect(() => {
        const getRecipe = async () => {
            const response = await fetch(`https://api.spoonacular.com/recipes/random?number=6&cuisine=Indian&tags=vegetarian&excludeIngredients=pork&apiKey=${APP_KEY}`)
            const data = await response.json();
            setResults(data.recipes)
            setLoading(false)
        }
        getRecipe();
    }, [])
    
    return (
        <section className={`${styles.showcase} mt-4 mt-sm-5`}>
            <div className={styles.imageContainer}>
            </div>
            <div className="container">
                <div className={`${styles.header} text-center`}>
                    <h2>What's <span>Hot</span></h2>
                </div>
                <div className="row justify-content-center">
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
        </section>
    )
}

export default LatestRecipes
