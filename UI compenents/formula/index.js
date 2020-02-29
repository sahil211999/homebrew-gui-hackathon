import React from 'react'
//import { Column, Row } from 'simple-flexbox';
import './style.css'

/**
* @author
* @function FormulaCard
**/

const FormulaCard = (props) => {
  return(
    
    <div className = "FormulaCard">
      <div  className = "Name">
          Name
       </div>

       <div  className = "Version">
          Cur
       </div>
       
       <div  className = "LattestV">
           Lattest 
       </div>
    </div>



  )

 }

export default FormulaCard