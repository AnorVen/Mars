
//Бургер меню
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .menu__body').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.menu_list li').click(() => {
        if (window.width > 765) {
            $('.header__burger, .menu__body').removeClass('active');
            $('body').removeClass('lock');
        }
    })


    //Слайдер

    $('.slider__body').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    autoplay: true,
                    dots: true

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });


});