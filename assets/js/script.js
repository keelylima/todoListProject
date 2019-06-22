$("ul").on("click", "li", function () {
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

$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    })
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        let todoText = $(this).val();
        $(this).val(""); //clear input
        $("ul").append(`<li><span>X</span> ${todoText}</li>`)
    }
})