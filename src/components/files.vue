<template>
  <div class="q-pa-md q-gutter-md">
    <q-list bordered padding class="rounded-borders" style="width: 600px">
      <q-item-label header>Files</q-item-label>

      <q-item clickable v-ripple>
        <q-item-section avatar top>
          <q-avatar icon="assignment" color="grey" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Expenses spreadsheet</q-item-label>
         
        </q-item-section>

        <q-item-section side>
          <q-icon name="info" />
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar top>
          <q-avatar icon="assignment" color="grey" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Places to visit</q-item-label>
         
        </q-item-section>

        <q-item-section side>
          <q-icon name="info" color="amber" />
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar top>
          <q-avatar icon="assignment" color="grey" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">My favorite song</q-item-label>
         
        </q-item-section>

        <q-item-section side>
          <q-icon name="info" />
        </q-item-section>
      </q-item>
    </q-list>
    <div class="float-right">
        <q-btn label="Add Files" color="brand" class="q-ma-md" />
       
    </div>
    
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
      currentUser:null
    };
  },
mounted(){
  this.checkUser();
},
  methods: {
    checkUser(){
        this.currentUser = this.$store.getters["users/currentUser"]
        if(!this.currentUser){
            this.$router.push({ path: "/" });
        }
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
