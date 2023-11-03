import React ,{useState} from 'react';
import Timer from './Timer'



const App =()=>{
  const [isLight , setIsLight]=useState("false");

  const handleSetIsLight =()=>{
          setIsLight(!isLight)

  }

  return(
    <div className='main' style={{background:isLight? "white": "black"}}>
      <Timer isLight={isLight} handleSetIsLight={handleSetIsLight}></Timer>
    </div>
  )
}

export default App;

