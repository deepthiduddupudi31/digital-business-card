import Header from "./Header.jsx"
import About  from  "./About.jsx";
import Intersets from "./Interests.jsx";
import Footer from   "./Footer.jsx";

export default function App()
{
   return(
     <div className="main">
       <Header/>
       <About/>
       <Intersets/>
       <Footer/>
     </div>
   )
}