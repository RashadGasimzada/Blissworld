import { getProductCount } from "./common.js"
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
        if ($(".navbar-collapse").hasClass("show")) {
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
        if ($(".navbar-collapse").hasClass("show")) {
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

    $(".navbar-toggler").click(function () {
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

    $(window).resize(function () {
        if (window.innerWidth <= 992) {
            $(".navbar-expand-lg").removeClass("bg-transparent");
            $(".navbar-expand-lg").addClass("bg-light");
        }
        else {
            $(".navbar-expand-lg").addClass("bg-transparent");
            $(".navbar-expand-lg").removeClass("bg-light");

        }
    });

    $(window).resize(function () {
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

    $(".first-slider").owlCarousel({
        margin: 10,
        loop: true,
        autoplay: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })
    $(".second-slider").owlCarousel({
        margin: 10,
        loop: false,
        nav: false,


        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            1050: {
                items: 4
            }
        }
    })
    $(".last-slider").owlCarousel({
        margin: 10,
        loop: false,
        nav: false,


        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            1050: {
                items: 4
            }
        }
    })

    if ($("html").css("height") > $(window).innerHeight) {
        $(".my-modal").css("height", "calc(100%-155px)");
        $(".my-modal-content").css("height", "calc(100%-155px)")
    }


    $(window).scroll(function () {

        if ($(document).scrollTop() > 40) {
            if ($(window).width() < 510) {
                $(".menu-box").css({
                    'position': 'fixed',
                    'width': '92%',
                    'z-index': '999',
                    'top': '0',
                });
            }
            else {
                $(".menu-box").css({
                    'position': 'fixed',
                    'width': '1296px',
                    'z-index': '999',
                    'top': '0',
                })
                $(".hidden-menu-box").removeClass("d-none");
            }

        }
        else {
            $(".menu-box").css({
                'position': 'static',
                'width': '100%',
                'z-index': '999',
                'top': '0',
            })
            $(".hidden-menu-box").addClass("d-none");
        }
    });


    

   



    $(".tabs li").click(function () {

        $(".tabs li").removeClass("active");
        $(this).addClass("active");
        if ($("#tab-1").hasClass("active")) {
            $("#content-1").addClass("d-block")
            $("#content-1").removeClass("d-none")

            $("#content-2").addClass("d-none")
            $("#content-2").removeClass("d-block")
        }
        else {
            $("#content-2").addClass("d-block")
            $("#content-2").removeClass("d-none")

            $("#content-1").addClass("d-none")
            $("#content-1").removeClass("d-block")
        }
    })



    let ideaBtns = $(".idea-btn");
    let arrivalBtns = $(".arrival-btn");
    let countElem = $(".item-count");

    if (jQuery.parseJSON(localStorage.getItem("products")) == null) {
        localStorage.setItem("products", JSON.stringify([]));
    }
    let products = JSON.parse(localStorage.getItem("products"));

    getProductList(products)
    function getProductList(list) {
        for(const product of list) {
                $(".modal-body").append(` <div class="row">
                <div class="col-md-6 col-sm-12 mb-4 mb-lg-0">
                    <!-- Image -->
                    <div class="bg-image hover-overlay hover-zoom ripple rounded"
                        data-mdb-ripple-color="light">
                        <img src="${product.img}" class="w-100" alt="Blue Jeans Jacket" />
                        <a href="#!">
                            <div class="mask"
                                style="background-color: rgba(251, 251, 251, 0.2)">
                            </div>
                        </a>
                    </div>
                    <!-- Image -->
                </div>
        
                <div
                    class="col-md-6 d-flex justify-content-center flex-column col-sm-12 mb-4 mb-lg-0">
                    <!-- Data -->
                    <p style="font-size: 12px;"><strong class="exist-name">${product.name}</strong></p>
                    <p style="font-size: 11px;">${product.description}</p>
                    <!-- Data -->
                </div>
        
               
              
            </div>`)
           
            
        
        }
        
    }
    function clickProductList(list) {
     
                $(".modal-body").append(` <div class="row">
                <div class="col-md-6 col-sm-12 mb-4 mb-lg-0">
                    <!-- Image -->
                    <div class="bg-image hover-overlay hover-zoom ripple rounded"
                        data-mdb-ripple-color="light">
                        <img src="${list.img}" class="w-100" alt="Blue Jeans Jacket" />
                        <a href="#!">
                            <div class="mask"
                                style="background-color: rgba(251, 251, 251, 0.2)">
                            </div>
                        </a>
                    </div>
                    <!-- Image -->
                </div>
        
                <div
                    class="col-md-6 d-flex justify-content-center flex-column col-sm-12 mb-4 mb-lg-0">
                    <!-- Data -->
                    <p style="font-size: 12px;"><strong class="exist-name">${list.name}</strong></p>
                    <p style="font-size: 11px;">${list.description}</p>
                    <!-- Data -->
                </div>
        
               
              
            </div>`)
           
            
        
     
        
    }


    let summaryPrice = parseInt($(".summary-price").text())
    for (let product = 0; product < products.length; product++) { 
        summaryPrice += products[product].price * products[product].count;
        $(".summary-price").text(summaryPrice)
    }
    ideaBtns.click(function (e) {
        e.preventDefault();
        let productId = $(this).parent().parent().attr("data-id");
        let productImg = $(this).parent().prev().attr("src");
        let productName = $(this).prev().prev().text();
        let productDesc = $(this).prev().text();
        let productPrice = $(this).find(">:first-child").text();
        let existProduct = products.find(m => m.id == productId);

        if (existProduct == undefined) {
            products.push({
                id: productId,
                img: productImg,
                name: productName,
                description: productDesc,
                price: productPrice,
                count: 1
            })
            clickProductList(products[products.length -1]);
        } else {
            if(existProduct.count < 10) {
                existProduct.count += 1;
            }
        }

        localStorage.setItem("products", JSON.stringify(products));
        countElem.text(getProductCount(products))
        if(countElem.text() != 0) {
            $(".empty-modal").addClass("d-none");
     
        }
        else {
            $(".empty-modal").removeClass("d-none");
      
        }
      
     
        
    })

    arrivalBtns.click(function (e) {
        e.preventDefault();

        let productId = $(this).parent().parent().attr("data-id");
        let productImg = $(this).parent().parent().find(">:first-child").css("background-image").slice(4, -1).replace(/"/g, "");
        let productName = $(this).prev().prev().text();
        let productDesc = $(this).prev().text();
        let productPrice = $(this).find(">:first-child").text();
        let existProduct = products.find(m => m.id == productId);
        if (existProduct == undefined) {
            products.push({
                id: productId,
                img: productImg,
                name: productName,
                description: productDesc,
                price: productPrice,
                count: 1
            })
            clickProductList(products[products.length -1]);
        } else {
            if(existProduct.count <= 10) {
                existProduct.count += 1;
            }
            
        }

        localStorage.setItem("products", JSON.stringify(products));
        countElem.text(getProductCount(products))
        if(countElem.text() != 0) {
            $(".empty-modal").addClass("d-none");
  
        }
        else {
            $(".empty-modal").removeClass("d-none");
        
        }
       
      
    })


    countElem.text(getProductCount(products))
    if(countElem.text() != 0) {
        $(".empty-modal").addClass("d-none");
     
    }
    else {
        $(".empty-modal").removeClass("d-none");
     
    }
    

    
})
var modal = document.getElementById("myModal");
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";

    }

}
