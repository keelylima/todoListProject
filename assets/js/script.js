$("li").click(function () {
    $(this).toggleClass("completed");

    // if ($(this).css("color") === "rgb(128, 128, 128)") {
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //     })
    // } else {
    //     $(this).css({
    //         color: "grey",
    //         textDecoration: "line-through"
    //     })
    // }


    // // $(this).css("color", "grey");
    // // $(this).css("text-decoration", "line-through")
})

$("span").click(function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    event.stopPropagation();
});