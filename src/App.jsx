import Home from "./Paginas/Home"
import { Provider } from "react-redux";
import Store from './redux/Store';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Checkout from "./Paginas/Checkout";

function App() {
 return(
  <Provider store={Store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
    </Routes>
  </BrowserRouter>
  </Provider>
 );
}

export default App;
