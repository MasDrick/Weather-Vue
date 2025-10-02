import { onMounted, onUnmounted } from 'vue'

export function useBackgroundCarousel() {
  const totalBackgrounds = 6
  let currentIndex = 0
  let intervalId: number | null = null

  const setBackground = (index: number) => {
    currentIndex = index
    const bgNumber = (index % totalBackgrounds) + 1
    document.body.style.backgroundImage = `url('/bg/bg${bgNumber}.jpg')`
  }

  const nextBackground = () => {
    setBackground((currentIndex + 1) % totalBackgrounds)
  }

  const startAutoRotation = (intervalMs: number = 10000) => {
    stopAutoRotation()

    // Случайный старт
    const randomIndex = Math.floor(Math.random() * totalBackgrounds)
    setBackground(randomIndex)

    intervalId = window.setInterval(nextBackground, intervalMs)
  }

  const stopAutoRotation = () => {
    if (intervalId) {
      clearInterval(intervalId)
      intervalId = null
    }
  }

  onMounted(() => {
    startAutoRotation(15000)
  })

  onUnmounted(() => {
    stopAutoRotation()
  })

  return { startAutoRotation, stopAutoRotation }
}
