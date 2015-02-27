define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/welcome.html'
],function($,_,Backbone,welcometemplate){
	var WelcomeUser=Backbone.View.extend({
        		el: $('.page'),
        		render: function(){
                  var template=_.template(welcometemplate);
        					this.$el.html(template);
        		}	
  });
  return WelcomeUser;
}); 