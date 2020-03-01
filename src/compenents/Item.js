import React, { Component } from 'react';
import '../style/item.css'

class Item extends Component {
  constructor() {
    super()
    this.state = {
      added: false
    }
  }
  onAdd(value) {
    if (this.props.handleAddPackage) {
      this.props.handleAddPackage({'name': value.name, 'version': value.version , 'isLatest': true})
      this.setState({added: !this.state.added})
    }
  }
  render() {
    return(
      <div className='item-wrap'>
        <div className='item-name'>{this.props.aPackage.name}</div>
        <div className='item-version'>{this.props.aPackage.version}</div>
        <div><button onClick={this.onAdd.bind(this, this.props.aPackage)}>{this.state.added ? 'Added':'Add'}</button></div>
      </div>
    )
  }

}

export default Item