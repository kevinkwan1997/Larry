<template>
  <div class="home">
        <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  loading: true,
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 1500)
  }
}
</script>

<style scoped>

</style>
