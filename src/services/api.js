// fetch('https://dummyjson.com/recipes')
// .then(res => res.json())
// .then(console.log);

export const getAllRecipes = async () => {
    const response = await fetch('http://localhost:5000/recipes'); //convert it to js object
    const data = await response.json();
    return data //to terminate the request
}

// useEffect(() => {
//     fetch("https://dummyjson.com/recipes")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Fetched data:", data);
//         setRecipes(data.recipes || data); // Adjust based on API response
//       });
//   }, []);
  