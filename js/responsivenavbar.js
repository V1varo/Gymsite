
$(document).ready(function(){
	var iftrue=false;

  $(".burger").click(function(){
  	if(!iftrue){
  	$("header nav").css("right","0%");
  	iftrue=true;
  }

  	  
  else if(iftrue){
  		iftrue=false;
    $("header nav").css("right","-150%");

}
  });
});

//for parallax effect!!!!
$(window).scroll(function() {
  parallax();
  $('.toAnim').each(function() {

    var _win     = $(window),
        _ths     = $(this),
        _pos    = _ths.offset().top,
        _scroll = _win.scrollTop(),
        _height = _win.height();

    (_scroll > _pos - _height * .7) ? _ths.addClass('anim') : _ths.removeClass('anim');

  });
});

function parallax() {

  var wScroll = $(window).scrollTop();
  $('.parallax').css('background-position','center '+(wScroll*0.25)+'px')
  $('.parallax2').css('background-position','50%  '+(wScroll*0.22+(590))+'px')
  $('.parallax3').css('background-position','50%  '+(wScroll*0.28-(400))+'px')
}


