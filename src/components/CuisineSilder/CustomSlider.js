import React from 'react'

import styles from  './CuisineSlider.module.css'

export const SampleNextArrow = (props) => {

    const { className, style, onClick } = props;
    return (
        <div
        className={`${className} ${styles.arrowNext}`}
        style={{ ...style, display: "block", }}
        onClick={onClick}
      />
    )
}

export const SamplePrevArrow = (props) => {

    const { className, style, onClick } = props;
    return (
        <div
        className={`${className} ${styles.arrowPrev}`}
        style={{ ...style, display: "block", }}
        onClick={onClick}
      />
    )
}

