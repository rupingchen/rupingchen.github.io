$(document).ready(function() {
    $(".design_coloring").click(function() {
        for (let value of Array.from($(".landing-re-color"))){
            let hex_val = value.textContent;
            $(value).attr("style", "background:" + hex_val);
        }
    })
    $(".writing_coloring").click(function() {
            for (let value of Array.from($(".landing-re-color"))){
                let id = $(value).attr('id');
                $(value).attr('style','background:rgb(185,'+ (id*95) + "," + (id*150) + ")");
            }
    })
    $(".about_coloring").click(function() {
            for (let value of Array.from($(".landing-re-color"))){
                let id = $(value).attr('id');
                $(value).attr('style','background:rgb(5,'+ (id*65) + "," + (id*195) + ")");
            }
    })
})