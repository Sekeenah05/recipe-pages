const RecipeCard = ({ title,description,image }) => {
    return ( 
        <div>
            <div className="bg-gray-100 rounded-3xl shadow-md w-96">
                <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-3xl" />
                <div className="p-4">
                    <h2 className="text-lg font-bold text-gray-700 ">{title}</h2>
                    <p className="text-gray-400 mt-1 w-56" >{description}</p>
                    <button className="rounded-lg px-5 mt-4 " style={{ backgroundColor: '#FFDB63' }} >ver receita</button>
                </div>
            </div>
        </div>
     );
}
 
export default RecipeCard;