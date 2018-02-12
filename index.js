const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

require('./models/user');
require('./services/passport');

mongoose.connect(keys.mongoUri);
const app = express();

// Configure cookies
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,               // 30 days in ms
        keys: [keys.cookieKey, keys.cookieKey2]         // More than 1 key could be provided to provide additional layer of security
    })
)

// Enable cookies in passport
app.use(passport.initialize())
app.use(passport.session())

// Register routes
require('./routes/routeGoogleAuthentication')(app);

app.listen(process.env.PORT || 5000);
