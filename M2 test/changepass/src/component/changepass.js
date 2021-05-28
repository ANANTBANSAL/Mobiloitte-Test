import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Container, Hidden, InputLabel, Paper, TextField, Typography} from  '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    paper: {
       marginTop: theme.spacing(8),
     
      },
      typography:{
          align:'left',
      },
      main:{
        backgroundColor:'rgb(194, 226, 235)' ,
        height: '100vh',
        align:'center',
        justifyContent:'center'

      },
      main1:{
        marginTop:100,
        marginLeft:30
      },
      main2:{
        marginTop:200,
      }

}));
const Changepass=()=>
{     const classes = useStyles();
    return(
     <Grid container maxWidth='false' className={classes.main}>
    <Paper width={1} className={classes.paper}>
    <Grid container item direction="row">
    <Grid item  xs={6}  spacing={2} className={classes.main1}>
        <Typography style={{fontSize:20,fontWeight:'bold',marginBottom:10}}>
            Change Your Password
        </Typography>
        <InputLabel style={{marginBottom:10,color:'black'}}>New Password</InputLabel>
        <TextField id="outlined-secondary"  variant="outlined" style={{color:'rgb(137, 62, 156)',marginBottom:20,width:'40ch'}}/>
       <InputLabel style={{marginBottom:10,color:'black'}}>Confirm New Password</InputLabel>
        <TextField id="outlined-secondary"  variant="outlined" style={{color:'rgb(137, 62, 156)',marginBottom:20,width:'40ch'}}/>
   <Button style={{color:'rgb(137, 62, 156)',backgroundColor:'rgb(44, 26, 94)',width:'45ch'}}>
     Change my password
   </Button>
    </Grid>
    <Grid item sm={5}  direction="column" className={classes.main2}>
<Hidden  only="sm">
<Typography style={{fontSize:20,fontWeight:'bold',align:'left'}}>
    Password Must Contain:
</Typography>
    <Typography>
        At least 1 upper case letter (A-Z)
    </Typography>
    <Typography className={classes.typography}>
       At least 1 number(0-9)
    </Typography>
    <Typography className={classes.typography} >
        At least 8 characters
    </Typography>
</Hidden>
    </Grid>
    </Grid>
    </Paper>
     </Grid>
    
    );
}
export default Changepass;