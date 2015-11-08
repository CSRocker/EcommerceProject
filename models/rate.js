/**
 * Created by Tech-Team on 11/4/15.
 */
/*
 Object/Relational mapping for instances of the Rates class.

 - classes correspond to tables
 - instances correspond to rows
 - fields correspond to columns

 In other words, this code defines how a row in the PostgreSQL "Rates"
 table maps to the JS Order object. Note that we've omitted a fair bit of
 error handling from the classMethods and instanceMethods for simplicity.
 */
var http = require('http');

module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Rates", {
        id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
        date: {type: DataTypes.DATE, allowNull: false},
        thirtyYear: {type: DataTypes.STRING, allowNull: true},
        fifteenYear: {type: DataTypes.STRING, allowNull: true}
    }, {
        classMethods: {
            getRates: function(successcb, errcb) {
                var _Rates = this;
                http.get("http://www.zillow.com/webservice/GetRateSummary.htm?zws-id="+process.env.ZILLOW_API_KEY+"&output=json", function(res) {

                    var body = "";
                    var data;

                    res.on('data', function(chunk) {
                        body += chunk;
                    });

                    res.on('end', function() {
                        data = JSON.parse(body);

                        if(data.message.code == '0') {
                            var newRates = _Rates.build({
                                date: new Date(),
                                thirtyYear: data.response.today.thirtyYearFixed,
                                fifteenYear: data.response.today.fifteenYearFixed
                            });

                            newRates.save().then(function (savedData) {
                            }).error(function(error) {
                                console.log("Error Storing Rates Info. Msg: "+error);
                            });
                        }

                    });

                    res.on('error', function(err) {
                        console.log("Error Getting Data From ZILLOW: "+err);
                    });

                });
            }
        }
    });
};
