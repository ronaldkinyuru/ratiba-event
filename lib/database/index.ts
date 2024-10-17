// lib/database/index.ts
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

// Use 'const' for cached variable as it is never reassigned
const cached: MongooseCache = global.mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error('MONGODB_URI is missing');

  cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
    dbName: 'ratiba',
    bufferCommands: false,
  });

  cached.conn = await cached.promise;

  // Update the global mongoose reference
  global.mongoose = cached.conn;

  return cached.conn;
};
