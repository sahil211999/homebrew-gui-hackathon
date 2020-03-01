import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import PackagesList from './compenents/PackagesList';
import Cart from './compenents/Cart'

const {app} = window.require('electron')

let data = null

let map_installed_packages

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      packagesAvailable: [],
      searchList: [],
      cartPage: false,
      packageInCart: [],
      appName: 'React Search Bar',
      isLoaded: false,
    }
  }

  componentWillMount() {
    // shell.showItemInFolder('/Users/linsiyi/Documents/Projects/WebDev/SIdeProjects/homebrew-gui-hackathon')
    fetch("http://localhost:5000/installed")
      .then(res => res.json())
      .then(
        (results) => {
          alert(results.installed_packages)
          map_installed_packages = results.installed_packages;
        },
        (error) => {
          alert(error)
        }
      )
    // fetch all packages here
    fetch("https://formulae.brew.sh/api/formula.json")
      .then(res => res.json())
      .then(
        (results) => {
          alert(results)
          results.map((result) => {
            this.state.packagesAvailable.push({
              'name': result.name,
              'version': result.versions.stable
            })
          })
          this.setState({
            isLoaded: true,
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
    let queryData = [];
    if(e.target.value != '') {
      this.state.packagesAvailable.map((aPackage) => {
        if (aPackage.name.toLowerCase().indexOf(e.target.value) !== -1) {
          if (queryData.length < 10) {
            queryData.push(aPackage);
          }
        }
      })
    }
    this.setState({searchList: queryData});
  }

  goCart() {
    this.setState({cartPage: !this.state.cartPage})
  }

  onAddPackage(want_package) {
		this.state.packageInCart.push(want_package)
  }

  render() {
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Homebrew Shop <span role="img" aria-label="love"></span></h1>
        </div>

        <button style={{height: '50px', width: '50px'}} onClick={this.goCart.bind(this)}>Cart</button>

        {!this.state.cartPage ? 
          (
            <div>
              <SearchBar search={this.searchData.bind(this)} />
              <PackagesList searchList={this.state.searchList} handleAddPackage={this.onAddPackage.bind(this)}/>
            </div>
           ) : 
          (
            <Cart packages={this.state.packageInCart}/>
          )
        }
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


export default App;



// class Modal extends React.Component {
//   constructor() {
//     super()
//     this.state = {

//     }
//   }
//   openCart(){
//     const modal = document.getElementsByClassName('modal')[0];
//     modal.style.display = "block";
//   }
//   closeCart() {
//     const modal = document.getElementsByClassName('modal')[0];
//     modal.style.display = "none";
//   }
//   render() {
//     return(
//       <div class="cart-container">
//         <button class="cart-button" type="button" onClick={this.openCart.bind(this)}>In Your Glass</button>

//         <div id="modal-cart" class="modal">
//           <div class="modal-content">
//             <span class="closeBtn" onClick={this.closeCart.bind(this)}>&times;</span>
//             <p>I am Suk Min Hwang!</p>
//           </div>
//         </div>
//       </div>

//     )
//   }
// }