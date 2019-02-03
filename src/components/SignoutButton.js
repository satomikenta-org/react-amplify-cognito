import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { Button } from 'element-react';

class Signout extends Component {

    signout = () => {
        Auth.signOut().then(() => {
            console.log("sign out!");
        }).catch(e => {
            console.log(e);
        });
    };
    render(){
        return (
            <Button type="primary" size="large" onClick={this.signout}>Logout</Button>
        );
    };
};

export default Signout;