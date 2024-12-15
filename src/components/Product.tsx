import React, { useState } from 'react';

import Divider from './Divider';
import config from '../config/index.json';

interface ProductProps {
  isAdmin: boolean; // Prop to check if the user is an admin
}

const Product: React.FC<ProductProps> = ({ isAdmin }) => {
  const { product } = config;
  const [items, setItems] = useState(product.items); // Manage events dynamically
  const [rsvpStatus, setRsvpStatus] = useState<{ [key: string]: boolean }>({});
  const [notification, setNotification] = useState<string | null>(null);

  const handleRsvp = (title: string) => {
    const newStatus = !rsvpStatus[title];
    setRsvpStatus((prevState) => ({
      ...prevState,
      [title]: newStatus,
    }));

    const action = newStatus ? 'RSVPed' : 'canceled RSVP';
    setNotification(`You have ${action} for ${title}`);

    // Hide notification after 3 seconds
    setTimeout(() => setNotification(null), 3000);
  };

  const handleAddEvent = () => {
    const newEvent = {
      title: `New Event ${items.length + 1}`,
      description: 'Description for new event',
      img: '/assets/images/default-event.jpg', // Default image path
    };
    setItems([...items, newEvent]);
  };

  const handleEditEvent = (index: number) => {
    const updatedItems = [...items];
    updatedItems[index] = {
      ...updatedItems[index],
      title: `${updatedItems[index].title} (Edited)`,
    };
    setItems(updatedItems);
  };

  const handleDeleteEvent = (index: number) => {
    const filteredItems = items.filter((_, i) => i !== index);
    setItems(filteredItems);
  };

  return (
    <section className="bg-background py-8" id="product">
      <div className="container max-w-5xl mx-auto m-8">
        {notification && (
          <div className="fixed top-5 right-5 bg-black text-white px-4 py-2 rounded shadow-lg z-50">
            {notification}
          </div>
        )}
        <h1
          className="w-full my-2 text-5xl font-bold leading-tight text-center text-primary"
        >
          {product.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />

        {isAdmin && (
          <div className="mb-6 flex justify-end">
            <button
              onClick={handleAddEvent}
              className="px-6 py-2 text-white bg-green-500 hover:bg-green-600 rounded-md"
            >
              Add Event
            </button>
          </div>
        )}

        {items.map((item, index) => (
          <div key={index} className="flex flex-wrap mb-8">
            <div className="w-full sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-6">{item.description}</p>
              <button
                className="px-6 py-2 text-white bg-primary hover:bg-primary-dark rounded-md"
                onClick={() => handleRsvp(item.title)}
              >
                {rsvpStatus[item.title]
                  ? 'Cancel RSVP'
                  : 'RSVP for Event'}
              </button>
              {isAdmin && (
                <div className="mt-4 flex space-x-4">
                  <button
                    onClick={() => handleEditEvent(index)}
                    className="px-6 py-2 text-white bg-yellow-500 hover:bg-yellow-600 rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteEvent(index)}
                    className="px-6 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <img
                className="rounded-lg"
                src={item.img}
                alt={item.title}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
