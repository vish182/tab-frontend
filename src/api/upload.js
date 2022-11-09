import { API } from "../config";

export const getNotes = ({ download_url }) => {
  //console.log(user.name, user.email, user.password, user.phone);

  return fetch(`${API}/getnotes`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ download: String(download_url) }),
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
