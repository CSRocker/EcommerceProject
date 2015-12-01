/**
 * Created by Carlos on 11/30/15.
 */
/* Execute When Document is Ready
 ------------------------------------------------ */
$(document).ready(function(){

    //  Code to handle 'Delete Product from Cart
    $("a.cart_quantity_delete").click(function (event) {
        event.preventDefault();

        // Get the link URL
        var url = $(this).attr('href');
        var callerElement = $(this).closest("tr");

        // Post the form data to the Server
        $.post(url, function (data) {

            console.log("Lines Deleted", data.linesDeleted);

            if (data.linesDeleted) {
                // Show Message to User - Modal Window
                $('#productRemovedFromShoppingCartAlert').slideDown();

                $(callerElement).fadeOut( "slow", function() {
                    $(callerElement).remove();
                });

                // GET qty in shopping cart
                $.get('/shoppingcart/qtys', function (data) {
                    // Update Shopping Cart Badge
                    $('#cartBadge').html(data.qtyInCart);

                    if(data.qtyInCart < 1){
                        loadInitialProducts ();
                    }
                });
            }
            else {
                // Error Deleting product - Warn User

            }
        });

    });

    // Hide Alert on "x" click
    $("#closeProductRemovedFromShoppingCartAlert").click(function() {
        // Hide Alert
        $('#productRemovedFromShoppingCartAlert').fadeOut();
    });

});

/* Execute When Loading Code
 ------------------------------------------------------------ */

// Hide Shopping Cart Alerts
$('#productRemovedFromShoppingCartAlert').hide();
