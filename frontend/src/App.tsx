
import { useState } from "react"
import "./App.css"

const App = () => {
  const [searchTerm, setSearchTerm] = useState("burgers")
  const [recipes,setRecipes] = useState([])

  const handleSearchSubmit = async () => {
    try{
      const recipes = await api.searchRecipes(searchTerm,1)
    } catch(e) {
      console.log(e);
      
    }
  }
  return(
    <div>Hello from react</div>
  )
}

export default App