/**
 * Created by Carlos on 11/14/15.
 */
/* Execute When Document is Ready
 ------------------------------------------------ */
$(document).ready(function(){

    $('#addProductForm_submit').click(function(e) {
        e.preventDefault();

        console.log("about to post to server /products: "+$("#addProductForm").serialize());

        
        $.post('/products', $("#addProductForm").serialize(), function(data) {
            if(data == 'error') {
                $('#addProductForm_status').html('An Error Occurred, Try Again');
            }
            else {

                $('#addProductForm_status').html('Success! Product Added');
                $("#addProductForm")[0].reset();
            }
        });

    });

    $('#deleteProduct_submit').click(function(e){
        e.preventDefault();

        $.post('/delete', $("#deleteProductForm").serialize(), function(message) {
            if(message == 'error') {
                $('#deleteProductForm_status').html('An Error Occurred, Try Again');
            }
            else {
                $('#deleteProductForm_status').html('Success! Product Deleted');
                $("#deleteProductForm")[0].reset();
            }
        });
    });


   /* $('#uploadImage_click').click(function(e){
        e.preventDefault();
        /// Include the node file module
        var fs = require('fs');
        req.files.image.path
    });*/



});