/**
 * Created by Tech-team on 11/4/15.
 */
/* Object/Relational mapping for instances of the Users class.
 - classes correspond to tables
 - instances correspond to rows
 - fields correspond to columns
 In other words, this code defines how a row in the postgres order table
 maps to the JS Order object.
 */
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("User", {
        email: {type: DataTypes.STRING, allowNull: false},
        password: {type: DataTypes.TEXT, allowNull: false},
        name: {type: DataTypes.STRING, allowNull: false},
        address: {type: DataTypes.STRING, allowNull: true},
        phone: {type: DataTypes.STRING, allowNull: true},
        social: {type: DataTypes.STRING, allowNull: true},
        salt: {type: DataTypes.TEXT, allowNull: false},
        hash: {type: DataTypes.TEXT, allowNull: false}
    },
        {
            classMethods: {
                associate: function(models) {
                    User.hasMany(models.Card)
                    User.hasMany(models.Order)
                }
            }
        });
};