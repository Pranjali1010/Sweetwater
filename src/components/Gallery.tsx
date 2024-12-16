import React, { useState } from 'react';

const events = [
  {
    id: 1,
    title: 'Sweetwater GuitarFest',
    description:
      'The largest music gear event of the year, featuring guitar demos, workshops, and live performances.',
    img: '/assets/images/GuitarFest.png',
    location: 'Sweetwater Sound Headquarters, Fort Wayne, IN',
    date: 'July 15, 2024',
    time: '10:00 AM - 6:00 PM',
  },
  {
    id: 2,
    title: 'Sweetwater Virtual GearFest',
    description:
      'A virtual experience bringing Sweetwater GearFest to you, with exclusive deals and online workshops.',
    img: '/assets/images/eventImg2.png',
    location: 'Online Event',
    date: 'August 5, 2024',
    time: '9:00 AM - 5:00 PM',
  },
  {
    id: 3,
    title: 'Sweetwater Education Series',
    description:
      'Monthly workshops and live streams on music production, sound engineering, and more, led by industry experts.',
    img: '/assets/images/eventImg3.png',
    location: 'Online Event',
    date: 'Every 1st Monday of the Month',
    time: '6:00 PM - 8:00 PM',
  },
  {
    id: 4,
    title: 'Sweetwater Summer Jam',
    description:
      'A casual event where musicians and gear enthusiasts gather for jam sessions, gear testing, and fun.',
    img: '/assets/images/eventImg4.png',
    location: 'Sweetwater Sound Headquarters, Fort Wayne, IN',
    date: 'June 30, 2024',
    time: '3:00 PM - 8:00 PM',
  },
  {
    id: 5,
    title: 'Sweetwater Studio Sessions',
    description:
      'Exclusive studio tours and product demonstrations, showcasing Sweetwater’s recording and live sound gear.',
    img: '/assets/images/eventImg5.png',
    location: 'Sweetwater Sound Headquarters, Fort Wayne, IN',
    date: 'July 10, 2024',
    time: '1:00 PM - 4:00 PM',
  },
  {
    id: 6,
    title: 'Sweetwater Pro Audio Meetups',
    description:
      'Networking and educational events for pro audio engineers, producers, and musicians in the Sweetwater community.',
    img: '/assets/images/eventImg6.png',
    location: 'Sweetwater Sound Headquarters, Fort Wayne, IN',
    date: 'August 20, 2024',
    time: '5:00 PM - 9:00 PM',
  },
];

const Gallery: React.FC = () => {
  const [rsvpStatus, setRsvpStatus] = useState<{ [key: string]: boolean }>({});
  const [notification, setNotification] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null); // State for the selected event
  const [modalOpen, setModalOpen] = useState<boolean>(false); // State for modal visibility

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

  // Function to open the modal and set the selected event
  const openModal = (event: any) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <section className="bg-background py-16" id="gallery">
      <div className="container max-w-6xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center text-primary mb-12">
          Event Gallery
        </h2>

        {notification && (
          <div className="fixed top-5 right-5 bg-black text-white px-4 py-2 rounded shadow-lg z-50">
            {notification}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
              onClick={() => openModal(event)} // Open modal when event is clicked
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl font-semibold text-center text-gray-800 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-left mb-4">{event.description}</p>
                </div>

                {/* Button in the bottom left corner */}
                <div className="flex justify-start mt-auto">
                  <button
                    className="px-4 py-1 text-sm text-white bg-primary hover:bg-primary-dark rounded-md"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent opening modal when clicking the RSVP button
                      handleRsvp(event.title);
                    }}
                  >
                    {rsvpStatus[event.title] ? 'Cancel RSVP' : 'RSVP for Event'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for event details */}
        {modalOpen && selectedEvent && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg w-full sm:w-3/4 lg:w-1/2 relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
              >
                X
              </button>

              <div className="flex flex-col items-center">
                {/* Updated Image Style: object-contain and max-height */}
                <img
                  src={selectedEvent.img}
                  alt={selectedEvent.title}
                  className="w-full max-h-[500px] object-contain rounded-lg mb-4"
                />
                <h3 className="text-3xl font-bold text-gray-800 mb-4">{selectedEvent.title}</h3>
                <p className="text-gray-600 text-center mb-4">{selectedEvent.description}</p>
                <p className="text-lg font-semibold">Location: {selectedEvent.location}</p>
                <p className="text-lg font-semibold">Date: {selectedEvent.date}</p>
                <p className="text-lg font-semibold">Time: {selectedEvent.time}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
