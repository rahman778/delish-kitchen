import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import styles from './Footer.module.css';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';

const Footer = () => {
    return (
        <section className='container-fluid p-0 mt-5'>
            <div className={styles.imageGallery}>
                <div className={styles.btnBg}>
                    <button className={`btn ${styles.btnStyle}`}>
                        <InstagramIcon style={{ fontSize: 15, marginBottom: 2.5, marginRight: 4 }} />
                        <a href="https://www.instagram.com/_delish_kitchen_/" rel="noopener noreferrer" target="_blank">
                         Follow on Instagram
                         </a>
                    </button>
                </div>
                <img src={img4} alt="" className={`col-md-2 col-4 ${styles.imgStyle}`} />
                <img src={img2} alt="" className={`col-md-2 col-4 ${styles.imgStyle}`} />
                <img src={img3} alt="" className={`col-md-2 col-4 ${styles.imgStyle}`} />
                <img src={img1} alt="" className={`col-md-2 col-4 ${styles.imgStyle}`} />
                <img src={img6} alt="" className={`col-md-2 col-4 ${styles.imgStyle}`} />
                <img src={img5} alt="" className={`col-md-2 col-4 ${styles.imgStyle}`} />
            </div>
            <div className={`text-center py-2 ${styles.footerBg}`}>
                <a href="https://www.facebook.com/A.Rahman778/" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.youtube.com/channel/UC2sovARqFr4_45vzwToaTug" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-youtube"></i>
                </a>
                <a href="https://www.instagram.com/_delish_kitchen_/" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com/Mohamedmf" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-twitter"></i>
                </a>
            </div>
        </section>
    )
}

export default Footer
