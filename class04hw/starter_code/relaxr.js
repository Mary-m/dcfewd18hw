jQuery(document).ready(function(){

 jQuery(".readmore a").click(function() {
    //alert("I am a purple platypus");
    event.preventDefault();
  
  jQuery("#show-this-on-click").toggle();
  jQuery(".readmore").hide();
  jQuery(".readless").show();

});
  //Prevent default so .readless doesn't scroll to the top
   jQuery(".readless a").click(function () {
    event.preventDefault();
    //hide readless
    jQuery("#show-this-on-click").toggle();
     jQuery(".readless").hide();
     jQuery(".readmore").show();

 });
   //Prevent .learnmore from scrolling back up
   jQuery(".learnmore").click(function() {
    event.preventDefault();
    //show text learnmore
    jQuery("#learnmoretext").toggle();
    jQuery(".learnmore").hide();

   });
 });