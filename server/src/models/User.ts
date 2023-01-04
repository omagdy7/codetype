import mongoose from 'mongoose'
import { Schema, model, Document } from 'mongoose';
import Account from './Account'
import Settings from './Settings';
import Stats from './Stats';
/* import Race from './Race'; */

mongoose.set('strictQuery', true)


const UserSchema = new Schema({
  username: String,
  account: Account,
  Account: Account,
  Settings: Settings,
  Stats: Stats, 
  /* Races: [Race], */
});

const UserModel = model<Document>("User", UserSchema);

export default UserModel;

