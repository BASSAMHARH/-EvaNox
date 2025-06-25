// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // مطلوب لعداد الزوار
import { getAuth, signInAnonymously, signInWithCustomToken } from "firebase/auth"; // مطلوب لعداد الزوار والمصادقة
import { getAnalytics } from "firebase/analytics"; // استيراد analytics كما هو في الكود الجديد الخاص بك

// Explicitly get global variables from window, or define local fallbacks for development.
// This ensures ESLint doesn't throw 'no-undef' errors when running outside the Canvas environment.
// Priority: Canvas globals > User-provided config > Default fallbacks

// يتم استخراج هذه المتغيرات من بيئة Canvas (إذا كانت موجودة)
const globalAppId = typeof window !== 'undefined' && typeof window.__app_id !== 'undefined' ? window.__app_id : 'default-app-id-for-development';
const globalInitialAuthToken = typeof window !== 'undefined' && typeof window.__initial_auth_token !== 'undefined' ? window.__initial_auth_token : null;
const globalFirebaseConfigString = typeof window !== 'undefined' && typeof window.__firebase_config !== 'undefined' ? window.__firebase_config : null;

// Your provided firebaseConfig (as a fallback if Canvas globals are not present)
const userProvidedFirebaseConfig = {
    apiKey: "AIzaSyDkqdWghf3aFR5e7EzagtQ_L75QEV0kHdw",
    authDomain: "evanox-6931b.firebaseapp.com",
    projectId: "evanox-6931b",
    storageBucket: "evanox-6931b.firebasestorage.app",
    messagingSenderId: "672063414335",
    appId: "1:672063414335:web:317a044ac286cba04b188a",
    measurementId: "G-H663KP52MJ"
};

// Determine the actual firebaseConfig to use
let firebaseConfig;
if (globalFirebaseConfigString) {
    // If Canvas provides a config, parse and use it
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
