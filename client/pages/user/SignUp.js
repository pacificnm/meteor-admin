import {FlowRouter} from 'meteor/kadira:flow-router';

Template.SignUp.events({
  // form submited
  'submit form': function(event){
      event.preventDefault();

      var name = $('[name=name]').val();
      var email = $('[name=email]').val();
      var password = $('[name=password]').val();

      Accounts.createUser({
        email: email,
        password: password,
        profile: {
          name: name,
          image: "/images/user2-160x160.jpg",
          position: "Software Engineer",
          createdAt: new Date(),
        }
      }, function(error){
        if(error){
          $('#alert').html('<div class="alert alert-danger"><p>' + error.reason + '</p></div>');
          console.log(error.reason); // Output error if registration fails
        } else {

          FlowRouter.go("dashboard"); // Redirect user if registration succeeds
        }
      });
    }

});
