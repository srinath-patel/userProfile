<template>
  <div class="q-pa-md q-gutter-md " style="width:100%">
    <div class="q-pa-md row justify-center" >
    <q-uploader
      url="http://localhost:4444/upload"
      label="User Files"
      multiple
     
      color= "brand"
      class="col-md-5 col-sm-12"
      @uploaded ="fileUpload"
    >
      <template v-slot:list="scope">
        <q-list separator>

          <q-item v-for="file in scope.files" :key="file.name">
            <q-item-section>
              <q-item-label class="full-width ellipsis">
                {{ file.name }}
              </q-item-label>

              <q-item-label caption>
                Status: {{ file.__status }}
              </q-item-label>

              <q-item-label caption>
                {{ file.__sizeLabel }} / {{ file.__progressLabel }}
              </q-item-label>
            </q-item-section>

            <q-item-section
              v-if="file.__img"
              thumbnail
              class="gt-xs"
            >
              <img :src="file.__img.src">
            </q-item-section>

            <q-item-section top side>
              <q-btn
                class="gt-xs"
                size="12px"
                flat
                dense
                round
                icon="delete"
                @click="scope.removeFile(file)"
              />
            </q-item-section>
          </q-item>

        </q-list>
      </template>
    </q-uploader>
    
  </div>
  <div class="row q-pa-md justify-center">
  <div class="col-md-5 col-sm-12 q-my-md">
    <q-card class="my-card">
      <q-card-section class="bg-purple text-white " >
        <div class="text-h6">Files List</div>
      </q-card-section>
     <q-list separator>
          <q-item v-for="(file,index) in userFiles" :key="index">
            <q-item-section>
              <q-item-label class="full-width ellipsis">
                {{ file.fileName }}
              </q-item-label>
            </q-item-section>
          </q-item>

        </q-list>
    </q-card>
    </div>
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
      currentUser:null,
      userFiles: null,
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
        this.userFiles = this.$store.getters["users/getFiles"].filter(data=>{
            return data.email === this.currentUser.email;
        })
        
        
  },fileUpload(info){
            console.log("hvh", Object.values(JSON.parse(info.xhr.response)));
            
            var userFile = {
                email: this.currentUser.email,
                fileName: Object.values(JSON.parse(info.xhr.response))[0].name,
                filePath: Object.values(JSON.parse(info.xhr.response))[0].path,
            }
            
            this.$store.commit('users/addFile', userFile);
            this.userFiles = this.$store.getters["users/getFiles"].filter(data=>{
            return data.email === this.currentUser.email;
        })
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
