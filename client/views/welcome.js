Template.welcome.username = function() { return Session.get('username'); };

Template.welcome.events = {

  'submit form': function(event, template) {
    event.preventDefault();
    var postName = template.find('#post_name').value;  // simpler, no jQuery
    // programmatic routing, using pushState()
    Meteor.Router.to('/posts/' + postName);
   },

  'click .logout': function(e) {
    e.preventDefault();
    Session.set('username', false);
  }
};
