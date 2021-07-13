// gnb
$(document).ready(function(){
    $(".gnb_icon").click(function(){
        let documentHeight = $(document).height();
        let windowHeight = $(window).height();
        $('.gnb_bg').css('height',documentHeight);
        $("#gnb").css('height',windowHeight);
        $('.gnb_bg').show();
        $("#gnb").animate({right:"0", opacity: "1"},"slow");
    });
    $(".close_btn, .gnb_bg").click(function(){
        $('.gnb_bg').hide();
        $("#gnb").animate({right:"-100%", opacity: "0"},"slow");
    });
});

$(document).ready(function(){
  $("#gnb .depth01").click(function(){
    $('.sub_gnb').hide();
    $(this).next(".sub_gnb").slideDown('slow');
  });
});


// search_box
$(document).ready(function(){
    $(".gnb_search").toggle(function(){
        $(".search_box").css("display","block");
    }, function(){
        $(".search_box").css("display","none");
    });

});


//sticky header
$(function () {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 3; // 이벤트를 발생시킬 스크롤의 이동 범위
    var navbarHeight = $("header").outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250); // 스크롤이 멈춘 후 동작이 실행되기 까지의 딜레이

    function hasScrolled() {
        var st = $(this).scrollTop(); // 현재 window의 scrollTop 값

        // delta로 설정한 값보다 많이 스크롤 되어야 실행된다.
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop && st > navbarHeight){
            // 스크롤을 내렸을 때
            $("header").slideUp("fast"); // header 숨기기
        } else {
            // 스크롤을 올렸을 때
            if(st + $(window).height() < $(document).height()) {
                $("header").slideDown("fast"); // header 보이기
            }
        }

        lastScrollTop = st; // 현재 멈춘 위치를 기준점으로 재설정
    }
})
