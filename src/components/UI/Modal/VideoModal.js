import React from 'react'

import Modal from "react-bootstrap/Modal";
import styles from './Modal.module.css'

const VideoModal = (props) => {

  
  return (
    <Modal show={props.show}   dialogClassName={styles.modalWidth} onHide={props.onHide} animation={false} centered>
    <Modal.Header  closeButton className={styles.closeBtn}>
        </Modal.Header>
      <Modal.Body style={{padding:0,background:'#000'}}>
        {props.children}
      </Modal.Body>
    </Modal>
  )
}

export default VideoModal
