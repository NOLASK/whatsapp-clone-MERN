import { Router } from 'express';
const router = Router();

import * as messageCtrl from '../controller/messages.controller';

// POST
router.post('/v1/messages/new', messageCtrl.sendMessage);
// GET
router.get('/v1/messages/sync', messageCtrl.getMessages);

export default router;