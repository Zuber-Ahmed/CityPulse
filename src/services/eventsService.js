const API_KEY = process.env.REACT_APP_TICKETMASTER_API_KEY;
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events';

export const searchEvents = async (keyword, city) => {
  try {
    const response = await fetch(
      `${BASE_URL}.json?keyword=${keyword}&city=${city}&apikey=${API_KEY}`
    );
    const data = await response.json();
    
    return data._embedded?.events || [];
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
};

export const getEventDetails = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}.json?apikey=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching event details:', error);
    return null;
  }
};

export const getVenueDetails = async (venueId) => {
  try {
    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/venues.json?apikey=${API_KEY}&keyword=${venueId}` // Adjust the endpoint as needed
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching venue details:', error);
    return null;
  }
}

export const getVenueDetailsByCity = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}/1A_ZkG6GkdnbMfs.json?apikey=${API_KEY}`
    );
    const data = await response.json();
    return data._embedded?.venues || [];
  } catch (error) {
    console.error('Error fetching venue details by city:', error);
    return [];
  }
}