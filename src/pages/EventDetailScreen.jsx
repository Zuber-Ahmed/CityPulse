import { useEffect,useState } from "react";
import useApp from "../hooks/useApp";
import Header from "../components/Header";
import mockEvents from "../stub/mockjson.json"
const EventDetailScreen=()=> {
        const { favorites, toggleFavorite } = useApp();
        const [event, setEvent] = useState(null);
        
        // In a real app, we would get the event ID from URL params and fetch data
        useEffect(() => {
            // For demo purposes, use the first event
            setEvent(mockEvents[0]);
        }, []);
        
        if (!event) return <div>Loading...</div>;
        
        const isFavorite = favorites.includes(event.id);
        
        return (
            <div>
                <Header title="Event Details" showBackButton={true} />
                <div className="event-detail-container">
                    <img src={event.image} alt={event.title} className="event-detail-image" />
                    <div className="event-detail-content">
                        <div className="event-details-header">
                        <h2 className="event-detail-title">{event.title}</h2>
                           <button 
                            className={`favorite-btn ${isFavorite ? 'active' : ''}`}
                            onClick={() => toggleFavorite(event.id)} 
                            >
                            <i className="fas fa-heart"></i> {isFavorite ? <span>&#x26D4;</span> :<span>&#9733;</span>}
                        </button>
                            </div>
                        <div className="event-detail-info">
                            <div>
                                <span className="info-label"><i className="fas fa-calendar"></i> Date</span>
                                <span>{event.date}</span>
                            </div>
                            <div>
                                <span className="info-label"><i className="fas fa-clock"></i> Time</span>
                                <span>{event.time}</span>
                            </div>
                            <div>
                                <span className="info-label"><i className="fas fa-map-marker-alt"></i> Venue</span>
                                <span>{event.venue}</span>
                            </div>
                            <div>
                                <span className="info-label"><i className="fas fa-tag"></i> Category</span>
                                <span>{event.category}</span>
                            </div>
                        </div>
                        <div>
                            <span className="info-label"><i className="fas fa-info-circle"></i> Description</span>
                            <p>{event.description}</p>
                        </div>
                        <div className="map-container">
                            <i className="fas fa-map-marked-alt" style={{fontSize: '48px', marginRight: '15px'}}></i>
                            <span>Map Preview of Event Location</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }

    export default EventDetailScreen;