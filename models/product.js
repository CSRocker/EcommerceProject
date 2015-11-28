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
            imagename: {type: DataTypes.STRING, allowNull: true},
            description: {type: DataTypes.TEXT, allowNull: false}
        },
        {
            classMethods: {

                associate: function(models) {
                    Product.hasOne(models.Manufacturer)
                    Product.hasMany(models.Orderproduct)
                },

                saveProduct: function(req, callback){
                    var _Product = this;

                    var newProduct = _Product.build({
                        productname: req.body.productname,
                        country: req.body.country,
                        qty: req.body.qty,
                        price: req.body.price,
                        type: req.body.type,
                        expiration: req.body.expiration,
                        imagename: req.body.file,
                        description: req.body.description
                    });

                    newProduct.save().then(function (savedData) {
                        console.log("New Product Saved to Database");
                        var error = null;
                        callback(savedData,error);
                    }).error(function(error) {
                        var responserMsg = "Error Storing Rates Info";
                        console.log(responserMsg+": "+error);
                        callback(responserMsg,error)
                    });
                },

                deleteProduct: function(req, callback){
                    var _Product = this;

                    _Product.destroy({where:{id: req.body.productid}}).then(function(error,result){
                        if(error == '0'){
                            console.log("Error destroying the object");
                            callback("Error");

                        } else {
                            console.log("Success deleting object");
                            callback("Success");

                        }


                    });
                },

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

                getAllProducts: function(callback){
                    var _Product = this;

                    _Product.findAll().then(function(products) {
                        callback(products);
                    });
                },

                getProductById: function(req, callback){
                    var _Product = this;

                    _Product.findById(req.params.id).then(function(product) {
                        callback(product);
                    })
                }
            }
        });
};