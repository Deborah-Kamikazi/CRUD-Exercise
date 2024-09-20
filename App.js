const express = require("express");
const mongoose = require("mongoose");
const Items = require("./module/Items");
const { update } = require("lodash");
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

// GET/items
app.get("/items", async (req, res) => {
  try {
    const allItems = await Items.find();
    return res.status(200).json({ data: allItems });
  } catch (error) {
    console.log(error);
  }
});
// GET/items/:id
app.get("/items/:id", async (req, res) => {
  try {
      const { id } = req.params;
      const item = await Items.findById(id);
    if (item) res.status(200).json(item);
  } catch (error) {
    return res.status(404).json({ message: "Not found" });
  }
});
// POST/items

app.post("/items", async (req, res) => {
  try {
      const { name, price } = req.body;
      const newItem = new Items({ name, price });
    const saveItem = await newItem.save();
    return res.status(201).json({ message: "the item is added" });
  } catch (error) {
      return res.status(500).json({ massage: error });
  }
});

app.put("/items/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updating = await Items.findByIdAndUpdate(id, req.body);
    return res.status(200).json({ data: updating });
} catch (error) {
    return res.status(404).json({ message: "Not found" });
}
});

//Deleting
app.delete("/items/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.params);
    const Itemdeleted = await Items.findByIdAndDelete({id});
    return res.status(204).json({ message: " the item is deleted" });
  } catch (error) {
    return res.status(404).json({ message: error.message });
}
});
