<script setup lang="ts">
import { computed } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import HomeView from './views/HomeView.vue'
import ProjectsView from './views/ProjectsView.vue'
import GamesView from './views/GamesView.vue'
import { useTabs } from './composables/useTabs'

const { activeTab } = useTabs()

const currentView = computed(() => {
  switch (activeTab.value) {
    case 'projects': return ProjectsView
    case 'games':    return GamesView
    default:         return HomeView
  }
})
</script>

<template>
  <AppHeader />
  <main>
    <Transition name="tab-fade" mode="out-in">
      <component :is="currentView" :key="activeTab" />
    </Transition>
  </main>
  <AppFooter />
</template>

<style lang="scss">
main {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 2.5rem;

  @media (max-width: 640px) {
    padding: 0 1.25rem;
  }
}
</style>
