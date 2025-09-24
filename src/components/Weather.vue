<script setup lang="ts"></script>

<template>
  <div class="mainInfo">
    <div class="date">
      <h1>Tuesday</h1>
      <p>20 Jun 2022</p>
      <div class="location">
        <img src="/location.svg" alt="location" />
        <span>Biarritz, FR</span>
      </div>
    </div>
    <div class="weather">
      <img src="/sun.svg" alt="Sunny" />
      <p>
        <span> 29 °C</span> <br />
        Sunny
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mainInfo {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 100%;
  background: url('/main-img.jpg') no-repeat center;
  background-size: cover;
  border-radius: 30px;
  padding: 48px 36px 84px;
}
.date {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 25%;

  h1 {
    font-size: 37px;
    font-weight: 700;
  }
  p {
    font-size: 22px;
    font-weight: 500;
  }

  .location {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    gap: 8px;
  }
}
.weather {
  p {
    font-size: 30px;
    font-weight: 700;

    span {
      font-size: 50px;
    }
  }
}
</style>
