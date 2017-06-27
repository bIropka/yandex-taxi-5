$(window).ready(function() {

    setTimeout(function() {
        $('.wrapper').animate({opacity: 1}, 500);
    }, 500);

    $('.custom-select .current-value').click(function() {

        if($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
        } else {
            $('.custom-select').removeClass('active');
            $('.select-options').removeClass('active');
            $(this).parent().addClass('active');
        }

    });

    $('.select-city ul li').click(function() {

        if(!$(this).hasClass('active')) {

            var newCity = $(this).find('span').text();
            var newPhone = $(this).find('a').text();
            var newLink = $(this).find('a').attr('href');

            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            $(this).parents('.select-city').find('.current-value').text(newCity);
            $(this).parents('.select-city').siblings('.link-phone').find('a').text(newPhone);
            $(this).parents('.select-city').siblings('.link-phone').find('a').attr('href', newLink);

            $(this).parents('.select-city').removeClass('active');

        }

    });

    $('.callback').click(function() {
        $('.window-callback').fadeIn();
    });

    $('.form-callback').click(function() {
        $('.window-callback-order').fadeIn();
    });

    $('.window').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.window-inner')).length) {
            $('.window').fadeOut();
        }
        if ($target.hasClass('close-window')){
            $('.window').fadeOut();
        }
    });

    $('.burger').click(function() {

        $(this).toggleClass('active');
        $('nav').toggleClass('active');

    });

    if ($(window).width() > 1023) {

        if ($(window).scrollTop() > 350) {
            $('header[role="banner"]').addClass('header-short');
        } else {
            $('header[role="banner"]').removeClass('header-short');
        }

    } else {
        $('header[role="banner"]').addClass('header-short');
    }

    if($(window).scrollTop() < $('.problems').offset().top) {
        $('nav a.active').removeClass('active');
        $('nav a[href="#top"]').addClass('active');
    } else if($(window).scrollTop() >= $('.guarantees').offset().top && $(window).scrollTop() < $('.conditions').offset().top) {
        $('nav a.active').removeClass('active');
        $('nav a[href="#guarantees"]').addClass('active');
    } else if($(window).scrollTop() >= $('.conditions').offset().top && $(window).scrollTop() < $('.requirements').offset().top) {
        $('nav a.active').removeClass('active');
        $('nav a[href="#conditions"]').addClass('active');
    } else if($(window).scrollTop() >= $('.requirements').offset().top && $(window).scrollTop() < $('.steps').offset().top) {
        $('nav a.active').removeClass('active');
        $('nav a[href="#requirements"]').addClass('active');
    } else if($(window).scrollTop() >= $('.questionnaire').offset().top && $(window).scrollTop() < $('.promo-block').offset().top) {
        $('nav a.active').removeClass('active');
        $('nav a[href="#questionnaire"]').addClass('active');
    }else if($(window).scrollTop() >= $('.promo-block').offset().top && $(window).scrollTop() < $('.promo-block h4').offset().top) {
        $('nav a.active').removeClass('active');
        $('nav a[href="#promo"]').addClass('active');
    } else {
        $('nav a.active').removeClass('active');
    }

    $(window).resize(function() {

        if ($(window).width() > 1023) {

            if ($(window).scrollTop() > 350) {
                $('header[role="banner"]').addClass('header-short');
            } else {
                $('header[role="banner"]').removeClass('header-short');
            }

        } else {
            $('header[role="banner"]').addClass('header-short');
        }

    });

    $(window).on('scroll', function() {

        if ($(window).width() > 1023) {

            if ($(window).scrollTop() > 200 && $(window).scrollTop() < 351 ) {
                $('header[role="banner"]').addClass('header-fixed');
            } else if ($(window).scrollTop() < 201) {
                $('header[role="banner"]').removeClass('header-fixed');
            }

            if ($(window).scrollTop() > 350) {
                $('header[role="banner"]').addClass('header-short').removeClass('header-fixed');
            } else {
                $('header[role="banner"]').removeClass('header-short');
            }

        }

        if($(window).scrollTop() < $('.problems').offset().top) {
            $('nav a.active').removeClass('active');
            $('nav a[href="#top"]').addClass('active');
        } else if($(window).scrollTop() >= $('.guarantees').offset().top && $(window).scrollTop() < $('.conditions').offset().top) {
            $('nav a.active').removeClass('active');
            $('nav a[href="#guarantees"]').addClass('active');
        } else if($(window).scrollTop() >= $('.conditions').offset().top && $(window).scrollTop() < $('.requirements').offset().top) {
            $('nav a.active').removeClass('active');
            $('nav a[href="#conditions"]').addClass('active');
        } else if($(window).scrollTop() >= $('.requirements').offset().top && $(window).scrollTop() < $('.steps').offset().top) {
            $('nav a.active').removeClass('active');
            $('nav a[href="#requirements"]').addClass('active');
        } else if($(window).scrollTop() >= $('.questionnaire').offset().top && $(window).scrollTop() < $('.promo-block').offset().top) {
            $('nav a.active').removeClass('active');
            $('nav a[href="#questionnaire"]').addClass('active');
        }else if($(window).scrollTop() >= $('.promo-block').offset().top && $(window).scrollTop() < $('.promo-block h4').offset().top) {
            $('nav a.active').removeClass('active');
            $('nav a[href="#promo"]').addClass('active');
        } else {
            $('nav a.active').removeClass('active');
        }

    });

    $(document).click(function(event) {

        if (!$(event.target).closest(".custom-select").length) {
            $('.custom-select').removeClass('active');
        }

        if (!$(event.target).closest(".select-options").length) {
            $('.select-options').removeClass('active');
        }

    });

    $('nav a[href^="#"]').click(function () {

        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        $('nav .active').removeClass('active');
        $(this).addClass('active');

        $('nav').removeClass('active');
        $('.banner').removeClass('active');

        return false;
    });

    $('.to-questionnaire').click(function(){

        $('html, body').animate({scrollTop: $('.questionnaire').offset().top - 50}, 800);

        return false;
    });

    $('input[type="file"]').change(function() {

        var name = $(this).val().split('\\');
        $(this).parent().siblings('.text').html(name[name.length - 1]);

    });

});
