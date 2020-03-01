import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import ProgressBar from './progressBar';
import Cart from '../src/UI compenents/cart/index'

const {app} = window.require('electron').remote

class App extends Component {
    constructor() {
    super();
    this.state = {
      data: ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran♀","Nidorina","Nidoqueen","Nidoran♂","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew",
      ],
      list: undefined,
      cartPage: false,
      cartList: [
        {'name': 'php', 'version': 'v1.1', 'isLatest': false},
        {'name': 'php', 'version': 'v1.1', 'isLatest': true},
        {'name': 'php', 'version': 'v1.1', 'isLatest': false}
      ]
    }
  }
  searchData(e) {
    var queryData = [];
    if(e.target.value !== '') {
      this.state.data.forEach(function(person) {
          if(person.toLowerCase().indexOf(e.target.value) !== -1) {
            if(queryData.length < 10) {
              queryData.push(person);
            }
          }
      });
    }
    this.setState({list: queryData});
  }

  goCart(e) {
    this.setState({cartPage: !this.state.cartPage})
  }

  onAddCart(want_package) {
    let packages = this.state.cartList
		packages.push(want_package)
		this.setState({cartList: packages})
  }

  render() {
    return (
      <div className="App">
        {/* <div><Cart /></div> */}
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Homebrew Shop <span role="img" aria-label="love"></span></h1>
        </div>

        <button style={{height: '50px', width: '50px'}} onClick={this.goCart.bind(this)}>Cart</button>

        {!this.state.cartPage ? 
          (
            <div>
              <SearchBar search={this.searchData.bind(this)} />
              {(this.state.list) ? <SearchResult data={this.state.list} onAddCart={this.onAddCart}/> : null }
            </div>
           ) : 
          (
            <Cart packages={this.state.cartList}/>
          )
        }
      </div>


    );
  }
}
// class Cart extends React.Component {
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
  constructor() {
    super()
    // this.state = {
    //   onAddCartMethod: this.props.onAddCart
    // }
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.data.map(function(value) {
              return <Item key={value} val={value}/>
          })}

        </ul>

      </div>
    )
  }
}

class Item extends React.Component {
  onAdd() {
    if (this.props.onAddCart) {
      this.props.onAddCart(this.props.val)
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

export default App;
