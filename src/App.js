import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import './detchData.js';
import FormulaCard from './components/formula/index.js';
import ScrollableList from './components/scrollableList';
//import request from './detchData'
const ApiCall = require('./detchData.js');

const {app} = window.require('electron').remote;

let formula_map = {}
let formula_map1 = {}
var data_body;

class App extends Component {
    constructor() {
    super();
      formula_map = ApiCall.APIrequuest();
    console.log("hi this made");
    console.log(formula_map['zzz'])
    
    this.state = {
     
      appName: 'React Search Bar',
      formula_map: [],
      list: undefined,
      isLoaded: false
    }
  }



  componentDidMount() {
    fetch("https://formulae.brew.sh/api/formula.json")
      .then(res => res.json())
      .then(
        (result) => {

          data_body = result;
            for (var i in data_body) {
                
                 formula_map1[data_body[i].name] = data_body[i];

            }
          this.setState({
            isLoaded: true,
            formula_map: formula_map1
            
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  searchData(e) {
    var queryData = [];
    if(e.target.value != '') {
      for (var person in formula_map) {
          if(person.toLowerCase().indexOf(e.target.value)!=-1) {
            if(queryData.length < 10) {
              queryData.push(person);
            }
          }
      }
    }
    
    this.setState({list: queryData});
  }

  render() {
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Homebrew GUI <span role="img" aria-label="love"></span></h1>
        </div>
          {/* <div>
            <ScrollableList/>
          </div> */}
          <div>
            
          </div>

        <div>
          <SearchBar search={this.searchData.bind(this)} />
          {(this.state.list) ? <SearchResult data={this.state.list} /> : null  }
        </div>

      </div>


    );
  }

}


class SearchBar extends React.Component {
  render() {
    return(
      <div>
        <input type="text" onChange={this.props.search} placeholder="Search"/>
      </div>
    )
  }
}

class SearchResult extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.data.map(function(value) {
              return <Item name={value} val={value} />
          })}
        </ul>
      </div>
    )
  }
}

class Item extends React.Component {
  render() {
    return(
      <li>
        {this.props.val}
      </li>
    )
  }

}

export default App;
