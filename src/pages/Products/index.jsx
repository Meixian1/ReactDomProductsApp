import React, { useState, useEffect } from "react";

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

  // Local state for input values
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: 0,
  });

  // Function to handle form submission
  const addProduct = (event) => {
    event.preventDefault();
    
    // Create a new product object from input values
    const productToAdd = { ...newProduct };
    
    // Add the new product to the products array
    setProducts((prevProducts) => [...prevProducts, productToAdd]);
    
    // Clear input fields by resetting the local state
    setNewProduct({ name: "", description: "", price: 0 });
  };

  // Use useEffect to log changes in the products state
  useEffect(() => {
    console.log("A new product has been added!");
    console.log("Updated products state:", products);
  }, [products]);

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
      <form onSubmit={addProduct}>
        <input
          type="text"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })
          }
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default Products;
