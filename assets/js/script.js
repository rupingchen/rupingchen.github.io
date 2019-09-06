$(document).ready(function() {
   /* $(".design-re-text").attr('style', "color:#ffffff");
    $(".design-re-text").css('margin', "10% 10% auto 10%");*/
    $(".writing-box-content").attr("style", "display:none");
    $(".about-box-content").attr("style", "display:none");
    $(".design-sub").attr("style", "display:none");
    $(".writing-sub").attr("style", "display:none");
    $(".about-sub").attr("style", "display:none");
    for (let box of Array.from($(".landing-re-color"))){
        let img_src = box.children[2].textContent;
        /*$(box).attr('style', "background-image: url('" + img_src + "')");
        $(box).css("background-size", "cover");*/
        $(box).attr("style", "display:none");
    }
    $(".design_coloring").click(function() {
        $(".writing-re-text").attr("style", "display:none");
        $(".about-re-text").attr("style", "display:none");
        $(".design-re-text").attr("style", "display:inline");
        $(".design-sub").attr("style", "display:inline");
        $(".writing-sub").attr("style", "display:none");
        $(".about-sub").attr("style", "display:none");
        for (let box of Array.from($(".landing-re-color"))){
            let img_src = box.children[2].textContent;
            $(box).attr('style', "background-image: url('" + img_src + "')");
            $(box).css("background-size", "cover");
        }
        $(".design-re-text").attr('style', "color:#ffffff");
        $(".design-re-text").css('margin', "10% 10% auto 10%");
        $(".writing-box-content").attr("style", "display:none");
        $(".about-box-content").attr("style", "display:none");
        $(".design-box-content").attr('style', "color:#ffffff; margin:10% 10% auto 10%; text-decoration:underline");
    });
    $(".writing_coloring").click(function() {
            $(".design-re-text").attr("style", "display:none");
            $(".about-re-text").attr("style", "display:none");
            $(".writing-re-text").attr("style", "display:inline");
            $(".writing-sub").attr('style', 'display:inline');
            $(".design-sub").attr("style", "display:none");
            $(".about-sub").attr("style", "display:none");
            for (let box of Array.from($(".landing-re-color"))){
                let img_src = box.children[3].textContent;
                $(box).attr('style', "background-image: url('" + img_src + "')");
                $(box).css("background-size", "cover");
            }
            for (let text of Array.from($(".writing-re-text .box-header"))){
                let text_content = text.textContent;
                $(text).parent().html(text_content);
            }
            $(".writing-box-content").attr('style', "color:#ffffff; margin:10% 10% auto 10%; text-decoration:underline");
            $(".design-box-content").attr("style", "display:none");
            $(".about-box-content").attr("style", "display:none");
            $(".writing-re-text").attr('style', "color:#ffffff");
            $(".writing-re-text").css('margin', "10% 10% auto 10%");
    })
    /*$(".about_coloring").click(function() {
        $(".about-re-text").attr("style", "display:inline");
        $(".design-re-text").attr("style", "display:none");
        $(".writing-re-text").attr("style", "display:none");
        $(".about-sub").attr("style", "display:inline");
        $(".design-sub").attr("style", "display:none");
        $(".writing-sub").attr("style", "display:none");
            for (let value of Array.from($(".landing-re-color"))){
                let id = $(value).attr('id');
                $(value).attr('style','background:rgb(5,'+ (id*65) + "," + (id*195) + ")");
            }
            for (let text of Array.from($(".about-re-text .box-header"))){
                let text_content = text.textContent;
                $(text).parent().html(text_content);
            }
            $(".about-re-text").attr('style', "color:#ffffff");
            $(".about-box-content").attr('style', "color:#ffffff; margin:10% 10% auto 10%; text-decoration:underline");
            $(".design-box-content").attr("style", "display:none");
            $(".writing-box-content").attr("style", "display:none");
            $(".about-re-text").attr('style', "color:#ffffff");
            $(".about-re-text").css('margin', "10% 10% auto 10%");
    });*/
     /*$(".landing-button").click(function(){
        $("html,body").animate({
            scrollTop:$("#landing-div-spine").offset.top(), 'slow'
        });
    });*/
});