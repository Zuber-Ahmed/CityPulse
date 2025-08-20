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