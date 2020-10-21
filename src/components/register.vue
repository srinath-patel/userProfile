<template>
  <q-page class="flex flex-center">

<q-form
      @submit="onSubmit"
      class="q-gutter-md"
      style="width:320px;"
    >
    <img
      src="http://demo.saylance.com/uploads/settings/general/1598015912-Custom%20dimensions%20214x50%20px.png"
      style="margin:0 auto 30px; display:block;" 
    />
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
    </q-form>
  </q-page>
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
