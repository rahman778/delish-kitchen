import React from 'react';

import styles from './Hero.module.css';
import SearchButton from '../UI/SearchForm/SearchButton';


const Hero = () => {
    
    return (  
            <section className={styles.showcase}>
                <div className={styles.imageContainer}>            
                </div>
                <div className={`${styles.content}`}>
                    <h1 className={`${styles.mainText} mb-4`}>Eat smart waste less</h1>
                    <SearchButton />
                    <h5 className={`${styles.subText} mt-4`}>Find the perfect food ideas for every ocassion</h5>
                </div>
            </section>      
    )
}

export default Hero
