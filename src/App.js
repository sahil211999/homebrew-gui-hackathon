import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import PackagesList from './compenents/PackagesList';
import Cart from './compenents/Cart'
var shell = require('shelljs');

//shell.brew("npm");

const {app} = window.require('electron').remote


let formula_map = {}
let formula_map1 = {}
var data_body;

class App extends Component {
  

    constructor() {
    super();
    
    this.state = {
      data: ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran♀","Nidorina","Nidoqueen","Nidoran♂","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew",
      ],
      list: undefined,
      cartPage: false,
      appName: 'React Search Bar',
      formula_map: [],
  
      isLoaded: false
    }
  }



  componentDidMount() {
   // alert( ls.stdout);
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
    let queryData = [];
    if(e.target.value != '') {
      for (let person in this.state.formula_map) {
          if(person.toLowerCase().indexOf(e.target.value) !== -1) {
            if(queryData.length < 10) {
              queryData.push(person);
            }
          }
      }
    }
    this.setState({list: queryData});
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
              {(this.state.list) ? <PackagesList data={this.state.list} handleAddPackage={this.onAddPackage.bind(this)}/> : null }
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