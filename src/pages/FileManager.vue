<template>
  <q-page >
     <FileList></FileList> 
  </q-page>
</template>

<script>
import FileList from 'components/files'
export default {
  name: 'PageIndex',
  components:{FileList}
}
</script>
