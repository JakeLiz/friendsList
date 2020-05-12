/* Friend component to get friend names, delete friend names, and render */

import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Input from './Input';
import ListFriend from './ListFriend';

class Friend extends Component {

  state = {
    friends: []
  }

  componentDidMount(){
    const { user } = this.props.auth;
    this.getFriends(user.name.split(" ")[0]);
  }

  getFriends = (userName) => {
    axios.get(`/api/friends/${userName}`)
      .then(res => {
        if(res.data){
          this.setState({
            friends: res.data
          })
        }
      })
      .catch(err => console.log(err))
      console.log("userName: " + userName); 
  }

  deleteFriend = (id) => {
    const { user } = this.props.auth;

    axios.delete(`/api/friends/${id}`)
      .then(res => {
        if(res.data){
          this.getFriends(user.name.split(" ")[0])
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    let { friends } = this.state;

    return(
      <div>
        <span style={{ fontFamily: "Cochin" }}>
            <h5>My Friend(s)</h5>
        </span>
        <Input getFriends={this.getFriends}/>
        <ListFriend friends={friends} deleteFriend={this.deleteFriend}/>
      </div>
    )
  }
}

Friend.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
  )(Friend);
