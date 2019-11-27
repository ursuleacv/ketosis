<template>
  <div class="home">
    <img alt="Ketosis logo" src="../assets/logo.svg" width="100px" />
    <Home msg="Don’t blame FAT for what the SUGAR did!" />
    <CacheSites></CacheSites>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/Home.vue";
import CacheSites from "@/components/admin/CacheSites.vue";

export default {
  name: "home",
  components: {
    Home,
    CacheSites
  },
  metaInfo: {
    // Children can override the title.
    title: "Home",
    // Result: My Page Title ← My Site
    // If a child changes the title to "My Other Page Title",
    // it will become: My Other Page Title ← My Site
    titleTemplate: "%s ← Ketosis",
    // Define meta tags here.
    meta: [
      // {"http-equiv": "Content-Type", content: 'text/html; charset=utf-8'},
      // {"name": 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        name: "description",
        content:
          "Ketosis is a normal metabolic process. When the body does not have enough glucose for energy, it burns stored fats instead; this results in a build-up of acids called ketones within the body"
      }
    ]
  }
};
</script>
