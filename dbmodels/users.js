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
    return sequelize.define("Users", {
        email: {type: DataTypes.STRING, allowNull: false, primaryKey: true},
        password: {type: DataTypes.TEXT, allowNull: true},
        name: {type: DataTypes.STRING, allowNull: false},
        address: {type: DataTypes.STRING, allowNull: true},
        phone: {type: DataTypes.STRING, allowNull: true},
        social: {type: DataTypes.STRING, allowNull: true},
        salt: {type: DataTypes.TEXT, allowNull: true},
        hash: {type: DataTypes.TEXT, allowNull: true}
    });
};