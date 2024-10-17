import { Mongoose } from 'mongoose';

declare global {
  namespace NodeJS {
    interface Global {
      mongoose: Mongoose | undefined;
    }
  }
}
