$(document).ready( function () {
    //list of pages
    var pageIDs = ["gnaV1S",
                   "jYEgug",
                   "eRfgZB",
                   "lClRdj",
                   "1B7Atg",
                   "pBoFAe",
                   "z7muXR",
                   "rmabJF",
                   "4g9gYa",
                   "xPf8xo",
                   "NZttk4",
                   "y8kGQT",
                   "sfY6pe",
                   "mFPv0o",
                   "VnoC0j"
                  ]
    
    //look for when the form changes
    var id = "";
    var text = "";
    var num;
    $("#pageID").on("keyup", function() {
        id = $(this).val();
        //if empty, change back to default text
        if (id === ""){
            text= "Enter the ID of a page to continue the story";
        } else if (!(pageIDs.indexOf(id) === -1)) {
            //otherwise, create link and image
            num = pageIDs.indexOf(id) + 1;
            $("#loadResult").html("<a href = '" + num + ".htm'>Page " + num + "</a>" +
                                 "<p><img src='images/" + num + ".PNG' />");
        }
    });
});