import express from 'express';
import { registerDefinition } from 'swaggiffy';
import { getAllCarOwners, getCarOwner, saveCarOwner } from '../controllers/carOwner.controller.js';
import { authorize, protect } from '../middlewares/auth.middleware.js';

const carOwnerRouter = express.Router({
    mergeParams: true
});

carOwnerRouter.post("/", [protect, authorize('Admin')], saveCarOwner);
carOwnerRouter.route('/:id').get(getCarOwner);

carOwnerRouter.route('/').get(getAllCarOwners);

registerDefinition(carOwnerRouter, {tags: 'Car Owner', basePath: '/api/v1/car-owners', mappedSchema: 'CarOwner'});

export default carOwnerRouter;