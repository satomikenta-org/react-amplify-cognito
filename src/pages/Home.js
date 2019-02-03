import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Amplify, {Auth, Hub} from 'aws-amplify';
import awsmobile from '../aws-exports';
import OAuthButton from '../components/OauthButton';
import { SignOut } from 'aws-amplify-react/dist/Auth';
import { withRouter } from 'react-router';

// this is home page anybody can access.
class Home extends Component {

    constructor(props) {
       super(props);
       this.onHubCapsule = this.onHubCapsule.bind(this);
       Hub.listen('auth', this);
    };

    componentDidMount() {
      Auth.currentAuthenticatedUser().then(user => {
        this.props.history.push("/apicall");
      }).catch(e => {
        return;
      });
    };

    onHubCapsule(capsule) {
      const { channel, payload, source } = capsule;
      if (channel === 'auth') {
        switch (payload.event) {
          case 'signIn':
            this.props.history.push("/apicall");  
            break;
          case 'signIn_failure':
            break;
          default:
            break;
        }
      }
    };

    render(){
        return (
          <div>
            Home Page!
          </div>
        );
    };

};


export default withRouter(Home);