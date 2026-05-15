import { ref } from 'vue'

export type TopTab = 'home' | 'projects' | 'games'

const activeTab = ref<TopTab>('home')

export function useTabs() {
  function setTab(tab: TopTab) {
    activeTab.value = tab
  }

  return { activeTab, setTab }
}
