/**
 * Created by Carlos on 11/24/15.
 */
/* Execute When Document is Ready
 ------------------------------------------------ */
$(document).ready(function(){

    // Intercept clicks to links in the main page

    $('a.view-product').click(function (event) {
        getClickedLink (this,event); // 'this' = clicked link ; 'event'= click
    });

});