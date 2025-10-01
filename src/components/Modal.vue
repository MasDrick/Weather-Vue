<script setup lang="ts">
import { ref } from 'vue'
import { X, Search } from 'lucide-vue-next'

const emit = defineEmits<{
  close: []
  searchCity: [city: string]
  useGeolocation: []
}>()

const searchQuery = ref('')

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    emit('searchCity', searchQuery.value.trim())
    emit('close')
  }
}

const handleGeolocation = () => {
  emit('useGeolocation')
  emit('close')
}

const handleKeyPress = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    handleSearch()
  }
}
</script>

<template>
  <div class="modal-overlay" @click.self="emit('close')">
    <div class="modal">
      <div class="modal-header">
        <h2>Поиск города</h2>
        <button class="close-btn" @click="emit('close')">
          <X />
        </button>
      </div>

      <div class="modal-body">
        <div class="search-section">
          <div class="input-group">
            <Search class="input-icon" />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Введите название города..."
              class="search-input"
              @keypress="handleKeyPress"
            />
          </div>
          <button class="search-btn" @click="handleSearch" :disabled="!searchQuery.trim()">
            Найти
          </button>
        </div>

        <div class="divider">
          <span>или</span>
        </div>

        <button class="geo-btn" @click="handleGeolocation">
          <img src="/location.svg" alt="Location" />
          <span>Использовать мою геопозицию</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal {
  width: 100%;
  max-width: 500px;
  background: rgba(34, 40, 49, 0.95);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  h2 {
    font-size: 24px;
    font-weight: 600;
    margin: 0;
    color: white;
  }

  .close-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    transition: background-color 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    img {
      width: 20px;
      height: 20px;
      opacity: 0.7;
    }
  }
}

.modal-body {
  padding: 24px;

  .search-section {
    display: flex;
    gap: 12px;
    margin-bottom: 24px;

    .input-group {
      flex: 1;
      position: relative;
      display: flex;
      align-items: center;

      .input-icon {
        position: absolute;
        left: 16px;
        width: 20px;
        height: 20px;
        opacity: 0.6;
        z-index: 2;
      }

      .search-input {
        width: 100%;
        height: 50px;
        padding: 0 16px 0 48px;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        color: white;
        font-size: 16px;
        backdrop-filter: blur(10px);
        transition: all 0.2s ease;

        &::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        &:focus {
          outline: none;
          border-color: rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.12);
        }
      }
    }

    .search-btn {
      height: 50px;
      padding: 0 24px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 12px;
      color: white;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      backdrop-filter: blur(10px);

      &:hover:not(:disabled) {
        background: rgba(255, 255, 255, 0.15);
        border-color: rgba(255, 255, 255, 0.3);
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }

  .divider {
    position: relative;
    text-align: center;
    margin: 24px 0;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.1);
    }

    span {
      background: rgba(34, 40, 49, 0.95);
      padding: 0 16px;
      color: rgba(255, 255, 255, 0.5);
      font-size: 14px;
      position: relative;
      z-index: 1;
    }
  }

  .geo-btn {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    backdrop-filter: blur(10px);

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.2);
    }

    img {
      width: 20px;
      height: 20px;
      opacity: 0.8;
    }
  }
}

// Анимация появления
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;

  .modal {
    transition:
      transform 0.3s ease,
      opacity 0.3s ease;
  }
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;

  .modal {
    transform: scale(0.9);
    opacity: 0;
  }
}
</style>
