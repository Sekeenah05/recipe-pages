import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Receitas from './Pages/Receitac'
import SobreNos from './Pages/SobreNos'
import RecipeDetail from './components/RecipeDetail'
import { useEffect, useState } from 'react'


const fallbackRecipes = [
  {
      id: 1,
      title: "Waffles",
      description: "Receita bacana pra comer com os amigos de manhã.",
      image: "/Featured image.png",
      ingredients:[
          "2 xícaras (chá) de farinha de trigo",
          "2 colher (sopa) de açúcar",
          "2 colheres (chá) de fermento em pó",
          "1/2 colher (chá) de sal",
          "2 colheres amido de milho",
          "3 ovos batidos",
          "4 colheres (sopa) de manteiga sem sal derretida",
          "1 e 3/4 de xícara (chá) de leite",
          "1 colher (sopa) de essência de baunilha",
      ],
      preparation:[
          "Peneire em um recipiente a farinha de trigo, o açúcar, o amido, o fermento e o sal. Reserve.",
          "Em outro recipiente misture os ovos batidos com o leite, a manteiga derretida e a essência de baunilha.",
          "Despeje sobre a mistura de farinha e rapidamente incorpore os ingredientes.",
          "Aqueça o aparelho para Waffles. Coloque uma concha rasa de massa e espalhe até cobrir o molde do aparelho, feche a tampa e deixe assar até a massa ficar bem dourada.",
          "Retire com espátulas de silicone. Sirva com mel, frutas ou geleia.",
      ],
      additional:"Legal para comer com os amigos de manhã :D"
  },
  {
      id: 2,
      title: "Panqueca americana",
      description: "Receita bacana pra comer com os amigos de manhã.",
      image: "/Featured image (1).png",
      ingredients:[
          " 1 e 1/2 xícaras de farinha de trigo",
          "3 colheres de sopa de açúcar",
          "1 colher de sopa de fermento em pó", 
          "1/2 colher de chá de sal",
          "1 e 1/4 xícaras de leite",
          "1 ovo",
          "3 colheres de sopa de manteiga derretida",
          "Óleo vegetal (para untar a frigideira)",
          "Coberturas a gosto (xarope de bordo, frutas frescas, chantilly, etc.)"
      ],
      preparation:[
          "Em uma tigela grande, misture a farinha, o açúcar, o fermento em pó e o sal.",
          "Em outra tigela, bata o leite, o ovo e a manteiga derretida até obter uma mistura homogênea.",
          "Despeje a mistura líquida na tigela com os ingredientes secos. Mexa delicadamente com uma colher ou fouet até que os ingredientes estejam apenas combinados. Não misture demais, pois isso pode deixar as panquecas pesadas.",
          "Pré-aqueça uma frigideira antiaderente em fogo médio. Unte levemente a frigideira com óleo vegetal.",
          "Use cerca de 1/4 de xícara da massa para cada panqueca. Despeje a massa na frigideira quente e espalhe-a ligeiramente para formar uma panqueca redonda.",
          "Cozinhe até que pequenas bolhas apareçam na superfície da panqueca e as bordas fiquem levemente douradas. Isso leva cerca de 2-3 minutos.",
          "Vire a panqueca com uma espátula e cozinhe por mais 1-2 minutos, ou até que esteja dourada por completo.",
          "Transfira a panqueca para um prato e repita o processo com o restante da massa.",
          "Sirva as panquecas quentes com suas coberturas favoritas, como xarope de bordo, frutas frescas, chantilly, etc."
      ],
      additional:[
          "Essa receita rende aproximadamente 8 panquecas médias. Você pode ajustar o tamanho das panquecas de acordo com sua preferência. Aproveite suas deliciosas panquecas americanas!"
      ]
      
  },
  {
      id: 3,
      title: "Chocolate quente",
      description: "Receita bacana pra comer com os amigos de manhã.",
      image: "/Featured image (2).png",
      ingredients:[
        "2 xícaras de leite",
        "1/2 xícara de chocolate em pó",
        "2 colheres de sopa de açúcar (ou a gosto)",
        "1/2 colher de chá de extrato de baunilha",
        "Uma pitada de sal",
        "Chantilly (opcional)",
        "Chocolate ralado (opcional)"
      ],
      preparation: [
          "Em uma panela, aqueça o leite em fogo médio até que comece a ferver. Mexa ocasionalmente para evitar que o leite grude no fundo da panela.",
          "Adicione o chocolate em pó, o açúcar e o sal ao leite quente. Mexa bem até que o chocolate e o açúcar estejam completamente dissolvidos.",
          "Reduza o fogo para médio-baixo e deixe o chocolate quente cozinhar por mais 2 a 3 minutos, mexendo constantemente. Isso ajudará a engrossar ligeiramente a bebida.",
          "Retire a panela do fogo e adicione o extrato de baunilha. Misture bem.",
          "Despeje o chocolate quente em xícaras ou canecas. Se desejar, adicione chantilly por cima para decorar e polvilhe com chocolate ralado.",
          "Sirva imediatamente e aproveite o delicioso chocolate quente!",
      ],
      additional:[
         " Lembre-se de que você pode ajustar a quantidade de açúcar de acordo com seu gosto pessoal. Além disso, você também pode adicionar outros ingredientes, como canela em pó ou marshmallows, para dar um toque extra ao seu chocolate quente."
      ]
  }
]
const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch("https://dummyjson.com/recipes")
        .then((response) => response.json())
        .then((data) => {
          if (data.recipes) {
            setRecipes(data.recipes);
          } else {
            setRecipes(fallbackRecipes); // Use static data if API response is empty
          }
        })
        .catch((error) => {
          console.error("Erro ao buscar receitas:", error);
          setRecipes(fallbackRecipes); // Use static data in case of an error
        })
        .finally(() => setLoading(false));
    }, []);
  
    if (loading) {
      return <p>Carregando receitas...</p>;
    }
  

  // const [recipes, setRecipes] = useState([]); //stores fetch recipes
  // useEffect(() => {
  //   fetch("https://dummyjson.com/recipes")
  //     .then((response) => response.json())
  //     .then((data) => setRecipes(data.recipes))  // Assuming `recipes` is inside `data`
  //     .catch((error) => console.error("Error fetching recipes:", error));
  // },
  //  []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home recipes={recipes}/>}></Route>
        <Route path='/receitas' element={<Receitas recipes={recipes}/>}></Route>
        <Route path='/sobre-nos' element={<SobreNos/>}></Route>
        <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes}/>}></Route>
      </Routes>
    </>
  )
}

export default App
