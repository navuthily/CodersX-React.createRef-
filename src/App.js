import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Search/>
      </div>
   
      
    );
  }
}

export default App;