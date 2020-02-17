import React, { Component } from 'react';
import UserDataService from '../service/UserDataService';

class UserDetailsComponent extends Component{

  constructor(props){
    super(props);

    this.state = {
      user : {},
      message : null
    };

    this.refreshUser = this.refreshUser.bind(this);
  }

  componentDidMount(){
    console.log("In componentDidMount: ");
    this.refreshUser();
  }

  refreshUser(){
    console.log("In refreshUser api call.");
    UserDataService.retrieveUser('blissofgiving')
      .then(
        response => {
          console.log(response);
          this.setState({user: response.data, message: response.message});
        }
      )
  }

  render(){
    return(
      <div className="container">
          <div className="container">
              <table className="table">
                  <tbody>
                      <tr>
                          <td>First Name: </td>
                          <td>{this.state.user.firstName}</td>
                      </tr>
                      <tr>
                          <td>Last Name: </td>
                          <td>{this.state.user.lastName}</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
    )
  }

}

export default UserDetailsComponent
