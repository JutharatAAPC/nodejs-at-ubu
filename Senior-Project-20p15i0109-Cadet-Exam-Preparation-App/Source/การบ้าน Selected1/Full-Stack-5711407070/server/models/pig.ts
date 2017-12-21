import * as mongoose from 'mongoose';

const pigSchema = new mongoose.Schema({
  name: String,
  weight: Number,
  age: Number
});

const Pig = mongoose.model('Pig', pigSchema);

export default Pig;
