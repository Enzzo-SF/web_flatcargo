importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
// // Initialize the Firebase app in the service worker by passing the generated config

const firebaseConfig = {
    apiKey: "AIzaSyBZ37zWdSPgR-dq-NRZJ8W3yNfRqpCMiYI",
    authDomain: "flat-cargo.firebaseapp.com",
    projectId: "flat-cargo",
    storageBucket: "flat-cargo.appspot.com",
    messagingSenderId: "818981945425",
    appId: "1:818981945425:web:32f21e345a499b6ba87870",
    measurementId: "G-B8EXC85EBM"
};


firebase?.initializeApp(firebaseConfig)


// Retrieve firebase messaging
const messaging = firebase.messaging();

self.addEventListener('install', function (event) {
    console.log('Hello world from the Service Worker :call_me_hand:');
});


