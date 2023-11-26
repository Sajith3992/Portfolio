$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "FullStack WebDeveloper", "Graphic Designer", "Vedio Editor"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "FullStack WebDeveloper", "Graphic Designer", "Vedio Editor"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

 
    // Function to animate skill bars
    function animateBars() {
        $('.bars').each(function () {
            var width = $(this).find('.info span:last-child').text();
            $(this).find('.line').animate({
                width: width
            }, 1000); // Adjust the animation duration as needed
        });
    }

    // Call the function initially
    animateBars();

    // Trigger the animation when the skills section comes into view
    $(window).scroll(function () {
        var skillsSection = $('#skills');
        if (isScrolledIntoView(skillsSection)) {
            animateBars();
        }
    });

    // Helper function to check if an element is in the viewport
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return elemBottom <= docViewBottom && elemTop >= docViewTop;
    }
});