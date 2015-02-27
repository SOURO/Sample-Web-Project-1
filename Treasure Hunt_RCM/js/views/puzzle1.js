define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/puzzle1.html'
],function($,_,Backbone,puzzle1template){		
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
					var template=_.template(puzzle1template);
				    this.$el.html(template);
                    //$("#error").clear();        		  		
        		},
        		events:{
        			'submit .puzzle1-ques' : 'puzzle1soln'
        		},
        		puzzle1soln: function(ev){
                    var val = $(ev.currentTarget).serializeObject();
                    if(val.answer.toUpperCase()=="Excellence".toUpperCase()){
                        Backbone.history.navigate('puzzle2soln',{trigger: true});  
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