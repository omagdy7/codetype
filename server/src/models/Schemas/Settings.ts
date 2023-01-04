import mongoose from 'mongoose'
import { Schema } from 'mongoose';

mongoose.set('strictQuery', true)

const SettingsSchema = new Schema({
  theme: String,
  difficulity: String,
});

export default SettingsSchema;

