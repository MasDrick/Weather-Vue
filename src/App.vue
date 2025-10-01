<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useWeather } from './composables/useWeather'
import { useGeolocation } from './composables/useGeolocation'
import Weather from './components/Weather.vue'
import Info from './components/Info.vue'
import Modal from './components/Modal.vue'

// Композаблы
const { weatherData, loading, error, loadWeatherByCoords, loadWeatherByCity } = useWeather()
const { getCurrentPosition, geolocationError } = useGeolocation()

// Состояние модального окна
const showModal = ref(false)

// Функции для модального окна
const openModal = () => {
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}

const searchCity = (city: string) => {
  loadWeatherByCity(city)
}

const useCurrentLocation = async () => {
  try {
    const position = await getCurrentPosition()
    const { latitude, longitude } = position.coords
    await loadWeatherByCoords(latitude, longitude)
  } catch (err) {
    // Ошибка уже установлена в композабле useGeolocation
    console.error('Geolocation error:', err)
  }
}

// Получаем геолокацию при загрузке компонента
onMounted(async () => {
  try {
    const position = await getCurrentPosition()
    const { latitude, longitude } = position.coords
    await loadWeatherByCoords(latitude, longitude)
  } catch {
    // Если геолокация недоступна, используем город по умолчанию
    await loadWeatherByCity('Moscow')
  }
})
</script>

<template>
  <div class="container">
    <Weather
      v-if="weatherData && !loading"
      :temperature="weatherData.temperature"
      :condition="weatherData.condition"
      :icon="weatherData.icon"
      :city="weatherData.city"
      :country="weatherData.country"
      :day-of-week="weatherData.dayOfWeek"
      :day="weatherData.day"
      :month="weatherData.month"
      :year="weatherData.year"
      :feels-like="weatherData.feelsLike"
      :temp-min="weatherData.tempMin"
      :temp-max="weatherData.tempMax"
      :visibility="weatherData.visibility"
      :clouds="weatherData.clouds"
      :sunrise="weatherData.sunrise"
      :sunset="weatherData.sunset"
      :timezone="weatherData.timezone"
    />
    <Info
      v-if="weatherData && !loading"
      :humidity="weatherData.humidity"
      :wind-speed="weatherData.windSpeed"
      :pressure="weatherData.pressure"
      @open-modal="openModal"
    />

    <!-- Модальное окно -->
    <Transition name="modal">
      <Modal
        v-if="showModal"
        @close="closeModal"
        @search-city="searchCity"
        @use-geolocation="useCurrentLocation"
      />
    </Transition>

    <!-- Состояние загрузки -->
    <div v-if="loading" class="loading">Загрузка данных о погоде...</div>

    <!-- Сообщение об ошибке -->
    <div v-if="error || geolocationError" class="error">
      {{ error || geolocationError }}
    </div>
  </div>
</template>

<style lang="scss">
// Глобальные стили для body
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/bg/bg1.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: background-image 0.5s ease-in-out;
}
</style>

<style scoped lang="scss">
.container {
  width: 1000px;
  height: 670px;
  display: flex;
  align-items: center;
  color: $text-color;
  position: relative;
}

.loading,
.error {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  text-align: center;
}

.error {
  color: #ff4444;
}
</style>
