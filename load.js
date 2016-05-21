$(document).ready( function () {
    //list of pages
    var pageIDs = ["gnaV1S", "jYEgug", "eRfgZB"]
    //look for when the form changes
    var id = "";
    var text = "";
    var num;
    $("#pageID").on("keyup", function() {
        id = $(this).val();
        if (id === ""){
            text= "Enter the ID of a page to continue the story."
        } else if (!(pageIDs.indexOf(id) === -1)) {
            num = pageIDs.indexOf(id) + 1;
            $("#loadResult").html("<a href = '" + num + ".htm'>Page " + num + "</a>");
        }
    });
});