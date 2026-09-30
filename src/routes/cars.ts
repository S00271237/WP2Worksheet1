import { Router } from 'express';
import { CarController } from '../controllers/cars';
import { authenticateKey } from '../middleware/auth.middleware';
import {validate} from '../middleware/validate.middleware';
import {createCarZSchema}  from '../models/cars';
import { updateCarZSchema } from '../models/cars';


const router = Router();
const carController = new CarController();

router.get('/', carController.getCars);
router.post('/', validate(createCarZSchema), carController.createCar);
router.get('/:id', carController.getCarById);
router.put('/:id', validate(updateCarZSchema), carController.updateCar);
router.delete('/:id', authenticateKey, carController.deleteCar);

export default router;
