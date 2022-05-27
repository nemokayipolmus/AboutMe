$(document).ready(function () {
    $("a").click(function () {

        $("main h1").val("")
        $("img").val("")
        $("main h2").val("")
        $("main p").val("")

        const link = "json_files/" + $(this).attr("title") + ".json"

        $.getJSON(link, function (data) {
            $.each(data.speakers, function (i, item) {
                $("main h1").text(item.title)
                $("main img").attr("src", item.image)
                $("main h2").html(item.month + "<br>" + item.speaker)
                $("main p").text(item.text)
            });
        })
    })
}); // end ready