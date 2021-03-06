
import {
    createUser,
    getUsers,
    findById,
} from '../controllers/user.controller.js'
import { registerDefinition } from 'swaggiffy';

import express from 'express';

const router = express.Router({
    mergeParams: true
});

// router.post("/", [protect, authorize('Standard')],createUser);
router.post("/",createUser);

router.route('/').get(getUsers);

router.route('/:id').get(findById);

registerDefinition(router, {tags: 'Users', basePath: '/api/v1/users', mappedSchema: 'User'});

export default router;