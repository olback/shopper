import { Router } from 'express';
import * as git from 'git-rev-sync';

const router = Router();

router.get('/', async (_req, res) => {

  const frontend = {
    version: '<unknown>',
    updated: '<unknown>'
  }

  const backend = {
    version: git.short(),
    updated: git.date().getTime()
  }

  res.status(200).json({
    frontend,
    backend
  });

});

export = router;
