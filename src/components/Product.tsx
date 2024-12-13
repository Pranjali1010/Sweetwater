import React, { useState } from 'react';

import Divider from './Divider';
import config from '../config/index.json';

const Product: React.FC = () => {
  const { product } = config;
  const [firstItem, secondItem] = product.items;
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
        <div className="flex flex-wrap">
          {/* First Event */}
          <div className="w-full sm:w-1/2 p-6 mt-20">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              {firstItem?.title}
            </h3>
            <p className="text-gray-600 mb-6">{firstItem?.description}</p>
            <button
              className="px-6 py-2 text-white bg-primary hover:bg-primary-dark rounded-md"
              onClick={() => handleRsvp(firstItem?.title || '')}
            >
              {rsvpStatus[firstItem?.title || '']
                ? 'Cancel RSVP'
                : 'RSVP for Event'}
            </button>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <img
              className="rounded-lg"
              src={firstItem?.img}
              alt={firstItem?.title}
            />
          </div>
        </div>

        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          {/* Second Event */}
          <div className="w-full sm:w-1/2 p-6">
            <img
              className="rounded-lg"
              src={secondItem?.img}
              alt={secondItem?.title}
            />
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-20">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              {secondItem?.title}
            </h3>
            <p className="text-gray-600 mb-6">{secondItem?.description}</p>
            <button
              className="px-6 py-2 text-white bg-primary hover:bg-primary-dark rounded-md"
              onClick={() => handleRsvp(secondItem?.title || '')}
            >
              {rsvpStatus[secondItem?.title || '']
                ? 'Cancel RSVP'
                : 'RSVP for Event'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
