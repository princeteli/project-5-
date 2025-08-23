import useFetch from "../Hooks/useFetch";
import "./ProductList.css";

const ProductList = () => {
  const { data, loading, error } = useFetch("https://api.escuelajs.co/api/v1/products");

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div className="product-container">
      <h2>Product List</h2>
      <div className="product-list">
        {data.map((items) => (
          <div key={items.id} className="product-card">
            <img src={items.images[0]} alt={items.title} />
            <h3>{items.title}</h3>
            <p>${items.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
