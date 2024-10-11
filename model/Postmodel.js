const mongoose=require("mongoose");

const postSchema=mongoose.Schema({
    maker:String,
    content:String,
    comments:Object
});

const postModel=mongoose.model("post",postSchema);

module.exports={postModel};