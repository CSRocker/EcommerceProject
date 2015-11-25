/**
 * Created by Carlos on 11/7/15.
 */
var Help = require('../helper/help.js')

module.exports = function (app, db, passport) {

    /* Routes for APIs Calls
     =========================*/
    app.post('/products', function(req, res) {

        /* under construction
        global.db.Image.saveImage(req, function(savedImage,error){
            if(error){
                console.log("An Error Occured Saving the image"+ error);
            } else {
                console.log(savedImage);
                console.log("OK, Return Response to Saving Image");
             }
        }),
             */
        global.db.Product.saveProduct(req,function(savedProduct,error){
            if(error){
                console.log("An Error Occurred Saving the product: "+error);
                res.status(300).send('error');
            } else {
                console.log("OK, Returned response");


                console.log(savedProduct);
                res.status(200).json(savedProduct);
            }
        });

    });

    app.post('/delete', function(req, res) {

        global.db.Product.deleteProduct(req,function(result){
            if(result == 'Error'){
                console.log("An Error Occurred Saving the product: "+result);
                res.status(300).send('error');
            } else {
                console.log("OK Object Deleted, Returned response");
                res.status(200).send('success');
            }
        });

    });
    /* Testing */

    app.post('/confirm', function(req, res) {

        global.db.Order.confirmOrder(req,function(savedOrder,error){
            if(error){
                console.log("An Error Occurred placing the order: "+error);
                res.status(300).send('error');
            } else {
                console.log("OK, Returned response");
                res.status(200).json(savedOrder);
            }
        });

    });


    app.post('/uploadImageDB', function(req, res){
        global.db.Image.saveImage(req,function(savedImage, error){
            if (error){
                consoel.log("Error Saving Images" + error);
                res.status(300).send('error');
            } else {
                console.log("Saving Images Succeeded!!");
                res.status(200).json(savedImage);
            }
        })
    });

};