import { ref } from 'vue'
import type { WeatherData } from '../types/api'
import { fetchWeatherByCoords, fetchWeatherByCity } from '../api/weatherService'

export function useWeather() {
  const weatherData = ref<WeatherData | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const loadWeatherByCoords = async (lat: number, lon: number) => {
    loading.value = true
    error.value = null

    try {
      weatherData.value = await fetchWeatherByCoords(lat, lon)
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Произошла неизвестная ошибка'
      console.error('Error fetching weather:', err)
    } finally {
      loading.value = false
    }
  }

  const loadWeatherByCity = async (city: string) => {
    loading.value = true
    error.value = null

    try {
      weatherData.value = await fetchWeatherByCity(city)
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Произошла неизвестная ошибка'
      console.error('Error fetching weather:', err)
    } finally {
      loading.value = false
    }
  }

  return {
    weatherData,
    loading,
    error,
    loadWeatherByCoords,
    loadWeatherByCity,
  }
}
