// Reference moment.js
var today = moment();
// reference the whole task (time and textarea)
var timeBlockEl = document.querySelector(".container");

$("#currentDay").text(today.format("LLLL")); // LLLL shows day of the week, date and time

// Event listener for saveBtn click
$(".saveBtn").on("click", function () {
  var textValue = $(this).siblings(".description").val();

  var timeKey = $(this).parent().attr("id");

  // save in local storage
  localStorage.setItem(timeKey, textValue);
});

// Get item from local storage if any
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));

// Function to track tasks and make them change colors if they are in the past, present or future
function auditTask() {
  var currentHour = today.hours();

  // loop over each time block
  $(".time-block").each(function () {
    var timeId = parseInt($(this).attr("id").split("hour")[1]);

    if (timeId < currentHour) {
      $(this).addClass("past");
    } else if (timeId === currentHour) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

// Call the audit task function
auditTask();

// Use setTimeout to update the time every minute
setTimeout(function () {
  location = "";
}, 1000 * 60);
