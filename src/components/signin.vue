<template>
 <div>

<q-form
      @submit="onSubmit"
      class="q-gutter-md q-pa-md"
      style="width:400px;"
    >
      <q-input
      type="email"
        v-model="email"
        color="brand"
        label="E-mail id *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type your email']"
      />

      <q-input
        type="password"
        v-model="password"
        color="brand"
        label="Your password *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please enter password'
        ]"
      />

      <q-checkbox color="brand" v-model="accept" label="Remember me" />

      <div>
        <q-btn label="Login" class="full-width" type="submit" color="brand"/>
        
      </div>
      <q-btn flat  color="brand" label="Register now" to="/register" />
    </q-form>
 </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: null,
      password: null,
      accept: false
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        
        this.$router.push({path: '/projects'});
      }
      else {
        
        this.$router.push({path: '/projects'});
      }
    }
  }
}
</script>
