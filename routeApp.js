Meteor.startup(function() {
  // so you can know if you've successfully in-browser browsed
  if (Meteor.isClient)
    console.log('Started at ' + location.href);
});











