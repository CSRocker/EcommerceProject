// routes.js
// Calls for Libraries to be used
var _ = require('underscore')// Javascript Helper Library
var Help = require('../helper/help.js')
/* .get()
 =========================*/
module.exports = function (app, db, passport) {
    //should be .get() testing

    app.get('/showproduct', function(req,res) {
        global.db.Product.showProduct(req, function (ProductInfo, error) {
            if (error) {
                console.log("Error retrieving Order" + error);
                res.status(300).send('error');

            } else {
                console.log("Order Summary retrieving Succeeded!");
                res.status(200).json(ProductInfo);
            }
        });
    });
}


/* Routes Rendering Views
=========================*/
var indexfn = function(req, res) {

    // Render index.html
    res.render("index");
};

var cartfn = function(req, res) {
    // Render cart.html
    res.render("cart");
};

var checkoutfn = function(req, res) {
    // Render checkout.html
    res.render("checkout");
};

var loginfn = function(req, res) {
    // Render login.html
    res.render("login");
};

var contactfn = function(req, res) {
    // Render contact.html
    res.render("contact");
};

var detailsfn = function(req, res) {
    // Render details.html
    res.render("details");
};

var shop_usafn = function(req, res) {

    var productReturned = [];

    global.db.Product.getProductUSA(req, function(product){
        if(product){
            productReturned = product;
            // var randomProduct=getRandom(productReturned);  //call function to get random index of product array to display

            // Render shop_usa.html
            res.render("shop_usa", {products:productReturned});
        } else {
            res.send("error");
        }
    });

    // Render shop_usa.html
    // res.render("shop_usa");
};

var shop_indiafn = function(req, res) {

    var productReturned = [];

    global.db.Product.getProductIndia(req, function(product){
        if(product){
            productReturned = product;
            // var randomProduct=getRandom(productReturned);  //call function to get random index of product array to display

            //Render shop_india.html
            res.render("shop_india",{products:productReturned});
        } else {
            res.send("error");
        }
    });
    // Render shop_india.html
   // res.render("shop_india");
};

var shop_burmafn = function(req, res) {
    var productReturned = [];

    global.db.Product.getProductBurma(req, function(product){
        if(product){
            productReturned = product;
            // var randomProduct=getRandom(productReturned);  //call function to get random index of product array to display

            // Render shop_burma.html
            res.render("shop_burma",{products:productReturned});
        } else {
            res.send("error");
        }
    });

    // Render shop_burma.html
    //res.render("shop_burma");
};

var shop_puertoricofn = function(req, res) {

    var productReturned = [];

    global.db.Product.getProductPuertoRico(req, function(product){
        if(product){
            productReturned = product;
            // var randomProduct=getRandom(productReturned);  //call function to get random index of product array to display

            // Render shop_puertorico.html
            res.render("shop_puertorico",{products:productReturned});
        } else {
            res.send("error");
        }
    });
    // Render shop_puertorico.html
    //res.render("shop_puertorico");
};

var initial_productsfn = function(req, res) {

    var productReturned = [];

    global.db.Product.getProductByCountry(req, function(product){
        if(product){
            productReturned = product;
            // var randomProduct=getRandom(productReturned);  //call function to get random index of product array to display

            // Render initialProducts.html
            res.render("initial_products", {products:productReturned});
        } else {
            res.send("error");
        }
    });

};

var accountfn = function(req, res) {
    // Render account.html
    res.render("account", {layout:false});
};

var orderStatusfn= function(req, res){
    //Render orderStatus.html

        res.render("orderStatus");


};

var accountsettingfn= function(req, res){
    //Render accountsetting.html

    res.render("accountsetting", {layout:false});
};

var add_product_formfn= function(req, res){
    //Render add_product_form.html

    res.render("add_product_form", {layout:false});
};

/* Example code to retrieve the product info
============================================
var get_product_infofn= function(req, res){

    var productReturned = [];

    //Render get_product_info.html
    /!*var dummyProd = {
        productname: 'Candy',
        price: '$2.00'
    };*!/


    global.db.Product.getProduct(req, function(product){
        if(product){
            productReturned = product;
            // var randomProduct=getRandom(productReturned);  //call function to get random index of product array to display
            res.render("get_product_info", {products:productReturned});
        } else {
            res.send("error");
        }
    });


};*/


var confirm_orderfn= function(req,res){
    //Render confirm_order.html
    //testing

    res.render("confirm_order");
}

/* get Random index of Returned products array
==============================================
    var getRandom = function(products){

    var r = Math.floor(Math.random()* products.length);
    var indexNumb=[]; //to store random index number for displaying products

    for(var i=0; i<products.length; i++){
        var j=0;

        while(indexNumb[j]!= r && j<=i){
            indexNumb[i]=r;
            j++;
            r = Math.floor(Math.random()* products.length);
        }

    }
    var randomProduct =[]; // declare an array to store random products to display
    for(var i=0; i<arraySize; i++){
        randomProduct[i]= products[indexNumb[i]];
    }
    return randomProduct;
};
 */ // get random number function

/* Map Routes
======================*/
var define_routes = function(dict) {
    var toroute = function(item) {
        return _.object(_.zip(['path', 'fn'], [item[0], item[1]]));
    };
    console.log("We are in routes...");
    return _.map(_.pairs(dict), toroute);
};

/* Define Routes
 ======================*/
var routes = define_routes({
    '/': indexfn,
    '/cart': cartfn,
    '/checkout': checkoutfn,
    '/login': loginfn,
    '/contact': contactfn,
    '/details': detailsfn,
    '/shop_usa': shop_usafn,
    '/shop_india': shop_indiafn,
    '/shop_burma': shop_burmafn,
    '/shop_puertorico': shop_puertoricofn,
    '/initial_products': initial_productsfn,
    '/account': accountfn,
    '/orderStatus': orderStatusfn,
    '/accountsetting': accountsettingfn,
    '/add_product_form': add_product_formfn,
    '/confirm_order': confirm_orderfn
    //'/get_product_info': get_product_infofn

});

module.exports = routes;