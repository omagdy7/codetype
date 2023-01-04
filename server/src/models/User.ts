import mongoose from 'mongoose'
import { Schema, model, Document } from 'mongoose';

mongoose.set('strictQuery', true)

const UserSchema = new Schema({
  username: String,
  Account: { type: Schema.Types.ObjectId, ref: 'Account'},
  Settings: { type: Schema.Types.ObjectId, ref: 'Settings'},
  Stats: { type: Schema.Types.ObjectId, ref: 'Stats'},
  Races: [{ type: Schema.Types.ObjectId, ref: 'Race'}],
});

const UserModel = model<Document>("User", UserSchema);

export default UserModel;

