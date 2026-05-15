<script setup lang="ts">
import { useI18n } from '@/i18n'
import { useTabs, type TopTab } from '@/composables/useTabs'

const { t, lang, setLang } = useI18n()
const { activeTab, setTab } = useTabs()

const tabs: { id: TopTab; labelKey: 'nav_home' | 'nav_projects' | 'nav_games' }[] = [
  { id: 'home',     labelKey: 'nav_home' },
  { id: 'projects', labelKey: 'nav_projects' },
  { id: 'games',    labelKey: 'nav_games' },
]
</script>

<template>
  <header>
    <div class="logo">MeIsGaming</div>
    <nav>
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="tab-btn"
        :class="{ active: activeTab === tab.id }"
        @click="setTab(tab.id)"
      >
        {{ t(tab.labelKey) }}
      </button>
    </nav>
    <div class="lang-toggle">
      <button
        class="lang-btn"
        :class="{ active: lang.lang === 'en' }"
        @click="setLang('en')"
      >EN</button>
      <button
        class="lang-btn"
        :class="{ active: lang.lang === 'de' }"
        @click="setLang('de')"
      >DE</button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 2.5rem;
  border-bottom: 1px solid $border;
  position: sticky;
  top: 0;
  background: rgba(7, 7, 14, 0.92);
  backdrop-filter: blur(16px);
  z-index: 100;
  gap: 1rem;

  @media (max-width: 640px) {
    padding: 1rem 1.25rem;
  }
}

.logo {
  font-family: $font-heading;
  font-weight: 800;
  font-size: 1.15rem;
  letter-spacing: -0.02em;
  background: linear-gradient(90deg, $accent, $accent2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: default;
  white-space: nowrap;
}

nav {
  display: flex;
  gap: 0.1rem;
}

.tab-btn {
  background: none;
  border: none;
  color: $muted;
  font-family: $font-mono;
  font-size: 0.8rem;
  padding: 0.5rem 0.9rem;
  cursor: pointer;
  position: relative;
  transition: color $transition;
  letter-spacing: 0.04em;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 1px;
    background: $accent;
    transition: all 0.3s;
    transform: translateX(-50%);
  }

  &:hover { color: $text; }

  &.active {
    color: $text;

    &::after { width: calc(100% - 1.8rem); }
  }
}

.lang-toggle {
  display: flex;
  gap: 0.25rem;
}

.lang-btn {
  background: none;
  border: 1px solid $border;
  color: $muted;
  font-family: $font-mono;
  font-size: 0.7rem;
  padding: 0.2rem 0.55rem;
  cursor: pointer;
  transition: all $transition;
  border-radius: $radius-sm;

  &.active,
  &:hover {
    border-color: $accent;
    color: $accent;
  }
}
</style>
