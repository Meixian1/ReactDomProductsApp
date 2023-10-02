import React, { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([
    {
      name: "Product 1",
      description: "Description 1",
      price: 10.99,
    },
    {
      name: "Product 2",
      description: "Description 2",
      price: 19.99,
    },
    // Add more products here
  ]);

  const addProduct = () => {
    // Create a new product object and add it to the products array
    const newProduct = {
      name: "New Product",
      description: "New Description",
      price: 0,
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <strong>Name:</strong> {product.name},{" "}
            <strong>Description:</strong> {product.description},{" "}
            <strong>Price:</strong> ${product.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
};

export default Products;
