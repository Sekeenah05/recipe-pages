
import Home from "./Home";
 const Receitas = () => {

  const recentRecipes = [
    { 
      title: "Donut",
      description: "Donuts caseiros irresistíveis com massa macia e coberturas deliciosas.", 
      image: "/Featured image (3).png" 
    },

    { 
      title: "Cereal",
      description: "Cereal crocante e saboroso, perfeito para um café da manhã ou lanche rápido. Uma opção deliciosa e nutritiva para começar o dia com energia.",
      image: "/Featured image (4).png"
    },

    { 
      title: "Cookies",
      description: "Cookies caseiros irresistíveis com pedaços generosos de chocolate.",
      image: "/Featured image (5).png" 
    }
  ];

  return ( 
    <>
      <div>
        <Home>

          <section className="container mx-auto my-12">

            <h2 className="text-center text-2xl font-bold mb-6 text-gray-800">Receitas recentes</h2>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mx-12">

              {recentRecipes.map((recipe, index) => (
                <div key={index} className="flex bg-gray-100 rounded-3xl shadow-md">
                  
                  <img src={recipe.image} alt={recipe.title} className="w-80 object-cover" />
                  
                  <div className="p-7">
                    <h3 className="text-lg font-bold text-gray-700">{recipe.title}</h3>
                    <p className="text-gray-400 w-96">{recipe.description}</p>
                    <button className="rounded-lg px-5 mt-4 " style={{ backgroundColor: '#FFDB63' }} >
                      Ver receita
                    </button>
                  </div>
                
                </div>
              ))}

            </div>

          </section>

        </Home>
      </div>
    </>
  );
}
  
 export default Receitas;