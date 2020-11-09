const express = require('express');
const mongoose = require('mongoose');
const app = express();

/* Routes */

// Connection to database 
mongoose.connect("mongodb+srv://joan:atlaspassword@cluster0-9ztll.gcp.mongodb.net/mean-posts", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( () => {
    console.log("Connected to MongoDB")
})
.catch( err => {
    console.log(err);
});

//CORS Policy
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");//Origins where the connection is allowed 
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");//Headers that are allowed to connect to the server 
    //Methods allowed to be used in the server 
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next();
});

//All incoming requests coming to api/posts will get directed to routerPosts
app.use("/api/posts", routerPosts);
app.use("/api/users", routerUsers);

app.listen(3000);