import express from 'express';
import { registerDefinition } from 'swaggiffy';
import { getAllCarOwners, getCarOwner, saveCarOwner } from '../controllers/carOwner.controller.js';

const carOwnerRouter = express.Router({
    mergeParams: true
});

carOwnerRouter.route("/").post(saveCarOwner);

carOwnerRouter.route('/:id').get(getCarOwner);

carOwnerRouter.route('/').get(getAllCarOwners);

registerDefinition(carOwnerRouter, {tags: 'Car Owner', basePath: '/api/v1/car-owners', mappedSchema: 'CarOwner'});

export default carOwnerRouter;