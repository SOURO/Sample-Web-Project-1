define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/participate.html'
],function($,_,Backbone,participatetemplate){		
	var Particapte=Backbone.View.extend({
        		el:	$('.page'),
        		render: function(options){
        			var that=this;
					var template=_.template(participatetemplate);
				    this.$el.html(template);        		  		
        		},
        		events:{
        			'submit .participate-form' : 'participateUser'
        		},
        		participateUser: function(ev){
        			
        			Backbone.history.navigate('puzzle1soln',{trigger: true});	
        			return false;
        		}				
   });	
   return Particapte;
}); 