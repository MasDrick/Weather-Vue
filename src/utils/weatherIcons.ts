// Маппинг кодов погоды OpenWeatherMap на ваши иконки
export const weatherIconMap: Record<string, string> = {
  // Ясно (день)
  '01d': '/weather-icons/clear.svg',

  // Ясно (ночь)
  '01n': '/weather-icons/fullMoon.svg',

  // Небольшая облачность (день)
  '02d': '/weather-icons/sunny.svg',

  // Небольшая облачность (ночь)
  '02n': '/weather-icons/nightClear.svg',

  // Рассеянные облака (день)
  '03d': '/weather-icons/cloudy.svg',

  // Рассеянные облака (ночь)
  '03n': '/weather-icons/nightClody.svg',

  // Облачно (день)
  '04d': '/weather-icons/cloudy.svg',

  // Облачно (ночь)
  '04n': '/weather-icons/nightClody.svg',

  // Ливень (день)
  '09d': '/weather-icons/rain.svg',

  // Ливень (ночь)
  '09n': '/weather-icons/nightRain.svg',

  // Дождь (день)
  '10d': '/weather-icons/rain.svg',

  // Дождь (ночь)
  '10n': '/weather-icons/nightRain.svg',

  // Гроза (день)
  '11d': '/weather-icons/heavyrainAndStorm.svg',

  // Гроза (ночь)
  '11n': '/weather-icons/heavyrainAndStorm.svg',

  // Снег (день) - используем rainy как fallback
  '13d': '/weather-icons/rain.svg',

  // Снег (ночь) - используем nightRain как fallback
  '13n': '/weather-icons/nightRain.svg',

  // Туман (день)
  '50d': '/weather-icons/cloudy.svg',

  // Туман (ночь)
  '50n': '/weather-icons/nightClody.svg',
}

// Расширенный маппинг для более точного соответствия
export const detailedWeatherIconMap: Record<string, string> = {
  ...weatherIconMap,

  '09d': '/weather-icons/cloudyAndRainy.svg', // Ливень днем
  '09n': '/weather-icons/nightRain.svg', // Ливень ночью
  '10d': '/weather-icons/rain.svg', // Дождь днем
  '10n': '/weather-icons/nightRain.svg', // Дождь ночью
  '11d': '/weather-icons/thunder.svg', // Гроза днем
  '11n': '/weather-icons/thunder.svg', // Гроза ночью
}

// Функция для получения пути к иконке
export function getWeatherIcon(iconCode: string): string {
  return detailedWeatherIconMap[iconCode] || '/weather-icons/day.svg' // fallback иконка
}
