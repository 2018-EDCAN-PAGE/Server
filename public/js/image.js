$(window).resize(function () {
    var browse_width = window.innerWidth;
    var browse_height = window.innerHeight * 2;

    $(".main-content").css({
        "width":browse_width,
        "height":browse_height
    });


    console.log("browse width  : "+ browse_width);
    console.log("browse height  : "+ browse_height);

    console.log("img width  : "+ $(".main-content").width());
    console.log("img height  : "+ $(".main-content").height());

});

$(document).ready(function () {
    "use strict";
    var browse_width = window.innerWidth;
    var browse_height = window.innerHeight * 2;

    $(".main-content").css({
        "width":browse_width,
        "height":browse_height
    });
});
