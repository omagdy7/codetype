import mongoose from 'mongoose'
import { Schema, model, Document } from 'mongoose';

mongoose.set('strictQuery', true)

const SettingsSchema = new Schema({
  theme: String,
  difficulity: String,
});

const SettingsModel = model<Document>("Settings", SettingsSchema);

export default SettingsModel;

