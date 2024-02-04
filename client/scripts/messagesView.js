// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // look at current room and call rendermessage based on current room
    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);

  },

  render: function(roomName) {
    // TODO: Render _all_ the messages.
    MessagesView.$chats.empty();
    //if roomName doesn't exist
    if (!roomName) {
      Messages._data.forEach(element => MessagesView.renderMessage(element));
    } else {
      // filters the Messages._data (an {})- checking if each element matches truth test element.roomName === roomName
      // then invokes .forEach on the filtered array, and invokes renderMessage on each element
      var filtered = _.filter(Messages._data, element => {return element.roomname === roomName;})
      // console.log(filtered, 'filteredthing')
      filtered.forEach(element => MessagesView.renderMessage(element));
    }

    //add a click listener on class username, call the MessagesView.handleClick
    // $('.username').on('click', (event) => MessagesView.handleClick(event));

  },

  renderMessage: function(message) {
    // TODO: Render a single message.

    var html = MessageView.render(message);
    if (Friends._data[message.username]) {
      // console.log(html, 'html')
      html = '<b>' + html + '</b>'
    }
    MessagesView.$chats.append(html);


    //select elements with username that exists within our friendslist.
    // look into html, look at username.  if that username matches something in friends list,

    //append friends class
  },

  handleClick: function(event) {
    // if friend exist on the list
    // console.log('in click')
    Friends.toggleStatus(event.currentTarget.innerText);
    //$(event.target).text()
    console.log(Friends._data);
    // console.log(Friends._data[event.currentTarget.innerText], 'friendsdata', Friends._data, 'data')
    // if (Friends._data[event.currentTarget.innerText] !== undefined) {
    //   console.log('already a friend')
    //   //toggleStatus (event.currentTarget.innerText)
    //   Friends.toggleStatus(event.currentTarget.innerText)
    // //else
    // } else {
    //   //run addFriend method
    //   console.log('not a friend yet')
    //   Friends.addFriends(event.currentTarget.innerText)
    //   console.log(JSON.stringify(Friends._data), 'friends data')
    //   Friends.toggleStatus(event.currentTarget.innerText)
    //   console.log(JSON.stringify(Friends._data), 'friends data after toggle')

    // }


    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    MessagesView.render();
  }

};