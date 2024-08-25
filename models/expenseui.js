const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    expenseamount: {
      type: Date,
      required: true,
     
    },
    incomeamount: {
      type: Number,
      required: true,
       
    },
    expensedescription: {
      type: String,
      required: true,
    },
    uname:{
      type: String,
      
    },
    expensecategory: {
      type: String,
      required: true,
    },

    visitHistory: [{ timestamp: { type: Number } }],

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
  }
);

const UI = mongoose.model("tracker", urlSchema);

module.exports = UI;
