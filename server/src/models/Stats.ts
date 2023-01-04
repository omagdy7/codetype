import mongoose from 'mongoose'
import { Schema } from 'mongoose';

mongoose.set('strictQuery', true)

const StatsSchema = new Schema({
  testsTaken: Number,
  testsCompleted:  Number,
  averageWpm: Number,
  highestScore: Number,
});

export default StatsSchema;

