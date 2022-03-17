const mongoose = require("mongose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/mongooseExample", {useNewUrlParser: true});

const filmSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true,
    min: 1850
  },
  cast: {
    type: [{
      actor: String,
      role: String
    }]
  }
});

module.exports = mongoose.model("Film", filmSchema);
