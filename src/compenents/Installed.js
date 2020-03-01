import React, { Component } from 'react'
import FormulaCard from './FormulaCard'
import '../style/cart.css'

class Installed extends Component {
  constructor () {
    super()
    this.state = {

    }
  }

  render () {
    // let packcagesInstalled = this.props.packcagesInstalled
    // packcagesInstalled.split(' ')
    // alert(this.props.packcagesInstalled[0])
    return (
      <div>
        <h1>Packages Installed</h1>
        <ul>
          <div className='col-name'>
            <div className='item-name'>Name</div>
            <div className='item-version'>Version</div>
            <div className='item-latest'>Latest</div>
          </div>
          {this.props.packcagesInstalled.map((aPackage, i) => {
              return <FormulaCard key={i} name={aPackage} version={null} isLatest={true}/>
          })}
        </ul>
        {/* <div><button className='install-all' onClick={this.handleDownload.bind(this)}>Install All</button></div> */}
      </div>
    )
  }
}

export default Installed
