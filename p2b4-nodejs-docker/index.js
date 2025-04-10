const express= require('express');
const app= express();
const PORT= 3000;
app.get('/',(req,res)=>{
    res.send('Xin chao moi nguoi. Minh la Blue Roseee ');
})
app.listen(PORT);