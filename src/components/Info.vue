<script setup lang="ts">
import { computed } from 'vue'
import DataWeather from './DataWeather.vue'
import DayInfo from './DayInfo.vue'
import Button from '../ui/Button.vue'
import { ref } from 'vue'

const emit = defineEmits<{
  openModal: []
}>()

interface Props {
  humidity?: number
  windSpeed?: number
  pressure?: number
}

const props = defineProps<Props>()

interface WeatherData {
  label: string
  value: string
  unit: string
}

interface DayInfoData {
  image: string
  day: string
  value: number
}

// Используем computed для реактивности
const weatherData = computed((): WeatherData[] => [
  { label: 'Влажность', value: props.humidity ? `${props.humidity}` : '--', unit: '%' },
  {
    label: 'Скорость ветра',
    value: props.windSpeed ? `${Math.round(props.windSpeed)}` : '--',
    unit: ' km/h',
  },
  { label: 'Давление', value: props.pressure ? `${props.pressure}` : '--', unit: ' hPa' },
])

const dayInfoData: DayInfoData[] = [
  { image: '/weather-icons/fullMoon.svg', day: 'Вт', value: 30 },
  { image: '/weather-icons/cloudy.svg', day: 'Ср', value: 22 },
  { image: '/weather-icons/rain.svg', day: 'Чт', value: -6 },
  { image: '/weather-icons/sunny.svg', day: 'Пт', value: 26 },
]

const activeCardIndex = ref(0)

const setActiveCard = (index: number) => {
  activeCardIndex.value = index
}
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
        :is-active="activeCardIndex === index"
        @click="setActiveCard(index)"
      />
    </div>
    <Button @open-modal="emit('openModal')" />
  </div>
</template>

<style scoped lang="scss">
.info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 600px;
  padding: 55px;
  border-radius: 0 25px 25px 0;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  box-shadow:
    0 8px 32px 0 rgba(0, 0, 0, 0.36),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);

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
