import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoModal from '../UI/Modal/VideoModal';
import ReactPlayer from 'react-player/youtube';

import styles from './MainVideo.module.css';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';

const MainVideo = (props) => {

    const [modalShow, setModalShow] = useState(false);

    return (
        <div className='container'>
            <section className={`${styles.showcase} my-5 my-sm-5`}>
                <div className={styles.imageContainer}>
                </div>
                <div className={`${styles.content}`}>
                    <div className={styles.iconBorder} onClick={() => setModalShow(true)}>
                    <div className={styles.playIcon}>
                        <PlayArrowRoundedIcon style={{ fontSize: 40 }} />
                    </div>
                    </div>
                </div>


                <VideoModal show={modalShow} onHide={() => setModalShow(false)}>
                    <div className={styles.playerWrapper}>
                        <ReactPlayer
                            playing={true}
                            controls={true}
                            className={styles.reactPlayer}
                            width='100%'
                            height='100%'
                            url='https://youtu.be/NZZHrKJIpSI' />
                    </div>
                </VideoModal>
            </section>

            <section>
                <div className="row justify-content-center">
                    <Link to='/videos'>
                    <button className={`${styles.moreVideosBtn} btn`}> More Videos </button>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default MainVideo
