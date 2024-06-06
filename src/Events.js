import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_EVENTS } from './queries';

const Events = () => {
  const { loading, error, data } = useQuery(GET_EVENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Events</h1>
      <ul>
        {data.events.map(event => (
          <li key={event.eventId}>
            <h2>{event.eventName}</h2>
            <p>{event.eventDate}</p>
            <p>{event.eventTime}</p>
            <p>{event.location}</p>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
