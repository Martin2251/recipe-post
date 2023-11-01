export const searchRecipes = async (searchTerm: string, page:number) =>{
    const baseURL = new URL ("https://localhost:5005/api/recipes/search");
baseURL.searchParams.append("searchTerm", searchTerm)
baseURL.searchParams.append("page", String(page))

const response = await fetch(baseURL)
if(!response.ok){
    throw new Error(`HTTP error ! Status ${response.status}`)
}

return response.json()
}