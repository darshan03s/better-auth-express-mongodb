import { fromNodeHeaders } from 'better-auth/node';
import { getAuth } from '../lib/auth.js';
import type { IncomingHttpHeaders } from 'node:http';

export async function resolveSessionFromHeaders(headers: IncomingHttpHeaders) {
  const auth = getAuth();
  return auth.api.getSession({
    headers: fromNodeHeaders(headers)
  });
}
