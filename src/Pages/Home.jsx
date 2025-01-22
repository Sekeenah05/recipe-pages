import Layout from "../components/Layout";
import RecipeCard from "../components/RecipeCard";

const recipes = [
    {
        id: 1,
        title: "Waffles",
        description: "Receita bacana pra comer com os amigos de manhã.",
        image: "/Featured image.png",
    },
    {
        id: 2,
        title: "Panquecas",
        description: "Receita bacana pra comer com os amigos de manhã.",
        image: "/Featured image (1).png"
    },
    {
        id: 3,
        title: "Chocolate quente",
        description: "Receita bacana pra comer com os amigos de manhã.",
        image: "/Featured image (2).png"
    }
  ];

const Home = ({children}) => {
    return ( 
        <Layout>
            <div className='container mx-auto my-8'>
                <h1 className='text-center text-2xl font-bold mb-6 text-gray-800'>Receitas mais procuradas</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 ml-5'>
                    {recipes.map((recipe, index) =>(
                        <RecipeCard
                        key={index}
                        id={recipe.id}
                        title={recipe.title}
                        description={recipe.description}
                        image={recipe.image}
                        />
                    ))}
                </div>
           </div>
           <main className="flex-grow">{children}</main>
        </Layout>
    );
}

export default Home;
