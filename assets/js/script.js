$(document).ready(function() {
    for (let box of Array.from($(".landing-re-color"))){
        let img_src = box.children[2].textContent;
        $(box).attr('style', "background-image: url('" + img_src + "')");
    }
    for (let text of Array.from($(".design-re-text .box-header"))){
        let text_content = text.textContent;
        $(text).parent().html(text_content);
    }
    $(".design-re-text").attr('style', "color:#ffffff");
    $(".design_coloring").click(function() {
        $(".writing-re-text").attr("style", "display:none");
        $(".about-re-text").attr("style", "display:none");
        $(".design-re-text").attr("style", "display:inline");
        for (let box of Array.from($(".landing-re-color"))){
            let img_src = box.children[2].textContent;
            $(box).attr('style', "background-image: url('" + img_src + "')");
        }
        $(".design-re-text").attr('style', "color:#ffffff");
    })
    $(".writing_coloring").click(function() {
            $(".design-re-text").attr("style", "display:none");
            $(".about-re-text").attr("style", "display:none");
            $(".writing-re-text").attr("style", "display:inline");
            for (let box of Array.from($(".landing-re-color"))){
                let img_src = box.children[3].textContent;
                $(box).attr('style', "background-image: url('" + img_src + "')");
            }
            for (let text of Array.from($(".writing-re-text .box-header"))){
                let text_content = text.textContent;
                $(text).parent().html(text_content);
            }
            $(".writing-re-text").attr('style', "color:#ffffff");
    })
    $(".about_coloring").click(function() {
        $(".about-re-text").attr("style", "display:inline");
        $(".design-re-text").attr("style", "display:none");
        $(".writing-re-text").attr("style", "display:none");
            for (let value of Array.from($(".landing-re-color"))){
                let id = $(value).attr('id');
                $(value).attr('style','background:rgb(5,'+ (id*65) + "," + (id*195) + ")");
            }
            for (let text of Array.from($(".about-re-text .box-header"))){
                let text_content = text.textContent;
                $(text).parent().html(text_content);
            }
            $(".about-re-text").attr('style', "color:#ffffff");
    })
})