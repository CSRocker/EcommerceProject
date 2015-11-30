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
    return sequelize.define("Orderproduct", {
            qty: {type: DataTypes.INTEGER, allowNull: false},
            productID: {type: DataTypes.INTEGER, allowNull: false},
            orderID: {type: DataTypes.INTEGER, allowNull: false}
        },
        {
            classMethods: {

                addProductToOrder: function (req, order, callback){
                    var _Orderproduct = this;

                    var newOrderproduct = _Orderproduct.build({
                        qty: req.body.qty,
                        productID: req.params.id,
                        orderID: order.id
                    });

                    newOrderproduct.save().then(function (savedOrderproduct) {
                        callback(savedOrderproduct);
                    }).error(function (error) {

                        // Do something with error
                        console.log("Error!, we must do something: 'orderproduct.js, line 34");
                    });
                },
                countProductsInOrder: function (orderID, callback){
                    var _Orderproduct = this;

                    _Orderproduct.sum('qty', { where: { orderID: orderID} }).then(function(sum) {
                        // return the sum of items for the order
                        callback(sum);
                    })
                }
            }
        });
};