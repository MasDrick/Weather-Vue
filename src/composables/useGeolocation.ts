import { ref } from 'vue'

export function useGeolocation() {
  const geolocationError = ref<string | null>(null)
  const isSupported = ref(!!navigator.geolocation)

  const getCurrentPosition = (): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        const error = new Error('Геолокация не поддерживается браузером')
        geolocationError.value = error.message
        reject(error)
        return
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          geolocationError.value = null
          resolve(position)
        },
        (error) => {
          const errorMessage = getGeolocationErrorMessage(error)
          geolocationError.value = errorMessage
          reject(new Error(errorMessage))
        }
      )
    })
  }

  const getGeolocationErrorMessage = (error: GeolocationPositionError): string => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        return 'Доступ к геолокации запрещен'
      case error.POSITION_UNAVAILABLE:
        return 'Информация о местоположении недоступна'
      case error.TIMEOUT:
        return 'Время ожидания геолокации истекло'
      default:
        return 'Не удалось получить геопозицию'
    }
  }

  return {
    geolocationError,
    isSupported,
    getCurrentPosition,
  }
}
