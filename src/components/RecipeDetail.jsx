import { useParams } from "react-router-dom";
import Slayout from "./Slayout";

function RecipeDetail({ recipes }) {  // ✅ Receives recipes as a prop
  const { id } = useParams();

  if (!recipes) {
    return <p>Erro: Nenhuma receita encontrada.</p>;
  }

  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return <p>Receita não encontrada!</p>;
  }
  return (
    <Slayout>
      <div className="recipe-detail">

        <div className="relative w-full h-64 mb-8">
          <div className="absolute inset-0 bg-black/40">
            <img  className="w-full h-full object-cover blur-sm" src={recipe.image} alt={recipe.title} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white font-semibold text-3xl">{recipe.title}</h1>
          </div>
        </div>

        <div className="mx-14">
          <div className="">
            <h2 className="font-semibold text-xl">Ingredientes</h2>
            <ul className="my-3 list-inside list-disc">
              {recipe.ingredients.map((ingredient, index) => (
                <li className="pl-2" key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-xl">Modo de Preparo</h2>
            <ol className="my-3 list-inside list-decimal">
              {recipe.preparation.map((step, index) => (
                <li className="pl-2 pr-48" key={index}>{step}</li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="font-semibold text-xl">Informações Adicionais</h2>
            <p className="pr-48">{recipe.additional}</p>
          </div>

        </div>

      </div>
    </Slayout>
  );

}

export default RecipeDetail;
