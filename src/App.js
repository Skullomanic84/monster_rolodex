import React, {Component} from 'react';
import {CardList} from './Components/Card-list/card-list.component';
import {SearchBox} from './Components/Search-box/search-box.component'

import './App.css';


class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters:users }));
  }



  render (){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter (monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )


    return (
      <div className="App">
      <header className="App-header">
      <h1>Monster Rolodex</h1>
      <SearchBox
          placeholder='search monster'
          handleChange ={ e => this.setState({ searchField: e.target.value})} 
      />

      <CardList monsters = {filteredMonsters} />
      </header>
    </div>
    )
  }
}
export default App;
