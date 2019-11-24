<template>
  <div>
    <h1>List of Websites</h1>

    <div v-if="loading" class="spinner-border text-info" role="status">
      <span class="sr-only">Loading...</span>
    </div>

    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>URL</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, id) in links"  :key="id">
          <td><a :href="item.url">{{ item.text }}</a></td>
          <td>{{ item.created_at }}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { db } from '../../main'
import firebase from 'firebase';

export default {
  name: "ListSiteItems",
  props: {
    
  },
  data () {
    return {
      links: [],
      loading: true
    }
  },
  mounted: function () {
    if(localStorage.links ) {
      this.links = JSON.parse(localStorage.links);
    } else {
      this.fetchData();
    }
  },
  methods: {
    fetchData: function () {
      const documents = [];
      let self = this;

      db.collection("links").get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              const docData = doc.data();
              docData.created_at = self.formatTimeStamp(docData.created_at);
              documents.push(docData);
          });

          // localStorage.setItem('sites', JSON.stringify(documents));
          self.loading = false;
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
          self.loading = false;
      });
      
      firebase.analytics().logEvent('sites_retrieved');

      this.links = documents;
    },
    formatTimeStamp: function(timestamp){
      return Intl.DateTimeFormat('en-US',{
          year: 'numeric',
          month: 'short',
          day: 'numeric',
      }).format(new Date(timestamp.toDate()));
    },
  },
  firestore () {
    return {
      links: db.collection('links').orderBy('created_at'), 
      // readyCallback: () => this.loading = false
    }
  }
};
// https://medium.com/vue-mastery/full-stack-vue-js-with-firestore-62e2fe2ec1f3
// https://medium.com/@anas.mammeri/vue-2-firebase-how-to-build-a-vue-app-with-firebase-authentication-system-in-15-minutes-fdce6f289c3c
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
