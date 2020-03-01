import React from 'react'
//import { Column, Row } from 'simple-flexbox';
import '../style/formula.css'

/**
* @author
* @function FormulaCard
**/

const FormulaCard = (props) => {
  return(
    <div className='item-wrap'>
      <div className='item-name'>{props.name}</div>
      <div className='item-version'>{props.version}</div>
      <div className = "is-latest">{props.isLatest ? 'Yes':'No'}</div>
    </div>
  )
 }

export default FormulaCard