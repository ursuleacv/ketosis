<template>
  <div class="hello">
    <div class="row">
      <div class="col-sm-6 offset-sm-3 text-center">
        <h1 class="display-4">Add New Website</h1>
        <form @submit.prevent="addLink">
          <div class="form-group">
            <!-- <label class="label">Url</label> -->
            <input
              class="form-control"
              type="text"
              placeholder="Url"
              v-model="url"
              required
            />
          </div>

          <div class="form-group">
            <!-- <label class="label">Text</label> -->
            <input
              class="form-control"
              type="text"
              placeholder="Text"
              v-model="text"
              required
            />
          </div>

          <div class="form-group">
            <select
              v-model="category"
              class="form-control"
              aria-placeholder="--Please choose a category--"
              required
            >
              <option value="" selected>--Please choose a category--</option>
              <option value="Websites">Websites</option>
              <option value="Podcasts">Podcasts</option>
              <option value="Apps">Apps</option>
              <option value="Videos">Videos</option>
            </select>
          </div>

          <div class="form-group">
            <div class="col">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../../main";
import firebase from "firebase";

export default {
  name: "AddSiteItem",
  props: {},
  data() {
    return {
      url: null,
      text: null,
      userId: null,
      category: null
    };
  },
  mounted: function() {
    const currentUser = firebase.auth().currentUser;
    this.userId = currentUser.uid;
    // console.log(this.userId);
  },
  methods: {
    addLink() {
      // <-- and here
      const created_at = new Date();
      db.collection("links")
        .add({
          url: this.url,
          text: this.text,
          created_at: created_at,
          category: this.category,
          user_id: "/users/" + this.userId
        })
        .then(function() {
          // .then(function(docRef) {
          // console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          alert(error);
          // console.error("Error adding document: ", error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>
