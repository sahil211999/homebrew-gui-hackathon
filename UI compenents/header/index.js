import React from 'react'
import './index.css'
/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <div className = "HeaderCard">
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

export default Header