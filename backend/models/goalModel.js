const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    // Foreign key
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Goal', goalSchema);
