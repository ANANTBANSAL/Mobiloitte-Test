import { Container } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';
import Formdata from './form';




const Postapi=()=>{
  const [data,setData]=useState({title:'',body:''});
  const [submit, setSubmit] = useState(false);
  const [present,future]=useState(1);

  const handleInput=(e)=>{
    setData({...data,[e.target.id]:e.target.value});
  }

    const submitHandler=async()=>{
      setSubmit(true);
      console.log(data.title);
      console.log(data.body);
      if(
        data.title!=='' &&
        data.body!==''
      ){
        future(present+1);
        const res=await axios.post('https://jsonplaceholder.typicode.com/posts',{
          title:data.title,
           body:data.body,
           userId:present
      });
      console.log('res', res);
      console.log(res.status)
        if(res.status !== 201) {
          alert('Unsuccessful and status code is:'+res.status);
          setSubmit(false);
          } else {
          
            alert('successful and status code is:'+res.status);
         
            }
    }
    else{
        alert('Pls enter all details');
      }
    }

  
  
    return( 
<Container style={{marginTop:90}}>
 <Formdata buttonName='Add' submit={submitHandler} handleInput={handleInput}/>

</Container>    );
}
export default Postapi;



