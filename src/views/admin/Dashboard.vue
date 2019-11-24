<template>
  <div class="home">
    <!-- <img alt="Ketosis logo" src="../../assets/logo.svg" width="100px" /> -->
    <a href="#" @click="logOut">LogOut</a>
    <AddSiteItem></AddSiteItem>
    <ListSiteItems></ListSiteItems>

    <!-- <ListSiteItemsAir :columns="['url', 'text']" 
        filter="AND({text} = 'Google')">
    </ListSiteItemsAir> -->
  </div>
</template>

<script>
// @ is an alias to /src
import ListSiteItems from "@/components/admin/ListSiteItems.vue";
import AddSiteItem from "@/components/admin/AddSiteItem.vue";

// import ListSiteItemsAir from "@/components/admin/ListSiteItemsAir.vue";

import firebase from 'firebase';

export default {
  name: "dashboard",
  components: {
    ListSiteItems,
    AddSiteItem,
    // ListSiteItemsAir
  },
  methods: {
    logOut: function(){
      firebase.auth().signOut().then(() => {
        this.$router.replace('home');
      });
    }
  }
};
</script>
