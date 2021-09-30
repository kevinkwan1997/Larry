<template>
  <div class="hello">
    <div class="buttons">
      <span class="home-btn" v-on:click="send('/songs')"> <img src="../assets/artist.png" alt=""> Search Songs</span>
      <span class="home-btn" v-on:click="send('/artists')"> <img src="../assets/searchartist.png" alt=""> Search Artists</span>
      <span class="home-btn"> <img src="../assets/random2.png" alt=""> Random Song</span>
      <span class="home-btn"> <img src="../assets/about.png" alt=""> About</span>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    send(route) {
      this.$router.push(route);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

span {
  display: flex;
  flex-direction: column;
}

img {
  width: 40px;
  height: 40px;
}
.hello {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 250px;
  height: 250px;
  max-height: 250px;
  position: relative;
  padding: 25px;
  justify-content: center;
  grid-gap: 10px;
}

.home-btn {
  font: 'Lato', sans-serif; 
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border-radius: 25px;
  background-color: #F3F7F3;
  
}

.home-btn:hover {
  cursor:grab;
  transform: scale(1.1);
  transition: 0.2s ease-out;
  color: white;
  background-color: #965349;
    box-shadow: none;
}


#subtext {
  grid-area: subtext;
  color: white;
  font: 'Lato', sans-serif;
  font-weight: lighter;
      color: white;   
    background: linear-gradient(to top right, rgb(230, 82, 210) 48%, rgb(163, 90, 182) 20%, rgb(238, 215, 203) 38%, rgb(221, 198, 224) 59%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  text-align: center;
  font-size: 30px;
}


</style>
