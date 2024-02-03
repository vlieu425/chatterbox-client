// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

// to do list::::
// add options to select
// when select a dropdown, it updates the currentroom tracker >>(works w/ messageview)
//      for messagesview, needs to read the room dropdown so it know what messages to render

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),


  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$button.click(RoomsView.handleClick);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    RoomsView.$select.empty();
    Rooms._data.forEach((element) => {RoomsView.renderRoom(element)})
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    // add option html, with room name text inside
    RoomsView.$select.append("<option value=" + roomname + ">" + roomname + "</option>")
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    console.log(this, 'this')
    // TODO: Handle the user clicking the "Add Room" button.
    // click add room
    // render a form
    // type text
    // hit submit
    // add that text to ""room storage"""
    // wrap that ""room storage"" in <option> tags and append to select
    console.log(Rooms, '<<<<<rooms')
    var newRoom = prompt('what room add?')
    Rooms.add(newRoom)
  }

};
