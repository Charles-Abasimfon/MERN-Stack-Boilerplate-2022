const mongoose = require('mongoose');

// DEMO MODEL -- **REPLACE WITH REAL MODEL**

const demoSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Please add demo text'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Demo', demoSchema);
