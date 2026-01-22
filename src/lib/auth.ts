import { betterAuth, type Auth } from 'better-auth';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';
import type mongoose from 'mongoose';

export let _auth: Auth;

export const createAuth = (db: mongoose.mongo.Db, client: mongoose.mongo.MongoClient) => {
  _auth = betterAuth({
    database: mongodbAdapter(db, { client }),
    emailAndPassword: {
      enabled: true,
      autoSignIn: false
    }
  });
  return _auth;
};

export const getAuth = () => {
  if (!_auth) throw new Error('Auth not initialized');
  return _auth;
};
