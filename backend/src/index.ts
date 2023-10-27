import express from "express"
import cors from "cors"
import exp from "constants";
import * as RecipeAPI from "./recipe-api"


const app = express();

app.use(express.json())
app.use(cors());

app.get("/ap/recipes/search", async(req,res)=>{
 const results = RecipeAPI.searchRecipes()
})

app.listen(5005, ()=> {
    console.log("Server running on localhost:5005")
})