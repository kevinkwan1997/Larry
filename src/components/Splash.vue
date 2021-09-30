<template>
  <div :class="{ loader: true, fadeout: !isLoading }">
    <div class="wrapper">
                <div id="img-container">
        <img src="../assets/larrybird.png" alt="">
        </div>
        <h1>Larry</h1>


    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingScreen",
  props: ["isLoading"]
};
</script>

<style scoped>

img {
    max-width: 300px;
    max-height: 300px;
}

.wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    z-index: 10000;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}
.loader {
  background: linear-gradient(to top, black, rgb(0, 0, 0), #965349);
  bottom: 0;
  color: white;
  display: block;
  font-size: 32px;
  left: 0;
  overflow: hidden;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
}

.fadeout {
  animation: fadeout 3s forwards;
}

@keyframes fadeout {
  0% {
    opacity: 1;

  }
  50% {
    opacity: 1;
  }
  75% {
  }
  100% {
      opacity: 0;
    visibility: hidden;
  }
}
</style>