import React, { Component } from 'react';

class Item extends Component {
  onAdd() {
    if (this.props.handleAddPackage) {
      this.props.handleAddPackage({'name': this.props.val, 'version': 'v1.1', 'isLatest': false})
    }
  }
  render() {
    return(
      <li>
        {this.props.val}
        <button onClick={this.onAdd.bind(this)}>Add</button>
      </li>
    )
  }

}

export default Item