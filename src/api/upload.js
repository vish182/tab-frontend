import { API } from "../config";
import { firestoreInstance } from "../auth/firebase_auth";

export const getNotes = ({ download_url, isChord }) => {
  //console.log(user.name, user.email, user.password, user.phone);

  return fetch(`${API}/getnotes`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ download: String(download_url), chords: isChord }),
  })
    .then((response) => {
      //console.log(JSON.stringify(response.json()));
      //console.log(response);
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createTab = async ({ UID, filename, tabs }) => {
  //let emails_combined = await getAdminList();
  //console.log("result: ", emails_combined);

  console.log(UID, filename, tabs);

  firestoreInstance
    .collection("tabs")
    .doc(
      UID.concat(new Date().toISOString().replace(/T/, "").replace(/\..+/, ""))
    )
    .set({
      email: UID,
      filename: filename,
      tabs: tabs,
    })
    .then((docRef) => {
      //console.log("Document written with ID: ");
      // sendEmail({
      //   toEmail: toSignupAlertEmail,
      //   subject: "New Signup Alert",
      //   text: `New signup ${UID} is waiting for activation.`,
      //   cc: emails_combined,
      // });
      alert("Successfully created tabs");
    })
    .catch((error) => {
      console.error("Error adding tabs document: ", error);
      alert("Error while Creating tabs: ", error);
    });
};
