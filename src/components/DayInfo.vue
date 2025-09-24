<script setup lang="ts">
interface Props {
  image: string
  day: string
  value: number
}

defineProps<Props>()
</script>

<template>
  <div class="card">
    <img :src="image" :alt="day" />
    <h3>{{ day }}</h3>
    <p>{{ value }} °C</p>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  //width: 103px;
  height: 165px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-radius: 10px;

  background-color: #272e37;
  box-shadow: 1px 2px 4px 0px #222831;

  transition: background-color 0.2s ease;
  cursor: pointer;

  img {
    max-width: 55px;
  }

  h3 {
    font-size: 20px;
    font-weight: 400;
  }

  p {
    font-size: 20px;
    font-weight: 700;
  }
}
.active {
  background-color: #2c343e;
}
</style>
