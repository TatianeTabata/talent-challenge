import React from 'react';
// import './App.css';
import CPFValidation from './pages/CPFValidation'
import CustomerData from './pages/CustomerData'
import Confirmation from './pages/Confirmation'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={CPFValidation}/>
          <Route exact path="/CustomerData" component={CustomerData}/>
          <Route exact path="/Confirmation" component={Confirmation}/>
          <Route exact path="/Login" component={Login}/>
          <Route exact path="/AdminDashboard" component={AdminDashboard}/>
        </header>
      </div>
    </Router>
    );
  }
}

export default App;
