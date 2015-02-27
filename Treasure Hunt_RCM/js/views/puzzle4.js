define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/puzzle4.html',
],function($,_,Backbone,puzzle4template){	
    $.fn.serializeObject=function(){
                var o={};
                var a=this.serializeArray();
                $.each(a,function(){
                    if(o[this.name]!== undefined){
                        if(!o[this.name].push){
                            o[this.name]=this.value||'';
                        }
                      o[this.name].push(this.value||'');
                    }   
                    else{
                        o[this.name]=this.value||'';
                    }
                });
                return o;
  }; 	
	var Puzzle1=Backbone.View.extend({
        		el:	$('.page'),
        		render: function(options){
        			var that=this;
					var template=_.template(puzzle4template);
				    this.$el.html(template);        		  		
        		},
        		events:{
        			'submit .puzzle4-ques' : 'puzzle4soln'
        		},
        		puzzle4soln: function(ev){
                    var val = $(ev.currentTarget).serializeObject();
                    if(val.solution.toUpperCase()=="Idea Factory".toUpperCase() || val.solution.toUpperCase()=="IdeaFactory".toUpperCase()){
                        Backbone.history.navigate('end',{trigger: true});
                        return false;
                    }  
                    else{
                        $("#error").html("<h3> *Wrong Answer, Never Mind !! Try Again. </h3>");     
                        return false;          
                    }
        		}				
   });	
   return Puzzle1;
});