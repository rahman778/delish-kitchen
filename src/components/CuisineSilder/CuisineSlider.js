import React from 'react'

import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SampleNextArrow, SamplePrevArrow } from './CustomSlider'
import styles from './CuisineSlider.module.css'

import italian from '../../assets/italian.jpg';
import indian from '../../assets/indian.jpg';
import french from '../../assets/french.jpg';
import arabian from '../../assets/arabian.jpg';
import chinese from '../../assets/chinese.jpg';
import europian from '../../assets/europian.jpg';



const CuisineSlider = (props) => {

  const settings = {
    infinite: false,
    initialSlide: 0,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
    ]
  };

  return (
    <div className="container">
      <div className={`${styles.header} text-center`}>
        <h2>Popular <span>Cuisines</span></h2>
      </div>
      <Slider {...settings}>
        <Link to='/cuisine/Indian'>
        <div >
          <div className={styles.cuisines}>
            <img src={indian} className="img-fluid" alt="" />
            <div className={styles.centered}>Indian</div>
          </div>
        </div>
        </Link>
        <Link to='/cuisine/Chinese'>
        <div>
          <div className={styles.cuisines}>
            <img src={chinese} className="img-fluid" alt="" />
            <div className={styles.centered}>Chinese</div>
          </div>
        </div>
        </Link>
        <Link to='/cuisine/Middle Eastern'>
        <div>
          <div className={styles.cuisines}>
            <img src={arabian} className="img-fluid" alt="" />
            <div className={styles.centered}>Middle Eastern</div>
          </div>
        </div>
        </Link>
        <Link to='/cuisine/Italian'>
        <div>
          <div className={styles.cuisines}>
            <img src={italian} className="img-fluid" alt="" />
            <div className={styles.centered}>Italian</div>
          </div>
        </div>
        </Link>
        <Link to='/cuisine/French'>
        <div>
          <div className={styles.cuisines}>
            <img src={french} className="img-fluid" alt="" />
            <div className={styles.centered}>French</div>
          </div>
        </div>
        </Link>
        <Link to='/cuisine/European'>
        <div>
          <div className={styles.cuisines}>
            <img src={europian} className="img-fluid" alt="" />
            <div className={styles.centered}>European</div>
          </div>
        </div>
        </Link>
      </Slider>
    </div>
  )
}

export default CuisineSlider
