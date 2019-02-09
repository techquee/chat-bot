import React, { Component } from 'react';
import LoginPage from './components/Login/LoginPage';
import { Provider } from 'react-redux';
import TechLog from './components/TechLog/TechLog';
import store from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App';

class Main extends Component {
  render() {
    return (
      <div className="container">
       <main>
       <Provider store={store}>    
       <Router>
      <div>
      <Route exact path='/' component={App}/>
      <Route path='/LoginPage' component={LoginPage}/>
      <Route path='/TechLog' component={TechLog}/>
      </div>
     </Router>

    </Provider>
  </main>
      </div>
  
    );
  }
}

export default Main;