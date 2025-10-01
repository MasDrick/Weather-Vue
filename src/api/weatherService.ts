import type { WeatherData, WeatherApiResponse } from '../types/api'
import { getDayOfWeek, getMonthName } from '../utils/dateUtils'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

if (!API_KEY) {
  console.error('VITE_WEATHER_API_KEY is not defined')
}

function transformWeatherData(data: WeatherApiResponse): WeatherData {
  // Проверяем наличие необходимых данных
  const weatherCondition = data.weather?.[0]?.description || 'Неизвестно'
  const weatherIcon = data.weather?.[0]?.icon || '01d'
  const country = data.sys?.country || ''

  return {
    temperature: Math.round(data.main.temp),
    condition: weatherCondition,
    icon: `https://openweathermap.org/img/wn/${weatherIcon}@4x.png`,
    city: data.name,
    country: country,
    dayOfWeek: getDayOfWeek(new Date()),
    day: new Date().getDate(),
    month: getMonthName(new Date()),
    year: new Date().getFullYear(),
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    pressure: data.main.pressure,
    feelsLike: Math.round(data.main.feels_like),
    tempMin: Math.round(data.main.temp_min),
    tempMax: Math.round(data.main.temp_max),
    visibility: data.visibility,
    clouds: data.clouds?.all,
    sunrise: data.sys?.sunrise,
    sunset: data.sys?.sunset,
    timezone: data.timezone,
  }
}

export async function fetchWeatherByCoords(lat: number, lon: number): Promise<WeatherData> {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ru`
  )

  if (!response.ok) {
    throw new Error('Ошибка при получении данных о погоде')
  }

  const data: WeatherApiResponse = await response.json()

  // Дополнительная проверка на наличие необходимых данных
  if (!data.weather || !data.weather.length) {
    throw new Error('Некорректные данные о погоде')
  }

  return transformWeatherData(data)
}

export async function fetchWeatherByCity(city: string): Promise<WeatherData> {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`
  )

  if (!response.ok) {
    throw new Error('Город не найден')
  }

  const data: WeatherApiResponse = await response.json()

  // Дополнительная проверка на наличие необходимых данных
  if (!data.weather || !data.weather.length) {
    throw new Error('Некорректные данные о погоде')
  }

  return transformWeatherData(data)
}
