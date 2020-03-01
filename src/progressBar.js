import React, { Component } from 'react';
import './progressBar.css';

export class ProgressBar extends React.Component {
  state = {
    toggle: true
  };

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  render() {
    return (
      <div className="ProgressBar">
            <button onClick={this.toggle}>Download</button>
            {!this.state.toggle && (
              <div className="dotwrapper">
                // <p className="loading"></p>
                <div className="dot0" />
                <div className="dot1" />
                <div className="dot2" />
              </div>
            )}

      </div>
    );
  }
}

export default ProgressBar;
