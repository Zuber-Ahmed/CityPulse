# City Pulse - Local Events Explorer

City Pulse is a React-based web application that allows users to explore, search, and favorite local events. It features authentication, event search by keyword and city, event detail views, venue details, and user profile management.

---

## Project Structure

```
.env
.gitignore
package.json
README.md
public/
  index.html
  manifest.json
  robots.txt
src/
  App.css
  App.js
  App.test.js
  index.css
  index.js
  logo.svg
  reportWebVitals.js
  setupTests.js
  components/
    EventCard.jsx
    EventVenueDetail.js
    Header.jsx
  contexts/
    AppContext.jsx
    State/
      State.jsx
  hooks/
    useApp.jsx
    useLocalStorage.jsx
  pages/
    EventDetailScreen.jsx
    HomeScreen.jsx
    LoginScreen.jsx
    ProfileScreen.jsx
    SplashScreen.jsx
  services/
    eventsService.js
  stub/
    mockjson.json
  styles/
    App.css
```

---

## Main Features

- **Splash Screen**: Initial loading screen.
- **Authentication**: Simple login with email and password (mocked).
- **Event Search**: Search for events by keyword and city using the Ticketmaster API.
- **Event Details**: View detailed information about selected events.
- **Venue Details**: View venue information and book events.
- **Favorites**: Mark/unmark events as favorites and view them in the profile.
- **Profile**: View user info and favorite events.
- **RTL Support**: Toggle between LTR and RTL layouts (English/Arabic).
- **Persistent State**: User and favorites are stored in `localStorage`.

---

## Key Technologies

- **React** (v19)
- **React Router DOM** (v7)
- **Ticketmaster API** for event data
- **Mapbox/Google Maps** (dependencies included, not fully implemented)
- **Jest & React Testing Library** for testing

---

## Environment Variables

- `REACT_APP_TICKETMASTER_API_KEY`: API key for Ticketmaster.
- `GOOGLE_MAPS_API_KEY`: API key for Google Maps.

See [.env](.env) for example values.

---

## How to Run

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm start
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Main Files and Their Roles

- [`src/App.js`](src/App.js): Main app component, handles screen routing based on app state.
- [`src/contexts/AppContext.jsx`](src/contexts/AppContext.jsx): Provides global state and app logic via React Context.
- [`src/hooks/useApp.jsx`](src/hooks/useApp.jsx): Custom hook to access app context.
- [`src/services/eventsService.js`](src/services/eventsService.js): Handles API calls to Ticketmaster.
- [`src/pages/`](src/pages/): Contains main screens (Splash, Login, Home, Event Detail, Profile).
- [`src/components/`](src/components/): UI components (Header, EventCard, EventVenueDetail).
- [`src/styles/App.css`](src/styles/App.css): Main CSS for the app.

---

## Sample Data

- [`src/stub/mockjson.json`](src/stub/mockjson.json): Contains mock event data for development/testing.

---

## Testing

- Run tests with:
  ```sh
  npm test
  ```
- Test setup in [`src/setupTests.js`](src/setupTests.js).

---

## Notes

- The app uses a mock authentication system (no real backend).
- Event and venue data are fetched from the Ticketmaster API.
- Some features (like maps) have dependencies included but may require further implementation.

---

## License

This project is for educational/demo purposes and bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
