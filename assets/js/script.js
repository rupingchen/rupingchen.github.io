$(document).ready(function() {
    $(".about_coloring").click(function() {
        for (let value of Array.from($(".landing-re-color"))){
            let hex_val = value.textContent;
            $(value).attr("style", "background:" + hex_val);
        }
    })
    $(".design_coloring").click(function() {
        for (let value of Array.from($(".landing-re-color"))){
            let id = $(value).attr('id');
            $(value).attr('style','background:rgb(30,' + (id*40) + "," + (id*60) + ")");
        }
    })
})