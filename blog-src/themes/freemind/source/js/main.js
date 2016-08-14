$(document).ready(function() {


    $("#gotop").click(function() { //当点击标签的时候,使用animate在200毫秒的时间内,滚到顶部
        $("html,body").animate({
            scrollTop: "0px"
        }, 200);
    });
    $(".navbar").mouseenter(function() {
        $(".navbar").fadeTo(100, 1);
    });
    $(".navbar").mouseleave(function() {
        var scrollt = document.documentElement.scrollTop + document.body.scrollTop;
        if (scrollt > 200) {
            $(".navbar").fadeTo(100, 0.2);
        }
    });

    $(".nav a").on("click", function() {
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
    });
});
