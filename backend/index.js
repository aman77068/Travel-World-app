import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose"
import cors from 'cors'
import cookieParser from "cookie-parser";

dotenv.config();

import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import reviewRoute from './routes/reviews.js';
import bookingRoute from './routes/booking.js';



dotenv.config()
const app = express()
const port = process.env.PORT || 8000;
const corsOptions = {
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}



//database connection  B6QyFYFM1qG7BPzX
// Middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

mongoose.set("strictQuery", false);

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDb database connected');
    } catch (err) {
        console.log('MongoDb database connection failed', err);
    }
};



//middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/tours',tourRoute);
app.use('/api/v1/users',userRoute);
app.use('/api/v1/review', reviewRoute);
app.use('/api/v1/booking', bookingRoute);



const PORT = process.env.port || 8000;
app.listen(PORT, ()=>{
    connect();
    console.log('server listening on port', PORT)
})