import React, {Component} from 'react';
import './App.css';
import CharacterSection from "./CharacterSection"

const rickAndMortyURL = "https://rickandmortyapi.com/api/character"

class App extends Component {

  state = {
    characters: []
  }


  componentDidMount() {
    fetch(rickAndMortyURL)
      .then(response => response.json())
      .then(data => this.setState({characters: data.results}));
  }
    render() {
      return (
        <div className="App">
          <CharacterSection characters={this.state.characters} />
      </div>
      );
    }
  }


export default App;
