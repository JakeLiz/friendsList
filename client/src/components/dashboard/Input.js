
/* Input friend names */

import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Input extends Component {
  state = {
    userName: "",
    friendName: ""
  }

  addFriend = () => {
    const { user } = this.props.auth;

    const task = {userName: user.name.split(" ")[0], friendName: this.state.friendName}

    if(task.friendName && task.friendName.length > 0){
      axios.post('/api/friends', task)
        .then(res => {
          if(res.data){
            this.props.getFriends(user.name.split(" ")[0]);
            this.setState({friendName: "", noReply: true})
          }
        })
        .catch(err => console.log(err))
    }else {
      console.log('input field required')
    }
  }

  handleChange = (e) => {
    this.setState({
        friendName: e.target.value
    })
  }



  render() {
    let { friendName } = this.state.friendName;

    return (
      <div>
        <input  style={{ fontFamily: "Cochin" }} type="text" onChange={this.handleChange} value={friendName} />
        <button 
            style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
            }}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            onClick={this.addFriend}>
                add
        </button>
      </div>
    )
  }
}


Input.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
  )(Input);

// export default Input