const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');

dotenv.config();

//mongo db connection
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true},
    () => {console.log('Connected to mongodb')});


//middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan('common'))

//routes
app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);

app.get('/',(req,res) => {
    res.send('Welcome to Homepage')
})

app.listen(8800 ,() => {
    console.log('backend server is running');
})