import { Button, Container, FormControl, Grid, Input, InputAdornment, InputLabel, makeStyles, TextField, Typography } from '@material-ui/core';
import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import AssignmentReturnIcon from '@material-ui/icons/AssignmentReturn';
const usestyle=makeStyles((theme)=>({
    container:{
        backgroundColor:'white',
        width:'100vh',
        height:'80vh',
    },
    main:{  
        marginTop:30,
        marginLeft:60,             
    },
    img:{
width:'50vh',
height:'40vh',
    },
    typography1:{
        color:'black',
        fontSize:20,
        fontWeight:'bold',
        marginTop:10,
    },
    typography2:{
    },
    input:{
        marginTop:30,
        marginBottom:15,
        backgroundColor:'rgb(202, 207, 221)',
        borderRadius:5,
        elevation:8,
        width:'50vh',
        boxShadow:20,

    },
      button:{
        color:'white',
        backgroundColor:'rgb(35, 70, 168)',
        
        width:'50vh'
    },
    return:{
        marginTop:20

    }
}));
const Forgotpass=()=>{
    const classes =usestyle();
    return(
     <Container  className={classes.container} justify='center'>
         <Grid xs={12} sm={8} container direction ='column'  justify='center' className={classes.main}>
         <Grid item>
         <img src='email.png' alt="error" className={classes.img}/>
          <Typography className={classes.typography1}>
              Forgot your password?
          </Typography>
         <Typography className={classes.typography2} >
             enter your email address below and we'll send
         </Typography>
         <Typography className={classes.typography2}>
             you instructions on how to change your password
         </Typography>
         <TextField sm={3} className={classes.input} variant='outlined'
                   label='Email Address' InputProps={{
           
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon style={{color:'rgb(147, 150, 158)'}} />
            </InputAdornment>
          ),  }}/>
         <Button className={classes.button}>
             Send
         </Button>
<Button className={classes.return}>
  <Grid container direction='row'>
      <AssignmentReturnIcon style={{color:'grey'}}/>
      <Typography style={{marginLeft:8,color:'grey'}}>Return to login</Typography>
  </Grid>
</Button>
         </Grid>
         </Grid>
     </Container>

    );
}
export default Forgotpass;