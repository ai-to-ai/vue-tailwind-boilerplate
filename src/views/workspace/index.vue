<template>
  <Header></Header>
</template>
<script>
import Header from '@/components/Header.vue';
export default {
  name:'Workspace',
  components:{Header},
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>