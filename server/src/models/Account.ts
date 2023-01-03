import mongoose from 'mongoose'

mongoose.set('strictQuery', true)
const Schema = mongoose.Schema;
/* const ObjectId = Schema.ObjectId; */

const AccountSchema = new Schema({
  email: String,
  password: String,
  createdAt: Date,
});

const AccountModel = mongoose.model("Account", AccountSchema);

export default AccountModel;

