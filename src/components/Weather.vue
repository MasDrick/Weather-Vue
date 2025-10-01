<script setup lang="ts">
import { computed } from 'vue'
import type { WeatherData } from '../types/api'
import { formatTime } from '../utils/dateUtils.ts'
import { Sunrise, Sunset, Eye, Cloud, ThermometerSun, Thermometer } from 'lucide-vue-next'

const props = defineProps<WeatherData>()

const extraCards = computed(() => [
  {
    icon: ThermometerSun,
    label: 'Мин/Макс',
    value:
      props.tempMin !== undefined && props.tempMax !== undefined
        ? `${props.tempMin}° / ${props.tempMax}°`
        : '--',
  },
  {
    icon: Cloud,
    label: 'Облачность',
    value: props.clouds !== undefined ? `${props.clouds}%` : '--',
  },
  {
    icon: Eye,
    label: 'Видимость',
    value: props.visibility !== undefined ? `${Math.round(props.visibility / 1000)} км` : '--',
  },
  { icon: Sunrise, label: 'Восход', value: formatTime(props.sunrise, props.timezone) },
  { icon: Sunset, label: 'Закат', value: formatTime(props.sunset, props.timezone) },
])

const firstRowCards = computed(() => extraCards.value.slice(0, 3))
const secondRowCards = computed(() => extraCards.value.slice(3, 5))
</script>

<template>
  <div class="mainInfo">
    <div class="topRight">
      <Thermometer class="chip-icon" />
      <span class="chip-text">Ощущается {{ Math.round(feelsLike) }}°</span>
    </div>
    <div class="date">
      <h1>{{ dayOfWeek }}</h1>
      <p>{{ day }} {{ month }} {{ year }}</p>
      <div class="location">
        <img src="/location.svg" alt="location" />
        <span>{{ city }}, {{ country }} </span>
      </div>
    </div>
    <div class="weather">
      <img src="/weather-icons/sunny.svg" alt="Sunny" />
      <p>
        <span> {{ temperature }} °C</span> <br />
        {{ condition }}
      </p>
    </div>
    <div class="extra">
      <div class="extra-row top">
        <div class="card" v-for="(c, i) in firstRowCards" :key="`top-${i}`">
          <component :is="c.icon" class="card-icon" />
          <div class="card-body">
            <div class="card-label">{{ c.label }}</div>
            <div class="card-value">{{ c.value }}</div>
          </div>
        </div>
      </div>
      <div class="extra-row bottom">
        <div class="card" v-for="(c, i) in secondRowCards" :key="`bottom-${i}`">
          <component :is="c.icon" class="card-icon" />
          <div class="card-body">
            <div class="card-label">{{ c.label }}</div>
            <div class="card-value">{{ c.value }}</div>
          </div>
        </div>
      </div>
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
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  //border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow:
    0 8px 32px 0 rgba(0, 0, 0, 0.36),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  padding: 48px 36px 84px;
  position: relative;
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

.topRight {
  position: absolute;
  top: 18px;
  right: 18px;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 10px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.chip-icon {
  width: 18px;
  height: 18px;
  opacity: 0.85;
}

.chip-text {
  font-weight: 700;
  font-size: 14px;
}
.weather {
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 200px;
  }

  p {
    text-align: center;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 700;

    span {
      font-size: 50px;
    }
  }
}

.extra {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.extra-row {
  display: flex;
  gap: 12px;
}

.extra-row.top {
  justify-content: center;
}

.extra-row.bottom {
  justify-content: center;
}

.card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  backdrop-filter: blur(10px);
}

.card-icon {
  width: 22px;
  height: 22px;
  opacity: 0.85;
}

.card-body {
  display: flex;
  flex-direction: column;
}

.card-label {
  font-size: 12px;
  opacity: 0.7;
}

.card-value {
  font-size: 16px;
  font-weight: 600;
}
</style>
