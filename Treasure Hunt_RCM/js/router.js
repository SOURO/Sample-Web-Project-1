define([
	'jquery',
	'underscore',
	'backbone',
	'views/welcome',
	'views/participate',
    'views/puzzle1',
    'views/puzzle2',
    'views/puzzle3',
    'views/puzzle4'
],function($,_,Backbone,WelcomeUser,ParticipateUser,Puzzle1,Puzzle2,Puzzle3,Puzzle4){
	  var AppRouter = Backbone.Router.extend({
        	routes:{
        		'':'home',
        		'new': 'participateUser',
                'puzzle1soln' : 'puzzle1solncorrct',
                'puzzle2soln' : 'puzzle2solncorrect',
                'puzzle3soln' : 'puzzle3solncorrect',
                'innovation' : 'puzzle4solncorrect',
                'end' : 'endofcontest'
        	}
    });	
    var initialize=function(){
    	 var app_router = new AppRouter();
        app_router.on('route:home',function(){
            var welcomeUser = new WelcomeUser();
            welcomeUser.render();
        });
        app_router.on('route:participateUser',function(){
        	var participateUser=new ParticipateUser();
        	participateUser.render();
        });
        app_router.on('route:puzzle1solncorrct',function(){
            var puzzle1=new Puzzle1();
            puzzle1.render();
        });
        app_router.on('route:puzzle2solncorrect',function(){
            var puzzle2=new Puzzle2();
            puzzle2.render();
        });
        app_router.on('route:puzzle3solncorrect',function(){
            var puzzle3=new Puzzle3();
            puzzle3.render();
        });
        app_router.on('route:puzzle4solncorrect',function(){
            var puzzle4=new Puzzle4();
            puzzle4.render();
        });
        app_router.on('route:endofcontest',function(){
            function Redirect()
            {
                window.location="http://portal/Pages/HomePage.aspx";
            }
            document.write("You will be redirected to Portal page in 10 sec.");
            setTimeout(Redirect(), 10000);
        });
        Backbone.history.start();	
    };
    return{
    	initialize: initialize
    };
});    	  