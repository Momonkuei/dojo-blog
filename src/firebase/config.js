import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCWx4Pk0Ds79tJCFNvUFJU1XrFN9hEKa2Q',
	authDomain: 'udemy-vue-firebase-sites-966bd.firebaseapp.com',
	projectId: 'udemy-vue-firebase-sites-966bd',
	storageBucket: 'udemy-vue-firebase-sites-966bd.appspot.com',
	messagingSenderId: '39090214420',
	appId: '1:39090214420:web:7256330969a503335a7901',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
