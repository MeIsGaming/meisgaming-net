<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/i18n'

const { t } = useI18n()

const projects = computed(() => [
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
])
</script>

<template>
  <div class="projects-view">
    <div class="page-head">
      <h2>{{ t('proj_h') }}</h2>
      <p>{{ t('proj_sub') }}</p>
    </div>
    <div class="projects-grid">
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
.projects-view {
  padding-bottom: 4rem;
}

.page-head {
  padding: 4rem 0 2.5rem;

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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
}

.card {
  background: $bg2;
  border: 1px solid $border;
  border-radius: $radius-lg;
  padding: 1.4rem;
  transition: all 0.25s;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, $accent, $accent2);
    opacity: 0;
    transition: opacity 0.25s;
  }

  &:hover {
    border-color: rgba(155, 93, 229, 0.35);
    transform: translateY(-3px);

    &::before { opacity: 1; }
  }
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

.ptags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.ptag {
  font-size: 0.62rem;
  padding: 0.18rem 0.45rem;
  background: $bg3;
  border: 1px solid $border;
  color: $muted;
  border-radius: $radius-sm;
}

.card-link {
  display: inline-block;
  margin-top: 0.9rem;
  font-size: 0.72rem;
  color: $accent;
  text-decoration: none;

  &:hover { text-decoration: underline; }
}
</style>
