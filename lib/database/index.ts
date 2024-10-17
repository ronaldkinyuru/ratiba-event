import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Extending the NodeJS global type
declare global {
  var mongoose: MongooseCache; // This is necessary to avoid "global" typing issues
}

let cached: MongooseCache = global.mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error('MONGODB_URI is missing');

  cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
    dbName: 'ratiba',
    bufferCommands: false,
  });

  cached.conn = await cached.promise;

  // Cache the mongoose connection in global to reuse it in the future
  global.mongoose = cached;

  return cached.conn;
};
