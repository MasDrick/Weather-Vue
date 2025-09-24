<script setup lang="ts">
interface Props {
  label: string
  value: string | number
}

defineProps<Props>()
</script>

<template>
  <div class="list">
    <span>{{ label }}</span>
    <span>{{ value }}</span>
  </div>
</template>

<style scoped lang="scss">
.list {
  display: flex;
  justify-content: space-between;
  font-size: 28px;
  font-weight: 700;

  span:nth-child(2) {
    font-weight: 500;
  }
}
</style>
