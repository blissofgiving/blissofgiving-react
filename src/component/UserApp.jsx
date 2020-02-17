import React, { Component } from 'react';
import UserDetailsComponent from './UserDetailsComponent';

class UserApp extends Component {
  render() {
    return(
      <>
      <h1>User Application</h1>
      <UserDetailsComponent/>
      </>
    )
  }
}

export default UserApp
