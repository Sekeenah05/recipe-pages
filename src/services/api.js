// fetch('https://dummyjson.com/recipes')
// .then(res => res.json())
// .then(console.log);

export const getAllRecipes = async () => {
    const response = await fetch('https://dummyjson.com/recipes'); //convert it to js object
    const data = await response.json();
    return data //to terminate the request
}