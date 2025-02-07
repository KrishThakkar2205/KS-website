require('dotenv').config({ path: './.env' });
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');


const app = express();


//Section-1 -> Using middlewares

app.use(express.json());         //For json responses only
app.use(cors({
    origin: ['http://localhost:5173/'],         //For multiple platform integration
    credentials: true
}));
app.use(express.urlencoded({ extended: false }));         //For post requests and recieving the data in url format
app.use(cookieParser());         //For cookie transformations


//Sectin-2 -> Router integration
app.use('/', require('./routes/test'));

//Section-3 -> Listening to the server
app.listen(8000);
