$(document).ready(function(){
	// $('#wrapper').tubular({videoId: 'Q_iQQV-arKg'});
   var newwidth = $(window).width();
   var newheight = $(window).height();      
   $(".winSize").height(newheight).width(newwidth);

   app.init();

   // $('.projectContent').hide();
   app.activate();

	
}); //end domready

var app={

	init : function(){$(window).resize(function(){
	   var newwidth = $(window).width();
	   var newheight = $(window).height();      
	   $(".winSize").height(newheight).width(newwidth);
	   app.arrowDown();
	   


		});
	},
	scroller : function(e){
		e.preventDefault();
		var y = $(window).scrollTop();  //your current y position on the page
		var newheight = $(window).height();
		$(window).scrollTop(y+newheight);
	},
	arrowDown : function(){
		$('arrowDownAction').on('click', app.scroller);
	},
	activate : function(){
		$('.activate').on('active', function(){
			$('.projectContent').show();
		})
	}
}



