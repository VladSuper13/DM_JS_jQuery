$(function() {

    //code

   	$(".js_click_btn").on("click", function(e){

   		e.preventDefault();

   		var plansOffset = $("#js-plans").offset().top;

   			$("html, body").animate({
   				scrollTop: plansOffset
   			}, 1000);

   	});


   	$("#js-scroll-top").on("click", function(e){

   		e.preventDefault();

   		var topNav = 0;

   			$("html, body").animate({scrollTop: topNav}, 1000);

   	});


});
