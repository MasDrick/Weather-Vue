<script setup lang="ts">
import DataWeather from './DataWeather.vue'
import DayInfo from './DayInfo.vue'
import Button from '../ui/Button.vue'

interface WeatherData {
  label: string
  value: number
  unit: string
}

interface DayInfoData {
  image: string
  day: string
  value: number
}

const weatherData: WeatherData[] = [
  { label: 'PRECIPITATION', value: 0, unit: '%' },
  { label: 'HUMIDITY', value: 42, unit: '%' },
  { label: 'WIND', value: 3, unit: ' km/h' },
]

const dayInfoData: DayInfoData[] = [
  { image: 'icon-4.svg', day: 'Tue', value: 30 },
  { image: 'icon-2.svg', day: 'Wed', value: 22 },
  { image: 'icon-3.svg', day: 'Thu', value: 6 },
  { image: 'icon-4.svg', day: 'Fry', value: 26 },
]
</script>

<template>
  <div class="info">
    <div class="dataWeather">
      <DataWeather
        v-for="(data, index) in weatherData"
        :key="index"
        :label="data.label"
        :value="data.value + data.unit"
      />
    </div>
    <div class="weekWeather">
      <DayInfo
        v-for="(day, index) in dayInfoData"
        :key="index"
        :image="day.image"
        :day="day.day"
        :value="day.value"
      />
    </div>
    <Button />
  </div>
</template>

<style scoped lang="scss">
.info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 623px;
  background-color: #222831;
  padding: 55px;
  border-radius: 0 25px 25px 0;

  .dataWeather {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .weekWeather {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
}
</style>
