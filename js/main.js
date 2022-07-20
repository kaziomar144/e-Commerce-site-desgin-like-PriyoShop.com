$(document).ready(function () {

    //===========Sticky nav bar=========

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 110) {
            $('.main_menu').addClass('sticky');
        } else {
            $('.main_menu').removeClass('sticky');
        }
    });
    //===========Sticky nav bar END=========

    // ===========Banner owlCarousel============
    var owlBannerFirst = $('#owl-banner-first');
    owlBannerFirst.owlCarousel({
        nav: true,
        navText: ['<div class="left_arrow"><i class="fas fa-chevron-left"></i></div>', '<div class="right_arrow"><i class="fas fa-chevron-right"></i></div>'],
        items: 1,
        loop: true,
        dots: false,
        margin: 0,
        // animateOut: 'slideOutDown',
        // animateIn: 'flipInX',
        autoplaySpeed: 2000,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true,
            },
            1000: {
                items: 1,
                nav: true,
                loop: true,
            }
        }
    });

    var owlBannerSecond = $('#owl-banner-second');
    owlBannerSecond.owlCarousel({
        nav: true,
        navText: ['<div class="left_arrow"><i class="fas fa-chevron-left"></i></div>', '<div class="right_arrow"><i class="fas fa-chevron-right"></i></div>'],
        items: 1,
        loop: true,
        dots: false,
        margin: 0,
        // animateOut: 'slideOutDown',
        // animateIn: 'flipInX',
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true,
            },
            1000: {
                items: 1,
                nav: true,
                loop: true,
            }
        }
    });

    //============== Banner owlCarousel END===========

    //============Card image slied=============

    var owlCard = $('.owl-carousel');
    owlCard.owlCarousel({
        nav: true,
        navText: ['<div class="card_left_arrow"><i class="fas fa-chevron-left"></i></div>', '<div class="card_right_arrow"><i class="fas fa-chevron-right"></i></div>'],
        items: 6,
        loop: true,
        dots: false,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 4000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                // margin: 5,
                items: 3,
                nav: true,
            },
            900: {
                // margin: 5,
                items: 4,
                nav: true,
            },
            1000: {
                items: 6,
                nav: true,
                loop: true,
            }
        }
    });
    //============Card image slied END=============

    // =============Register page prefer check===========
    if ($("#prefer_email").prop("checked", false)) {
        $('.email').hide();
    }
    if ($("#prefer_email").prop("checked", true)) {
        $('.email').show();
    }


    // =============Register page prefer check END===========


    //========== Mobile navbar===========
    $('#nav-menu').slicknav();
    $(".slicknav_btn").on("click", function () {
        // $(".slicknav_icon-bar").toggleClass("hide");
        $(".slicknav_icon").toggleClass('active');

    });

    $("#mobile_search").on("click", function () {
        $(".search_wrap").toggleClass('active').slideToggle("slow");
    })
    //========== Mobile navbar END===========





    //  =============Single page image zoom========
    $(".product_picture").imagezoomsl({
        zoomrange: [2, 3],
    });
    //  =============Single page image zoom END========




    //===========CART PAGE============
    // cart page check and uncheck all check box

    $('#checkAll').change(function () {
        $('.checkSingle').prop('checked', this.checked);
    });

    $('.checkSingle').change(function () {
        if ($('.checkSingle:checked').length == $('.checkSingle').length) {
            $('#checkAll').prop('checked', true);
        } else {
            $('#checkAll').prop('checked', false);
        }
    });

    //remove cart item
    $(".remove-cart-item").click(function (e) {
        e.preventDefault()
        $(this).closest('tr').hide();
    })


    //total price calculation
    function net_amount() {
        let amount = 0;
        $('.sub-total').each(function () {
            let val = $(this).html();
            let total = parseInt(amount) + parseInt(val);
            amount = total;
        })
        $('.total-amount').html(amount);
    }
    net_amount();

    $('.item-qty').change(function () {
        let qty = $(this).val();
        let price = $(this).siblings('.item-price').val();
        let new_price = (qty * price);
        $(this).parent().siblings().children('.sub-total').html(new_price);
        net_amount();
    })
    //===========CART PAGE END JS============

    // ==========CUSTOMER PROFILE JS START===========
    $('#user_profile .user_list .list li a').on('click', function () {
        let user_cls = $()
        $(this).addClass("active");
        $(this).parent().siblings().children().removeClass('active');

    });

    // function tabShow(tabid){
    //     $(".tabData").addClass("hide");
    //     $(tabid).removeClass("hide");
    // }

    //------------- Datepicker---------
    $( function() {
        $( "#DateOfBirth" ).datepicker();
      } );

    // ==========CUSTOMER PROFILE JS END===========




});