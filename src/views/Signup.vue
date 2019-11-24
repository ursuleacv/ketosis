<template>
    <div class="row">
      <div class="col-sm-4 offset-sm-4 text-center">
        <h1>Create an account</h1>
          <div class="form-group">
            <input type="email" v-model="email" class="form-control" required>
          </div>
          <div class="form-group">
            <input type="password" v-model="password" class="form-control" required>
          </div>
          <div class="form-group">
            <button @click=signUp class="btn btn-primary">Sign up</button>
          </div>
        <p>You already have an account? <router-link to='/login'>Log In</router-link></p>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src

import firebase from 'firebase';

export default {
  name: "signup",
  components: {
    
  },
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    signUp: function() {
      const self = this;

      firebase.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          function(user){
            console.log(user);
            alert('Your account has been created');
            self.$router.replace('admin/dashboard');
          },
          function(err){
            alert(err.message);
          },
        )
    }
  },
  metaInfo: {
    title: 'Signup',
    titleTemplate: '%s ← Ketosis',
    meta: [
      {"name": 'description', content: 'Signup page'},
    ],
  }
};
</script>
