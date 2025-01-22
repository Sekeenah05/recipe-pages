import Footer from "./Footer";
import Navbar from "./NavBar";

const Slayout = ({children}) => {
    return ( 
        <>
            <Navbar/>
            <main className="flex-grow">{children}</main>
            <Footer/>
        </>
     );
}
 
export default Slayout;