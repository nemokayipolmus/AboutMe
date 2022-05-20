$(function () {
    $("#tabs").tabs();
});

$(document).ready(function () {

    $(".cancel-dialog").click(function () {

        $(".dialog").hide();
    });
});

$(document).ready(function () {
    $(".expgroup").hide();
    $(".add").click(function () {
        $(".expgroup").animate({width: 'toggle'}, function () {
            $(".add").toggleClass('rotated')
        });
    });
});

function donationalert() {
    alert("Thank you for support");
}

function messageAlert() {
    alert("Your message has been received, we will get back to you as soon as possible.")
}

$(function () {
    $("#datepicker").datepicker();
});

$(function () {
    var event = [
        "Trainig",
        "Concert",
        "Dance",
        "Theatre",
        "Game"
    ]

    $("#event").autocomplete({
        source: event
    });

});

