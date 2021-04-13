import './App.css';
import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//UI Components
import Header from './components/large/Header'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Setup from './components/pages/Setup'
import Index from './components/pages/Index'
import Dashboard from './components/pages/Dashboard'

//IMPORT REDUX/STATE MANAGEMENT COMPONENTS
import { Provider } from 'react-redux';
import setAuthToken from './components/utlis/setAuthToken'
import store from './store';
import { loadUser } from './components/redux/actions/authActions'

const App = () => {
    useEffect(() => {
      store.dispatch(loadUser());
    }, []);
  return (
    <div className='h-screen max-h-screen'>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/landing" component={Header} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/setup" component={Setup} />
            <Route exact path="/" component={Index} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
