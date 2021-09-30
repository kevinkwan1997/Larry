<template>
  <div class="main-grid">
      <router-view v-if="this.$route.name != 'songs'"/>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>