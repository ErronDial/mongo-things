const express = require ('express'),
    app = express(),
    dotenv = require('dotenv').config({path:'./config/config.env'})
    PORT = process.env.PORT || 8000;
    path = require('path'),
    connectDb = require('./config/db'),
    morgan = require('morgan'),
    session = require('express-session'),
    MongoDbStore = require('connect-mongodb-session')(session);

const dbstorage = new MongoDbStore({
    uri: process.env.DATABASE.uri,
    collection: 'session'
})
app.use(session({
    secret: process.env.session_secret,
    resave:false,
    saveUninitialized: false,
    store: dbstorage,
    
}))
const publicRoutes = require('./routes/public-routes');
const adminRoutes = require('./routes/admin-routes');




//Middleware
app.use(express.json())

connectDb();
app.use(morgan('dev'))



app.use('/', publicRoutes)
app.use('/api', adminRoutes)



//Create server and listen to the port
app.listen(PORT, err => {
    err ? console.log(`something went wrong ${err}`) : console.log(`server started on port:${PORT}`)
})