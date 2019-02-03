import { Auth } from 'aws-amplify';
import React, { Component } from 'react';
import { withRouter } from 'react-router';

// this is main page for Authenticated user.
class ApiCall extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jwt: ""
        }     
    };

    componentDidMount(){
        Auth.currentAuthenticatedUser()
        .then(user => {
            this.setState({jwt: user.signInUserSession.idToken.jwtToken});
            return;
        })
        .catch( err => {
            this.props.history.push("/");
            return;
        })
    };

    render(){
        return(
            <div>
                <h1>You Must be Authenticated!</h1>
                <h2>Your JWT is {this.state.jwt}</h2>
            </div> 
        )
    };

}

// ** Wrap Component with 'withRouter'. 
export default withRouter(ApiCall);
