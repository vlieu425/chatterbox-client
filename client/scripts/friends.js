// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: {},

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.

  //addFriends method
  addFriends: function(friend) {
    //add argument to friends list
    Friends._data[friend] = false;
  },

  //status method parameter is friend
  friendStatus: function(friend) {
    //return whether arugment exists within Friends._data
    return Friends._data[friend];
  },

  //toggleStatus will just flip the value (true or false)
  toggleStatus: function(friend) {
    if (Friends._data[friend]) {
      delete Friends._data[friend];
    } else {
      Friends._data[friend] = true;
    }
    // console.log('TOGGLED')
    // Friends._data[friend] = !Friends._data[friend];
  }

  // click name
    // togglestatus(if already friend, set to false) else
  // add friend

};