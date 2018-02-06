const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./services/passport');
require('./models/user');

mongoose.connect(keys.mongoDevUri);
const app = express();

// Register routes
require('./routes/routeGoogleAuthentication')(app);

app.listen(process.env.PORT || 5000);
