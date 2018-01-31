const express = require('express');
require('./services/passport')

// Fetch routes
const googleAuth = require('./routes/routeGoogleAuthentication')

const app = express();
googleAuth(app);

app.listen(process.env.PORT || 5000);
