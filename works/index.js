$(document).ready(function() {
  function filterPath(string) {
    return string
      .replace(/^\//, '')
      .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
      .replace(/\/$/, '');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');

  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/, '')) {
      var $target = $(this.hash),
        target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({
            scrollTop: targetOffset
          }, 200, function() {
            location.hash = target;
          });
        });
      }
    }
  });
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i < argLength; i++) {
      var el = arguments[i],
        $scrollElement = $(el);
      if ($scrollElement.scrollTop() > 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop() > 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }

});

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