
import { useState } from "react"
import "./App.css"
import * as api from "./api"
import { Recipe } from "./types"

const App = () => {
  const [searchTerm, setSearchTerm] = useState("burgers")
  const [recipes,setRecipes] = useState<Recipe[]>([])

  const handleSearchSubmit = async () => {
    try{
      const recipes = await api.searchRecipes(searchTerm,1)
      setRecipes(recipes)
    } catch(e) {
      console.log(e);
      
    }
  }
  return(
    <div>{recipes.map((recipe) => (
      <div>
        recipe image location: {recipe.image}
        recipe title:{recipe.title}
      </div>
    ))}
      </div>
  )
}

export default App