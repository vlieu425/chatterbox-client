// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    var message = {};

    // document.getElementById('myField').value

    message.text = document.getElementById('message').value;
    message.roomname = RoomsView.$select.find(":selected").text();
    message.username = App.username;
    Parse.create(message);
    //message object needs roomname,username
      // message -> form
      // roomnumer -> current room number
      // username -> App.username
    //invoke parse.create(message)


    // console.log('click!', message, 'message');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};