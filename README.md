
# Exploria

Exploria is a web application that helps users create personalized travel plans by specifying their destination, number of days, budget, and travel companions. The application uses Google Places API for location autocomplete and Firebase for storing user-generated trips. It also integrates with Google OAuth for user authentication.


## Features

- **Destination Selection**: Users can search for and select their travel destination using Google Places Autocomplete.
- **Trip Details**: Users can specify the number of days, budget, and travel companions.
- **AI-Generated Itinerary**: The application uses an AI model to generate a detailed travel itinerary based on user inputs.
- **User Authentication**: Users can sign in with Google to save and manage their trips.
- **Firebase Integration**: Trips are stored in Firebase Firestore, allowing users to view and manage their trips.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/ai-travel-planner.git
   cd ai-travel-planner

2. Install dependencies:
   npm install

3. Create a .env file in the root directory and add your environment variables:
   VITE_GOOGLE_PLACE_API_KEY=your-google-places-api-key
   VITE_GOOGLE_AUTH_CLIENT_ID=your-google-auth-client-id
   VITE_FIREBASE_API_KEY=your-firebase-api-key

4. Start the development server:
   npm run dev
