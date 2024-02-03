// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // look at current room and call rendermessage based on current room

  },

  render: function() {
    // TODO: Render _all_ the messages.
    Messages._data.forEach(element => MessagesView.renderMessage(element));
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    console.log('invoked')

    var html = MessageView.render(message);
    MessagesView.$chats.append(html);

  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};