<template>
  <el-card class="comment-card">
    <div id="vcomments"></div>
  </el-card>
</template>

<script>
// Register AV objects to the global
window.AV = require('leancloud-storage')
// Use import
import Valine from 'valine'

export default {
  name: 'AppComment',
  mounted () {
    new Valine({
      el:'#vcomments',
      appId: 'v6SY0igWP0SEhJT697CtfQq7-gzGzoHsz',
      appKey: 'WayzRKEE9mb2YrhWpot2Veft',
      notify: true,
      verify: true,
      avatar: '', 
      placeholder: '不说些什么吗？',
      visitor: true
    })
  }
}
</script>

<style lang="scss">
.comment-card {
  text-align: left;
  margin: 10px;
  min-height: 150px;

  background: rgba(255, 255, 255, 1);
  border-color: rgba(255, 255, 255, 0.2);
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4) !important;
  }
}
</style>
