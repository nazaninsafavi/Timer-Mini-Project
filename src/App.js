import React ,{useState} from 'react'
import Timer from './Timer'
import Time from './Timelist.jsx'



const App =()=>{
  const [isLight , setIsLight]=useState("false");
  const [timeArr , setTimeArr]=useState(["00 : 05 : 12"]);

  const handleSetIsLight =()=>{
          setIsLight(!isLight)

  }



  return(
    <div className='main' style={{background:isLight? "white": "black"}}>
      <Timer isLight={isLight} handleSetIsLight={handleSetIsLight}></Timer>
      <div className='submain'>
          <Time>
              {timeArr}
          </Time>
      </div>
     
    </div>
  )
}

export default App;

