import { useEffect, useState } from "react";
import useApp from "../hooks/useApp";
import Header from "../components/Header";

const EventDetailScreen = () => {
    const { favorites, toggleFavorite, eventDetails,setCurrentScreen } = useApp();
    const [event, setEvent] = useState(null);
    const address = `${eventDetails._embedded?.venues[0]?.address?.line1} ${eventDetails._embedded?.venues[0]?.city.name} ${eventDetails._embedded?.venues[0]?.country.name}` || "Address not available";

    // In a real app, we would get the event ID from URL params and fetch data
    useEffect(() => {
        setEvent(eventDetails);
    }, []);

    const isFavorite = favorites.includes(event?.id);

    if (!event) return <div>Loading...</div>;



    return (
        <div>
            <Header title="Event Details" showBackButton={true} setCurrentScreen={setCurrentScreen} />
            {event?.length > 0 ? (
                <div className="no-events">
                <h2>No Event Details Available</h2>
                <p>Please go back and select an event to view its details.</p>
                </div>
            ) : (  
            <div className="event-detail-container">
                <img src={event.images[5]?.url} alt={event.name} className="event-detail-image" />
                <div className="event-detail-content">
                    <div className="event-details-header">
                        <h2 className="event-detail-title">{event.name}</h2>
                        <button
                            className={`favorite-btn ${isFavorite ? 'active' : ''}`}
                            onClick={() => toggleFavorite(event.id)}
                        >
                            <i className="fas fa-heart"></i> {isFavorite ? <span>&#x26D4;</span> : <span>&#9733;</span>}
                        </button>
                    </div>
                    <div className="event-detail-info">
                        <div>
                            <span className="info-label"><i className="fas fa-calendar"></i> Date</span>
                            <span>{event.dates.start.localDate}</span>
                        </div>
                        <div>
                            <span className="info-label"><i className="fas fa-clock"></i> Time</span>
                            <span>{event.dates.start.localTime}</span>
                        </div>
                        <div>
                            <span className="info-label"><i className="fas fa-map-marker-alt"></i> Venue</span>
                            <span>{address}</span>
                        </div>
                        <div>
                            <span className="info-label"><i className="fas fa-tag"></i> Category</span>
                            <span>{event.type}</span>
                        </div>
                    </div>
                    <div>
                        <span className="info-label"><i className="fas fa-info-circle"></i> Description</span>
                        <p>{event.info}</p>
                    </div>
                    <div className="map-container">
                        <div style={{ height: '300px', width: '100%' }}>
                            <img src={event?._embedded?.venues[0]?.images[0]?.url} alt={event.name ? `${event.name} venue` : ""} />
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    );
}

export default EventDetailScreen;