//wait for the DOM elements to load before executing
$(document).ready(function() {
//prevent the submit button from refreshing the page
  $('#submit-btn').click(function(){
    event.preventDefault();
//get the name of the city input and correct for capitalization
    var city = $('#city-type').val();
    $('#city-type').val('');
//console.log(city);
    city = city.toLowerCase().trim();
//console.log(city);

// if the user inputs "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
    if(city == 'new york' || city == 'new york city' || city == 'nyc') {
      $('body').attr('class','nyc');
    }

 // if the user inputs "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
    if(city == 'san francisco' || city == 'sf' || city == 'bay area') {
      $('body').attr('class','sf');
    }

// if the user inputs"Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
    if(city == 'los angeles' || city == 'la' || city == 'lax') {
      $('body').attr('class','la');
    }

// if the user inputs"Austin" or "ATX" make the background of the page austin.jpg
    if(city == 'austin' || city == 'atx') {
      $('body').attr('class','austin');
    }

// if the user inputs"Sydney" or "SYD" make the background of the page sydney.jpg
    if(city == 'sydney' || city == 'syd') {
      $('body').attr('class','sydney');
  }


});



});