import React,{useState,useEffect} from 'react'
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import ScaleLoader from 'react-spinners/ScaleLoader'
import GridLoader from 'react-spinners/GridLoader'
import PacmanLoader from 'react-spinners/PacmanLoader'
import RingLoader from 'react-spinners/RingLoader'

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      background:'rgba(0,0,0,0.5)',
      
    },
  }));

const Loader = (props) => {
    const {} = props;
    const classes = useStyles();
    return (
        <React.Fragment>
        {/* open is inbuild boolean variable in backdrop component */}
            <Backdrop className={classes.backdrop} open>  
                <GridLoader loading={true} color="red" size={30} />
            </Backdrop>
        </React.Fragment>
    )
}

export default Loader
