import { db } from "@/firebase";

export default {
  getActiveTasks(contex) {
    const uid = contex.getters.user.uid;

    contex.commit("clearActiveTasks");

    db.collection("users/" + uid + "/tasks")
      .where("finished", "==", false)
      .orderBy("created", "desc")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          contex.commit("setActiveTasks", {
            taskId: doc.id,
            taskTitle: doc.data().taskTitle,
            taskNote: doc.data().taskNote,
            created: doc.data().created,
            finished: doc.data().finished,
          });
        });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
  },

  getFinishedTasks(contex) {
    const yesterday = new Date(new Date() - 86400000);
    const uid = contex.getters.user.uid;

    contex.commit("clearFinishedTasks");

    db.collection("users/" + uid + "/tasks")
      .where("finished", "==", true)
      .where("finisheDate", ">", yesterday)
      .orderBy("finisheDate", "desc")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          contex.commit("setFinishedTasks", {
            taskId: doc.id,
            taskTitle: doc.data().taskTitle,
            taskNote: doc.data().taskNote,
            created: doc.data().created,
            finished: doc.data().finished,
          });
        });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
  },
};
