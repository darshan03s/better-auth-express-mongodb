import type { AuthSession } from './auth.ts';

declare global {
  namespace Express {
    interface Request {
      session: AuthSession;
    }
  }
}
