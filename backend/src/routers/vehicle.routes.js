import express from 'express';
import { registerDefinition } from 'swaggiffy';
import { getAllVehicles, getAllVehiclesAndTheirOwners, getVehicle, saveVehicle } from '../controllers/vehicle.controller.js';

const vehicleRouter = express.Router({
    mergeParams: true
});

vehicleRouter.route("/").post(saveVehicle);

vehicleRouter.route('/:id').get(getVehicle);

vehicleRouter.route('/').get(getAllVehicles);

vehicleRouter.route('/vehicle-owners').get(getAllVehiclesAndTheirOwners);

registerDefinition(vehicleRouter, {tags: 'Vehicle', basePath: '/api/v1/vehicles', mappedSchema: 'Vehicle'});

export default vehicleRouter;