import express from 'express';
import { registerDefinition } from 'swaggiffy';
import { getAllVehicles, getAllVehiclesAndTheirOwners, getVehicle, saveVehicle } from '../controllers/vehicle.controller.js';
import {
    protect,
    authorize
} from '../middlewares/auth.middleware.js'
const vehicleRouter = express.Router({
    mergeParams: true
});

vehicleRouter.post("/", [protect, authorize('Admin')], saveVehicle);

vehicleRouter.route('/:id').get(getVehicle);

vehicleRouter.route('/').get(getAllVehicles);

vehicleRouter.route('/vehicle-owners').get(getAllVehiclesAndTheirOwners);

registerDefinition(vehicleRouter, {tags: 'Vehicle', basePath: '/api/v1/vehicles', mappedSchema: 'Vehicle'});

export default vehicleRouter;