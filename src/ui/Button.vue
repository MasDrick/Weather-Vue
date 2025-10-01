<script setup lang="ts">
const emit = defineEmits<{
  openModal: []
}>()

const openModal = () => {
  emit('openModal')
}
</script>

<template>
  <button class="btn color-1" @click="openModal">
    <span class="btn-content">
      <img src="/location.svg" alt="Change Location" />
      Изменить локацию
    </span>
  </button>
</template>

<style scoped lang="scss">
.btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  height: 55px;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  border-radius: 15px;
  overflow: hidden;

  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px) saturate(120%);
    -webkit-backdrop-filter: blur(20px) saturate(120%);
  }

  &:focus {
    outline: none;
  }

  // Блик, который срабатывает только при наведении
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: none;
    z-index: 1;
  }

  &:hover::before {
    animation: shine 0.6s ease forwards;
  }
}

.btn-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 8px;
}

@keyframes shine {
  0% {
    left: -100%;
  }
  100% {
    left: 150%;
  }
}

.color-1 {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  box-shadow:
    0 8px 32px 0 rgba(0, 0, 0, 0.36),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);
}
</style>
