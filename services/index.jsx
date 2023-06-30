import { addDoc, collection, Timestamp } from "firebase/firestore";
import { firestore } from "../firebaseConfig";

export const sendContactForm = async ({ name, email }) => {
  try {
    const docRef = await addDoc(collection(firestore, "subscribers"), {
      name,
      email,
      sentAt: Timestamp.now().toDate(),
    });
    console.log("Document written with ID: ", docRef.id);
    return 0;
  } catch (err) {
    console.error("Error adding document: ", err);
    return -1;
  }
};
