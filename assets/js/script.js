// Load schedule from localStorage or create empty array
var schedule = JSON.parse(localStorage.getItem("schedule")) || [
    {"time": "9:00AM", "task": ""},
    {"time": "10:00AM", "task": ""},
    {"time": "11:00AM", "task": ""},
    {"time": "12:00PM", "task": ""},
    {"time": "1:00PM", "task": ""},
    {"time": "2:00PM", "task": ""},
    {"time": "3:00PM", "task": ""},
    {"time": "4:00PM", "task": ""},
    {"time": "5:00PM", "task": ""}
];

// Display current date 
var displayCurrentDate = function() {
    // Get current date in specified format
    var currentDate = moment().format("dddd, MMMM Do");
    // Set element text to the currentDate formate
    $("#currentDay").text(currentDate);
}

// display day schedule
var loadDaySchedule = function() {
    // Update Display Current Date
    displayCurrentDate();

    // Clear all child elements in the schedule container
    $('#schedule-container').empty(); 

    // Iterate over schedule array and add items to their corresponding time block
    for(var i = 0; i < schedule.length; i++) {
        // Add row
        var hourRow = $("<div>");
        hourRow.addClass("row");

        // Add input group 
        var inputGroup = $("<div>");
        inputGroup.addClass("input-group");

        // Time Text
        var hourText = $("<div>");
        hourText.addClass("hour").text(schedule[i].time);

        // Text Area
        var description = $("<textarea>");
        description.addClass("form-control")
            .text(schedule[i].task)
            .attr("id", schedule[i].time);
        
        // Save Button
        var saveButton = $("<button>");
        saveButton.addClass("saveBtn");
        saveButton.attr("data-hour", schedule[i].time);
        // Include Save Icon from FontAwesome in button
        saveButton.html("<i class='fas fa-save'></i>");

        // Append children to input group
        inputGroup.append(hourText,description,saveButton);

        // append inputGroup to the hour row
        hourRow.append(inputGroup);        
        
        // add to container
        $("#schedule-container").append(hourRow);
    }

}


// Initiate applicaiton and load day schedule
loadDaySchedule();

