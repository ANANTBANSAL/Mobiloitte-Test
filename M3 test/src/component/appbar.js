import { AppBar, Toolbar,Button, makeStyles } from '@material-ui/core';
import React from 'react';
import {Link} from 'react-router-dom';

const useStyles=makeStyles((theme)=>({
    button:{
     color:'white',
    }
}));
const Appbar=()=>{
const classes=useStyles();

    return(
<AppBar>
    <Toolbar>
    
    <Button className={classes.button} component={Link} to='/get'>
        view Data     
         </Button>

         <Button className={classes.button} component={Link} to='/delete'>
        Delete Data       
         </Button>
         

       
         <Button className={classes.button} component={Link} to='/add'>
        Add Data     
         </Button>
        
         
         <Button className={classes.button} component={Link} to='/update'>
        Update Data     
         </Button>

    </Toolbar>
</AppBar>

    );
}
export default Appbar;