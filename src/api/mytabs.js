import { API } from "../config";
import { firestoreInstance } from "../auth/firebase_auth";

export const getMyTabsList = async ({ UID }) => {
  let combined_tabs = [];
  return firestoreInstance
    .collection("tabs")
    .where("email", "==", UID)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log("admin list", " => ", doc.data().email_id);
        combined_tabs.push(doc.data());
        //arrayStudents.push(doc.data());
      });

      //console.log("arrayAssi: ", arrayAssi);
      console.log("combined: ", combined_tabs);
      return combined_tabs;
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
};
