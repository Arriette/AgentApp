import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './inventaire.js';

class Artiste extends Component {
   constructor(props) {
    super(props);
    this.state = {
      nom: '',
      prenom: '', 
      blaze: '',
      phone: '',
      mail:'',
      fanzine: [],
      dateCrea: '',
      argent: ''
    };
  }

  render() {
    const blaze = this.state.blaze
    return (
      <div  className="Artiste" id={blaze}>
        <h3>{this.state.blaze}</h3>
        <p>{this.state.blaze}, de son vrai nom {this.state.nom} {this.state.prenom}.</p>
        <p>Dépositaire de fanzine depuis {this.state.dateCrea}, il a à son actif : {this.state.fanzine}</p>
        <p>Actuellement nous lui devons {this.state.argent}</p>
        <p>Il est joignble sur {this.state.phone} ou {this.state.mail}</p>

      </div>
      )
  }
}

class Fanzine extends Component {
   constructor(props) {
    super(props);
    this.state = {
      artiste: '',
      datecrea: '',
      titre: '', 
      annee: '',
      tirage: '',
      format:'',
      Description: '',
      prix: '',
      confie:'',
      vendu: ''
    };
  }

  render() {
    const titre = this.state.titre
    return (
      <div  className="Artiste" id={titre}>
        <h3>{this.state.titre}</h3>
        <ul>
          <li>Artiste : {this.state.artiste}</li>
          <li>Année : {this.state.annee}</li>
          <li>Tirage : {this.state.tirage}</li>
          <li>Format : {this.state.format}</li>
          <li>Description : {this.state.Description}</li>
          <li>Prix : {this.state.prix}</li>
          <li>Confié : {this.state.confie}</li>
          <li>Vendu depuis le {this.state.datecrea}: {this.state.vendu}</li>
        </ul>

      </div>
      )
  }
}

class FormSearch extends Component {
 render() {
  return (
    <form>
    <label>Recherche par nom de fanzine 
    <input
      placeholder = "Nom du fanzine"
    />
    </label>
    <button
    >
      Recherche
    </button>
    <label>Recherche par nom d'artiste 
    <input
      placeholder = "Nom de l'artiste"
    />
    </label>
    <button
    >
      Recherche
    </button>

    </form>
    )
 }
}
class Sumup extends Component {
  render() {
    return (
      <div className="Sumup">
        <h1>Récap</h1>

        <div className="Container">
          <h2>Les fanzines</h2>
          <p> <span>X</span> fanzines référencés</p>
          <p> <span>XXX</span> euros d'artistes cumulés</p>
        </div>

      </div>
    );
  }
}

class Inventory extends Component {
  render() {
    return (
      <div className="Inventaire">
        <header className="Inventaire-header">
        <h1>Gestionnaire de stock de fanzine</h1>
        </header>
        <main className="Container">
        <FormSearch/>
        <Sumup/>

        </main>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Inventory/>
        </header>
        
      </div>
    );
  }
}

export default App;
