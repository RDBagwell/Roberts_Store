import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB3l4J3xTezRI_KFmvE5wLFCi0ExIsHU9M",
    authDomain: "crown-db-2b7fe.firebaseapp.com",
    projectId: "crown-db-2b7fe",
    storageBucket: "crown-db-2b7fe.appspot.com",
    messagingSenderId: "1032231707803",
    appId: "1:1032231707803:web:e195dc54c9b8223eaf923e",
    measurementId: "G-HYXSG5XB74"
  }



  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef =firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  }


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInwithGoogle = ()=> auth.signInWithPopup(provider);


  export default firebase;