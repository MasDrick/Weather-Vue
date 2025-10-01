<script setup lang="ts">
interface Props {
  image: string
  day: string
  value: number
  isActive?: boolean
}

defineProps<Props>()
</script>

<template>
  <div class="card" :class="{ active: isActive }">
    <img :src="image" :alt="day" />
    <h3>{{ day }}</h3>
    <p>{{ value }} °C</p>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  height: 165px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  box-shadow:
    0 8px 32px 0 rgba(0, 0, 0, 0.36),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
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

  &.active {
    background: rgba(255, 255, 255, 0.15);
    box-shadow:
      0 12px 40px 0 rgba(0, 0, 0, 0.5),
      inset 0 2px 0 0 rgba(255, 255, 255, 0.3),
      inset 0 0 0 1px rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
  }
}
</style>
