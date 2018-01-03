$(function() {

    //code


    // scroll bottom click
   	$(".js_click_btn").on("click", function(e){

   		e.preventDefault();

   		var plansOffset = $("#js-plans").offset().top;

   			$("html, body").animate({
   				scrollTop: plansOffset
   			}, 1000);

   	});



       // scroll top click
   	$("#js-scroll-top").on("click", function(e){

   		e.preventDefault();

   		var topNav = 0;

   			$("html, body").animate({scrollTop: topNav}, 1000);

   	});




      // fixed nav menu

     var headerH = $("#js-header").height() , 
         navH = $("#js-nav-container").innerHeight();

      $(document).on("scroll", function(){

         var docScroll = $(this).scrollTop();

         if (docScroll > headerH) {

            $("#js-nav-container").addClass("fixed");

            $("#js-header").css("paddingTop", navH);

         }
         else{

            $("#js-nav-container").removeClass("fixed");

            $("#js-header").removeAttr("style");

         }

      });




      // linsk block

      $("#js-nav a").on("click", function(e)
      {

          e.preventDefault();

          var curentBlock = $(this).attr("href");

              curentBlockOffset = $(curentBlock).offset().top;

             $("html, body").animate({scrollTop: (curentBlockOffset - 20)}, 1000);

      });



      // show  Modals

      $(".js-show-modal").on("click", function(e){

          e.preventDefault();

          $(".js-modal, #js-overlay").fadeIn();
          $("body").addClass("open-modal");

      });


      $(".js-modal-close, #js-overlay").on("click", function(e){

        e.preventDefault();

        $(".js-modal, #js-overlay").fadeOut();
        $("body").removeClass("open-modal");

      });

      

});
