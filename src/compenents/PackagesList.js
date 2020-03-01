import React, { Component } from 'react'
import Item from './Item'

class PackagesList extends Component {
  constructor() {
    super()
    this.state = {
      packageInCart: [
        {'name': 'php', 'version': 'v1.1', 'isLatest': false},
        {'name': 'php', 'version': 'v1.1', 'isLatest': true},
        {'name': 'php', 'version': 'v1.1', 'isLatest': false}
      ]
    }
  }

  // handleAddPackage(wantPackage) {
  //   if (this.props.handleAddPackage) {

  //   }
  //   let packageInCart = this.state.packageInCart
	// 	packageInCart.push(wantPackage)
	// 	this.setState({packageInCart: packageInCart})
  // }
  
  render() {
    return (
      <div>
        <ul>
          {this.props.data.map((value) => {
              return <Item key={value} val={value} handleAddPackage={this.props.handleAddPackage} />
          })}
        </ul>
      </div>
    )
  }
}
export default PackagesList