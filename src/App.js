import React,{ Component } from 'react';
import {CardList} from './component/card-list/card-list.component';
import {SearchBox} from './component/card-list/search-box.components';
import './App.css';

class App extends Component {
  constructor(){
   super();

   this.state = {
       monster:[],
       searchfields:''
  };
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monster: users}));
}
whenchange = e => {
       this.setState({searchfields: e.target.value});
     };
 
 render() {
  const {monster,searchfields} = this.state;
  const fliteredMonsters = monster.filter(monster => 
                           monster.name.toString().toLowerCase().includes(searchfields.toString().toLowerCase()));
  return (
    <div className="App">
       <h1>Monster Rolodex</h1>
       <SearchBox placeholder='search monster' 
                 handelchange={this.whenchange}/>
       <CardList monster={fliteredMonsters} />
    </div>
     );
   }
  }

export default App;
