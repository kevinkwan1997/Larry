<template>
<div class="container">
    <Splash id="splash" v-if="loading"/>
    <div id="head">
            <img id="back-btn" src="./assets/back.png" v-on:click="goBack()"/>
            <h2 id="subtext">Larry</h2>

    </div>
    
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
    <div id="nav">
    <router-link to="/"><img class="nav-icon" src="./assets/home.png" alt=""></router-link>
    <router-link to="/songs/"><img class="nav-icon" src="./assets/artist.png" alt=""></router-link>
    <router-link to="/artists/"><img class="nav-icon" src="./assets/random.png" alt=""></router-link>
    <router-link to="/about"><img class="nav-icon" src="./assets/about.png" alt=""></router-link>
  </div>
</div>
</template>

<script>
import Splash from './components/Splash.vue';
export default {
  name: "app",
  data: () => ({
    loading: true
  }),
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 20000)
  },
  components: {
    Splash
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}


</script>


<style >


.container {
  width: 100%;
  height: 100vh;
}

#splash {
  height: 100%;
  width: 100%;
  z-index: 99999;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  height: 100%;
}

html {
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
    background-blend-mode: multiply;
  background-color: #373236;
}

body {
  margin: 0;
  overflow: hidden;
}

#head {
  width: 100%;
  height: 50px;
  position: absolute;
  display: flex;
  top: 0;
  background-color: #AFA296;
  justify-content: space-between;
  align-items: center;
}

#head h2 {
  margin-right: 25px;
  font-family: 'Lato', sans-serif;
  font-weight: lighter;
}

#back-btn {
  height: 30px;
  width: 30px;
  margin-left: 25px;
}

#nav {
  background-color: #AFA296;
  height: 60px;
  bottom: 0;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-icon {
  width: auto;
  height: 25px;
  color: rgb(69, 138, 179);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  width: 50%;
}

#nav a.router-link-exact-active {
  color: #42b983;
  background-color: #965349;
  transition: 0.2s ease-in-out;
}



#nav a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

router-view {
  height: 100%;
}

/* Route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
    height: 100%;
}

.route-enter-active {
  transition: all 0.3s ease-out;
    height: 100%;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
    height: 100%;
}

.route-leave-active {
  transition: all 0.3s ease-in;
  height: 100%;
}



</style>
