import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

async function getItems(userID) {
  try {
    const q = query(collection(db, "users", userID, "items"));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
}

async function addItem(userID, item) {
  try {
    const collectionRef = collection(db, "users", userID, "items");
    const newDoc = await addDoc(collectionRef, item);
    return newDoc.id;
  } catch (error) {
    console.error("Error adding item:", error);
    return null;
  }
}

export { getItems, addItem };