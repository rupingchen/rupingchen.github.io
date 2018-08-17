$(document).ready(function() {
    $(".design_coloring").click(function() {
        $(".writing-re-text").attr("style", "display:none");
        $(".design-re-text").attr("style", "display:inline")
        for (let value of Array.from($(".landing-re-color .code"))){
            let hex_val = value.textContent;
            $(value).parent().attr("style", "background:" + hex_val);
        }
        for (let text of Array.from($(".design-re-text"))){
            let text_content = text.textContent;
            $(text).html(text_content);
        }
    })
    $(".writing_coloring").click(function() {
            $(".design-re-text").attr("style", "display:none");
            $(".writing-re-text").attr("style", "display:inline")
            for (let value of Array.from($(".landing-re-color"))){
                let id = $(value).attr('id');
                $(value).attr('style','background:rgb(185,'+ (id*95) + "," + (id*150) + ")");
            }
            for (let text of Array.from($(".writing-re-text"))){
                let text_content = text.textContent;
                $(text).html(text_content);
            }
    })
    $(".about_coloring").click(function() {
            for (let value of Array.from($(".landing-re-color"))){
                let id = $(value).attr('id');
                $(value).attr('style','background:rgb(5,'+ (id*65) + "," + (id*195) + ")");
            }
    })
})