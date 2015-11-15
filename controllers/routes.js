// routes.js
// Calls for Libraries to be used
var _ = require('underscore')  // Javascript Helper Library

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
    // Render shop_usa.html
    res.render("shop_usa");
};

var shop_indiafn = function(req, res) {
    // Render shop_india.html
    res.render("shop_india");
};

var shop_burmafn = function(req, res) {
    // Render shop_burma.html
    res.render("shop_burma");
};

var shop_puertoricofn = function(req, res) {
    // Render shop_puertorico.html
    res.render("shop_puertorico");
};

var initial_productsfn = function(req, res) {
    // Render initialProducts.html
    res.render("initial_products", {layout:false});
};

var accountfn = function(req, res) {
    // Render account.html
    res.render("account", {layout:false});
};

var add_product_formfn = function(req, res) {
    // Render product.html
    res.render("add_product_form", {layout:false});
};

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
    '/add_product_form': add_product_formfn,

});

module.exports = routes;