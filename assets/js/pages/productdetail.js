$(function () {
    $(".fa-minus").click(function () {
        if ($(".info-item-count input").val() > 1) {
            $(".info-item-count input").val(function (i, oldval) {
                return --oldval;
            });
        }


    })
    $(".fa-plus").click(function () {
        if ($(".info-item-count input").val() < 10) {

            $(".info-item-count input").val(function (i, oldval) {
                return ++oldval;
            });
        }




    })
})