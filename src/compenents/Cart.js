import React, { Component } from 'react'
import FormulaCard from './FormulaCard'
import '../style/cart.css'

/**
* @author
* @function FormulaCard
**/

class Cart extends Component {
  constructor () {
    super()
    this.state = {
      installing: false,
      message: '',
      progess: {
        'stdout': null,
        'stderr': null,
        'err': null
      }
    }
  }

  componentWillMount() {
    
  }

  handleDownload() {
    this.setState({installing: true, message: 'Installing...'})
    fetch('http://localhost:5000/download', {
      method: 'post',
      dataType: 'json',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.props.packages)
    })
    .then(res => res.json())
    .then(data => {
      this.setState({progess: data, message: 'Done!'})
      if (data.error) {
        alert('Failed' + data.error)  
      } else {
        // alert(JSON.stringify(data))
        if (this.props.updatedInstall) {
          this.props.updatedInstall(data.installed)
        }
        // alert(data.status)
      }
    })
  }

  render () {
    return (
      <div>
        <ul>
          <div className='col-name'>
            <div className='item-name'>Name</div>
            <div className='item-version'>Version</div>
            <div className='item-latest'>Latest</div>
          </div>
          {this.props.packages.map((aPackage, i) => {
              return <FormulaCard key={i} name={aPackage.name} version={aPackage.version} isLatest={aPackage.isLatest}/>
          })}
        </ul>
        <div><button className='install-all' onClick={this.handleDownload.bind(this)}>Install All</button></div>
        {(this.state.installing) ? <h3 className='installing'>{this.state.message}</h3> : null}
      </div>
    )
  }
}

export default Cart