$(document).ready(function() {
    $(".what-we-do-slider").slick({
            slidesToShow: 3,
            dots: !1,
            centerMode: !1,
            variableWidth: !1,
            infinite: !1,
            arrows: !0,
            loop: !1,
            speed: 300,
            prevArrow: '<span class="left_arrow we-arrow-left"><i class="fas fa-arrow-left"></i></span>',
            nextArrow: '<span class="right-arrow we-arrow-right"><i class="fas fa-arrow-right"></i></span>',
            responsive: [{
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        dots: !0,
                        arrows: !1,
                        autoplay: !0,
                        autoplaySpeed: 2e3
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        auto: !0,
                        slidesToShow: 1,
                        arrows: !1,
                        dots: !0,
                        autoplay: !0,
                        autoplaySpeed: 2e3
                    }
                },
            ],
        }),
        $(".slider_collaborators").slick({
            slidesToShow: 3,
            dots: !1,
            centerMode: !1,
            variableWidth: !1,
            infinite: !1,
            arrows: !1,
            loop: !1,
            speed: 300,
            responsive: [{
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        dots: !0,
                        arrows: !1,
                        autoplay: !0,
                        autoplaySpeed: 2e3
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        auto: !0,
                        slidesToShow: 1,
                        arrows: !1,
                        dots: !0,
                        autoplay: !0,
                        autoplaySpeed: 2e3
                    }
                },
            ],
        }),
        $(".latest_crousel").slick({
            slidesToShow: 1,
            dots: !1,
            infinite: !1,
            arrows: !0,
            speed: 300,
            prevArrow: '<span class="left_arrow we-arrow-left "><i class="fas fa-arrow-left"></i></span>',
            nextArrow: '<span class="right-arrow we-arrow-right"><i class="fas fa-arrow-right"></i></span>',
            responsive: [{
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        dots: !0,
                        arrows: !1,
                        autoplay: !0,
                        autoplaySpeed: 2e3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        auto: !0,
                        slidesToShow: 1,
                        dots: !0,
                        arrows: !1,
                        autoplay: !0,
                        autoplaySpeed: 2e3
                    }
                },
            ],
        }),
        $(".wrapper_what_we_do").slick({
            slidesToShow: 3,
            dots: !1,
            infinite: !1,
            arrows: !0,
            speed: 300,
            prevArrow: '<span class="left_arrow we-arrow-left"><i class="fas fa-arrow-left"></i></span>',
            nextArrow: '<span class="right-arrow we-arrow-right"><i class="fas fa-arrow-right"></i></span>',
            responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        auto: !0,
                        slidesToShow: 1,
                        dots: !0,
                        arrows: !1,
                        autoplay: !0,
                        autoplaySpeed: 2e3
                    }
                },
            ],
        }),
        $(".slider_text_testimonial").slick({
            autoplay: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !0,
            speed: 300,
            prevArrow: '<span class="left_arrow we-arrow-lefts"><i class="fas fa-arrow-left"></i></span>',
            nextArrow: '<span class="right-arrow we-arrow-rights"><i class="fas fa-arrow-right"></i></span>',
            responsive: [{
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    arrows: !1,
                    dots: !0,
                    autoplay: !0,
                    autoplaySpeed: 2e3
                }
            }],
        }),
        $(".our_acheiver_slider").slick({
            slidesToShow: 2,
            dots: !1,
            rows: 1,
            infinite: !1,
            arrows: !0,
            speed: 300,
            prevArrow: '<span class="left_arrow we-arrow-left"><i class="fas fa-arrow-left"></i></span>',
            nextArrow: '<span class="right-arrow we-arrow-right"><i class="fas fa-arrow-right"></i></span>',
            responsive: [{
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        dots: !0,
                        arrows: !1,
                        autoplay: !0,
                        autoplaySpeed: 2e3
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        auto: !0,
                        slidesToShow: 1,
                        dots: !0,
                        arrows: !1,
                        autoplay: !0,
                        autoplaySpeed: 2e3
                    }
                },
            ],
        }),
        $(".wrapper_news_crousel").slick({
            slidesToShow: 3,
            dots: !1,
            infinite: !1,
            arrows: !0,
            speed: 300,
            prevArrow: '<span class="left_arrow we-arrow-left"><i class="fas fa-arrow-left"></i></span>',
            nextArrow: '<span class="right-arrow we-arrow-right"><i class="fas fa-arrow-right"></i></span>',
            responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        dots: !0,
                        arrows: !1,
                        autoplay: !0,
                        autoplaySpeed: 2e3
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        auto: !0,
                        slidesToShow: 1,
                        dots: !0,
                        arrows: !1,
                        autoplay: !0,
                        autoplaySpeed: 2e3
                    }
                },
            ],
        }),
        $(".jee_testimonial_slider").slick({
            slidesToShow: 1,
            dots: !1,
            rows: 1,
            slidesToScroll: 1,
            infinite: !1,
            arrows: !0,
            speed: 300,
            centerPadding: "80px",
            prevArrow: '<span class="left_arrow we-arrow-lefting "><i class="fas fa-arrow-left"></i></span>',
            nextArrow: '<span class="right-arrow we-arrow-righting"><i class="fas fa-arrow-right"></i></span>',
            responsive: [{
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        dots: !0,
                        arrows: !1,
                        autoplay: !0,
                        autoplaySpeed: 2e3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        auto: !0,
                        slidesToShow: 1,
                        dots: !0,
                        arrows: !1,
                        autoplay: !0,
                        autoplaySpeed: 2e3
                    }
                },
            ],
        }),
        $(".jee_testimonial_slider_course").slick({
            autoplay: !0,
            slidesToShow: 1,
            dots: !1,
            rows: 1,
            slidesToScroll: 1,
            infinite: !0,
            arrows: !0,
            speed: 300,
            prevArrow: '<span class="left_arrow we-arrow-left-jee_result"><i class="fas fa-arrow-left"></i></span>',
            nextArrow: '<span class="right-arrow we-arrow-right-jee_result"><i class="fas fa-arrow-right"></i></span>',
            responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        auto: !0,
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1
                    }
                },
            ],
        }),
        $(".slider_text_testimonial_course_detail_page").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !0,
            fade: !0,
            asNavFor: ".slider_image_testimonial_course_detail_page",
            prevArrow: '<span class="left_arrow we-arrow-left-coursedetails"><i class="fas fa-arrow-left"></i></span>',
            nextArrow: '<span class="right-arrow we-arrow-right-coursedetails"><i class="fas fa-arrow-right"></i></span>',
        }),
        $(".slider_image_testimonial_course_detail_page").slick({
            slidesToShow: 5,
            centerMode: !0,
            slidesToScroll: 1,
            cssEase: "linear",
            asNavFor: ".slider_text_testimonial_course_detail_page",
            dots: !1,
            arrows: !1,
            centerMode: !0,
            focusOnSelect: !0,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        centerPadding: "15px"
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        auto: !0,
                        slidesToShow: 1
                    }
                },
            ],
        }),
        $("button.nav-link.logo_flex.is_open").click(function() {
            $(this).toggleClass("logout");
        });
});
var mobileButton = document.querySelector(".mobile_button");
mobileButton.addEventListener("click", function(e) {
    document.body.classList.toggle("mobile_open");
});
var menuClose = document.querySelector(".header_menu .close_button");
menuClose.addEventListener("click", function() {
        document.body.classList.remove("mobile_open");
    }),
    $(".header_menu ul").each(function() {
        $(this).addClass("level-" + ($(this).parents("ul").length + 1));
    }),
    $(".header_menu ul li").addClass("menu-item"),
    $(".header_menu li").has("ul").addClass("has-menu"),
    $(".header_menu li.has-menu").append("<i class='fa-solid fa-caret-down arrow_courses'></i>"),
    $(".course_description_btn").click(function() {
        document.getElementById("course_description_div").scrollIntoView({
            behavior: "smooth"
        });
    }),


    $(".planner_btn").click(function() {
        alert("Helo");
        document.getElementById("planner_div").scrollIntoView({
            behavior: "smooth"
        });
    }),
    $(".fee_structure_btn").click(function() {
        document.getElementById("fee_structure_div").scrollIntoView({
            behavior: "smooth"
        });
    }),
    $(".testimonials_btn").click(function() {
        document.getElementById("testimonials_div").scrollIntoView({
            behavior: "smooth"
        });
    }),
    $(".methodologies_btn").click(function() {
        document.getElementById("methodologies_div").scrollIntoView({
            behavior: "smooth"
        });
    }),
    $(".course_description_btn1").click(function() {
        document.getElementById("course_description_div1").scrollIntoView({
            behavior: "smooth"
        });
    }),
    $(".planner_btn1").click(function() {
        document.getElementById("planner_div1").scrollIntoView({
            behavior: "smooth"
        });
    }),
    $(".fee_structure_btn1").click(function() {
        document.getElementById("fee_structure_div1").scrollIntoView({
            behavior: "smooth"
        });
    }),
    $(".testimonials_btn1").click(function() {
        document.getElementById("testimonials_div1").scrollIntoView({
            behavior: "smooth"
        });
    }),
    $(".methodologies_btn1").click(function() {
        document.getElementById("methodologies_div1").scrollIntoView({
            behavior: "smooth"
        });
    }),
    $(".course_description_btn2").click(function() {
        document.getElementById("course_description_div2").scrollIntoView({
            behavior: "smooth"
        });
    }),
    $(".planner_btn2").click(function() {
        document.getElementById("planner_div2").scrollIntoView({
            behavior: "smooth"
        });
    }),
    $(".fee_structure_btn2").click(function() {
        document.getElementById("fee_structure_div2").scrollIntoView({
            behavior: "smooth"
        });
    }),
    $(".testimonials_btn2").click(function() {
        document.getElementById("testimonials_div2").scrollIntoView({
            behavior: "smooth"
        });
    }),
    $(".methodologies_btn2").click(function() {
        document.getElementById("methodologies_div2").scrollIntoView({
            behavior: "smooth"
        });
    });