import logo from './logo.svg';
import './App.css';

function App() {
  const products= [
    { name: 'Laptop', price: 33000 },
    { name: 'Tablet', price: 25000 },
    { name: 'Watch', price: 40000 },
    { name: 'Phone', price: 53000 },
    { name: 'Phone', price: 53000 }
  ]


  return (
    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
    </div>
  );
}
function Product(props) {
  return (
    <div className='product'>
      <h2>Name: {props.name}</h2>
      <p>Price: {props.price}</p>

    </div>
  )
}

export default App;
