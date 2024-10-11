const express=require("express");
const cors=require("cors");
const { connection } = require("./db");
const { PostRouter } = require("./Routes/Postroute");

const app=express();
app.use(cors());
app.use(express.json());

app.use("/posts",PostRouter);


app.get("/",(req,res)=>{
res.send("Home page");
});


app.listen(8080,async()=>{
    console.log("connecting...");
    await connection;
    console.log("connected");
})