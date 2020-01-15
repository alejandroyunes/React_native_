import * as firebase from 'firebase';
import 'firebase/firestore';
import "firebase/auth";

class FirebaseSDK {
    constructor() {
        if (!firebase.apps.length) {
            //avoid re-initializing
            firebase.initializeApp({
                apiKey: "AIzaSyAIdcHn5KRrmgjjZw3I4LyjY9jO28FSk4Y",
                authDomain: "aprendereact-30d2c.firebaseapp.com",
                databaseURL: "https://aprendereact-30d2c.firebaseio.com",
                projectId: "aprendereact-30d2c",
                storageBucket: "aprendereact-30d2c.appspot.com",
                messagingSenderId: "322808959019",
                appId: "1:322808959019:web:daf3c1fb4165f4c60c5a6e",
                measurementId: "G-LJ22RSPF6T"
            });
        }
    }
    //login function
    login = async (user, success_callback, failed_callback) => {
        await firebase
            .auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then(success_callback, failed_callback);
    };

    createAccount = async user => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(
                function () {
                    console.log(
                        'created user successfully. User email:' +
                        user.email +
                        ' name:' +
                        user.name
                    );
                    var userf = firebase.auth().currentUser;
                    userf.updateProfile({ displayName: user.name }).then(
                        function () {
                            console.log('Updated displayName successfully. name:' + user.name);
                            alert(
                                'User ' + user.name + ' was created successfully. Please login.'
                            );
                        },
                        function (error) {
                            console.warn('Error update displayName.');
                        }
                    );
                },
                function (error) {
                    console.error('got error:' + typeof error + ' string:' + error.message);
                    alert('Create account failed. Error: ' + error.message);
                }
            );
    };
    

}



const firebaseSDK = new FirebaseSDK();
export default firebaseSDK;