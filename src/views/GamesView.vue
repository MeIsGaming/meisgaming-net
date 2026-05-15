<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '@/i18n'
import FFXIVSection from '@/components/games/FFXIVSection.vue'

const { t } = useI18n()

type GameTab = 'ffxiv'

const activeGameTab = ref<GameTab>('ffxiv')

const gameTabs: { id: GameTab; label: string }[] = [
  { id: 'ffxiv', label: 'FFXIV' },
]
</script>

<template>
  <div class="games-view">
    <div class="page-head">
      <h2>{{ t('games_h') }}</h2>
      <p>{{ t('games_sub') }}</p>
    </div>

    <nav class="subtabs">
      <button
        v-for="tab in gameTabs"
        :key="tab.id"
        class="subtab-btn"
        :class="{ active: activeGameTab === tab.id }"
        @click="activeGameTab = tab.id"
      >
        {{ tab.label }}
      </button>
    </nav>

    <Transition name="tab-fade" mode="out-in">
      <FFXIVSection v-if="activeGameTab === 'ffxiv'" key="ffxiv" />
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.games-view {
  padding-bottom: 4rem;
}

.page-head {
  padding: 4rem 0 2rem;

  h2 {
    font-family: $font-heading;
    font-weight: 800;
    font-size: 2.2rem;
    letter-spacing: -0.03em;
    margin-bottom: 0.4rem;
  }

  p {
    color: $muted;
    font-size: 0.8rem;
  }
}

.subtabs {
  display: flex;
  gap: 0.1rem;
  border-bottom: 1px solid $border;
  margin-bottom: 0.5rem;
}

.subtab-btn {
  background: none;
  border: none;
  color: $muted;
  font-family: $font-mono;
  font-size: 0.78rem;
  padding: 0.45rem 0.85rem;
  cursor: pointer;
  position: relative;
  transition: color $transition;
  letter-spacing: 0.04em;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 0;
    height: 1px;
    background: $accent;
    transition: width 0.25s;
  }

  &:hover { color: $text; }

  &.active {
    color: $text;

    &::after { width: 100%; }
  }
}
</style>
