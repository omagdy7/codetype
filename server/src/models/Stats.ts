import mongoose from 'mongoose'
import { Schema, model, Document } from 'mongoose';

mongoose.set('strictQuery', true)

const StatsSchema = new Schema({
  testsTaken: Number,
  testsCompleted: String,
  averageWpm: Number,
  highestScore: Number,
});

const StatsModel = model<Document>("Stats", StatsSchema);

export default StatsModel;

