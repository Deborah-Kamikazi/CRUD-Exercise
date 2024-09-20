const Items = require("../module/Items");

const item_index = async(req,res)=>{
    try {
        const allItems = await Items.find();
        return res.status(200).json({ data: allItems });
      } catch (error) {
        console.log(error);
      }
}
const get_item = async(req,res) =>{
    try {
        const { id } = req.params;
        const item = await Items.findById(id);
      if (item) res.status(200).json(item);
    } catch (error) {
      return res.status(404).json({ message: "Not found" });
    }
}

const post_item = async(req,res)=>{
    try {
        const { name, price } = req.body;
        const newItem = new Items({ name, price });
      const saveItem = await newItem.save();
      return res.status(201).json({ message: "the item is added" });
    } catch (error) {
        return res.status(500).json({ massage: error });
    }
}
const put_item = async(req,res)=>{
    try {
        const { id } = req.params;
        const updating = await Items.findByIdAndUpdate(id, req.body);
    return res.status(200).json({ data: updating });
} catch (error) {
    return res.status(404).json({ message: "Not found" });
}
}

const delete_item = async(req,res) =>{
    try {
        const { id } = req.params;
        console.log(req.params);
        const Itemdeleted = await Items.findByIdAndDelete({id});
        return res.status(204).json({ message: " the item is deleted" });
      } catch (error) {
        return res.status(404).json({ message: error.message });
    }
}
module.exports = {
    item_index,
    get_item,
    post_item,
    put_item,
    delete_item
}