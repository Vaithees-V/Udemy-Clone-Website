import Navbar from "./components/Navbar";
import Catagories from "./components/Catagories";
import Recomment from "./components/Recomment";
import Topics from "./components/Topics";
import Popular from "./components/Popular";
import Footer from "./components/Footer";

function App(){
    return(
        <>
            <Navbar></Navbar>
            <Catagories></Catagories>
            <Recomment></Recomment>
            <Topics></Topics>
            <Popular></Popular>
            <Footer></Footer>
        </>
    )
}

export default App;