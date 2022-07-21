import { Router } from 'express';
import * as homeController from '../controllers/homeController';

const router = Router();

router.get('/', homeController.home);
router.get('/telegram', homeController.telegram);

export default router;