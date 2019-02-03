import { withOAuth } from 'aws-amplify-react';
import React, { Component } from 'react';
import { Button } from 'element-react';

class OAuthButton extends React.Component {
  render() {
    return (
      <Button size="large" type="primary" onClick={this.props.OAuthSignIn}>
        Login
      </Button>
    )
  };
};

export default withOAuth(OAuthButton);