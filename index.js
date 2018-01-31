const express = require('express');
require('./services/passport')

const app = express();

// Register routes
require('./routes/routeGoogleAuthentication')(app);

app.listen(process.env.PORT || 5000);
