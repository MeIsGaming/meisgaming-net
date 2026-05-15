<script setup lang="ts">
import { useI18n } from '@/i18n'

const { t } = useI18n()

const jobs = [
  { emoji: '🔴', name: 'Red Mage',   statusKey: 'xiv_main' as const, main: true },
  { emoji: '🌑', name: 'Dark Knight', statusKey: 'xiv_main' as const, main: true },
  { emoji: '🥷', name: 'Ninja',       statusKey: 'xiv_wip'  as const, main: false },
]
</script>

<template>
  <div class="ffxiv">
    <div class="ffxiv-badge">✦ Final Fantasy XIV</div>
    <h2>{{ t('xiv_h') }}</h2>
    <p class="sub">{{ t('xiv_sub') }}</p>

    <div class="jobs">
      <div
        v-for="job in jobs"
        :key="job.name"
        class="job"
        :class="{ main: job.main }"
      >
        <div class="job-emoji">{{ job.emoji }}</div>
        <div class="job-name">{{ job.name }}</div>
        <div class="job-status">{{ t(job.statusKey) }}</div>
      </div>
    </div>

    <p class="note">{{ t('xiv_note') }}</p>
    <a href="https://eu.finalfantasyxiv.com/lodestone/" target="_blank" rel="noopener" class="lodestone-link">
      → Lodestone
    </a>
  </div>
</template>

<style lang="scss" scoped>
.ffxiv {
  padding: 2rem 0;
}

.ffxiv-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: $accent;
  border: 1px solid rgba(155, 93, 229, 0.25);
  padding: 0.25rem 0.7rem;
  border-radius: $radius-sm;
  margin-bottom: 1rem;
}

h2 {
  font-family: $font-heading;
  font-weight: 800;
  font-size: 2rem;
  letter-spacing: -0.03em;
  margin-bottom: 0.4rem;
}

.sub {
  color: $muted;
  font-size: 0.8rem;
  margin-bottom: 2rem;
}

.jobs {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 0.75rem;
  margin-bottom: 2.5rem;
}

.job {
  background: $bg2;
  border: 1px solid $border;
  border-radius: $radius-md;
  padding: 1rem;
  text-align: center;
  transition: all $transition;

  &.main {
    border-color: rgba(155, 93, 229, 0.35);
    background: rgba(155, 93, 229, 0.05);
  }
}

.job-emoji {
  font-size: 1.6rem;
  margin-bottom: 0.45rem;
}

.job-name {
  font-size: 0.82rem;
  font-weight: 500;
}

.job-status {
  font-size: 0.6rem;
  margin-top: 0.25rem;
  letter-spacing: 0.1em;

  .main & { color: $accent; }
  :not(.main) & { color: $muted; }
}

.note {
  font-size: 0.82rem;
  color: $muted;
  line-height: 1.85;
  margin-bottom: 1rem;
}

.lodestone-link {
  font-size: 0.72rem;
  color: $accent;
  text-decoration: none;

  &:hover { text-decoration: underline; }
}
</style>
