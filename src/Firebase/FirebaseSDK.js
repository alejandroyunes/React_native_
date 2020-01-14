import firebase from 'firebase'; 


let config = {
            apiKey: "AIzaSyAIdcHn5KRrmgjjZw3I4LyjY9jO28FSk4Y",
            authDomain: "aprendereact-30d2c.firebaseapp.com",
            databaseURL: "https://aprendereact-30d2c.firebaseio.com",
            projectId: "aprendereact-30d2c",
            storageBucket: "aprendereact-30d2c.appspot.com",
            messagingSenderId: "322808959019",
            appId: "1:322808959019:web:daf3c1fb4165f4c60c5a6e",
            measurementId: "G-LJ22RSPF6T"
        };

const Firebase = firebase.initializeApp(config)
export default Firebase
