const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const app = express();

app.use(express.json());
app.use(cors());

// importing schems
const RentHouse = require('./model/rent-house');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/rent-houses').then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log(error);
});


// image distination
const imagelocation = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: imagelocation });

// Creating post API
app.post('/posthouse', upload.single('img'), async (req, res) => { 
    const postHouse = RentHouse({
        image: req.file.filename,
        title: req.body.title,
        price: req.body.price,
        bed: req.body.bed,
        bath: req.body.bath,
        sqft: req.body.sqft,
        location: req.body.location,
    })
    const savePost = await postHouse.save();
    if (savePost){

        res.send("House posted successfully");
    }
 });


//  get API
app.get('/gethouse', async (req, res) => {
    const getHouse = await RentHouse.find();
    if (getHouse) {
        res.send(getHouse);
    }
});

// Api Delete

app.delete("/remove/:id", async (req,res)=>{
    const remove = await RentHouse.deleteOne({
        _id: req.params.id
    })
    if(remove){
        res.send("the data has ben removed")
    }

})


// image route 
app.use('/images',express.static("images"))


// User Register And Login Section
const RegisterLogin = require('./model/RegisterLogin')

// post Register 

app.post("/Register",  async (req,res)=>{

    const register= RegisterLogin(req.body)
    const saveDta = await register.save()
    if(saveDta){
        res.send("The use has alredy registered")
    }

})

// post login

app.post("/login", async (req,res)=>{
    const Login = await RegisterLogin.findOne(req.body).select("-Password")
    if(Login){
        res.send({
            success:"Login Successfully",
            data: Login
        })
    }
    else{
        res.send({ error:"username and passowrd are incorecct"})    }
})

// delete register 
app.delete("/removeRegister/:id", async (req,res)=>{
    const removee= await RegisterLogin.deleteOne({
        _id: req.params.id
    })
    if(removee){
        res.send("The register has been deleted")
    }
})


// Admin Api

const Admin= require("./model/Admin")


app.post("/AdminLogin", async (req,res)=>{
    const Login = await Admin.findOne(req.body)
    if(Login){
        res.send({
            success:"Login Successfully",
            data: Login
        })
    }
    else{
        res.send({ error:"username and passowrd are incorecct"})    }
})

// Admin Register
app.post("/AdminRegister",  async (req,res)=>{

    const register= Admin(req.body)
    const saveDta = await register.save()
    if(saveDta){
        res.send("The use has alredy registered")
    }

})








app.listen(5000, () => {
  console.log('Server is running on port 5000');
});