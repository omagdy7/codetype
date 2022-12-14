import mongoose from 'mongoose'

mongoose.set('strictQuery', true)
const Schema = mongoose.Schema;
/* const ObjectId = Schema.ObjectId; */

const AccountSchema = new Schema({
  username: String,
  email: String,
  password: String,
});

const AccountModel = mongoose.model("Account", AccountSchema);

export default AccountModel;

