'use strict';

/*==============slick=============*/

$('.reviews__slider').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: false,
    //variableWidth: true,
    autoplaySpeed: 2000,
    centerMode: true,
    //centerPadding: '170px',
    dots: true,
    centerPadding: '0px',
    infinite: true,
    arrows: true,
    adaptiveHeight: true,
    responsive: [{
        breakpoint: 1170,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    }, {
        breakpoint: 960,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 743,
        settings: {
            centerMode: false,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
});
$('.slick-slider').on('click', '.slick-slide', function (e) {
    e.stopPropagation();
    var index = $(this).data("slick-index");
    if ($('.slick-slider').slick('slickCurrentSlide') !== index) {
        $('.slick-slider').slick('slickGoTo', index);
    }
});

$(document).ready(function () {

    $('.burger').click(function () {
        console.log(this);
        $(this).toggleClass("burger--open");
    });

     //$('#gadget').styler();

    var str = {
        iPhone7: "img/lil.png",
        iPhone6SPlus: "img/iphone6splus.png",
        iPhone6S: "img/iphone6s.png",
        iPhone6Plus: "img/iphone6splus.png",
        iPhone6: "img/iphone6.png",
        iPhoneSE: "img/iphoneSE.png",
        iPhone5C: "img/iphone5c.png",
        iPhone5S: "img/iphone5c.png",
        iPhone5: "img/iphone5.png"
    };
    $("#gadget").change(function () {
        var key = $('#gadget').val();
        $('#hidden-input').val(key);
        console.log(key);
    });

    /*var listItem = $('.slick-dots li');

    var objs = listItem.map(function(){
    	return this;
    });

    var last = objs.length;
    var lastItem = objs[last-1];
    console.log(last)
    	//console.log(lastItem.html());
    $(lastItem).addClass("last");*/
    /*================modal=====================*/

    jQuery.validator.addMethod("ContainsAtLeastOneDigit", function (value) {
        return (/[a-z].*[0-9]|[0-9].*[a-z]/i.test(value)
        );
    }, 'Your input must contain at least 1 letter and 1 number');

    jQuery.validator.addMethod("rus", function (value) {
        return (/^[а-яА-ЯёЁa-zA-Z0-9]+$/i.test(value)
        );
    }, 'Имя должно состоять только из букв или цифр');

    $(document).on("input", ".reg-phone", function () {
        this.value = this.value.replace(/[^\d\.\-]/g, '');
    });

    $("#form1").validate({
        rules: {
            "name[]": {
                required: true,
                minlength: 2,
                maxlength: 30,
                rus: true
            },
            "contacts[phone]": {
                required: true
            }
        },
        messages: {
            "name[]": {
                required: "Необходимо ввести имя",
                minlength: "Имя должно быть больше 2 букв"
            },
            "contacts[phone]": {
                required: "Необходимо ввести телефон"
            }
        },
        submitHandler: function submitHandler(form) {
            $(form).ajaxSubmit();
        },
        errorLabelContainer: "#messageBox",
        wrapper: "li"
    });

    $("#form2").validate({
        rules: {
            "name[]": {
                required: true,
                minlength: 2,
                maxlength: 30,
                rus: true
            },
            "contacts[phone]": {
                required: true
            }
        },
        messages: {
            "name[]": {
                required: "Необходимо ввести имя",
                minlength: "Имя должно быть больше 2 букв",
                maxlength: "Имя должно быть меньшк 30 букв"
            },
            "contacts[phone]": {
                required: "Необходимо ввести телефон"
            }
        },
        submitHandler: function submitHandler(form) {
            $(form).ajaxSubmit();
        },
        errorLabelContainer: "#messageBox",
        wrapper: "li"
    });


});
