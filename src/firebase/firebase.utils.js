import firebase from 'firebase/app';
import 'firebase/firestore';
// import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDghXNSZgjHhCvU9AFCwKpxI6791E87JMI',
  authDomain: 'beara-practice.firebaseapp.com',
  databaseURL: 'https://beara-practice.firebaseio.com',
  projectId: 'beara-practice',
  storageBucket: 'beara-practice.appspot.com',
  messagingSenderId: '812665503272',
  appId: '1:812665503272:web:3481bfebc2036eed0dbf1d',
  measurementId: 'G-K11CTWN2S4',
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
// export const addCollectionsAndProducts = async(collectionKey, objectsToAdd) => {
//   const collectionRef = firestore.collection(collectionKey);
//   const batch = firestore.batch();
//   objectsToAdd.forEach((obj) => {
//     const newDocRef = collectionRef.doc(obj.title);
//     batch.set(newDocRef, obj);
//   });
//   return await batch.commit();
// };
export const SnapshotToObject = async () => {
  const transformedCollection = [];
  const snapshot = await firestore.collection('collection').get();
  snapshot.forEach((doc) => {
    transformedCollection.push(doc.data());
  });
  return transformedCollection.reduce((accumalator, collection) => {
    accumalator[collection.title.toLowerCase()] = collection;
    return accumalator;
  }, {});
};

export default firebase;
