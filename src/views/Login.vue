<template>
  <div class="row">
    <div class="col-sm-4 offset-sm-4 text-center">
      <h1>Log in</h1>
      <div class="form-group">
        <input type="email" v-model="email" class="form-control" required />
      </div>
      <div class="form-group">
        <input
          type="password"
          v-model="password"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <button @click="login" class="btn btn-primary">Login</button>
      </div>
      <p>
        You don't have an account?
        <router-link to="/sign-up">Create one</router-link>
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase";

export default {
  name: "login",
  components: {},
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      const self = this;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          function() {
          // function(user) {
            // console.log(user);
            // alert('Logged In successfully');
            self.$router.replace("admin/dashboard");
          },
          function(err) {
            alert(err.message);
          }
        );
    }
    // login: function() {
    //   this.$router.replace('admin/dashboard');
    // }
  },
  metaInfo: {
    title: "Login",
    titleTemplate: "%s ← Ketosis",
    meta: [{ name: "description", content: "Login page" }]
  }
};
</script>
