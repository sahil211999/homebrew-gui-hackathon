import React, { Component } from 'react'
import FormulaCard from './FormulaCard'
// import './style.css'

/**
* @author
* @function FormulaCard
**/

class Cart extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      this.props.packages.map((aPackage, i) => {
        return (

          <FormulaCard key={i} name={aPackage.name} version={aPackage.version} isLatest={aPackage.isLatest}/>
        )
      })
    )
  }
}

export default Cart
