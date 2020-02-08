<template>
  <div></div>
</template>

<script>
// import items from "./data.json";
import SiteService from "../../services/SiteService.js";
import * as fs from "fs";

export default {
  name: "CacheSites",
  props: {},
  data: function() {
    return {
      // items: []
    };
  },
  created: function() {
    this.cacheData();
  },
  mounted: function() {},
  methods: {
    cacheData() {
      SiteService.fetchData()
        .then(function(response) {
          // console.log("response", response);
          const jsonData = JSON.stringify(response.data);
          // console.log("jsonData", jsonData);
          fs.writeFileSync("./data.json", jsonData);
        })
        .catch(function(error) {
          alert(error);
          // console.log("Error getting documents: ", error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
