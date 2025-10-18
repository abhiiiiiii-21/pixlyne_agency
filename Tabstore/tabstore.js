import { create } from 'zustand'

const useTabStore = create((set) => ({
  currentTab: 1, // default tab
  setCurrentTab: (tab) => set({ currentTab: tab }),
}))

export default useTabStore
