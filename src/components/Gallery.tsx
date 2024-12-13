import React from 'react';

const events = [
  {
    id: 1,
    title: 'Sweetwater GuitarFest',
    description:
      'The largest music gear event of the year, featuring guitar demos, workshops, and live performances.',
    img: '/assets/images/GuitarFest.png',
  },
  {
    id: 2,
    title: 'Sweetwater Virtual GearFest',
    description:
      'A virtual experience bringing Sweetwater GearFest to you, with exclusive deals and online workshops.',
    img: '/assets/images/eventImg2.png',
  },
  {
    id: 3,
    title: 'Sweetwater Education Series',
    description:
      'Monthly workshops and live streams on music production, sound engineering, and more, led by industry experts.',
    img: '/assets/images/eventImg3.png',
  },
  {
    id: 4,
    title: 'Sweetwater Summer Jam',
    description:
      'A casual event where musicians and gear enthusiasts gather for jam sessions, gear testing, and fun.',
    img: '/assets/images/eventImg4.png',
  },
  {
    id: 5,
    title: 'Sweetwater Studio Sessions',
    description:
      'Exclusive studio tours and product demonstrations, showcasing Sweetwater’s recording and live sound gear.',
    img: '/assets/images/eventImg5.png',
  },
  {
    id: 6,
    title: 'Sweetwater Pro Audio Meetups',
    description:
      'Networking and educational events for pro audio engineers, producers, and musicians in the Sweetwater community.',
    img: '/assets/images/eventImg6.png',
  },
];

const Gallery: React.FC = () => {
  return (
    <section className="bg-background py-16" id="gallery">
      <div className="container max-w-6xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center text-primary mb-12">
          Event Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-center text-gray-800 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-center">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
