import { Link } from "react-router-dom";
import { getProducts } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const products = getProducts();
  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="home-title">Bienvenido a GuareverStore</h1>
        <p className="home-subtitle">Buenos precios Mejores productos</p>
      </div>
      <div className="container">
        <h2 className="page-title">Nuestros Productos</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
