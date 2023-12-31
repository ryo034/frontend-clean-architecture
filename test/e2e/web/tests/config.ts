export const isHeadless = false
export const env = process.env.ENV || 'localhost'
export const isLocal = env === 'localhost'
export const homeURL = process.env.HOME_URL || 'http://localhost:5173'
export const initializeData = process.env.DO_INITIALIZE_DATA || "false"
export const rootPath = initializeData === "true" && env !== 'localhost' ? "./e2e" : "."

export const firebaseApiKey = process.env.FIREBASE_API_KEY || 'test'
export const firebaseAuthDomain = process.env.FIREBASE_AUTH_DOMAIN|| 'localhost'
export const firebaseProjectId = process.env.FIREBASE_PROJECT_ID || 'test'
export const firebaseMessagingSenderId = process.env.FIREBASE_MESSAGING_SENDER_ID || '691918257784'
export const firebaseAppId = process.env.FIREBASE_APP_ID || 'test'

export const firebaseConfig = {
	apiKey: firebaseApiKey,
	authDomain: firebaseAuthDomain,
	projectId: firebaseProjectId,
	messagingSenderId: firebaseMessagingSenderId,
	appId: firebaseAppId,
};
