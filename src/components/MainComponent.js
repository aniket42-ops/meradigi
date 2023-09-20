import Home from "./Menu/Assets/Home";
import "./Menu/Header.css";
import Services from "./Services";
import Search from "./Search";
import "./Search.css";
import Aboutus from "./Aboutus";
import Form from "./Form";
import Footer from "./Footer";
import Navbar from "./Navbar";

function MainComponent({ props }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <br/>
        <Search />
        <Home />
        <Services />
        <Aboutus />
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default MainComponent;
