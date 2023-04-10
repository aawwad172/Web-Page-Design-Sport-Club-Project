$(document).ready(function() {
  $("#customFile").change(function() {
    var file = this.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      // Create a new slide
      var newSlide = $("<div>").addClass("item");
      var img = $("<img>").attr("src", e.target.result);
      newSlide.append(img);
      $(".carousel-inner").append(newSlide);
      
      // Create a new indicator
      var newIndicator = $("<li>").attr("data-target", "#myCarousel").attr("data-slide-to", $(".carousel-indicators li").length);
      $(".carousel-indicators").append(newIndicator);

      // Set the first slide and indicator as active
      if($(".carousel-indicators li").length == 1) {
        newSlide.addClass("active");
        newIndicator.addClass("active");
      }
    };
    reader.readAsDataURL(file);
  });

  // Create new Upcoming event
  // Get the event list
  var eventList = $("#event-list");
  
  // Function to add event
  function addEvent(event) {
    // Create a new list item
    var newEvent = $("<li>");
    // Add the event name as text
    newEvent.text(event.name);
    // Add the event date
    newEvent.append("<span class='event-date'>" + event.date + "</span>");
    // Append the new event to the event list
    eventList.append(newEvent);
  }
  
  // Example usage
  addEvent({name: "Soccer game against rivals", date: "May 20, 2022"});
  addEvent({name: "Annual meeting", date: "June 15, 2022"});
  addEvent({name: "Swimming competition", date: "July 20, 2022"});
});
