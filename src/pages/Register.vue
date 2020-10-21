<template>
  <q-page class="flex flex-center">
    <q-card class="my-card">
      <q-card-section class="bg-purple text-white">
        <div class="text-h6">Register Now</div>
      </q-card-section>
     <Register></Register>
    </q-card>
  </q-page>
</template>

<script>
import Register from 'components/register'
export default {
  name: 'PageIndex',
  components:{Register}
}
</script>
