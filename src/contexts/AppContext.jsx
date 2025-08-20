import { useState, useEffect } from "react";
import AppContext from "../contexts/State/State";
import mockEvents from "../stub/mockjson.json"
import {searchEvents,getEventDetails} from "../services/eventsService";

const AppProvider = ({ children }) => {

  const [currentScreen, setCurrentScreen] = useState("splash");
  const [isRTL, setIsRTL] = useState(false);
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [activeTab, setActiveTab] = useState("favorites");

  // Load data from localStorage on initial render
  useEffect(() => {
    const userData = atob(localStorage.getItem("user"));
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
    console.log("home-1",getEventDetails().then(data=> data).then(val=>val?._embedded));
    setTimeout(() => {
      if (!userData) {
        setCurrentScreen("login");
      } else {
        setCurrentScreen("home");
        
        setEvents(()=>getEventDetails());
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
  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  // Login function
  const login =(email,password) => {
    // Mock authentication
    const userData = { email,password };
    setUser(userData);
    localStorage.setItem("user", btoa(JSON.stringify(userData)));
    setCurrentScreen("home");
    // const data=await 
    console.log("1",getEventDetails());
    
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
    // In a real app, this would be an API call
    const data=await searchEvents(keyword, city);
    const filteredEvents = data.filter(
      (event) =>
        event.title.toLowerCase().includes(keyword.toLowerCase()) &&
        event.venue.toLowerCase().includes(city.toLowerCase())
    );
    setEvents(filteredEvents);
  };
console.log("===>",events);

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
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
