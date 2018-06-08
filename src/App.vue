<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <canvas id="bg"></canvas>
    <el-main>
      <Valhalla/>
    </el-main>
    <el-footer>
      <main-footer></main-footer>
    </el-footer>
  </div>
</template>

<script>
import Valhalla from '@/components/Valhalla.vue'
import MainFooter from '@/components/MainFooter.vue'

import Trianglify from 'trianglify'
let pattern = Trianglify(
  {
    x_colors: 'random',
    cell_size: 75,
    palette: ['YlGnBu', 'GnBu', 'Purples', 'Blues'],
  }
)

export default {
  name: 'app',
  components: {
    Valhalla,
    MainFooter
  },
  mounted () {
    this.$nextTick(function () {
      pattern.canvas(document.getElementById('bg'))
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#bg {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: -1;
}

.logo {
  border-radius: 50%;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.6);
}
</style>
