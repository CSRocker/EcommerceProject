/**
 * Created by ClaraChen on 11/30/15.
 */
/* Execute When Document is Ready
 ------------------------------------------------
 */

$(document).ready(function(){

    // Intercept clicks to links in the main page
    $('a').click(function (event) {
        getClickedLink (this,event); // 'this' = clicked link ; 'event'= click
    });

});
