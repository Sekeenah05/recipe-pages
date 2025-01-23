import { useParams } from "react-router-dom";

function RecipeDetail({ recipes }) {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return <p>Receita não encontrada!</p>;
  }

  return (
    <div className="recipe-detail">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <h2>Ingredientes</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Modo de Preparo</h2>
      <ol>
        {recipe.preparation.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <p>{recipe.additionalInfo}</p>
    </div>
  );
}

export default RecipeDetail;
