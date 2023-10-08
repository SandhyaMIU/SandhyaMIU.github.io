$(function() {
    $("#send").click(updateGuests);
});

function updateGuests() {
    var first = $("#first").val();
    var last = $("#last").val();
    
    $.ajax("guest.ajax", {
		"type": "post",
		"data": {
        	"first": first,
                "last": last
		}
    }).done(displayGuests);
}

function displayGuests(data) {
    // var guestList = "You need to modify this method to display the updated guest list.  Remember to build the entire list before adding it to the DOM.";
    // $("#guestList").html(guestList);
    
    // Parse 'data' if it's in a JSON format, otherwise, modify this part accordingly
    var guestList = JSON.parse(data);
    var guestListHTML = "";

    for (var i = 0; i < guestList.length; i++) {
        var guest = guestList[i];
        var guestInfoHTML = "<div class='guest'>";
        guestInfoHTML += "<p>Name: " + guest.first + " " + guest.last + "</p>";
        guestInfoHTML += "</div>";
\
        guestListHTML += guestInfoHTML;
    }
    $("#guestList").html(guestListHTML);
}