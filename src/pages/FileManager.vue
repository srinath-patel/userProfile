<template>
  <q-page class="flex flex-center">
    <q-card class="my-card">
      <q-card-section class="bg-purple text-white">
        <div class="text-h6">User Files</div>
      </q-card-section>
     <FileList></FileList>
    </q-card>
  </q-page>
</template>

<script>
import FileList from 'components/files'
export default {
  name: 'PageIndex',
  components:{FileList}
}
</script>
