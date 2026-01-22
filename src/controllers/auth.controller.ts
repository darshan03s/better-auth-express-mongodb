import type { Request, Response } from 'express';
import { resolveSessionFromHeaders } from '../services/auth.service.js';

export async function me(req: Request, res: Response) {
  const session = await resolveSessionFromHeaders(req.headers);
  return res.json({ user: session?.user || null });
}
