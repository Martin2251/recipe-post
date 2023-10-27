import express from "express"
import cors from "cors"
import exp from "constants";


const app = express();

app.use(express.json())
app.use(cors());

app.get("/ap/recipes/search", async(req,res)=>{
    res.json({messsage:"success !"})
})

app.listen(5000, ()=> {
    
})