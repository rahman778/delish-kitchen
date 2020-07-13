import React, { useState } from 'react';

import VideoModal from '../UI/Modal/VideoModal';
import ReactPlayer from 'react-player/youtube';
import styles from './VideoCard.module.css';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';


const VideoCard = (props) => {
    const [modalShow, setModalShow] = useState(false);
    return (
            <section className={`${styles.showcase}`}>
                <div className={styles.imageContainer}>
                    <img src={require(`../../assets/${props.img.toLowerCase()}.jpg`)} alt="" />
                </div>
                <div className={`${styles.content}`}>
                    <div className={styles.iconBorder} onClick={() => setModalShow(true)}>
                    <div className={styles.playIcon}>
                        <PlayArrowRoundedIcon style={{ fontSize: 30 }} />
                    </div>
                    </div>
                    <div className={styles.videoDesc}>{props.description}</div>
                </div>


                <VideoModal show={modalShow} onHide={() => setModalShow(false)}>
                    <div className={styles.playerWrapper}>
                        <ReactPlayer
                            playing={true}
                            controls={true}
                            className={styles.reactPlayer}
                            width='100%'
                            height='100%'
                            url={props.url} />
                    </div>
                </VideoModal>
            </section>
    )
}

export default VideoCard
