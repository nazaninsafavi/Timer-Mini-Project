import { useContext } from "react"
import { testContext } from "./textContext"

const Item =(props)=>{
    // Use context in functional components: 
    const context = useContext(testContext)
    return(
        <div style={{color:context}}>{props.children}</div>
    )
    
}
export default Item