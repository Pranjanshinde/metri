const express=require("express");
const { postModel } = require("../model/Postmodel");

const PostRouter=express.Router();

PostRouter.post("/",async(req,res)=>{
    try {
        const post = new postModel(req.body);
        await post.save();
        res.send("New post added");

    } catch (error) {
        res.send({"msg":error.message});
    }
});

PostRouter.get("/",async(req,res)=>{
    try {
        const posts= await postModel.find({});
        console.log(posts);
        res.send(posts);

    } catch (error) {
        res.send({"msg":error.message});
    }
});

PostRouter.patch("/update/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        console.log(id);
        await postModel.findByIdAndUpdate(id,req.body);
        res.send("Post is Updated");
    } catch (error) {
        res.send({"msg":error.message});
    }
});

PostRouter.delete("/delete/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        console.log(id);
        await postModel.findByIdAndDelete(id);
        res.send("Post is Deleted");
    } catch (error) {
        res.send({"msg":error.message});
    }
});





module.exports={PostRouter};