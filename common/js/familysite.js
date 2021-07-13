// // footer_.familysite(위로올라가는 ver)
$(document).ready(function(){
    $('.footer_familysite .arrow').toggle(
        function(){
            $('.footer_familysite .family_site').fadeIn('fast');
            $('.footer_familysite .arrow').css({'background-image' : "url(common/images/up.svg)"});

        }, function(){
            $('.footer_familysite .family_site').fadeOut('fast');
            $('.footer_familysite .arrow').css({'background-image': "url(common/images/down.svg)"});
        });
});