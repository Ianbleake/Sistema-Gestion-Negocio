import Contacto from "./components/Contacto";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import Nosotros from "./components/Nosotros";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito";
import Checkout from "./components/Checkout";
import { Footer } from "./components/Footer";
import { CodigoQR } from "./components/CodigoQR";
import { LogIn } from "./components/LogIn";
import { Admin } from "./components/Admin";
import AgregarProducto from "./components/Agregar";


function App() {
  return (
    <div className='w-full min-h-[100VH] bg-green-100 flex flex-col relative'>
      <CartProvider>
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/nosotros" element={<Nosotros />}/>
            <Route path="/contacto" element={<Contacto />}/>
            <Route path="/carrito" element={<Carrito />}/>
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="/QR" element={<CodigoQR/>}/>
            <Route path="/Login" element={<LogIn/>} />
            <Route path="/Admin" element={<Admin/>} />
            <Route path="/Agregar" element={<AgregarProducto/>}/>
          </Routes>

          <Footer/>
          
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;