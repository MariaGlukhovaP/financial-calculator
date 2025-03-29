const { Schema, model } = require("mongoose");

const Result = new Schema({
  email: {
    type: String,
    required: true,
  },
  sent: { type: Boolean, default: false },
  timestamp: { type: Date, default: Date.now },
  loanAmount: Number,
  monthlyInterestRate: Number,
  totalInterestRate: Number,
  monthlyPayment: Number,
  requiredIncome: Number,
});

module.exports = model("Result", Result);
