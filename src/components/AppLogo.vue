<template>
  <div>
    <img class="logo" src="@/assets/logo.png">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.logo {
  border-radius: 50%;
  animation: glowing 3s infinite;
}

@keyframes glowing {
  from {
    box-shadow: 0px 0px 10px rgba(3, 137, 247, 0.1);
  }
  50% {
    box-shadow: 0px 0px 100px rgba(0, 110, 255, 0.6);
  }
  100% {
    box-shadow: 0px 0px 10px rgba(3, 137, 247, 0.1);
  }
}
</style>
