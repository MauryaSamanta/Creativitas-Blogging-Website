const express=require("express");
const exphbs = require('express-handlebars');
const app=express();
//var session=require("express-session");
var flush=require("connect-flash");
const date=new Date();
//const User_Check="";
//var moment=require("moment");
//require("./db/conn");

//const Note=require("./models/otp_send");
//const Rec=require("./models/record");
const path=require("path");
//const quillDeltaToHtml = require('quill-delta-to-html');

const port=process.env.PORT || 5500;
const mongoose=require("mongoose");
const bodyParser=require("body-parser");

app.use(express.static("public"));

  
app.set("view engine","hbs");

const { MongoClient } = require("mongodb");


app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect("mongodb+srv://testUser:12345@cluster0.3oc0kuh.mongodb.net/creativitas?retryWrites=true&w=majority")
//app.use(flush());
const loginscheme={
    name: String,
    password: String
};
const Log=mongoose.model("users",loginscheme);
const blogpost={
    author:String,
    date: String,
    title:String,
    categories:String,
    body:String,
    comments: String,
    likes: String,
    publish:String

};
const blog_note=mongoose.model("blogs", blogpost);
/*const usercreate={
     
    name: String,
    
    password: String

};
const Addu=mongoose.model("users",usercreate);*/

app.get("/user_signup", (req,res)=>{

    res.render("user_signup");
    
});
app.get("/user_login",(req,res)=>{
    res.render("user_login");
});
app.get("/" ,async(req,res)=>{
        var blogs=await blog_note.find({}).then(docs=>{
            
         // console.log(blogs.title);
          /*var data={
            title:blogs.title,
            body: blogs.title,
            author:blogs.author
          };*/
        res.render("home", {docs});
        });
        
    
});
app.get("/user_view",(req,res)=>{
    res.render("user_view");
});
app.get("/new_post",(req,res)=>{
    res.render("new_post");
});
app.get("/view_post",(req,res)=>{
    res.render("view_post");
});
app.post("/user_login", async(req,res)=>{
    try { 
        const User_Check= await Log.findOne({name:req.body.uname});
        
        if(User_Check.password === req.body.pw)
        {   var data={
            name:User_Check.name
        };
        //const blogs=blog_note.find({}, function(b){

        var blogs=await blog_note.find({}).then(docs=>{
            
            // console.log(blogs.title);
             /*var data={
               title:blogs.title,
               body: blogs.title,
               author:blogs.author
             };*/
           res.render("home", {docs,data});
           });    
        }
        else{
            
        }
    } catch (error) {
        
    }
})
app.post("/user_signup", function(req,res){
    try {
       let newnote=new Log({
       
        name:req.body.uname,
        password: req.body.pw,
        
       }) ;
       newnote.save();
       res.render("user_login");
    } catch (error) {
        
    }
})
/*app.post("/admin_dashboard2", async(req,res)=>{
    try {
       const data=await Addu.findOne({userid:req.body.uname});
       var values={
        userid:data.userid,
        name:data.name
       };
       res.render("user_view",{y:values});
    } catch (error) {
        
    }
})*/
app.post("/new_post", function(req,res){
    try {
       let newnote=new blog_note({
       
        author: "Max Huntington",
        date: date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear(),
        title:req.body.title,
        categories:req.body.categories,
        body:req.body.save,
        comments:"", 
        likes: "0"  
       }) ;  
       newnote.save();
       res.render("new_post");
    } catch (error) {
        
    }
});
app.get("/view_post/:t", async(req,res)=>{
   var t=req.params.t;
   console.log(t);
   var blog=await blog_note.findOne({title:t});
   //var for_text=blog.body;
   // for_text=JSON.stringify(for_text,null,2);
   if(blog)
   {var data={  
    title:t,     
    text: blog.body,       
    com:blog.comments,   
    like:blog.likes 
   };
   res.render("view_post",{k:data});}
}) 
app.post("/home", async(req,res)=>{
    //var blogs=await blog_note.findOne({publish:"1"});
      
    
  
          console.log(req.body.title); 
           
}) 
app.listen(port, (req,res)=>{ 
    console.log("server is running");
})