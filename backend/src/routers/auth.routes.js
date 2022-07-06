import express from 'express';
import { registerDefinition } from 'swaggiffy';
const authRoute = express.Router();

import { login } from '../controllers/user.controller.js'

authRoute.post('/', login);

registerDefinition(authRoute, {tags: 'Auth', basePath: '/api/v1/auth', mappedSchema: 'Auth'});

export default authRoute;
