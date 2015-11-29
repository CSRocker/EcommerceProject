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
            product: {type: DataTypes.INTEGER, allowNull: false}
        },
        {
            classMethods: {
                associate: function(models) {
                    Orderproduct.hasMany(models.Product);
                    Orderproduct.belongsTo(models.Order, {
                        onDelete: "CASCADE",
                        foreignKey: {
                            allowNull: false
                        }
                    });
                }
            },
            createOrderWithProudct: function(req, callback) {
                var _Orderproduct = this;

                var newOrderProduct = _Orderproduct.build({
                    qty: req.body.qty,
                    product: req.body.id,
                    Order: {
                        date: new Date(),
                        totalprice: req.body.price
                    }
                }, {
                    include: [ Order ]
                });

                newOrderProduct.save().then(function (newOrder) {
                    console.log("New order Saved to Database");
                    var error = null;
                    callback(newOrder, error);
                }).error(function (error) {
                    var responserMsg = "Error placing the order";
                    console.log(responserMsg + ": " + error);
                    callback(responserMsg, error)
                });
            },
            addProductToOrder: function(req, pendingOrder, callback) {
                var _Orderproduct = this;


            }
        });
};