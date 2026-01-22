import express, { Router } from 'express';
import { getAuth } from '../lib/auth.js';
import { toNodeHandler } from 'better-auth/node';
import { me } from '../controllers/auth.controller.js';
import { requireAuth } from '../middlewares/require-auth.js';

const router: Router = Router();

router.all('/auth/*any', (req, res) => {
  return toNodeHandler(getAuth())(req, res);
});

router.use(express.json());

router.get('/me', requireAuth, me);

export default router;
