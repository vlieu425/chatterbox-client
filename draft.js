

app initializes
runs these
FormView.initialize();
RoomsView.initialize();
MessagesView.initialize();

// Fetch initial batch of messages
App.startSpinner();
App.fetch(App.stopSpinner);



messages:
  room, message, user,