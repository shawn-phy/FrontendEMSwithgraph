import { gql } from '@apollo/client';

export const GET_EVENTS = gql`
  query GetEvents {
    events {
      eventId
      eventName
      eventDate
      eventTime
      location
      description
      organizerId
    }
  }
`;
