<template>
  <div>
      <router-view v-if="this.$route.params.song" ></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>