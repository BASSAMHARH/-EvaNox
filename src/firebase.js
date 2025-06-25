// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getAuth, signInAnonymously, signInWithCustomToken } from "firebase/auth"; 
import { getAnalytics } from "firebase/analytics"; 


const globalInitialAuthToken = typeof window !== 'undefined' && typeof window.__initial_auth_token !== 'undefined' ? window.__initial_auth_token : null;
const globalFirebaseConfigString = typeof window !== 'undefined' && typeof window.__firebase_config !== 'undefined' ? window.__firebase_config : null;


const userProvidedFirebaseConfig = {
    apiKey: "AIzaSyDkqdWghf3aFR5e7EzagtQ_L75QEV0kHdw",
    authDomain: "evanox-6931b.firebaseapp.com",
    projectId: "evanox-6931b",
    storageBucket: "evanox-6931b.firebasestorage.app",
    messagingSenderId: "672063414335",
    appId: "1:672063414335:web:317a044ac286cba04b188a",
    measurementId: "G-H663KP52MJ"
};


let firebaseConfig;
if (globalFirebaseConfigString) {
    
    firebaseConfig = JSON.parse(globalFirebaseConfigString);
} else {
    // Otherwise, use the user-provided config (for local development or if Canvas fails to inject)
    firebaseConfig = userProvidedFirebaseConfig;
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize other Firebase services
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app); // Initializing analytics

// Sign in when Firebase file is loaded (required for Canvas environment)
// Signs in with a custom token if available, otherwise signs in anonymously.
(async () => {
    try {
        // Using globalInitialAuthToken directly here to avoid potential scope/linting issues
        if (globalInitialAuthToken) {
            await signInWithCustomToken(auth, globalInitialAuthToken);
            console.log("Signed in with custom token:", auth.currentUser.uid);
        } else {
            await signInAnonymously(auth);
            console.log("Signed in anonymously:", auth.currentUser.uid);
        }
    } catch (error) {
        console.error("Firebase authentication error:", error);
        // In case of authentication error, you can display a message to the user or retry
    }
})();

// Export Firestore and Auth instances for use in other components
export default db; // Exports 'db' as the default export
export { auth, analytics }; // Exports 'auth' and 'analytics' as named exports
