<template>
  <div>
    <q-form @submit="onSubmit" class="q-gutter-md q-pa-md" style="width: 400px">
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

      <q-checkbox color="brand" v-model="accept" label="Remember me" />

      <div>
        <q-btn label="Login" class="full-width" type="submit" color="brand" />
      </div>
      <q-btn flat color="brand" label="Register now" to="/register" />
    </q-form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: null,
      password: null,
      accept: false,
      users: null,
      currentUser: null,
    };
  },
  mounted(){
    this.getUsers();
  },
  
  methods: {
     getUsers(){ 
      this.users = this.$store.getters["users/users"],
      this.currentUser = this.$store.getters["users/currentUser"]
      if(this.currentUser){
        this.$router.push({ path: "/filemanager" });
      }
    },
    onSubmit() {
      var userExists = this.users.filter(data=>{
        return this.email === data.email && this.password === data.password
      })
      if(userExists.length){
        this.$store.commit('users/setCurrentUser', ...userExists);
        this.currentUser = this.$store.getters["users/currentUser"]
        console.log(this.currentUser)
        this.$router.push({ path: "/filemanager" });
      } else {
        this.$q.notify({
        type: 'negative',
        message: `username or password is wrong`
      })
          console.log("no user")
      }   
    },
  },
};
</script>
