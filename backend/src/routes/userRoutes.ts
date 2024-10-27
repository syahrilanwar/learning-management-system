import { Request, Response, Router } from 'express';
import { registerUser } from '../controllers/userController';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('/pages')
})
router.post('/register', registerUser);

export default router;
