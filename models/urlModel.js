const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema(
  {
    shortUrl: {
      type: String,
      required: true,
      unique: true,
    },
    actUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const urlMod = mongoose.model('Url', urlSchema);

module.exports = { urlMod };