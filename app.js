const express=require("express");
const bodyParser=require("body-parser");
const _=require("lodash");
const app=express();
const fs=require("fs");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const data=fs.readFileSync("uielement.json");
const uielement=JSON.parse(data);


app.get("/",function(req,res){
  res.render("home",{uielements:uielement.Attributes,action:uielement.ActionDisplayName});
})


app.post("/",function(req,res){
  res.render("home",{uielements:uielement.Attributes,action:uielement.ActionDisplayName});
})

app.listen(3000,function(){
  console.log("server is started on port 3000");
})
