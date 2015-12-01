/**
 * Created by Carlos on 11/30/15.
 */
/* Execute When Document is Ready
 ------------------------------------------------ */
$(document).ready(function(){

    //  Code to handle 'Delete Product from Cart
    $("a.cart_quantity_delete").click(function (event) {
        event.preventDefault();

        console.log("I was Clicked link to delete");
        // Get the link URL
        var url = $(this).attr('href');

        // Post the form data to the Server
        $.post(url, function (data) {
            if (data.productAdded) {
                // Show Message to User - Modal Window
                $('#productAddedToShoppingCartAlert').slideDown();

                // Update Shopping Cart Badge
                $('#cartBadge').html(data.qtyInCart);

            }
            else {
                if(!data.userID){
                    // Show Message to User - Modal Window
                    $('#loginForShoppingCartAlert').slideDown();
                }
                // Code to handle error

            }
        });

    });

    // Hide Alert on "x" click
    $("#closeShoppingCartAlert").click(function() {
        // Hide Alert
        $('#productAddedToShoppingCartAlert').fadeOut();
    });

    // Hide Alert on "x" click
    $("#closeLoginForShoppingCartAlert").click(function() {
        // Hide Alert
        $('#loginForShoppingCartAlert').fadeOut();
    });

});

/* Execute When Loading Code
 ------------------------------------------------------------ */

// Hide Shopping Cart Alerts
$('#productAddedToShoppingCartAlert').hide();
$('#loginForShoppingCartAlert').hide();