//文本省略
function setOverflowStyle(el, maxNumber) {
    if(el.text().length > maxNumber) {
        el.append('...<a>[详细]</a>')
    }
}
//设置网页自适应
$(document).ready(function () {
    var whei = $(window).width();
    $("html").css({fontSize: whei / 37.5});
    $(window).resize(function () {
        var whei = $(window).width();
        $("html").css({fontSize: whei / 37.5})
    });
});

$(function () {
    var swiper1 = new Swiper('.swiper-1', {
        autoplay: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletClass: 'my-bullet',
            bulletActiveClass: 'my-bullet-active',
        },
    });

    var swiper2 = new Swiper('.ss1 .swiper-container', {
        //autoplay: true,
        loop: true,
        pagination: {
          el: '.ss1 .swiper-pagination',
        },
    });

})