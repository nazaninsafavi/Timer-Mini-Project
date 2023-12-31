import React, { Component } from 'react'
import './App.css'
import Time from './Timelist';
import { testContext } from './textContext';

var interval;

export default class Timer extends Component {
  constructor(){
    super();
    this.state ={
      hour:0,
      minute:0,
      second:0,
      isStart:false
    }
    
  }
 // Which context we wanna use in this class component? 
 //Definition of a Context in this class Component
  static contextType = testContext;

  startInterval =()=>{
    if(this.state.isStart ===false){
      this.setState({
        isStart:true
      })
      interval = setInterval(()=>{
        this.setState({
          second:this.state.second+1
        })
        if(this.state.second ===60){
            this.setState({
              second:0,
              minute:this.state.minute+1
            })
        }
        if(this.state.minute ===60){
          this.setState({
            minute:0,
            hour:this.state.hour+1
          })
      }
      },1000)
    }
  

  }
  stopInterval=()=>{
    this.setState({
      isStart:false,
    })
    clearInterval(interval);
  }

  resetInterval=()=>{
    this.stopInterval();
    this.setState({
        second:0,
        minute:0,
        second:0
    })

  }
  handleSevaTime = ()=>{
    let h =this.state.hour
    let m =this.state.minute
    let s =this.state.second
    let newTime = `${h>9 ?h : "0"+h} : ${m>9 ? m :"0"+m} : ${s>9 ?s :"0"+s}`

    // The Following script called Spread Operator :  
    this.context.setTimeArr(...this.context.timeArr , newTime)

  }


  render() {
    let h =this.state.hour
    let m =this.state.minute
    let s =this.state.second

    return (
      <>
        <div className='container'>
          <div className='text' style={{color:this.props.isLight?"black":"white"}}>Timer with Javascript</div>
          <div className='Box'>
            <h2 className='timer'
              onClick={this.handleSevaTime}
              // Use of Context 
              style={{color:this.context}}
            >{`${h>9 ?h : "0"+h} : ${m>9 ? m :"0"+m} : ${s>9 ?s :"0"+s}` }</h2>
          </div>
          <div className='Buttonbox'>
            <span className='action_button start_button' onClick={this.startInterval}>start</span>
            <span className='action_button stop_button' onClick={this.stopInterval}>stop</span>
            <span className='action_button reset_button' onClick={this.resetInterval}>reset</span>
            <span className='action_button change_button' 
                    onClick={this.props.handleSetIsLight} 
                    style={{background:this.props.isLight?"black":"white",
                        color:this.props.isLight?"white":"black"}}
            >
                {this.props.isLight? "black" : "white"}
            </span>


          </div>
      
        </div>
        <div className='submain'>
          <Time>
              {this.context.timeArr}
          </Time>
      </div>
   
      </>
      
    )
  }
}



