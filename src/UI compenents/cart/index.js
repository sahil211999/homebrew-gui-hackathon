import React, { Component } from 'react'
import FormulaCard from '../formula/index'
// import './style.css'

/**
* @author
* @function FormulaCard
**/

class cart extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      this.props.packages.map((p, i) => {
        return (
          <FormulaCard key={i} name={p.name} version={p.version} isLatest={p.isLatest}/>
        )
      })
    )
  }
}

export default cart