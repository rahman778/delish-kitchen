import React from 'react'
import Modal from "react-bootstrap/Modal";
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    backgroundColor : '#1864af',
    left : '44%',
    position: 'absolute',
  },
}));


const AuthModal = (props) => {

  const classes = useStyles();

 
    const style = {
      borderBottom:'none',
      backgroundColor:'#f6f6f6'
    }

    return (
        <Modal show={props.show} onHide={props.onHide}  centered >
        <Modal.Header closeButton style={style}>
        <Avatar className={classes.large} >
          <i style={{fontSize:'23px'}} className="far fa-user"></i>
          </Avatar>
        </Modal.Header>
        {props.children}
      </Modal>
    )
}

export default AuthModal
