// Para el carrusel que va hacia la izquierda
$('#carouselLeft').on('slide.bs.carousel', function (e) {
    if (e.direction === 'right') {
        $(e.relatedTarget).addClass('carousel-item-left');
    } else {
        $(e.relatedTarget).removeClass('carousel-item-left');
    }
});

$('#carouselLeft').on('slid.bs.carousel', function (e) {
    $('.carousel-item-left').removeClass('carousel-item-left');
});

$('#carouselLeft').find('.carousel-control-next').attr
