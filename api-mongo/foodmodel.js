var mongoose = require("mongoose");
var foodSchema = mongoose.Schema(
  {
    // กำหนด ชื่อและชนิดของ document เรา
    fistname:{
      type:String
    },
    name: {
      type: String
    },
    price: {
      type: Number
    }
  },
  {
    // กำหนด collection ของ MongoDB 
    collection: "FOODS"
  }
);

// ถ้าไม่ได้กำหนด collection ข้างบน default จะเป็น "foods"
var Food = mongoose.model("foods", foodSchema);
module.exports = Food;