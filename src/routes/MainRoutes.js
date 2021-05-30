import {Router} from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.json('Hello App Nuwe. Use: /api/users or /api/repos')
})

export default router;