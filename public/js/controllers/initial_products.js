/**
 * Created by Carlos on 11/24/15.
 */
/* Execute When Document is Ready
 ------------------------------------------------ */
$(document).ready(function(){

    // Intercept clicks to links on the page

    $("a.view-product, a.view-category").click(function (event) {
        getClickedLink (this,event); // 'this' = clicked link ; 'event'= click
    });

});