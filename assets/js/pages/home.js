$(function() {
    $(".search-btn").mouseover(function(){
        $(this).css("cursor","pointer");
       
        $(".fa-magnifying-glass").css("color","#f5ea77");
        $(".search-text").css("color","#f5ea77");
    });
    $(".search-btn").mouseout(function(){
        $(".fa-magnifying-glass").css("color","white");
        $(".search-text").css("color","white");
    });

    $(".search-btn").click(function(){
        if($(".hidden-search-box").hasClass("d-none")) {
            $(".hidden-search-box").addClass("d-flex");
            $(".hidden-search-box").removeClass("d-none");
        }
        else {
            $(".hidden-search-box").removeClass("d-flex");
            $(".hidden-search-box").addClass("d-none");
        }
    });
    
    $(".findus-btn").mouseover(function(){
        $(this).css("cursor","pointer");
       
        $(".fa-location-dot").css("color","#f5ea77");
        $(".findus-text").css("color","#f5ea77");
    });
    $(".findus-btn").mouseout(function(){
        $(".fa-location-dot").css("color","white");
        $(".findus-text").css("color","white");
    });

    $(".login-btn").mouseover(function(){
        $(this).css("cursor","pointer");
       
        $(".fa-hand-sparkles").css("color","#f5ea77");
        $(".login-text").css("color","#f5ea77");
    });
    $(".login-btn").mouseout(function(){
        $(".fa-hand-sparkles").css("color","white");
        $(".login-text").css("color","white");
    });

    $(".bag-btn").mouseover(function(){
        $(this).css("cursor","pointer");
       
        $(".fa-basket-shopping").css("color","#f5ea77");
        $(".bag-text").css("color","#f5ea77");
    });
    $(".bag-btn").mouseout(function(){
        $(".fa-basket-shopping").css("color","white");
        $(".bag-text").css("color","white");
    });


    







})