import React from 'react';
import './Card.module.css';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 375,
    marginBottom:20,
    background:'#f9f9f9',
    margin:'auto',
    '&:hover': {
        boxShadow : '0 4px 10px rgba(160,160,160,0.5), 0 0 1px rgba(160,160,160, 0.5) inset;'
      }
  },
  header: {
      textAlign: "center",
      height:60
  },
  headerFont: {
      fontSize:'1.05rem',
      fontWeight:500,
      [theme.breakpoints.down('xs')]: {
        fontSize:'1.2rem',
      }
  },
  bodyContent: {
      fontSize:15,
      color:'#686869'
  },
  contentHeight:{
      height:150,
      '@media (min-width:576px) and (max-width:768px)': { 
        height:185,
      },
      '@media (min-width:992px) and (max-width:1199px)': { 
        height:165,
      },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const CardLayout = (props) => {
  const classes = useStyles();
  
  let desc;
  if(props.description){
    desc = props.description.replace(/<(.|\n)*?>/g, '');
  }
  return (
    <Card className={classes.root}>
         <CardActionArea >
      <CardHeader
        disableTypography={true}
        
        title={<Typography classes={{h5:classes.headerFont}} variant="h5" component="h4">
        {props.title}
      </Typography>}
        classes={{
            root: classes.header
          }}
      />
      <CardMedia
        className={classes.media}
        src="/static/images/cards/paella.jpg"
        image={props.image}
        title={props.title}
      />
      <CardContent classes={{root:classes.contentHeight}}>
        <Typography classes={{body2:classes.bodyContent}} variant="body2" component="p">
          {desc.length > 200 ? `${desc.substr(0, 200)}...` : desc}
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardLayout;