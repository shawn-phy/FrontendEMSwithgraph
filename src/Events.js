import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_EVENTS } from './queries';

const Events = () => {
  const { loading, error, data } = useQuery(GET_EVENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.events.map(event => (
        <div key={event.eventId} className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">{event.eventName}</h2>
          <p className="text-gray-700">{event.eventDate}</p>
          <p className="text-gray-700">{event.eventTime}</p>
          <p className="text-gray-700">{event.location}</p>
          <p className="text-gray-700">{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Events;
