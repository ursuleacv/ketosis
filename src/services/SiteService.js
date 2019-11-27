import { db } from "../main";
import firebase from "firebase";

export default {
  fetchData: function() {
    let links = [];
    let self = this;

    // const collectionRef = firebase.firestore().collection("links");
    // collectionRef.get().then(data => console.log(data));

    return db
      .collection("links")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          const docData = doc.data();
          links.push({
            // "id": docData.id,
            user_id: docData.user_id.id,
            created_at: self.formatTimeStamp(docData.created_at),
            text: docData.text,
            url: docData.url,
            category: docData.category
          });
        });
        firebase.analytics().logEvent("sites_retrieved");
        return { data: links };
      });
  },
  formatTimeStamp: function(timestamp) {
    return Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    }).format(new Date(timestamp.toDate()));
  }
};
