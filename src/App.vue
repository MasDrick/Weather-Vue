<script setup lang="ts">
import Weather from './components/Weather.vue'
import Info from './components/Info.vue'
</script>

<template>
  <div class="container">
    <Weather />
    <Info />
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 1000px;
  height: 670px;
  display: flex;
  align-items: center;
  color: $text-color;
}
</style>
