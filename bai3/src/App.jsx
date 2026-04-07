import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;