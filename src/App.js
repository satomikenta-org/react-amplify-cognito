import React, { Component } from 'react';
import Amplify, {Auth, Hub} from 'aws-amplify';
import awsmobile from './aws-exports';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import ApiCall from './pages/ApiCall';
import NavBar from './components/NavBar';


const oauth = {
  domain : 'complete-sls.auth.us-east-2.amazoncognito.com', 
  scope : ['email', 'profile', 'openid'], 
  redirectSignIn : 'http://localhost:3000/', 
  redirectSignOut : 'http://localhost:3000/',
  responseType: 'code'
}

Amplify.configure(awsmobile);
Auth.configure({ oauth });


// ** procedure ** 
// $ Amplify init 
// $ Amplify add auth
// $ Amplify push
// in the cognito console, 
// Add domain
// Add IDProvider 
// Mapping Attribute
// Client App configure (callback url, oauth2 codegrant, etc)


class App extends Component {
  
  render() {
    return (
      <div>
        <NavBar/>
        <BrowserRouter>
          <Switch>
           <Route exact path="/" component={Home}/>
           <Route path="/apicall" component={ApiCall}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  };
}

export default App;
