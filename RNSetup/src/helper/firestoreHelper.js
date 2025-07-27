import firestore from '@react-native-firebase/firestore';

export const getDocumentOnce = async (collectionName, documentId) => {
  try {
    const firestoreDoc = await firestore()
      .collection(collectionName)
      .doc(documentId)
      .get();
    const data = firestoreDoc.data();
    console.log('Firestore data: ', data);

    return data;
  } catch (error) {
    console.log('Error fetching document: ', error);
  }
};

export const setDocument = async (collectionName, documentId, data) => {
  try {
    await firestore().collection(collectionName).doc(documentId).set(data);
  } catch (error) {
    console.log('Error setting document');
  }
};

export const addCollectionSnapshot = async (collectionName, callback) => {
  try {
    const unsubscribe = firestore()
      .collection(collectionName)
      .onSnapshot(querySnapshot => {
        console.log('querySnapshot: ', querySnapshot);

        const newData = [];
        querySnapshot.forEach(query => {
          console.log('querySnapshot data each: ', query.data());

          newData.push(query.data());
        });

        console.log('new Data: ', newData);
        callback(newData);
      });
    return unsubscribe;
  } catch (error) {
    console.log('Error setting document');
  }
};

export const COLLECTION_NAMES = {
  USERS: 'users',
  DRIVERS: 'drivers',
  COURSES: 'courses',
};
