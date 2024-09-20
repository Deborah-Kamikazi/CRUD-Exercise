const mongoose = require("mongoose");
const Schema = mongoose.Schema
const itemShema = new Schema(
    {
        id:{
            type: 'number',
            require: true
        },
        name:{
            type: 'string',
            require: true
        },
        description:{
            type: 'string',
            require: true
        },
        price:{
            type: 'number',
            require: true
        }
    },{timestamps:true}
)
const Items = mongoose.model('Items',itemShema)
module.exports = Items
