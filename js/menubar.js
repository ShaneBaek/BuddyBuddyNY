$(function() {

////Mobile Menu////

   $('a.menu-icon').click(function() {
      $('.navigation').slideToggle();
   });

////Fix hidden links on window resize////
   
   $(window).resize(function() {
      if ($(window).width() > 526) {
      	$('.navigation').removeAttr('style');
      }
   });

});