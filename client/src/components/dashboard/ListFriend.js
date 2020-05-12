/* To show friends list */

import React from 'react';

const ListFriend = ({ friends, deleteFriend }) => {


  return (
    <ul>
      {
        friends &&
          friends.length > 0 ?
            (
              friends.map(friend => {
                return (
                  <li key={friend._id} onClick={() => deleteFriend(friend._id)}>{friend.friendName}</li>
                )
              })
            )
            :
            (
              <li style={{ fontFamily: "Cochin" }}>
              <h5>No friend(s) left</h5></li>
            )
      }
    </ul>
  )
}

export default ListFriend