import './App.css';
import Header from './header' 
import Body from './body';
import CartContextProvider from './CartContext';

function App() {
  return (
<CartContextProvider>
  <Header/><Body/>
  </CartContextProvider>)}

export default App;
