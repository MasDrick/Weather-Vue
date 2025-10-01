export interface WeatherData {
  temperature: number
  condition: string
  icon: string
  city: string
  country: string
  dayOfWeek: string
  day: number
  month: string
  year: number
  humidity?: number
  windSpeed?: number
  pressure?: number
  feelsLike?: number
  tempMin?: number
  tempMax?: number
  visibility?: number
  clouds?: number
  sunrise?: number
  sunset?: number
  timezone?: number
}

export interface Weather {
  description: string
  icon: string
}

export interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

export interface Sys {
  country: string
  sunrise?: number
  sunset?: number
}

export interface WeatherApiResponse {
  weather: Weather[]
  main: Main
  wind: {
    speed: number
  }
  clouds?: {
    all: number
  }
  visibility?: number
  sys: Sys
  name: string
  timezone?: number
}
