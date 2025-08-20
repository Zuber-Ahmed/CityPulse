import useApp from "../hooks/useApp";
import Header from "../components/Header"
import EventCard from "../components/EventCard"
const ProfileScreen=()=> {
    const { user, favorites, events } = useApp();
    const favoriteEvents = events.filter(event => favorites.includes(event.id));
        
        return (
            <div>
                <Header title="User Profile" showBackButton={true} />
                
                <div className="profile-container">
                    <div className="profile-header">
                        <div className="profile-avatar">
                            <i className="fas fa-user"></i>
                        </div>
                        <div>
                            <h2 className="profile-name">{user?.name}</h2>
                            <p className="profile-email">{user?.email}</p>
                        </div>
                    </div>

                    <div className="profile-section">
                        <h3 className="section-title">Favorite Events</h3>
                        <div className="events-container">
                            {favoriteEvents.map(event => (
                                <EventCard key={event.id} event={event} />
                            ))}
                            {favoriteEvents.length === 0 && (
                                <p>You haven't added any events to your favorites yet.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    export default ProfileScreen;