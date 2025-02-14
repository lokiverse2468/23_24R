let express = require("express");
let fs = require("fs");
let app = express();

app.get("/Tolly/:Title",(req,res)=>{
    fs.readFile("db.json","utf-8",(err,data)=>{
        console.log(req.params)
        if(err){
            res.send({
                status:404,
                msg:"no data found in file"
            })
        }
        else if(data){
            var data1 = JSON.parse(data)
            var filtered = data1["Tolly"].filter((val)=>{
                return val.Title.toLowerCase() ==req.params.Title 
                || val.Title.toLowerCase() ==req.params.Title;


            })
    
            res.send(filtered)
        }
    })
})
app.listen(3002, () => {
  console.log("Server is running on port 3002");
});
