import React ,{useState} from 'react'
import Timer from './Timer'
import Time from './Timelist.jsx'
import { testContext } from './textContext.js'



const App =()=>{
  // States
  const [isLight , setIsLight]=useState("false");
  const [timeArr , setTimeArr]=useState(["00 : 05 : 12"]);

  const handleSetIsLight =()=>{
          setIsLight(!isLight)

  }



  return(
    // Context 
    <testContext.Provider value='blue'>
        <div className='main' style={{background:isLight? "white": "black"}}>
      <Timer 

      // Prop Drailing
      timeArr={timeArr}
      setTimeArr={setTimeArr}
      isLight={isLight} handleSetIsLight={handleSetIsLight}></Timer>
     
    </div>

    </testContext.Provider>
  
  )
}

export default App;

