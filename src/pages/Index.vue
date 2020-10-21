<template>
  <q-page class="flex flex-center">
    <q-card class="my-card">
      <q-card-section class="bg-purple text-white">
        <div class="text-h6">User Login</div>
      </q-card-section>
     <SignIn></SignIn>
    </q-card>
  </q-page>
</template>

<script>
import SignIn from 'components/signin'
export default {
  name: 'PageIndex',
  components:{SignIn}
}
</script>
