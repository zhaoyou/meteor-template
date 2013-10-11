Meteor.Router.add({
  '/': 'home',

  '/welcome': 'welcome',

  '/posts/:id': function(id) {
    Session.set('postId', id);
    return 'post';
  }
});

Meteor.Router.filters({
  requireLogin: function(page) {
    var username = Session.get('username');
    if (username) {
      return page;
    } else {
      return 'sign_in';
    }
  }
});

Meteor.Router.filter('requireLogin', {only: 'welcome'});

