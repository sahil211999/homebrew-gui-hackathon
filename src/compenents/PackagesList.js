import React, { Component } from 'react'
import Item from './Item'
import '../style/packagesList.css'

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
          <div className='col-name'>
            <div className='item-name'>Name</div>
            <div className='item-version'>Version</div>
            <div className='nothing'></div>
          </div>
          {searchList.map((value) => {
              return <Item key={value} aPackage={value} handleAddPackage={this.props.handleAddPackage} />
          })}
        </ul>
      </div>
    )
  }
}
export default PackagesList