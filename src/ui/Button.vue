<script setup lang="ts"></script>

<template>
  <button class="btn color-1">
    <img src="/location.svg" alt="Change Location" /> Change Location
  </button>
</template>

<style scoped lang="scss">
.btn {
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
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;

  cursor: pointer;

  &:hover {
    background-position: 100% 0;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  &:focus {
    outline: none;
  }
}

.color-1 {
  background-image: linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673);
  box-shadow: 0 4px 10px 0 rgba(49, 196, 190, 0.75);
}
</style>
