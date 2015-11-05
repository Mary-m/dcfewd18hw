jQuery(document).ready(function(){

// Prevent link from scrolling to the top of the page
  jQuery(".readmore a").click(function() {
  	//alert("I am a purple platypus");
    event.preventDefault();
  
  jQuery(".hide").toggle();
  jQuery(".readmore").hide();
 

});
  //Prevent default so .readless doesn't scroll to the top
   jQuery(".readless a").click(function () {
   	event.preventDefault();
   	//hide readless
   	jQuery(".readless").toggle();

 });
   //Prevent .learnmore from scrolling back up
   jQuery(".learnmore").click(function() {
   	event.preventDefault();
   	//show text learnmore
   	jQuery("#learnmoretext").toggle();
   	jQuery(".learnmore").hide();

   });

});
