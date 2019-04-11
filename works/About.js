$(document).ready(function(){
	
	$("div.content div").hide(); 
	if (window.location.hash.length>0) {
		console.log(window.location.hash);
		
		$( "nav li a" ).each(function() {
			if ( $( this ).attr("href") == window.location.hash )
				$( this ).parent().addClass("current").show(); 
		});
		$(window.location.hash).fadeIn(); 
	}
	else { 
	  $("nav li:first").addClass("current").show(); 
	  $("div.content div:first").show(); 
	}
	$("nav li").click(function() {
		$("nav li").removeClass("current"); 
		$(this).addClass("current");
		
		$("div.content div").hide(); 
		var activePage = $(this).find("a").attr("href"); 
		$(activePage).fadeIn(); 
	}); 
	
}); 