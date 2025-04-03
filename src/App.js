import "./styles/App.css";
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
