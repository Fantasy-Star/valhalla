<template>
  <div id="app">
    <div id="bg"></div>
    <app-logo></app-logo>
    <main>
      <valhalla></valhalla>
      <hr />
      <app-comment></app-comment>
    </main>
    <footer>
      <hr />
      <main-footer></main-footer>
    </footer>
  </div>
</template>

<script>
import AppLogo from "@/components/AppLogo.vue";
import AppComment from "@/components/AppComment.vue";
import Valhalla from "@/components/Valhalla.vue";
import MainFooter from "@/components/MainFooter.vue";

import Trianglify from "trianglify";
let pattern = Trianglify({
  width: window.innerWidth,
  height: window.innerHeight,
  xColors: "random",
  cellSize: 75,
  palette: ["YlGnBu", "GnBu", "Purples", "Blues"],
}).toCanvas();

export default {
  name: "app",
  components: {
    AppLogo,
    AppComment,
    Valhalla,
    MainFooter,
  },
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(function() {
      document.getElementById("bg").appendChild(pattern);
    });
  },
};
</script>

<style lang="scss">
body {
  margin: 0px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  --mdc-theme-secondary: #8e71c1;
}

#bg {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: -1;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

hr {
  border-color: rgba(255, 255, 255, 0.3);
}
</style>
