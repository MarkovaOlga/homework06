import logo from './logo.svg';
import './App.css';
import { AddProduct } from './AddProduct';
import { ProductList } from './ProductList';

function App() {
  return (
    <div>
      <h1>Product сatalog management</h1>
      <AddProduct />
      <ProductList />
      
    </div>
  );
}

export default App;
