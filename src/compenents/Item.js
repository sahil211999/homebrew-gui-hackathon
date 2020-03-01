import React, { Component } from 'react';

class Item extends Component {
  onAdd(value) {
    if (this.props.handleAddPackage) {
      this.props.handleAddPackage({'name': value.name, 'version': value.version , 'isLatest': true})
    }
  }
  render() {
    return(
      <li>
        {this.props.aPackage.name}
        <button onClick={this.onAdd.bind(this, this.props.aPackage)}>Add</button>
      </li>
    )
  }

}

export default Item