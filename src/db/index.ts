import mongoose from 'mongoose';

export let db: mongoose.mongo.Db | null = null;
export let client: mongoose.mongo.MongoClient | null = null;

export const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI!);
  client = conn.connection.getClient();
  db = conn.connection.getClient().db();
  return { db, client };
};
