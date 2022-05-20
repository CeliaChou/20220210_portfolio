$(".nav-tabs li a.nav-link").click(function() {
    $('html, body').animate({
        scrollTop:$("#portfolio").offset().top
    }, 100);
    return false;
});