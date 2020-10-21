<template>
  <div>
    <q-form @submit="onSubmit" class="q-gutter-md q-pa-md" style="width: 400px">
      <q-input
        type="text"
        v-model="userName"
        color="brand"
        label="User Name *"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type your user name']"
      />

      <q-input
        type="email"
        v-model="email"
        color="brand"
        label="E-mail id *"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type your email']"
      />

      <q-input
        type="password"
        v-model="password"
        color="brand"
        label="Your password *"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please enter password',
        ]"
      />

      <div>
        <q-btn label="Login" class="full-width" type="submit" color="brand" />
      </div>
      <q-btn flat color="brand" label="Already a member?" to="/" />
    </q-form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: null,
      userName: null,
      password: null,
      accept: false,
    };
  },
mounted(){
  this.checkUser();
},
  methods: {
    checkUser(){
    this.$store.commit('users/setCurrentUser', null);
  },
    onSubmit() {
      var adduser = {
        userName: this.userName,
        email: this.email,
        password: this.password
      }
      this.$store.commit('users/registerUser', adduser);
      this.$q.notify({
        type: 'positive',
        message: `user added successfully`
      })

      console.log(this.$store.getters["users/currentUser"])
        this.$router.push({ path: "/" });
    },
  },
};
</script>
