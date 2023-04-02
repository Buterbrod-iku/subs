import './App.css';
import Header from "./components/header";
import Main from "./components/main";
import Info from "./components/info";
import Footer from "./components/footer";
import Price from "./components/price";
import Polit from "./components/polit";
import Ofer from "./components/ofer";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (

        <div className="App">
            <Routes>
                <Route path="/" element={[<Header />, <Main />, <Price />, <Info />, <Footer />]}/>
                <Route path="/privacy" element={<Polit />}/>
                <Route path="/ofer" element={<Ofer />}/>
            </Routes>
        </div>

  );
}

export default App;
