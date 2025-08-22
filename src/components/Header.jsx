import useApp from "../hooks/useApp";

 const Header=({ title, showBackButton })=> {
        const { isRTL, toggleLanguage, navigateTo, user, logout } = useApp();
        console.log(showBackButton);
        
        return (
            <header>
                <div className="logo">
                    {showBackButton && (
                        <button 
                           className="btn btn-primary"  
                            style={{cursor: 'pointer'}}
                            onClick={() => navigateTo('home')}
                        > Back</button>
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