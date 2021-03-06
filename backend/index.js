import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import router from './src/routers/user.routes.js';
import connectToDb from './config/dbConfig.js';
import dotenv from 'dotenv';
import authRoute from './src/routers/auth.routes.js';
import { Swaggiffy } from 'swaggiffy';
import cors from 'cors';
import vehicleRouter from './src/routers/vehicle.routes.js';
import carOwnerRouter from './src/routers/carOwner.routes.js';
import {
    protect,
    authorize
} from './src/middlewares/auth.middleware.js';


const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(logger('dev'));

dotenv.config({path: '.env'});

await connectToDb();

app.get('/', (req, res) => {
    return res.status(200).json({message: 'Welcome to the voting system api'});
})
app.use('/api/v1/users', router);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/vehicles',vehicleRouter);
app.use('/api/v1/car-owners', carOwnerRouter);

const port = 5050;

app.listen(port, () => {
    console.log(`Our server is running on port  ${port}`);
});

new Swaggiffy().setupExpress(app).swaggiffy()