/**
 * Created by Carlos on 11/4/15.
 */
/* Object/Relational mapping for instances of the Users class.
 - classes correspond to tables
 - instances correspond to rows
 - fields correspond to columns
 In other words, this code defines how a row in the postgres order table
 maps to the JS Order object.
 */
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Product", {
            productname: {type: DataTypes.STRING, allowNull: false},
            country: {type: DataTypes.STRING, allowNull: false},
            qty: {type: DataTypes.INTEGER, allowNull: false},
            price: {type: DataTypes.DECIMAL(10, 2), allowNull: false},
            type: {type: DataTypes.STRING, allowNull: false},
            expiration: {type: DataTypes.DATE, allowNull: true},
            imagename: {type: DataTypes.STRING, allowNull: true}
        },
        {
            classMethods: {

                associate: function (models) {
                    Product.hasOne(models.Manufacturer)
                    Product.hasMany(models.Orderproduct)
                },

                saveProduct: function (req, callback) {
                    var _Product = this;

                    var newProduct = _Product.build({
                        productname: req.body.productname,
                        country: req.body.country,
                        qty: req.body.qty,
                        price: req.body.price,
                        type: req.body.type,
                        expiration: req.body.expiration,
                        imagename: req.body.file
                    });

                    newProduct.save().then(function (savedData) {
                        console.log("New Product Saved to Database");
                        var error = null;
                        callback(savedData, error);
                    }).error(function (error) {
                        var responserMsg = "Error Storing Rates Info";
                        console.log(responserMsg + ": " + error);
                        callback(responserMsg, error)
                    });
                },

                deleteProduct: function (req, callback) {
                    var _Product = this;

                    _Product.destroy({where: {id: req.body.productid}}).then(function (error, result) {
                        if (error == '0') {
                            console.log("Error destroying the object");
                            callback("Error");

                        } else {
                            console.log("Success deleting object");
                            callback("Success");

                        }


                    });
                },

                getProduct: function (req, callback) {
                    var _Product = this;

                    _Product.findAll().then(function (product) {
                        if (product) {
                            callback(product);
                            //console.log(product);

                        } else {
                            console.log("Error retrieving Product");
                        }
                    });
                },

                // Get the Product info from USA
                getProductUSA: function (req, callback) {
                    var _Product = this;

                    _Product.findAll({where: {country: "USA"}, limit: 10}).then(function (product) {
                        if (product) {
                            callback(product);
                            //console.log(product);

                        } else {
                            console.log("Error retrieving Product");
                        }
                    });
                },


                // Get the Product info from India
                getProductIndia: function (req, callback) {
                    var _Product = this;

                    _Product.findAll({where: {country: "India"}, limit: 10}).then(function (product) {
                        if (product) {
                            callback(product);
                            //console.log(product);

                        } else {
                            console.log("Error retrieving Product");
                        }
                    });
                },

                // Get the Product info from Burma
                getProductBurma: function (req, callback) {
                    var _Product = this;

                    _Product.findAll({where: {country: "Burma"}, limit: 10}).then(function (product) {
                        if (product) {
                            callback(product);
                            //console.log(product);

                        } else {
                            console.log("Error retrieving Product");
                        }
                    });
                },

                // Get the Product info from Puerto Rico
                getProductPuertoRico: function (req, callback) {
                    var _Product = this;

                    _Product.findAll({where: {country: "Puerto Rico"}, limit: 10}).then(function (product) {
                        if (product) {
                            callback(product);
                            //console.log(product);

                        } else {
                            console.log("Error retrieving Product");
                        }
                    });
                },
                /*
                 getProductById: function(req, callback){
                 var _Product = this;

                 _Product.findOne({where:{id:17}}).then(function(error, product){
                 if(product){
                 callback(product);
                 }else {
                 console.log("error looking for the product by Id");
                 }
                 });
                 },

                 },
                 */
                /* getProductById: function(req, callback){
                 var _Product = this;

                 _Product.findById(req.body.productId).then(function(product){
                 if(product){
                 callback(product);
                 } else {
                 //code for error
                 }
                 })
                 }*/

                getAllProducts: function (callback) {
                    var _Product = this;

                    _Product.findAll().then(function (projects) {
                        callback(projects);
                    });
                }
            }
        });
};