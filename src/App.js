import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Cart from "./components/Cart"
import Home from "./components/Home"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;


//sdfsdfsdfs