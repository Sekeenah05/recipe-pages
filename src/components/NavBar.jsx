import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div  
            style={{ backgroundColor: '#FFDB63' }} 
            className="h-5">
            </div>

            <nav className="display flex justify-between py-4 px-16">
                <div className="display flex gap-1 justify-center items-center">
                    <img className="w-5" src="/logo.png" alt="Food Recipe Store Logo" />
                    <p>Delícias à Mesa</p>
                </div>

                <ul className="display flex gap-6 font-semibold">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/receitas">Receitas</Link></li>
                    <li><Link to="/sobre-nos">Sobre nos</Link></li>
                </ul>

                <input className="placeholder:italic
                 placeholder:text-slate-300 block
                  bg-gray-200 w-{80%}
                 border-slate-300 rounded-xl 
                 py-1 pl-2 pr-4 shadow-sm
                 sm:text-sm" 
                placeholder="🔍 Search for anything..." type="text" name="search" />

            </nav>
        </>
    );
}

export default Navbar;