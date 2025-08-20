import { useState } from "react";
import useApp from "../hooks/useApp";
import Header from "../components/Header";
import EventCard from "../components/EventCard";

const HomeScreen=()=> {
        const { events, favorites, activeTab, setActiveTab, handleEventSearch } = useApp();
        const [keyword, setKeyword] = useState('');
        const [city, setCity] = useState('');
        
        const handleSearch = (e) => {
            e.preventDefault();
            handleEventSearch(keyword, city);
        };
        console.log("events",events);
        
        const eventsToShow = activeTab === 'favorites' 
            ? events.filter(event => favorites.includes(event.id))
            : events;
            
        return (
            <div>
                <Header title="City Pulse" />
                
                <div className="search-container">
                    <h2 className="search-title">Find Events in Your City</h2>
                    <form className="search-form" onSubmit={handleSearch}>
                        <div className="form-group">
                            <label htmlFor="keyword">What are you looking for?</label>
                            <input 
                                type="text" 
                                id="keyword" 
                                className="form-control" 
                                placeholder="Concerts, sports, theater..."
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input 
                                type="text" 
                                id="city" 
                                className="form-control" 
                                placeholder="Enter your city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>
                        <div className="form-group" style={{display: 'flex', alignItems: 'flex-end'}}>
                            <button type="submit" className="btn btn-primary" style={{height: '46px'}}>
                                <i className="fas fa-search"></i> Search
                            </button>
                        </div>
                    </form>
                </div>
                
                <div className="tab-container">
                    <div 
                        className={`tab ${activeTab === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveTab('all')}
                    >
                        All Events
                    </div>
                    <div 
                        className={`tab ${activeTab === 'favorites' ? 'active' : ''}`}
                        onClick={() => setActiveTab('favorites')}
                    >
                        Favorites
                    </div>
                </div>
                
                <div className="events-container">
                    {eventsToShow.map(event => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </div>
        );
    }

    export default HomeScreen;