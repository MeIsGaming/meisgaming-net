<script setup lang="ts">
import type { GameEntry } from '@/data/games'
import { useI18n } from '@/i18n'

const { lang } = useI18n()

defineProps<{ game: GameEntry | null }>()
const emit = defineEmits<{ close: [] }>()

function onBgClick(e: MouseEvent) {
  if (e.target === e.currentTarget) emit('close')
}
</script>

<template>
  <Transition name="modal">
    <div v-if="game" class="modal-bg" @click="onBgClick">
      <div class="modal" role="dialog" :aria-label="game.name">
        <button class="modal-close" @click="emit('close')">✕</button>

        <div class="modal-header">
          <span class="modal-emoji">{{ game.emoji }}</span>
          <div>
            <h3>{{ game.name }}</h3>
            <div class="modal-tags">
              <span v-for="tag in game.tags" :key="tag" class="ptag">{{ tag }}</span>
            </div>
          </div>
        </div>

        <p v-if="game.description" class="modal-desc">
          {{ lang.lang === 'de' && game.descriptionDe ? game.descriptionDe : game.description }}
        </p>

        <!-- FFXIV jobs -->
        <div v-if="game.jobs" class="jobs">
          <div
            v-for="job in game.jobs"
            :key="job.name"
            class="job"
            :class="{ main: job.main }"
          >
            <div class="job-emoji">{{ job.emoji }}</div>
            <div class="job-name">{{ job.name }}</div>
            <div class="job-status">{{ job.status }}</div>
          </div>
        </div>

        <div v-if="game.links?.length" class="modal-links">
          <a
            v-for="link in game.links"
            :key="link.href"
            :href="link.href"
            class="modal-link"
            target="_blank"
            rel="noopener"
          >{{ link.label }}</a>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.modal-bg {
  position: fixed;
  inset: 0;
  background: rgba(7, 7, 14, 0.85);
  backdrop-filter: blur(12px);
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.modal {
  background: $bg2;
  border: 1px solid $border;
  border-radius: 12px;
  padding: 2rem;
  max-width: 480px;
  width: 100%;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: $muted;
  cursor: pointer;
  font-family: $font-mono;
  font-size: 1rem;
  transition: color $transition;
  &:hover { color: $text; }
}

.modal-header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.modal-emoji {
  font-size: 2rem;
  line-height: 1;
  margin-top: 0.1rem;
}

h3 {
  font-family: $font-heading;
  font-weight: 800;
  font-size: 1.3rem;
  letter-spacing: -0.02em;
  margin-bottom: 0.4rem;
}

.modal-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.ptag {
  font-size: 0.6rem;
  padding: 0.15rem 0.4rem;
  background: $bg3;
  border: 1px solid $border;
  color: $muted;
  border-radius: $radius-sm;
}

.modal-desc {
  font-size: 0.82rem;
  color: $muted;
  line-height: 1.8;
  margin-bottom: 1.25rem;
}

.jobs {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 0.65rem;
  margin-bottom: 1.25rem;
}

.job {
  background: $bg3;
  border: 1px solid $border;
  border-radius: $radius-md;
  padding: 0.85rem;
  text-align: center;

  &.main {
    border-color: rgba(155, 93, 229, 0.35);
    background: rgba(155, 93, 229, 0.06);
  }
}

.job-emoji { font-size: 1.4rem; margin-bottom: 0.35rem; }
.job-name  { font-size: 0.8rem; font-weight: 500; }
.job-status {
  font-size: 0.58rem;
  margin-top: 0.2rem;
  letter-spacing: 0.1em;
  .main & { color: $accent; }
  :not(.main) & { color: $muted; }
}

.modal-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.25rem;
}

.modal-link {
  font-size: 0.75rem;
  color: $accent;
  text-decoration: none;
  border: 1px solid rgba(155, 93, 229, 0.3);
  padding: 0.3rem 0.7rem;
  border-radius: $radius-sm;
  transition: all $transition;

  &:hover {
    background: $glow;
    border-color: $accent;
  }
}
</style>

<style>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter-active .modal,
.modal-leave-active .modal {
  transition: transform 0.25s ease, opacity 0.2s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .modal {
  transform: translateY(16px);
}
.modal-leave-to .modal {
  transform: translateY(8px);
  opacity: 0;
}
</style>
