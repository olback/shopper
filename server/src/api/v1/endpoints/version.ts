import { Router } from 'express';

const router = Router();

router.get('/', async (_req, res) => {

  const frontend = {
    version: '<unknown>',
    updated: 0
  }

  const backend = {
    version: '__BACKEND_COMMIT_HASH__',
    updated: new Date('__BACKEND_COMMIT_DATE__').getTime()
  }

  res.status(200).json({
    frontend,
    backend
  });

});

export = router;
