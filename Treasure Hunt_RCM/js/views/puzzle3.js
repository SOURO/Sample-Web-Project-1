define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/puzzle3.html',
],function($,_,Backbone,puzzle3template){		
	var Puzzle1=Backbone.View.extend({
        		el:	$('.page'),
        		render: function(options){
        			var that=this;
					var template=_.template(puzzle3template);
				    this.$el.html(template);        		  		
        		}			
   });	
   return Puzzle1;
});