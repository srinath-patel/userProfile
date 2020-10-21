<template>
    <q-layout view="hHh Lpr lFf">
        <q-header elevated color="brand" class="bg-brand">
            <q-toolbar>
                <q-btn flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen" />
    
                <q-toolbar-title>
                    User File Management
                </q-toolbar-title>
    
              <div>
                 <q-btn label="Logout" color="brand" @click="logout()" />
                </div>
            </q-toolbar>
        </q-header>
    
        <q-drawer v-model="leftDrawerOpen" bordered content-class="bg-grey-1">
            <q-list>
                <q-item-label header class="text-grey-8">
                    Essential Links
                </q-item-label>
                <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
            </q-list>
        </q-drawer>
    
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [{
    title: 'Demo',
    caption: 'Demo menu link',
    icon: 'school',
    link: 'https://google.com'
}];

export default {
    name: 'MainLayout',
    components: { EssentialLink },
    data() {
        return {
            leftDrawerOpen: false,
            essentialLinks: linksData
        }
    },
    methods:{
      logout(){
        this.$store.commit('users/setCurrentUser', null);
        this.$router.push({ path: "/" });
      }
    }
}
</script>
