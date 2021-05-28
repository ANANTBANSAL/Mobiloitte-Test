import { Button ,Container, Grid, List, ListItem, Box,ListItemText, makeStyles, Popover, Typography, Divider } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Formdata from './form';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

const Updateapi=()=>{
  console.log('hii update');
    const [getdata,setGetdata] = useState([]);
    const [data,setData]=useState({title:'',body:''});
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  
    const  getData= async ()=>{
    const res= await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(res);
      setGetdata(res.data);
      console.log(getdata[0]);
      }
  
      useEffect(()=>{
          getData();
      },[]);
const handleUpdate=async(id)=>{

    try{
    const res =await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,{});
    console.log(res);  
    console.log(res.status); 
    console.log('res', res);
  if (res.status !== 200) {
    console.log('res.data', res.data);
    alert('unsuccessful with rsponse code: '+res.status)
  } else {
    getData();
    alert('successful with rsponse code:' +res.status);
  }
} catch (err) {
  console.log('err', err);
}
}; 
const handleInput=(e)=>{
  setData({...data,[e.target.id]:e.target.value});
}
  // const handleForm=(id)=>{
  //   console.log(' hello i am handleform');
  //   return(
  //     <div>
  //       </div>
      
  //   );
  //   console.log(' hello i am handleform last');
  // }
    return(  
      <Box border={1} boxShadow={8} style={{width:'98%',height:'98%',marginTop:70,marginLeft:10}}>      
        <div><div>

          <Container>
            <Typography  align='center' variant='h6' color='grey'>Rendering the get request json data</Typography>
            <Divider light='false'/>
        </Container>
        </div>
        <Container>
               <Grid container>
                 <Grid container direction='row'>
                   <Grid container direction='column'>
                     <List>
                       { getdata.length > 0 && getdata.map((data,i) => {
                         return(
                           <ListItem  key={i}>
                      <ListItem>
                      <ListItemText style={{padding:0}} p={0} sm={3}>
                               {i+1}.
                             </ListItemText>
                      </ListItem>
                             
                             <ListItem>
                             
                             <ListItemText>
                               {data.title}
                             </ListItemText>
                             </ListItem>
                             
                             <ListItem>
                             <ListItemText>{data.body}</ListItemText>
                          
                             </ListItem>
                             <ListItem key={i}>
                             <Button  endIcon={<ArrowDropDownIcon/>}  aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>Update</Button>
                             <Popover
                             elevation={1}
                              id={id}
                              open={open}
                              anchorEl={anchorEl}
                              onClose={handleClose}
                              anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                              }}
                              transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                              }}>
         <Formdata buttonName='Update' submit={()=>{handleUpdate(data.id)}} id={i} handleInput={handleInput}   />
     
                           </Popover>
                                    </ListItem>
                              </ListItem>
                         );
                       })}
                     </List>
                   </Grid>
                 </Grid>
               </Grid>
             </Container>
        </div>
</Box>
    );
}
export default Updateapi;