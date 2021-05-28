import { Box, Button, Checkbox,Container, Grid, InputLabel, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
const useStyle=makeStyles((theme)=>({
   box1:{
      width:'80%',
      height:'80vh',
      marginTop:20,
      marginLeft:20,
      border:'2px solid',
   
   },
   img:{
       zIndex:1,
       position:'absolute',
       width:'80%',
       height:'80vh',

   },
   half1:{
    alignItem:'center',
    justifyContent:'center',
   },
   tyboard:{
        zIndex:2,
        fontWeight:'bold',
        color:'white',
        
       
    },
   typography1:{
       zIndex:2,
       color:'white',
       fontWeight:100,
       marginTop:150,
       marginLeft:50,

    },
   typography2:{
       zIndex:2,
    color:'white',
    fontSize:'10px',
    marginTop:10,
    },
    typography3:{ 
        zIndex:2,
        color:'white',
        fontSize:'10px',
        marginLeft:10,
    
    },
    typography4:{
         zIndex:2,
        color:'white',
        fontSize:'10px',
        marginLeft:70,
       
    },
        typography5:{
            zIndex:2,
         color:'black',
        fontWeight:'bold',
        fontSize:15,
        marginTop:80,
        marginLeft:130,
      
        },
        typography6:{
            zIndex:2,
         color:'black',
         marginTop:10,
         fontSize:10,
        marginLeft:100,
        },
        typography7:{
            zIndex:2,
            fontSize:10,
         color:'black',
        marginLeft:150,
        marginBottom:10
    },
        typography8:{
            zIndex:2,
            fontSize:12,
            marginLeft:170,

        },
   button1:{
       zIndex:2,
      color:'white',
       borderColor:'white',
       border:1,
    marginTop:10,
    width:'200px'
    },
    label2:{
        fontWeight:'bold',
        zIndex:2, 
        marginBottom:10,
        color:'black',
    },
    textfield:{
        marginBottom:10,
        zIndex:2, 
    },
    checkbox:{
        zIndex:2,
    },
    term:{
        zIndex:2,
        fontSize:12,
        marginTop:10,
    },
    condition:{
        marginLeft:5,
        fontSize:12,
        zIndex:2,
        color:'blue',
        marginTop:10,
    },
    button2:{
        color:'white',
        backgroundColor:'blue',
        zIndex:2,
        marginBottom:10,
    },
    button3:{
        zIndex:2,
      backgroundColor:'white',
      color:'rgb(29 161 242)',
      marginLeft:10,
    }
}));
const Board=()=>{
const classes = useStyle();
    return(
     <Container>
          <Box borderColor="black"  maxWidth='false' className={classes.box1}>
         <img src='board.jpeg' className={classes.img}></img>
      <Container>
      <Grid sm={12} container item direction='row' spacing={2}>
<Grid sm={6}  item container direction='column' className={classes.half1}>
<Typography className={classes.tyboard}>
    BoardMe
</Typography>

  <Typography className={classes.typography1}>
      Already Signed up?
  </Typography>

  <Typography className={classes.typography2}>
All users on MySpace will know that there are millinors of
  </Typography>
  <Typography className={classes.typography3}>
  people out there.Every day besides so manny people 
  </Typography>
  <Typography className={classes.typography4}>
  joining this community
  </Typography>
  <Button variant="outlined" size="large" color="primary" className={classes.button1}>
  LOG IN
        </Button>
</Grid>
      <Grid sm={6} item container direction='column'>
          <Typography className={classes.typography5}>Sign up for an Account</Typography>
     <Typography className={classes.typography6}>
         Let's get you all set up so you can start creating your
     </Typography>
     <Typography className={classes.typography7}>
         first anboarding experience
     </Typography>
     <Grid container item direction='row'>
         <InputLabel sm={3} className={classes.label2}>First Name</InputLabel>
         <InputLabel sm={3} className={classes.label2} style={{marginLeft:135}}> Last Name</InputLabel>
     </Grid>
     <Grid container   item direction='row'>
         <TextField sm={3} variant='outlined' className={classes.textfield} label='Your first name'></TextField>
         <TextField sm={3} variant='outlined' className={classes.textfield} label='your last name'></TextField>
     </Grid>
         <InputLabel className={classes.label2}>Email</InputLabel>
     <TextField variant='outlined' className={classes.textfield} label='Enter Your Eamil'></TextField>
     <InputLabel className={classes.label2}>Password</InputLabel>
     <TextField variant='outlined' className={classes.textfield} label='Enter a strong password'></TextField>
     <Grid container direction='row' >
         <Checkbox className={classes.checkbox}></Checkbox>
         <Typography className={classes.term}>
             I accept BoardMe's 
         </Typography>
         <Typography className={classes.condition}>
             Terms & Conditions
         </Typography>
     </Grid>
     <Button className={classes.button2}>
         SIGN UP
     </Button>
     <Typography className={classes.typography8}>
          Or sign up using
     </Typography>
     <Grid container item direction='row'>
     <Button
        variant="contained"
        color="default"
        className={classes.button3}
        startIcon={<TwitterIcon/>}/>
      <Button
        variant="contained"
        color="default"
        className={classes.button3}
        style={{color:'rgb(66 103 178)'}}
        startIcon={<FacebookIcon />}/>
        <Button
        variant="contained"
        color="default"
        className={classes.button3}
        startIcon={<TwitterIcon/>}/>
      
     </Grid>
      </Grid>
      </Grid>
      </Container>
      </Box>
     </Container>
  
    );
}
export default Board;