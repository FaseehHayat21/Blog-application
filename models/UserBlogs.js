const mongoose = require('mongoose');
const { Schema } = mongoose;

const BlogSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true, 
    },
    tag:{
        type: String,
        default: "General"
    },
    image: {
        type: String,
        require: true,
    },
    date:{
        type: Date,
        default: Date.now
    },
  });

  module.exports = mongoose.model('userblogs', BlogSchema);