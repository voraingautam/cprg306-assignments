import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

async function getItems(userID) {
  const q = query(collection(db, "users", userID, "items"));
  var item = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    item.push({ id: doc.id, ...doc.data() });
  });
  return item;
}

async function addItem(userID, item) {
  var collectionRef = collection(db, "users", userID, "items");
  var newDoc = await addDoc(collectionRef, item);

  return newDoc.id;
}
export { getItems, addItem };