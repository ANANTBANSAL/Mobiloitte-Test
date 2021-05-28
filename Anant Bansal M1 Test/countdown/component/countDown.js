import React from 'react'
import {useState,useEffect} from 'react-dom'
import './countdown.css'
export default class CountDown extends React.Component
{
    constructor(){
        super();
        this.state={
            btnval:true,
            minutes:'',
            seconds:'',
            leftmin:'',
            leftsec:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }
    handleChange(event) {
        this.setState({[event.target.name]:event.target.value,});
      }
    handleClick()
    { 
      this.setState({btnval:false,
        leftmin:this.state.minutes,
        leftsec:this.state.seconds
    })
      while(this.state.leftmin > 0 || this.state.leftsec > 0 )
      {       
          if(this.state.leftsec==='0')
          {
              this.setState({
                  leftmin:this.state.leftmin--,
                  leftsec:'59'
              })
          }
          else{
              this.setState({
                  leftsec:this.state.leftsec--,
              })
          }
    }

    }

   
    render(){ 
        return(
        <div className='main_count'>
        <span className='head'>Count Down</span>
        <br/>
        <div className='timer'>
        <label className='unit'>Min:</label>
        <input type='text' name='minutes' value={this.state.minutes} onChange={this.handleChange} />
         
        <label className='unit_sec'>Seconds:</label>
        <input type='text' name='seconds'  value={this.state.seconds} onChange={this.handleChange} />
       
        <button value='Start' onclick={this.handleClick}>{this.state.btnval?'start':'Reset'}</button>
        </div>
        <div className='timer_show'>
            <span className='show_label'>{ this.state.leftmin === 0 && this.state.leftsec === 0
                   ? '00:00' : <p> {this.state.leftmin}:{this.state.leftsec < 10 ?  `0${this.state.leftsec}` : this.state.leftsec}</p>}</span>
        </div>
        </div>
       
           );
        
    }
}
   
