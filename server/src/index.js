const express=require("express");
const env=require("dotenv");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");
const path = require('path');

const userRoutes=require("./routes/auth");
const adminRoutes=require("./routes/admin/auth");
const categoryRoutes=require("./routes/category");
const productRoutes=require("./routes/product");
const cartRoutes=require("./routes/cart");

env.config();

mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_KEY}@ecommerce.n7hykd7.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connected")
}).catch((err)=>{console.log(err)});

app.use(express.json());
app.use(cors());
app.use("/public",express.static(path.join(__dirname+'/uploads')));

app.use("/api",userRoutes);
app.use("/api",adminRoutes);
app.use("/api",categoryRoutes);
app.use("/api",productRoutes);
app.use("/api",cartRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`The server is running on port ${process.env.PORT}`);
});