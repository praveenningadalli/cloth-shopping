import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyDmJfpL632ZVlERxcedk0T-8t--XA_jzDQ",
    authDomain: "clothshopping-db.firebaseapp.com",
    databaseURL: "https://clothshopping-db.firebaseio.com",
    projectId: "clothshopping-db",
    storageBucket: "clothshopping-db.appspot.com",
    messagingSenderId: "1015593979984",
    appId: "1:1015593979984:web:c83c4680a580c297fa0155",
    measurementId: "G-Z8ENWWMS3S"
}

export const creatUserProfileDocument= async (userAuth, additionalData) => {
  
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  //console.log(userRef);

  const snapshot= await userRef.get();

  //console.log(snapshot);
  if(!snapshot.exists){
      const {displayName, email}=userAuth;
      const createdAt=new Date();

    try {
         await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
      
    }catch(error){
        console.log('error creating user', error.message)
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:`select_account`});
export const signInWithGoogle =()=>auth.signInWithPopup(provider);

export default firebase;