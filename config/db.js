const mongoose = require('mongoose');
const connectDb = async () => {
    const connect = await mongoose.connect(process.env.DATABASE, {
        useNewUrlParser:true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    });
    console.log('Connected to database:', connect.connection.host)
}

module.exports = connectDb;