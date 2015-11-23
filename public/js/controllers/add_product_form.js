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


    //upload Image file
    $('#uploadImageForm_submit').click(function(e){
       /// e.preventDefault();
        /// Include the node file module
        var fs = require('fs');
        fs.readFile(req.files.image.path,function(err, data){
            var imageName= req.files.image.name;

            console.log(data);
            /// If there's an error
            if(!imageName){
                console.log("There was an error");
                res.redirect("/"); // render back to homepage * need to edit some code here to render back somewhere else
                res.end();
            }else{
                /// post files
                $.post('/uploadImageDB',$(data).serialize(), function(data){
                    if(data == 'error') {
                        $('#uploadImageForm_status').html('An Error Occurred, Try Again');
                    }
                    else {


                        $('#uploadImageForm_status').html('Success! Product Added');
                        $("#uploadImageForm")[0].reset();
                    }
                });

                var newPath= __dirname + "/images/products/" + imageName;
                fs.wrtieFile(newPath, data, function(err){
                    /// let's see it .
                    res.redirect("/images/products/" + imageName); /// Maybe it should render back to add_product_form
                });

            }
        });

    });



});