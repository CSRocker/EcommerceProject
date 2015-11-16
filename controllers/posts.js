/**
 * Created by Carlos on 11/7/15.
 */
var Help = require('../helper/help.js')

module.exports = function (app, db, passport) {

    /* Routes for APIs Calls
     =========================*/
    app.post('/products', function(req, res) {

        global.db.Product.saveProduct(req,function(savedProduct,error){
            if(error){
                console.log("An Error Occurred Saving the product: "+error);
                res.status(300).send('error');
            } else {
                console.log("OK, Returned response");
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

}