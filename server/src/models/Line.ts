import mongoose from 'mongoose'

mongoose.set('strictQuery', true)
const Schema = mongoose.Schema;
/* const ObjectId = Schema.ObjectId; */

const LineScheme = new Schema({
  content: String,
  correct_so_far: Number,
  current_idx: Number,
  indent: Number,
  line_number: Number,
});

const LineModel = mongoose.model("Line", LineScheme);

export default LineModel;

