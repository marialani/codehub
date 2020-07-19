<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style>
@font-face {
  font-family: "Avalon Bold";
  src: local("Avalon Bold V1"),
    url(./assets/fonts/Avalon/Avalon-Bold-V1.ttf) format("truetype");
}
@font-face {
  font-family: "Avalon Normal";
  src: local("Avalon V2 Normal"),
    url(./assets/fonts/Avalon/Avalon-V2-Normal.ttf) format("truetype");
}
@font-face {
  font-family: "Graphik Regular";
  src: local("Graphik Regular"),
    url(./assets/fonts/Graphik-Font-Family/GraphikRegular.otf)
      format("opentype");
}
@font-face {
  font-family: "Shentox";
  src: local("Shentox W04 Regular"),
    url(./assets/fonts/Shentox-W04-Regular/Shentox-W04-Regular.ttf)
      format("truetype");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 100%;
  line-height: 1.6;
}

#app {
  font-family: "Avalon Normal", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
