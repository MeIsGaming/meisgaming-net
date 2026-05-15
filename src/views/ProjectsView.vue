<script setup lang="ts">
import { useI18n } from '@/i18n'

const { t } = useI18n()

const projects = [
  {
    icon: '🖥️',
    name: 'MeIsGaming IT',
    descKey: 'p1' as const,
    tags: ['Linux', 'Nextcloud', 'Webdev', 'Freelance'],
  },
  {
    icon: '🤖',
    name: 'eAI',
    descKey: 'p2' as const,
    tags: ['Vue', 'Three.js', 'Claude API', 'Ollama'],
  },
  {
    icon: '⚔️',
    name: 'Idle Horde Survivor',
    descKey: 'p3' as const,
    tags: ['Java', 'libGDX', 'Game Dev'],
    link: 'https://github.com/MeIsGaming/idle-horde-survivor',
    linkLabel: '→ GitHub',
  },
  {
    icon: '🛡️',
    name: 'Better Internet Extension',
    descKey: 'p4' as const,
    tags: ['TypeScript', 'Plasmo', 'Browser Ext'],
  },
]
</script>

<template>
  <div class="view">
    <div class="page-head">
      <h2>{{ t('proj_h') }}</h2>
      <p>{{ t('proj_sub') }}</p>
    </div>
    <div class="grid">
      <div v-for="p in projects" :key="p.name" class="card">
        <div class="card-icon">{{ p.icon }}</div>
        <div class="card-name">{{ p.name }}</div>
        <p class="card-desc">{{ t(p.descKey) }}</p>
        <div class="ptags">
          <span v-for="tag in p.tags" :key="tag" class="ptag">{{ tag }}</span>
        </div>
        <a v-if="p.link" :href="p.link" class="card-link" target="_blank" rel="noopener">
          {{ p.linkLabel }}
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
}

.card {
  @include card-hover(-3px);
  background: $bg2;
  border: 1px solid $border;
  border-radius: $radius-lg;
  padding: 1.4rem;
  transition: border-color 0.25s, transform 0.25s;
}

.card-icon {
  font-size: 1.4rem;
  margin-bottom: 0.9rem;
}

.card-name {
  font-family: $font-heading;
  font-weight: 700;
  font-size: 0.95rem;
  margin-bottom: 0.45rem;
}

.card-desc {
  font-size: 0.77rem;
  color: $muted;
  line-height: 1.65;
  margin-bottom: 0.9rem;
}
</style>
