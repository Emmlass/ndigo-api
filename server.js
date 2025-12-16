const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173',
}));

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('✅ Database Connected'))
  .catch((err) => console.error('❌ Database Connection Error:', err));
app.get("/test",(req,res)=>{
    res.json("test ok");
});
app.post('/register',(req,res)=>{
    //here we will handle user registration
    const {name,email,password}=req.body;
    //for now just return a success message     
    res.json({name,email,password});
})


const PORT = 3000;
app.listen(PORT,()=>{
   console.log(`server running on port ${PORT} you better go catch it`);}
);
