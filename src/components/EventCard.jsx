import useApp from "../hooks/useApp";

 const EventCard=({ event })=> {
        const { navigateTo, favorites, toggleFavorite } = useApp();
        const isFavorite = favorites.includes(event.id);
        
        return (
            <div className="event-card">
                <img src={event.image} alt={event.title} className="event-image" />
                <div className="event-content">
                    <h3 className="event-title">{event.title}</h3>
                    <div className="event-details">
                        <div><i className="fas fa-calendar"></i> {event.date}</div>
                        <div><i className="fas fa-clock"></i> {event.time}</div>
                        <div><i className="fas fa-map-marker-alt"></i> {event.venue}</div>
                        <div><i className="fas fa-tag"></i> {event.category}</div>
                    </div>
                    <div className="event-actions">
                        <button 
                            className="btn btn-outline"
                            onClick={() => navigateTo('detail', event)}
                        >
                            View Details
                        </button>
                        <button 
                            className={`favorite-btn ${isFavorite ? 'active' : ''}`}
                            onClick={() => toggleFavorite(event.id)}
                        >
                            <i className="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    export default EventCard;