import "./styles/App.css";
import Hero from "./components/Hero.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <div className="wrapper">
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
