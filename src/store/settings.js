import { defineStore } from 'pinia'

// 定義一個叫做 settings 的 store
export const useSettingsStore = defineStore('settings', {
  // 這個 store 的資料
  state: () => ({
    alarms: [
      { id: 1, name: 'duck', file: new URL('@/assets/duck.mp3', import.meta.url).href },
      { id: 2, name: 'Gangnam style', file: new URL('@/assets/Gangnam style.mp3', import.meta.url).href },
      { id: 3, name: 'meow', file: new URL('@/assets/meow.mp3', import.meta.url).href },
      { id: 4, name: 'classic', file: new URL('@/assets/classic.mp3', import.meta.url).href },
      { id: 5, name: 'danger', file: new URL('@/assets/danger.mp3', import.meta.url).href }
    ],
    selectedAlarm: 1,
    notify: false
  }),
  getters: {
    selectedAlarmFile() {
      const i = this.alarms.findIndex(alarm => alarm.id === this.selectedAlarm)
      return this.alarms[i].file
    }
  },
  persist: {
    key: 'pomodoro-settings',
    paths: [
      'selectedAlarm', 'notify'
    ]
  }
})
