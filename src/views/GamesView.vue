<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '@/i18n'
import { genres, type GameEntry } from '@/data/games'

const { t, lang } = useI18n()

const openGame = ref<string | null>(null)

function toggle(game: GameEntry) {
  openGame.value = openGame.value === game.name ? null : game.name
}

function desc(game: GameEntry) {
  return lang.lang === 'de' && game.descriptionDe ? game.descriptionDe : game.description
}
</script>

<template>
  <div class="view">
    <div class="page-head">
      <h2>{{ t('games_h') }}</h2>
      <p>{{ t('games_sub') }}</p>
    </div>

    <div class="genres">
      <section v-for="genre in genres" :key="genre.label" class="genre-section">
        <div class="genre-label">{{ genre.label }}</div>
        <div class="cards">
          <div
            v-for="game in genre.games"
            :key="game.name"
            class="card"
            :class="{ open: openGame === game.name }"
            @click="toggle(game)"
          >
            <div class="card-summary">
              <div class="card-left">
                <span class="card-emoji">{{ game.emoji }}</span>
                <span class="card-name">{{ game.name }}</span>
              </div>
              <div class="card-right">
                <div class="card-tags">
                  <span v-for="tag in game.tags" :key="tag" class="ptag">{{ tag }}</span>
                </div>
                <span class="chevron">{{ openGame === game.name ? '▲' : '▼' }}</span>
              </div>
            </div>

            <Transition name="expand">
              <div v-if="openGame === game.name" class="card-detail" @click.stop>
                <p v-if="desc(game)" class="detail-desc">{{ desc(game) }}</p>

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

                <div v-if="game.links?.length" class="detail-links">
                  <a
                    v-for="link in game.links"
                    :key="link.href"
                    :href="link.href"
                    class="detail-link"
                    target="_blank"
                    rel="noopener"
                  >{{ link.label }}</a>
                </div>
              </div>
            </Transition>

            <span v-if="openGame !== game.name" class="card-hint">{{ t('click_hint') }}</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.genres {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.genre-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.genre-label {
  font-size: 0.65rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: $accent;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: $border;
  }
}

.cards {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card {
  @include card-hover(0);
  background: $bg2;
  border: 1px solid $border;
  border-radius: $radius-lg;
  cursor: pointer;
  transition: border-color 0.25s;

  &.open { border-color: rgba(155, 93, 229, 0.35); }
  &.open::before { opacity: 1; }
}

.card-summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.9rem 1.2rem;
}

.card-left {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.card-emoji { font-size: 1.2rem; flex-shrink: 0; }

.card-name {
  font-family: $font-heading;
  font-weight: 700;
  font-size: 0.92rem;
  white-space: nowrap;
}

.card-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  justify-content: flex-end;

  @media (max-width: 500px) { display: none; }
}

.chevron {
  font-size: 0.55rem;
  color: $muted;
  transition: color 0.2s;

  .card:hover &,
  .open & { color: $accent; }
}

.card-hint {
  display: block;
  font-size: 0.6rem;
  color: $muted;
  letter-spacing: 0.06em;
  padding: 0 1.2rem 0.65rem;
  opacity: 0;
  transition: opacity $transition;

  .card:hover & { opacity: 1; }
}

.card-detail {
  padding: 0 1.2rem 1.1rem;
  border-top: 1px solid $border;
  cursor: default;
}

.detail-desc {
  font-size: 0.8rem;
  color: $muted;
  line-height: 1.8;
  padding-top: 1rem;
  margin-bottom: 1rem;
}

.jobs {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 0.6rem;
  margin-bottom: 1rem;
}

.job {
  background: $bg3;
  border: 1px solid $border;
  border-radius: $radius-md;
  padding: 0.8rem;
  text-align: center;

  &.main {
    border-color: rgba(155, 93, 229, 0.35);
    background: rgba(155, 93, 229, 0.06);
  }
}

.job-emoji  { font-size: 1.3rem; margin-bottom: 0.3rem; }
.job-name   { font-size: 0.78rem; font-weight: 500; }
.job-status {
  font-size: 0.58rem;
  margin-top: 0.2rem;
  letter-spacing: 0.1em;
  color: $muted;

  .main & { color: $accent; }
}

.detail-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
