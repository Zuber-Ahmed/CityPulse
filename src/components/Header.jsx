import useApp from "../hooks/useApp";

 const Header=({ title, showBackButton = false })=> {
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
export default Header;