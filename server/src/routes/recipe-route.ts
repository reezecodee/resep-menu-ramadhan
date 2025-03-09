import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response): void => {
  res.status(200).json({
    statusCode: 200,
    message: 'OK',
  });
});

export default router;
