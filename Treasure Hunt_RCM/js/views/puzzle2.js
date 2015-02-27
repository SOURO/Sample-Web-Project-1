define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/puzzle2.html'
],function($,_,Backbone,puzzle2template){		
	var Puzzle1=Backbone.View.extend({
        		el:	$('.page'),
        		render: function(options){
        			var that=this;
					var template=_.template(puzzle2template);
				    this.$el.html(template);        		  		
        		}				
   });	
   return Puzzle1;
});