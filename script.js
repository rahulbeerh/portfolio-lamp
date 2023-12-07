$(".menu").on("click", function () {
    $(".mobile-navigation").css("transform", "translateX(0rem)");
});

$(".close-container").on("click", function () {
    $(".mobile-navigation").css("transform", "translateX(200rem)");
});