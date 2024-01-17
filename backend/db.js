const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const mongoURI =
  "mongodb+srv://gofood:sakthivel@cluster0.sd6zxtr.mongodb.net/gofood?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to the database");
    const fetched_data = await mongoose.connection.db.collection("food_items");
    fetched_data.find({}).toArray(async function (err, data) {
      const foodCategory = await mongoose.connection.db.collection(
        "food_category"
      );
      foodCategory.find({}).toArray(function (err, category_data) {
        if (err) console.log(err);
        else {
          global.food_items = data;
          global.foodCategory = category_data;
        }
      });
      //   if (err) {
      //     console.log(err);
      //   } else {
      //     global.food_items = data;
      //     // console.log(global.food_items);
      //   }
    });
  } catch (err) {
    console.error("---", err);
  }
};

module.exports = mongoDB;
