const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: Number,
      price: Number,//price at the time of order
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'placed', 'shipped', 'delivered', 'cancelled'],
  },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
