import {Router} from 'express';
import UsersController from '../controllers/UsersController';
import authToken from '../middlewares/authToken';

const router = Router();

router.get('/', UsersController.index);

router.post('/', authToken, UsersController.store);

router.get('/paginate', UsersController.paginate);

router.get('/filter', UsersController.filterUser);

router.get('/:id', UsersController.findUser);

router.put('/:id', authToken, UsersController.updateUser);

router.delete('/:id', authToken, UsersController.deleteUser);

export default router;