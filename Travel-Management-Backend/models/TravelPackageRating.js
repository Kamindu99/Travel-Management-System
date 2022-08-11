const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    packageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'travelpackage',
      required: true,
    },

    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('travelPackageReview', reviewSchema);
