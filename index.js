const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./models/user');
require('./services/passport');

mongoose.connect(keys.mongoDevUri);
const app = express();

// Register routes
require('./routes/routeGoogleAuthentication')(app);

app.listen(process.env.PORT || 5000);
