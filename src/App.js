import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import Login from './components/nav/nav';
import Bot from './components/bot/bot';


class App extends Component {

  render() { 
    
    return (
    
      <div className="App">
      {/*This is Navbar.*/}
      <Login />
      <br/>
      <br/>
      {/*I am BOT section.*/}
      <Container>
      <Bot />
      </Container>
      </div>

    );
  }
}

export default App;

    