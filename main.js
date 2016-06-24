$(document).ready(function(event) {
    $(".crop").click(function() {
        console.log("did we click?");
        $(this).parent().find(".dropdown").toggle();
        $(this).find(".overlay").toggleClass("overlay-permhover");
    });
});
