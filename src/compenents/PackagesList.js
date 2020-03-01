import React, { Component } from 'react'
import Item from './Item'

class PackagesList extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    const { searchList } = this.props
    return (
      <div>
        <ul>
          {searchList.map((value) => {
              return <Item key={value} aPackage={value} handleAddPackage={this.props.handleAddPackage} />
          })}
        </ul>
      </div>
    )
  }
}
export default PackagesList