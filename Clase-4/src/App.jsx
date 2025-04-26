import { Counter } from "./components/Counter"
import { PokemonList } from "./components/PokemonList"
import { TodoList } from "./components/TodoList"
import { Header } from './components/Header'
import { AgregarProducto } from './components/AgregarProducto'
import { Carrito } from './components/Carrito'
import { CartProvider } from './context/CartContext'
import { Navbar } from "./components/Navbar"
import { Login } from "./components/Login"
function App() {

  /*const estado = 5*/
  return (
    <CartProvider>
    {/*<Header />*/}
    <Navbar/>
    <Login/>
    {/* <TodoList/> */}
    {/* <Counter/>
    <PokemonList /> */}
    {/*<div>
      <Carrito />
    </div>
    <AgregarProducto />*/}
    </CartProvider>
  )
}

export default App
