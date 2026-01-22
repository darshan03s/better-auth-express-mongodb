import type { Request, Response, NextFunction } from 'express';
import { resolveSessionFromHeaders } from '../services/auth.service.js';

export async function requireAuth(req: Request, res: Response, next: NextFunction) {
  const session = await resolveSessionFromHeaders(req.headers);

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  req.session = session;

  next();
}
