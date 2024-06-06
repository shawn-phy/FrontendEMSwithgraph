import React from 'react';

const events = [
  { id: 1, title: 'Event 1', description: 'Description for event 1' },
  { id: 2, title: 'Event 2', description: 'Description for event 2' },
  { id: 3, title: 'Event 3', description: 'Description for event 3' },
];

function Events() {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {events.map(event => (
        <div key={event.id} className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">{event.title}</h2>
          <p className="text-gray-700">{event.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Events;