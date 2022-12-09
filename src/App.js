import './App.css';
import Header from "./components/header";
import Main from "./components/main";
import Info from "./components/info";
import Footer from "./components/footer";
import Price from "./components/price";

function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Price />
        <Info />
        <Footer />
    </div>
  );
}

export default App;
