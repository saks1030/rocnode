const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServerSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  server_name: {
    type: String,
    required: true
  },
  game_type: {
    type: String,
    required: true
  },
  version: {
    type: String,
    required: true
  },
  ram: {
    type: Number,
    required: true
  },
  port: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    default: 'offline'
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = Server = mongoose.model('server', ServerSchema);
