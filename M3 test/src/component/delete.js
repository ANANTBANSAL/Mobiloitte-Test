import { Button, Divider } from '@material-ui/core';
import { Container, Grid, List, ListItem, ListItemText, Typography ,Box} from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'



const Deleteapi=()=>{
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

      const handleDelete=async(id)=>{
        console.log('_ID', id);
        try{
    const res=await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    console.log(res);  
    console.log(res.status); 
    console.log('res', res);
  if (res.status !== 200) {
    console.log('res.data', res.data.result);
    alert('unsuccessful with rsponse code: '+res.status)

  } else {
    getData();
    alert('successful delete with response code:'+res.status);
  }
} catch (err) {
  console.log('err', err);
}
};

    return(
      <Box  border={1} boxShadow={8} style={{width:'98%',height:'98%',marginTop:70,marginLeft:10}}>
        <div><div>
          <Container>
            <Typography  align='center' variant='h6'>Rendering the get request json data</Typography>
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
                             <ListItem>
                                 <Button color="primary" variant="contained" onClick={()=>{handleDelete(data.id)}}>Delete</Button>
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

export default Deleteapi;