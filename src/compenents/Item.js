import React, { Component } from 'react';
import '../style/item.css'

class Item extends Component {
  onAdd() {
    if (this.props.handleAddPackage) {
      this.props.handleAddPackage({'name': this.props.val, 'version': 'v1.1', 'isLatest': false})

    const addBtn = document.getElementsByClassName('add-button')[0];
    addBtn.style.background = "lightgreen";
    // addBtn.style.border = "3px solid lightgreen";
    }
  }
  render() {
    return(
      <li>
        {this.props.val}
        <button class="add-button" onClick={this.onAdd.bind(this)}>Add</button>
      </li>
    )
  }

}

export default Item
