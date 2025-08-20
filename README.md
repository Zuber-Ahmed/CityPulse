# CityPulse
This in an Assessment Mini Project



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>City Pulse – Local Events Explorer</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: #f5f7fa;
            color: #333;
            transition: all 0.3s ease;
        }

        body.rtl {
            direction: rtl;
        }

        .app {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 0;
            border-bottom: 1px solid #e1e4e8;
            margin-bottom: 30px;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .logo i {
            color: #4a6cf7;
            font-size: 28px;
        }

        .logo h1 {
            font-size: 24px;
            font-weight: 700;
            color: #2d3748;
        }

        .nav-buttons {
            display: flex;
            gap: 15px;
        }

        .btn {
            padding: 10px 20px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.2s ease;
        }

        .btn-primary {
            background-color: #4a6cf7;
            color: white;
        }

        .btn-primary:hover {
            background-color: #3859e3;
        }

        .btn-outline {
            background-color: transparent;
            border: 1px solid #4a6cf7;
            color: #4a6cf7;
        }

        .btn-outline:hover {
            background-color: #4a6cf7;
            color: white;
        }

        .search-container {
            background-color: white;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            margin-bottom: 30px;
        }

        .search-title {
            font-size: 22px;
            margin-bottom: 20px;
            color: #2d3748;
        }

        .search-form {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
        }

        .form-group {
            flex: 1;
            min-width: 250px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #4a5568;
        }

        .form-control {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid #e1e4e8;
            border-radius: 8px;
            font-size: 16px;
        }

        .events-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 25px;
            margin-bottom: 40px;
        }

        .event-card {
            background-color: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }

        .event-card:hover {
            transform: translateY(-5px);
        }

        .event-image {
            height: 180px;
            width: 100%;
            object-fit: cover;
        }

        .event-content {
            padding: 20px;
        }

        .event-title {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 10px;
            color: #2d3748;
        }

        .event-details {
            color: #718096;
            margin-bottom: 15px;
            font-size: 14px;
        }

        .event-details div {
            margin-bottom: 5px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .event-actions {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .favorite-btn {
            background: none;
            border: none;
            font-size: 20px;
            cursor: pointer;
            color: #cbd5e0;
            transition: color 0.2s ease;
        }

        .favorite-btn.active {
            color: #e53e3e;
        }

        .event-detail-container {
            background-color: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            margin-bottom: 30px;
        }

        .event-detail-image {
            width: 100%;
            height: 350px;
            object-fit: cover;
        }

        .event-detail-content {
            padding: 30px;
        }

        .event-detail-title {
            font-size: 28px;
            margin-bottom: 15px;
            color: #2d3748;
        }

        .event-detail-info {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }

        .event-detail-info div {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .info-label {
            font-weight: 600;
            color: #4a5568;
        }

        .map-container {
            height: 300px;
            margin-top: 20px;
            background-color: #e2e8f0;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #718096;
        }

        .profile-container {
            background-color: white;
            border-radius: 12px;
            padding: 30px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .profile-header {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 30px;
        }

        .profile-avatar {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-color: #4a6cf7;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 40px;
        }

        .profile-name {
            font-size: 24px;
            font-weight: 700;
            color: #2d3748;
        }

        .profile-email {
            color: #718096;
        }

        .profile-section {
            margin-bottom: 30px;
        }

        .section-title {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 15px;
            color: #2d3748;
            padding-bottom: 10px;
            border-bottom: 1px solid #e1e4e8;
        }

        .auth-container {
            max-width: 450px;
            margin: 50px auto;
            background-color: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .auth-title {
            text-align: center;
            font-size: 24px;
            margin-bottom: 25px;
            color: #2d3748;
        }

        .auth-form {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .auth-options {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
        }

        .biometric-btn {
            display: flex;
            align-items: center;
            gap: 8px;
            background: none;
            border: none;
            color: #4a6cf7;
            cursor: pointer;
            font-weight: 600;
        }

        .hidden {
            display: none;
        }

        .language-selector {
            display: flex;
            align-items: center;
            gap: 10px;
            background-color: #edf2f7;
            padding: 8px 15px;
            border-radius: 20px;
            font-weight: 600;
            color: #4a5568;
            cursor: pointer;
        }

        .tab-container {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
        }

        .tab {
            padding: 10px 20px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            background-color: #e2e8f0;
            color: #4a5568;
        }

        .tab.active {
            background-color: #4a6cf7;
            color: white;
        }

        @media (max-width: 768px) {
            .search-form {
                flex-direction: column;
            }
            
            .events-container {
                grid-template-columns: 1fr;
            }
            
            .nav-buttons {
                flex-direction: column;
                gap: 10px;
            }
        }
    </style>
</head>
<body>
    <div id="root">
        <!-- React will render here -->
    </div>

    <!-- React, ReactDOM, and Babel for JSX processing -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script type="text/babel">
        // Mock data for events
        const mockEvents = [
            {
                id: 1,
                title: "Summer Music Festival",
                date: "June 15, 2023",
                time: "2:00 PM - 10:00 PM",
                venue: "City Park Amphitheater",
                category: "Music",
                description: "Join us for the annual summer music festival featuring local and international artists across multiple stages.",
                image: "https://via.placeholder.com/400x200?text=Summer+Music+Festival",
                isFavorite: false
            },
            {
                id: 2,
                title: "Tech Conference 2023",
                date: "July 22, 2023",
                time: "9:00 AM - 6:00 PM",
                venue: "Convention Center",
                category: "Technology",
                description: "A full-day conference featuring talks from industry leaders on the latest trends in technology and innovation.",
                image: "https://via.placeholder.com/400x200?text=Tech+Conference",
                isFavorite: false
            },
            {
                id: 3,
                title: "Food & Wine Expo",
                date: "August 5, 2023",
                time: "12:00 PM - 8:00 PM",
                venue: "Downtown Expo Hall",
                category: "Food & Drink",
                description: "Sample culinary delights from top chefs and wineries from around the region.",
                image: "https://via.placeholder.com/400x200?text=Food+Wine+Expo",
                isFavorite: false
            },
            {
                id: 4,
                title: "Marathon Race",
                date: "September 10, 2023",
                time: "7:00 AM - 12:00 PM",
                venue: "City Streets",
                category: "Sports",
                description: "Annual city marathon with routes through downtown and along the waterfront. All skill levels welcome.",
                image: "https://via.placeholder.com/400x200?text=Marathon",
                isFavorite: false
            },
            {
                id: 5,
                title: "Art Exhibition",
                date: "October 18, 2023",
                time: "10:00 AM - 6:00 PM",
                venue: "Modern Art Museum",
                category: "Art",
                description: "Exhibition featuring works from contemporary artists exploring themes of identity and place.",
                image: "https://via.placeholder.com/400x200?text=Art+Exhibition",
                isFavorite: false
            },
            {
                id: 6,
                title: "Comedy Night",
                date: "November 5, 2023",
                time: "8:00 PM - 11:00 PM",
                venue: "Laugh Factory",
                category: "Comedy",
                description: "An evening of stand-up comedy featuring top comedians from across the country.",
                image: "https://via.placeholder.com/400x200?text=Comedy+Night",
                isFavorite: false
            }
        ];

        // Context for state management
        const AppContext = React.createContext();

        // Custom hook for using context
        function useApp() {
            const context = React.useContext(AppContext);
            if (!context) {
                throw new Error('useApp must be used within an AppProvider');
            }
            return context;
        }

        // App Provider Component
        function AppProvider({ children }) {
            const [currentScreen, setCurrentScreen] = React.useState('splash');
            const [isRTL, setIsRTL] = React.useState(false);
            const [user, setUser] = React.useState(null);
            const [events, setEvents] = React.useState([]);
            const [favorites, setFavorites] = React.useState([]);
            const [activeTab, setActiveTab] = React.useState('all');

            // Load data from localStorage on initial render
            React.useEffect(() => {
                const userData = localStorage.getItem('user');
                const favData = localStorage.getItem('favorites');
                const langSetting = localStorage.getItem('isRTL');
                
                if (userData) {
                    setUser(JSON.parse(userData));
                }
                
                if (favData) {
                    setFavorites(JSON.parse(favData));
                }
                
                if (langSetting) {
                    setIsRTL(langSetting === 'true');
                }
                
                // Simulate splash screen
                setTimeout(() => {
                    if (!userData) {
                        setCurrentScreen('login');
                    } else {
                        setCurrentScreen('home');
                        setEvents(mockEvents);
                    }
                }, 2000);
            }, []);

            // Toggle language direction
            const toggleLanguage = () => {
                setIsRTL(prev => {
                    localStorage.setItem('isRTL', !prev);
                    return !prev;
                });
            };

            // Navigate to different screens
            const navigateTo = (screen) => {
                setCurrentScreen(screen);
            };

            // Login function
            const login = (email, password) => {
                // Mock authentication
                const userData = { name: 'John Doe', email };
                setUser(userData);
                localStorage.setItem('user', JSON.stringify(userData));
                setCurrentScreen('home');
                setEvents(mockEvents);
            };

            // Logout function
            const logout = () => {
                setUser(null);
                localStorage.removeItem('user');
                setCurrentScreen('login');
            };

            // Toggle favorite status
            const toggleFavorite = (eventId) => {
                setFavorites(prev => {
                    let newFavorites;
                    if (prev.includes(eventId)) {
                        newFavorites = prev.filter(id => id !== eventId);
                    } else {
                        newFavorites = [...prev, eventId];
                    }
                    localStorage.setItem('favorites', JSON.stringify(newFavorites));
                    return newFavorites;
                });
            };

            // Search events
            const searchEvents = (keyword, city) => {
                // In a real app, this would be an API call
                const filteredEvents = mockEvents.filter(event => 
                    event.title.toLowerCase().includes(keyword.toLowerCase()) && 
                    event.venue.toLowerCase().includes(city.toLowerCase())
                );
                setEvents(filteredEvents);
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
                searchEvents
            };

            return (
                <AppContext.Provider value={value}>
                    {children}
                </AppContext.Provider>
            );
        }

        // Header Component
        function Header({ title, showBackButton = false }) {
            const { isRTL, toggleLanguage, navigateTo, user, logout } = useApp();
            
            return (
                <header>
                    <div className="logo">
                        {showBackButton && (
                            <i 
                                className="fas fa-arrow-left" 
                                style={{cursor: 'pointer'}}
                                onClick={() => navigateTo('home')}
                            ></i>
                        )}
                        <h1>{title}</h1>
                    </div>
                    <div className="nav-buttons">
                        <button className="btn btn-outline" onClick={toggleLanguage}>
                            <i className="fas fa-globe"></i> {isRTL ? 'English' : 'العربية'}
                        </button>
                        {user && (
                            <button 
                                className="btn btn-primary" 
                                onClick={() => title === 'User Profile' ? logout() : navigateTo('profile')}
                            >
                                <i className={`fas ${title === 'User Profile' ? 'fa-sign-out-alt' : 'fa-user'}`}></i> 
                                {title === 'User Profile' ? 'Logout' : 'Profile'}
                            </button>
                        )}
                    </div>
                </header>
            );
        }

        // Splash Screen Component
        function SplashScreen() {
            return (
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', gap: '20px'}}>
                    <div style={{fontSize: '48px', color: '#4a6cf7'}}>
                        <i className="fas fa-ticket-alt"></i>
                    </div>
                    <h1 style={{fontSize: '32px', color: '#2d3748'}}>City Pulse</h1>
                    <p style={{color: '#718096'}}>Local Events Explorer</p>
                </div>
            );
        }

        // Login Screen Component
        function LoginScreen() {
            const { login } = useApp();
            const [email, setEmail] = React.useState('');
            const [password, setPassword] = React.useState('');
            
            const handleLogin = (e) => {
                e.preventDefault();
                login(email, password);
            };
            
            return (
                <div className="auth-container">
                    <h2 className="auth-title">Welcome to City Pulse</h2>
                    <form className="auth-form" onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                className="form-control" 
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                className="form-control" 
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                        <button type="button" className="btn btn-outline">Create Account</button>
                    </form>
                    <div className="auth-options">
                        <button className="biometric-btn">
                            <i className="fas fa-fingerprint"></i> Use Biometric Login
                        </button>
                    </div>
                </div>
            );
        }

        // Event Card Component
        function EventCard({ event }) {
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

        // Home Screen Component
        function HomeScreen() {
            const { events, favorites, activeTab, setActiveTab, searchEvents } = useApp();
            const [keyword, setKeyword] = React.useState('');
            const [city, setCity] = React.useState('');
            
            const handleSearch = (e) => {
                e.preventDefault();
                searchEvents(keyword, city);
            };
            
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

        // Event Detail Screen Component
        function EventDetailScreen() {
            const { navigateTo, favorites, toggleFavorite } = useApp();
            const [event, setEvent] = React.useState(null);
            
            // In a real app, we would get the event ID from URL params and fetch data
            React.useEffect(() => {
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
                            <h2 className="event-detail-title">{event.title}</h2>
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
                            <button 
                                className={`favorite-btn ${isFavorite ? 'active' : ''}`}
                                onClick={() => toggleFavorite(event.id)}
                                style={{marginTop: '20px', fontSize: '24px'}}
                            >
                                <i className="fas fa-heart"></i> {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        // Profile Screen Component
        function ProfileScreen() {
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

        // Main App Component
        function App() {
            const { currentScreen, isRTL } = useApp();
            
            return (
                <div className="app" dir={isRTL ? 'rtl' : 'ltr'}>
                    {currentScreen === 'splash' && <SplashScreen />}
                    {currentScreen === 'login' && <LoginScreen />}
                    {currentScreen === 'home' && <HomeScreen />}
                    {currentScreen === 'detail' && <EventDetailScreen />}
                    {currentScreen === 'profile' && <ProfileScreen />}
                </div>
            );
        }

        // Render the app
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
            <AppProvider>
                <App />
            </AppProvider>
        );
    </script>
</body>
</html>