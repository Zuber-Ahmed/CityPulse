import { useState, useEffect } from "react";
import AppContext from "../contexts/State/State";
import {searchEvents,getEventDetails,getVenueDetails, getVenueDetailsByCity} from "../services/eventsService";

const AppProvider = ({ children }) => {

  const [currentScreen, setCurrentScreen] = useState("splash");
  const [isRTL, setIsRTL] = useState(false);
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [eventDetails, setEventDetails] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchByeKeyword, setSearchByKeyword] = useState(false);
  const [activeTab, setActiveTab] = useState("favorites");

  // Load data from localStorage on initial render
  useEffect(() => {
    const userData =localStorage.getItem("user")=== null ? null : atob(localStorage.getItem("user"));
    const favData = localStorage.getItem("favorites");
    const langSetting = localStorage.getItem("isRTL");

    if (userData) {
      setUser(JSON.parse(userData));
    }

    if (favData) {
      setFavorites(JSON.parse(favData));
    }

    if (langSetting) {
      setIsRTL(langSetting === "true");
    }
    // Simulate splash screen
      const fetchEvents = async () => {
    const eventDetails = await getEventDetails();
    setEvents(eventDetails?._embedded?.events || []);
  };
    setTimeout(() => {
      if (!userData) {
        setCurrentScreen("login");
      } else {
        setCurrentScreen("home");
       fetchEvents();
      }
    }, 2000);
  }, []);

  // Toggle language direction
  const toggleLanguage = () => {
    setIsRTL((prev) => {
      localStorage.setItem("isRTL", !prev);
      return !prev;
    });
  };

  // Navigate to different screens
  const navigateTo = (screen,data) => {
    setCurrentScreen(screen);
    setEventDetails(data);
  };

  // Login function
  const login =(email,password) => {
    // Mock authentication
    const userData = { email,password };
    setUser(userData);
    localStorage.setItem("user", btoa(JSON.stringify(userData)));
    setCurrentScreen("home"); 
    setEvents(()=>getEventDetails());
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setCurrentScreen("login");
  };

  // Toggle favorite status
  const toggleFavorite = (eventId) => {
    setFavorites((prev) => {
      let newFavorites;
      if (prev.includes(eventId)) {
        newFavorites = prev.filter((id) => id !== eventId);
      } else {
        newFavorites = [...prev, eventId];
      }
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  // Search events
  const handleEventSearch = async(keyword, city) => {
   setSearchByKeyword(true)
    const data=await searchEvents(keyword, city);
    const venueData=await getVenueDetails(city);
    console.log(venueData?._embedded?.venues);
    
    setEvents(venueData?._embedded?.venues || data);
  };

  const value = {
    currentScreen,
    isRTL,
    user,
    events,
    favorites,
    activeTab,
    setActiveTab,
    toggleLanguage,
    navigateTo,
    login,
    logout,
    toggleFavorite,
    handleEventSearch,
    setEventDetails,
    eventDetails,
    setCurrentScreen,
    searchByeKeyword
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
