import { Box, Button, Checkbox, Container, Grid, InputLabel, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';

const usestyle=makeStyles((theme)=>({
  box:{
      height:'100%',
     width:'100%',
    },
    img:{
        position:'absolute',
        height:'100%',
        width:'100%',
    }, box1:{
        justify:'center',
        paddingTop:'7%',
        paddingLeft:'9%',
        height:'80%',
       width:'80%',
      },
      img1:{
          position:'absolute',
          height:'80%',
          width:'80%',
          border: '1px solid',
          boxShadow:'1px 1px 5px 5px rgb(222, 225, 235)',
          zIndex:1,
      },
      imgnsoc1:{
          width:'70%',
          height:'100%',
          zIndex:2,
         
      },
      input:{
          backgroundColor:'white',
          marginBottom:20,
          width:'30ch',
          height:'6ch',
          zIndex:3,
            borderRadius:5
      },
      label:{
          color:'white',
          marginBottom:5,
          zIndex:3
      },
      button:{
          color:'white',
          backgroundColor:'blue',
          width:'33ch',
          zIndex:3

      },
      main2:{
        marginTop:12,
       marginLeft:0,
    },
    check:{
        color:'white',
      marginBottom:'2px',
        color:'white',
        height:'2px',
        zIndex:3,
    }
    }
    ));
const Nsoc=()=>{
    const classes=usestyle();
    return(
<Container maxWidth='false'>
    
<Box fixed className={classes.box}>
            <img src='nsoc.jpg' className={classes.img}></img>
        </Box>
         <Box className={classes.box1} sm={8} spacing={2}>
            <img src='nsoc.jpg' className={classes.img1}></img>
            </Box>
            <Container sm={12} maxWidth='false'>
            <Grid container direction ='row' spacing={7} className={classes.box1} maxWidth='false' >
  <Grid item container sm={8} xs={9}>
  <img src='nsoc1.jpg' className={classes.imgnsoc1}/>
  </Grid>
   <Grid container item sm={4} xs={3} direction='column' className={classes.main2}>
       <InputLabel className={classes.label}>Your email</InputLabel>
        <TextField id="outlined-secondary"  variant="outlined" className={classes.input}/>
       <InputLabel className={classes.label}>Password</InputLabel>
        <TextField id="outlined-secondary"  variant="outlined" className={classes.input}/>
        <Grid container item direction='row'>
        <Checkbox className={classes.check} color='white' disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
      <Typography className={classes.label} style={{  fontSize:'10px',marginBottom:'2px'}}>Remember me</Typography>
      <Typography></Typography>
            <Typography className={classes.label} style={{  fontSize:'10px',marginBottom:'2px',marginLeft:'55px'}}>Recover Password</Typography>
        </Grid>
   <Button className={classes.button}>
     SIGN IN
   </Button>
</Grid>
</Grid>
        
        
         </Container>
</Container>
    );
}
export default Nsoc;