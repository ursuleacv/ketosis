<template>
  <div class="home">
    <img alt="Ketosis logo" src="../assets/logo.svg" width="100px" />
    <Home msg="Don’t blame FAT for what the SUGAR did!" />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/Home.vue";

export default {
  name: "home",
  components: {
    Home
  }
};
</script>
