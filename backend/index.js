const mongoose=require("mongoose");
const express=require("express");
const cors=require("cors");

const app=express();
app.use(express());
app.use(express.json());
app.use(cors());


const logindata=require("./db/login");
require("./db/config");

app.post("/register",async(req,resp)=>{
    let{email,password}=req.body;
let registerdata=new logindata({
    email:email,
    password:password
})
let result=await registerdata.save();

if(result){
    resp.send("Success");
}
else{
    resp.send("Not Success");
}
});

app.post("/login", async (req, resp) => {
    if (req.body.email && req.body.password) {
        let result = await logindata.findOne(req.body);
        if (result) {
            resp.send(result);
        } else {
            resp.status(404).send({ error: "No User Found" });
        }
    } else {
        resp.status(400).send({ error: "Email and Password required" });
    }
});




app.listen(5000);