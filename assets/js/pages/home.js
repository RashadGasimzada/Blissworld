$(function () {
    var modal = $("#myModal");

    $(".search-btn").mouseover(function () {
        $(this).css("cursor", "pointer");

        $(".fa-magnifying-glass").css("color", "#f5ea77");
        $(".search-text").css("color", "#f5ea77");
    });
    $(".search-btn").mouseout(function () {
        $(".fa-magnifying-glass").css("color", "white");
        $(".search-text").css("color", "white");
    });

    $(".search-btn").click(function () {
        if($(".navbar-collapse").hasClass("show")) {
            $(".navbar-collapse").removeClass("show")
        }
        if (modal.css("display") == "flex") {
            modal.css("display", "none")
        }
        if ($(".hidden-search-box").hasClass("d-none")) {
            $(".hidden-search-box").addClass("d-flex");
            $(".hidden-search-box").removeClass("d-none");
        }
        else {
            $(".hidden-search-box").removeClass("d-flex");
            $(".hidden-search-box").addClass("d-none");
        }
    });

    $(".findus-btn").mouseover(function () {
        $(this).css("cursor", "pointer");

        $(".fa-location-dot").css("color", "#f5ea77");
        $(".findus-text").css("color", "#f5ea77");
    });
    $(".findus-btn").mouseout(function () {
        $(".fa-location-dot").css("color", "white");
        $(".findus-text").css("color", "white");
    });

    $(".login-btn").mouseover(function () {
        $(this).css("cursor", "pointer");

        $(".fa-hand-sparkles").css("color", "#f5ea77");
        $(".login-text").css("color", "#f5ea77");
    });
    $(".login-btn").mouseout(function () {
        $(".fa-hand-sparkles").css("color", "white");
        $(".login-text").css("color", "white");
    });

    $(".bag-btn").mouseover(function () {
        $(this).css("cursor", "pointer");

        $(".fa-basket-shopping").css("color", "#f5ea77");
        $(".bag-text").css("color", "#f5ea77");
    });
    $(".bag-btn").mouseout(function () {
        $(".fa-basket-shopping").css("color", "white");
        $(".bag-text").css("color", "white");
    });

    $("#basket-btn").click(function () {
        if($(".navbar-collapse").hasClass("show")) {
            $(".navbar-collapse").removeClass("show")
        }
        if ($(".hidden-search-box").hasClass("d-flex")) {
            $(".hidden-search-box").removeClass("d-flex");
            $(".hidden-search-box").addClass("d-none");
        }
        if (modal.css("display") == "none") {

            modal.css("display", "flex")
        }
        else {
            modal.css("display", "none")
        }
       
    });

    $(".navbar-toggler").click(function() {
        if ($(".hidden-search-box").hasClass("d-flex")) {
            $(".hidden-search-box").removeClass("d-flex");
            $(".hidden-search-box").addClass("d-none");
        }
        if (modal.css("display") == "flex") {
            modal.css("display", "none")
        }
    })

    if (window.matchMedia('(max-width: 992px)').matches) {
        $(".navbar-expand-lg").removeClass("bg-transparent");
        $(".navbar-expand-lg").addClass("bg-light");
        
    }
    if (window.matchMedia('(max-width: 457px)').matches) {
        $(".fa-magnifying-glass").removeClass("fa-2x");
        $(".fa-location-dot").removeClass("fa-2x");
        $(".fa-hand-sparkles").removeClass("fa-2x");
        $(".fa-basket-shopping").removeClass("fa-2x");
    }
   
    $(window).resize(function() {
        if (window.innerWidth <= 992) {
            $(".navbar-expand-lg").removeClass("bg-transparent");
            $(".navbar-expand-lg").addClass("bg-light");
        }
        else {
            $(".navbar-expand-lg").addClass("bg-transparent");
            $(".navbar-expand-lg").removeClass("bg-light");
            
        }
      });
   
      $(window).resize(function() {
        if (window.innerWidth <= 457) {
            $(".fa-magnifying-glass").removeClass("fa-2x");
            $(".fa-location-dot").removeClass("fa-2x");
            $(".fa-hand-sparkles").removeClass("fa-2x");
            $(".fa-basket-shopping").removeClass("fa-2x");
        }
        else {
            $(".fa-magnifying-glass").addClass("fa-2x");
            $(".fa-location-dot").addClass("fa-2x");
            $(".fa-hand-sparkles").addClass("fa-2x");
            $(".fa-basket-shopping").addClass("fa-2x");
        }
      });

      $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1200:{
                items:1
            }
        }
    })

    if ($("html").css("height") > $(window).innerHeight ) {
        $(".my-modal").css("height","calc(100%-155px)");
        $(".my-modal-content").css("height","calc(100%-155px)")
    }

   






})
var modal = document.getElementById("myModal");
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
      
    }
   
}
