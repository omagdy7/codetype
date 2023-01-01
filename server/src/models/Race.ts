import mongoose from 'mongoose'

mongoose.set('strictQuery', true)
const Schema = mongoose.Schema;
/* const ObjectId = Schema.ObjectId; */

const RaceSchema = new Schema({
  lines: [{
    content: String,
    correct_so_far: Number,
    current_idx: Number,
    indent: Number,
    line_number: Number,
  }],
  cur_line_idx: Number,
});

const RaceModel = mongoose.model("Race", RaceSchema);

export default RaceModel;

