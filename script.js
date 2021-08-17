$(document).ready(function() {
    $(window).scroll(function(e) {
        if($(this).scrollTop()>=130){
            $("nav").addClass("expand")
        }else{
            $("nav").removeClass("expand")
        }
    });

    $(".control-left").click(function(){
        // console.log(parseInt($(".sliding").css("left") * 100) / $(document).width());
        (100 * parseInt($(".sliding").css("left")))/ $(document).width()
    });
})