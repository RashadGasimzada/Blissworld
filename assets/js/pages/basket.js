import { getProductCount } from "./common.js"
$(function () {
    let countElem = $(".item-count");
    let products = [];
    let items = $(".basket-items-card")
    if (jQuery.parseJSON(localStorage.getItem("products")) != null) {
        products = jQuery.parseJSON(localStorage.getItem("products"));
    }



    getProductList(products);


    function getProductList(list) {

        for (const product of list) {
            items.find(">:first-child").next().append(`<div class="row">
            <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
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
                class="col-lg-5 d-flex justify-content-center flex-column col-md-6 mb-4 mb-lg-0">
                <!-- Data -->
                <p><strong>${product.name}</strong></p>
                <p>${product.description}</p>
                <!-- Data -->
            </div>

            <div
                class="col-lg-2 d-flex justify-content-center flex-column col-md-6 mb-4 mb-lg-0">
                <!-- Quantity -->

                <div class="basket-count">
                    <i class="fa-solid fa-minus"></i>
                    <span>${product.count}</span>
                    <i class="fa-solid fa-plus"></i>
                </div>

                <!-- Quantity -->

                <!-- Price -->
                <p class="mt-3 text-start">$ 
                    <strong class="price">${+ product.price * product.count}</strong>
                </p>
                <!-- Price -->
            </div>
            <div
                class="col-lg-2 d-flex justify-content-center flex-column col-md-6 mb-4 mb-lg-0">
                <i style="color: red; cursor: pointer;" class="fa-solid fa-2x fa-times"></i>


            </div>
        </div>`)
      
        }

    }
    let summaryPrice = parseInt($(".summary-price").text())
    for (let product = 0; product < products.length; product++) { 
        summaryPrice += products[product].price * products[product].count;
        $(".summary-price").text(summaryPrice)
    }
    $(".basket-items-card").find(">:first-child").find(">:first-child").text("Cart - " + products.length + " items");
    $(".fa-times").click(function () {
        let name = $(this).parent().prev().prev().find(">:first-child").text();
        summaryPrice = 0;
        for (let product = 0; product < products.length; product++) {
            if (products[product].name == name) {
                products.splice(product, 1);
                $(".basket-items-card").find(">:first-child").find(">:first-child").text("Cart - " + products.length + " items");
                localStorage.setItem("products", JSON.stringify(products));
                
                
            }
            if(products[product] != products[length -1]) {
                summaryPrice += products[product].price * products[product].count;
            }
            $(".summary-price").text(summaryPrice)

        }
        $(this).parent().parent().html("");
        countElem.text(getProductCount(products))
        if(countElem.text() != 0) {
            $(".empty-modal").addClass("d-none")
        }
        else {
            $(".empty-modal").removeClass("d-none")
        }
    })

    countElem.text(getProductCount(products));
    
    $(".fa-minus").click(function () {
        if ($(this).next().text() > 1) {
            let oldval =    $(this).next().text() 
                --oldval
                $(this).next().text(oldval) 
                let name = $(this).parent().parent().prev().find(">:first-child").find(">:first-child").text();
                for (let product = 0; product < products.length; product++) {
                    
                    if (products[product].name == name) {
                        products[product].count -= 1;
                        $(this).parent().next().find(">:first-child").text( products[product].price * products[product].count)
                        localStorage.setItem("products", JSON.stringify(products));

                        summaryPrice -=  parseInt(products[product].price);
                        
                        $(".summary-price").text(summaryPrice)
                        
                    }
                    
                    
                   
                    
                    
                }
        }


    })
    $(".fa-plus").click(function () {
        if ($(this).prev().text() < 10) {
            let oldval = $(this).prev().text()
            ++oldval
            $(this).prev().text(oldval)

            let name = $(this).parent().parent().prev().find(">:first-child").find(">:first-child").text();
            for (let product = 0; product < products.length; product++) {
                if (products[product].name == name) {
                    products[product].count += 1;
                    $(this).parent().next().find(">:first-child").text(products[product].price * products[product].count)
                    localStorage.setItem("products", JSON.stringify(products));
                   

                    summaryPrice += parseInt(products[product].price);
                    $(".summary-price").text(summaryPrice)
                    
                }
            }
        }
    })
})

