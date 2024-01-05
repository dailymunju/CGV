import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MovieSub from "./components/MovieSub/MovieSub";
import GlobalStyle from "./styled/GlobalStyle";


const App = () => {
  return (
    <>
    
     <div className="wrap">
     <GlobalStyle/>
     <Header/>
     <MovieSub/>
     <Footer/>
     </div>
    </>
  );
};

export default App;