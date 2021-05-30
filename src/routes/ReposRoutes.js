import {Router} from 'express';
import  ReposController from '../controllers/ReposController'
const router = Router();

router.get('/', ReposController.index);

router.get('/paginate', ReposController.paginate);

router.post('/', ReposController.store);

router.get('/filter', ReposController.filterRepo);

router.get('/:id', ReposController.findRepo);

router.put('/:id', ReposController.updateRepo);

router.delete('/:id', ReposController.deleteRepo);

export default router;