import { Router } from 'express';
import { CarController } from '../controllers/cars';
import { authenticateKey } from '../middleware/auth.middleware';

const router = Router();
const carController = new CarController();

router.get('/', carController.getCars);
router.post('/', authenticateKey, carController.createCar);
router.get('/:id', carController.getCarById);
router.put('/:id', authenticateKey, carController.updateCar);
router.delete('/:id', authenticateKey, carController.deleteCar);

export default router;
