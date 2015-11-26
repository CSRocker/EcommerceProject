/**
 * Created by Carlos on 11/7/15.
 */
var Help = require('../helper/help.js')

module.exports = function (app, db, passport) {

    /* Routes for APIs Calls
     =========================*/
    app.post('/signup', function(req, res){

        global.db.User.createUser(req, function(savedUser) {
            if(savedUser) {
                // User created, send 'OK' response and a JSON object of the new User.
                res.status(200).json(savedUser);
            }
        });

    });

    // '/checkuser' - Check if users exists
    app.post('/checkuser', function(req, res) {
        // Query the database to verify if user exists
        global.db.User.userExist(req, function(exist){
            if(exist) res.send({available:false});
            else res.send({available:true});
        });
    });

    // '/login' - Handle Login Reguest
    app.post('/login', function(req, res, next) {
        // Use Passport with a 'Local' strategy for Authentication
        passport.authenticate('local', function(err, user, info) {
            if (err) { return next(err) }
            if (!user) {
                req.session.messages =  [info.message];
                //return res.redirect('/');
            }

            // Redirect to login after successful authentication
            req.logIn(user, function(err) {
                if (err) { return next(err); }
                req.session.messages = "";
                //return res.redirect('/');
                res.status(200).json({id:1});
            });
        })(req, res, next);

    });

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

    app.post('/getuserinfo', function(req, res) {

        global.db.User.getUser(req, function(user){
            res.send(user);
        })

    });

}