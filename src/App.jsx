import "./App.css";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import AR from "./pages/AR"; 
import Products  from "./pages/Products"; 
import Support   from "./pages/Support"; 
import Home from "./pages/Home";
import { Routes,Route, Router} from 'react-router-dom'

function App() {
  return (
    <>
      <Cursor />
      <Navbar />
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/products' exact element={<Products />} />
              <Route path='/support' exact element={<Support/>} />
              <Route path='/ar' exact element={<AR/>} />
            </Routes>
    </>
  );
}

export default App;
