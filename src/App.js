
import SplashScreen from './pages/SplashScreen';
import LoginScreen from './pages/LoginScreen';
import HomeScreen from './pages/HomeScreen';
import EventDetailScreen from './pages/EventDetailScreen';
import ProfileScreen from './pages/ProfileScreen';
import './styles/App.css';
import useApp from './hooks/useApp';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
    const { currentScreen, isRTL } = useApp();
    console.log("currentScreen:", currentScreen);

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

export default App;
