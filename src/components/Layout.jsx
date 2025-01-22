import Footer from "./Footer";
import Navbar from "./NavBar";
import TopBanner from "./Topbanner";

const Layout = ({children}) => {
    return ( 
        <div>
            <Navbar/>
            <TopBanner/>
            <main className="flex-grow">{children}</main>
            <Footer/>
        </div>
    );
}
 
export default Layout;