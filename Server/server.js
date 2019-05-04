var express = require('express');
var logger = require('morgan');
var bcrypt = require('bcrypt-nodejs');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var User = require('./routes/userModel');
var JSON = require('circular-json');
var nodemailer = require('nodemailer');
var async = require('async');
var crypto = require('crypto');
var path = require('path');
var favicon = require('serve-favicon');

// Passport Local Strategy

passport.use(new LocalStrategy(function (username, password, done) {
    User.findOne({ username: username }, function (err, user) {
        if (err) return done(err);
        if (!user) return done(null, false, { message: 'Incorrect username.' });
        user.comparePassword(password, function (err, isMatch) {
            if (isMatch) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Incorrect password.' });
            }
        });
    });
}));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

// Connecting To Mongo (mLab)

mongoose.connect('mongodb://hxnain619:hxn6190@ds125502.mlab.com:25502/server-mongodb',
    { useNewUrlParser: true }, function (err, data) {
        if (err) return console.log(err.message);
        console.log("Connected To MongoDB!!");
    });

var app = express();

// ********** Headers ************
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// ********************* Middleware ************

app.set('port', process.env.PORT || 4000);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set path for static assets
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon('public/images/nav-logo-0.png'))
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'session secret key' }));
app.use(passport.initialize());
app.use(passport.session());


// ************ Routes  *****************

app.get('/api/login', function (req, res) {

    User.find({}, (err, data) => {
        if (err) throw err;
        res.status(200).send(JSON.stringify(data));
    });
});

// SignUp , Create Account
app.post('/api/signup', function (req, res) {

    User.findOne({ email: req.body.email }, function (err, user) {

        if (user) {
            console.log('user exists!!');
            return res.sendStatus(302).end();
        }
        var user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            isAdmin: false
        });
        user.save(function (err) {
            req.logIn(user, function (err) {
                console.log("Created UpUp Manga Account Succesfully!!");
                res.sendStatus(200);
            });
        });
    });
});

// Update A Password

app.put('/api/updatepass', (req, res) => {

    User.findOneAndUpdate(req.body.email, { password: req.body.password }, (err, response) => {
        if (err) throw res.send(err);
        response.save(function (err, data) {
            data = response;
            console.log(data);
            res.send(data);
        });


    })
})

// Forgot Pass 

app.post('/api/forgot', function (req, res, next) {
    async.waterfall([function (done) {
        crypto.randomBytes(20, function (err, buf) {
            var token = buf.toString('hex');
            done(err, token);
        });
    }, function (token, done) {
        User.findOne({ email: req.body.email }, function (err, user) {
            console.log(user, req.body.email)
            if (!user) {
                return res.sendStatus(302);
            }

            user.resetPasswordToken = token;
            user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
            user.save(function (err) {
                done(err, token, user);
            });
        });
    }, function (token, user, done) {

        User.findOne({ email: user.email }, function (err, user) {
            console.log(user);

            if (!user) {
                return res.sendStatus(302);
            }
            var transport = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                requireTLS: true,
                auth: {
                    // Add Your Credentials
                    user: "hxan619@gmail.com",
                    pass: "Reymysterio^!(0"
                },
                tls: {
                    rejectUnauthorized: false
                }
            });
            var mailOptions = {
                to: user.email,
                subject: 'UpUpManga Password Reset',
                text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                    'Please click on the following link to complete the process:\n\n'
                    + 'http://' + req.headers.host + '/reset/' + token +
                    '\n\n' +
                    'If you did not request this, please ignore this email and your password will remain unchanged.\n'
            };
            transport.sendMail(mailOptions, function (err) {
                done(err, 'done');
            });
        });
    }], function (err) {
        if (err) return next(err);
        return res.sendStatus(200);
    });
});

//   to Send Reset Link

app.get('/reset/:token', function (req, res) {
    User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function (err, user) {
        if (!user) {
            return res.redirect('http://localhost:3000/asd');
        }
        res.render('reset');
    });
});

// To Reset / Update PAssword

app.post('/reset/:token', function (req, res) {
    async.waterfall([function (done) {
        User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function (err, user) {
            if (!user) {
                return res.sendStatus(404).redirect('/reset');
            }

            user.password = req.body.password;
            user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;

            user.save(function (err) {
                req.logIn(user, function (err) {
                    done(err, user);
                });
            });
        });
    }, function (user, done) {
        var transport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                // Add Your Credentials
                user: GMAIL,
                pass: PASS
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        var mailOptions = {
            to: user.email,
            subject: 'Your password has been changed',
            text: 'Hello,\n\n' + 'This is a confirmation message that the password for your UpUpManga account ' + user.email + ' has just been changed.\n'
        };
        transport.sendMail(mailOptions, function (err) {
            done(err);
            return res.redirect('http://localhost:3000/login');
        });
    }], function (err) {
        console.log(err);

    });
});

// to contact 

app.post('/api/message', (req, res) => {
        var transport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                // Add Your Credentials
                user: GMAIL,
                pass: PASS
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        var mailOptions = {
            to: req.body.email,
            subject: req.body.subject,
            text: req.body.text
        };
        transport.sendMail(mailOptions, function (err) {
            res.sendStatus(200)
        });
})
// ************* App Post ************

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
