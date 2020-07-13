import React, { useState, useEffect } from 'react'

import styles from './SingleRecipe.module.css';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import Loader from '../UI/Loader/Loader';

const SingleRecipe = ({ match }) => {
    const APP_KEY = process.env.REACT_APP_API_KEY;
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState({})
    
    useEffect(() => {
        const getRecipe = async () => {
            const response = await fetch(` https://api.spoonacular.com/recipes/${match.params.id}/information?includeNutrition=true&apiKey=${APP_KEY}`)
            const data = await response.json();
            setItem(data)
            setLoading(false)
        }
        getRecipe();
    }, [match.params.id])
    
    
    return loading ? <Loader />: (
        <div className={`${styles.singleRes} container mb-4 mt-5 my-md-5`}>
            <div className="row">
                <div className="col-md-6">
                    <h2>{item.title}</h2>

                    {item.dishTypes && item.dishTypes.slice(0, 1).map((r,i) => {
                        return <h6 key={i}>{r}</h6>
                    })}

                    <div className="d-flex">
                    {item.nutrition && item.nutrition.nutrients.slice(0, 4).map((r,i) => {
                        return (< CircularProgressbarWithChildren key={i}
                            className={styles.bar} value={r.percentOfDailyNeeds} text={`${r.percentOfDailyNeeds}% DV`}
                            styles={buildStyles({ textSize: '15px' })}>
                            <div className={styles.nutritionName} >
                                {r.title}
                            </div>
                        </ CircularProgressbarWithChildren>)
                    })}
                    </div>
                    <div className="pt-3 pt-md-1">
                        <div className={styles.details}>
                            <span className="d-flex">
                                <LocalDiningIcon
                                    style={{ fontSize: 40, color: '#B9B9B9', margin: 'auto', marginRight: 10 }} />
                                <div>
                                    <div className={styles.time}>YIELDS</div>
                                    <div className={styles.value}>{`${item.servings} Servings`}</div>
                                </div>
                            </span>
                            <span className='d-flex'>
                                <AccessTimeIcon
                                    style={{ fontSize: 40, color: '#B9B9B9', margin: 'auto', marginRight: 10 }} />
                                <div>
                                    <div className={styles.time}>COOK TIME</div>
                                    <div className={styles.value}>{`${item.readyInMinutes} minutes`}</div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={item.image} alt="" className="img-fluid" />
                </div>
            </div>
            <div className="row mt-4 mt-sm-5">
                <div className="col-12">
                    <h4>Ingredients</h4>
                    <ul className={styles.listStyle}>
                    {item.extendedIngredients && item.extendedIngredients.map((r,i) => {
                        return <li key={i}>{r.original}</li>
                    })}
                    </ul>
                    <hr />
                </div>
            </div>

            <div className="row mt-3 mt-sm-3">
                <div className="col-12">
                    <h4>Instructions</h4>
                    <ol className={styles.instructions}>
                    {item.analyzedInstructions && item.analyzedInstructions.map((r,i) => {
                        return r.steps.map((rslt,key) => {
                        return <li key={key}>{rslt.step}</li>
                        })
                    })}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default SingleRecipe
