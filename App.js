const express = require("express");
const mongoose = require("mongoose");
const Items = require("./module/Items");
const { update } = require("lodash");
const ItemsRoutes = require('./router/itemRoutes')
const app = express();
const URL =
"mongodb+srv://user1:z3b2iSxG.Fb*.NE@cluster0.fx9vc.mongodb.net/data?retryWrites=true&w=majority&appName=Cluster0";

app.use(express.json());

  mongoose
  .connect(URL)
  .then(() => {
      console.log("it is connected");
      app.listen(3000);
    })
  .catch((error) => {
    console.log(error);
  });

const newItem = new Items({
  id:32,
  description:"good quality and quantity rice",
  name: "rice",
  price: "50",
});
newItem
  .save()
  .then(() => {
    console.log("the item has been added");
  })
  .catch((error) => {
    console.log(error);
  });


  app.use('/items',ItemsRoutes)
