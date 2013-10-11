Template.sign_in.events = {
  'submit form': function(e) {
    e.preventDefault();
    Session.set('username', $(e.target).find('[name=username]').val());
  }
};
