Meteor.Router.add({
  '/test-endpoint': [200, 'SOME DATA!'],
  '/second-test-endpoint': function() {
    console.log(this.request.body);
    return 'foo';
  }
});

Meteor.Router.add({
  '/posts/:id.xml': function(id) {
    return Posts.findOne(id).foo;
  }
});

Meteor.startup(function() {
  if (Posts.find().count() === 0) {
    console.log('added Post: ' + Posts.insert({foo: 'bar'}));
  }
});
