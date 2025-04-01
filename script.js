$(document).ready(function () {

   $('#open-popup').click(function() {
       $('#popup').fadeIn();
   });

   $('#close-popup').click(function() {
       $('#popup').fadeOut();
   });

   $(".tab-link").click(function (e) {
       e.preventDefault();
       let tab = $(this).data("tab");
       $(".tab-content").removeClass("active");
       $("#" + tab).addClass("active");
   });
   $(".accordion-header").click(function () {
       $(this).next(".accordion-content").slideToggle();
   });
});
