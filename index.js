const express = require("express");
const userRoutes = require("/routes/userRoutes");
const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'))
app.use('/api',userRoutes ); 

app.listen(PORT,()=>{
    console.log(`Listening on Port ${PORT}`);
})
