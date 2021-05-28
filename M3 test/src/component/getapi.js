import { Box, Container, Divider, Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'



const Getapi=()=>{
  const [getdata,setGetdata] = useState([]);

  const  getData= async ()=>{
  const res= await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(res);
    setGetdata(res.data);
    console.log(getdata[0]);
    }

    useEffect(()=>{
        getData();
    },[]);

      return(
 <Box  border={1} boxShadow={8} style={{width:'98%',height:'98%',marginTop:70,marginLeft:10}}><Container>
     <Typography align='center' variant='h6' color='grey'>Rendering the get request json data</Typography>
     <Divider light='false'/>
 </Container>
 <Container>
        <Grid container>
          <Grid container direction='row'>
            <Grid container  direction='column'>
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
                   
                      </ListItem> </ListItem>
                  );
                })}
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Container>
 </Box>
    
    );
}

export default Getapi;