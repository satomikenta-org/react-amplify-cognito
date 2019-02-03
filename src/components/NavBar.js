import React, { Component } from 'react';
import Amplify, {Auth, Hub} from 'aws-amplify';
import SignOutButton from './SignoutButton';
import OAuthButton from './OauthButton';
import { Loading } from 'element-react';

class NavBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            authState: 'loading',
        }
        this.onHubCapsule = this.onHubCapsule.bind(this);
        Hub.listen('auth', this);
    };

    componentDidMount() {
        Auth.currentAuthenticatedUser().then(user => {
          this.setState({authState: 'signedIn'});
        }).catch(e => {
          this.setState({authState: 'signIn'});
        });
    };

    onHubCapsule(capsule) {
        const { channel, payload, source } = capsule;
        if (channel === 'auth') {
          switch (payload.event) {
            case 'signIn':
              this.setState({authState: 'signedIn'});  
              break;
            case 'signIn_failure':
              this.setState({authState: 'signIn'});
              break;
            default:
              break;
          }
        }
    };
    
    render() {
        const {authState} = this.state;
        return (
            <div>
                {authState === "signedIn" && <SignOutButton/>}
                {authState === 'loading' && (<Loading fullscreen={true} text="Loading..."/>)}
                {authState === 'signIn' && (<OAuthButton/>)}
            </div>
        )   
    };
}

export default NavBar;