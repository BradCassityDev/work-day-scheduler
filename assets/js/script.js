
// Load schedule from localStorage or create empty array
var schedule = JSON.parse(localStorage.getItem("schedule")) || [
    {"time": "9AM", "task": ""},
    {"time": "10AM", "task": ""},
    {"time": "11AM", "task": ""},
    {"time": "12PM", "task": ""},
    {"time": "1PM", "task": ""},
    {"time": "2PM", "task": ""},
    {"time": "3PM", "task": ""},
    {"time": "4PM", "task": ""},
    {"time": "5PM", "task": ""}
];

// Display current date 
var displayCurrentDate = function() {
    var currentDate = moment().format("dddd, MMMM Do");
    $("#currentDay").text(currentDate);
}


displayCurrentDate();



