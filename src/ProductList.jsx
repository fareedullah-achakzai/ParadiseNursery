
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from './CartSlice';

const categories = [
  {
    name: 'Indoor Plants',
    plants: [
      { id: 1, name: 'Snake Plant', price: 15, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400' },
      { id: 2, name: 'Monstera', price: 25, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400' },
      { id: 3, name: 'Peace Lily', price: 20, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400' },
      { id: 4, name: 'Spider Plant', price: 12, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400' },
      { id: 5, name: 'Rubber Plant', price: 22, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400' },
      { id: 6, name: 'ZZ Plant', price: 18, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' }
    ]
  },
  {
    name: 'Succulents',
    plants: [
      { id: 7, name: 'Aloe Vera', price: 10, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
      { id: 8, name: 'Echeveria', price: 14, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400' },
      { id: 9, name: 'Jade Plant', price: 16, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400' },
      { id: 10, name: 'Haworthia', price: 13, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400' },
      { id: 11, name: 'Burros Tail', price: 17, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400' },
      { id: 12, name: 'Cactus', price: 11, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' }
    ]
  },
  {
    name: 'Flowering Plants',
    plants: [
      { id: 13, name: 'Rose Plant', price: 19, image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=400' },
      { id: 14, name: 'Orchid', price: 28, image: 'https://images.unsplash.com/photo-1566907225472-514a4a5e0f3e?w=400' },
      { id: 15, name: 'Anthurium', price: 24, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400' },
      { id: 16, name: 'African Violet', price: 15, image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=400' },
      { id: 17, name: 'Hibiscus', price: 21, image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=400' },
      { id: 18, name: 'Jasmine', price: 18, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400' }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity, 0
  );

  return (
    <div className="product-page">
      <nav className="navbar">
        <h2>Paradise Nursery</h2>
        <div>
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">Cart ({totalItems})</Link>
        </div>
      </nav>

      <h1>Our Houseplants</h1>

      {categories.map((category) => (
        <section key={category.name}>
          <h2>{category.name}</h2>

          <div className="product-grid">
            {category.plants.map((plant) => {
              const added = cartItems.some(
                (item) => item.id === plant.id
              );

              return (
                <div className="product-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>

                  <button
                    disabled={added}
                    onClick={() => dispatch(addToCart(plant))}
                  >
                    {added ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
