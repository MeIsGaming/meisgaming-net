<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '@/i18n'
import { genres, type GameEntry } from '@/data/games'
import GameModal from '@/components/games/GameModal.vue'

const { t } = useI18n()

const activeGame = ref<GameEntry | null>(null)

function open(game: GameEntry) { activeGame.value = game }
function close() { activeGame.value = null }
</script>

<template>
  <div class="games-view">
    <div class="page-head">
      <h2>{{ t('games_h') }}</h2>
      <p>{{ t('games_sub') }}</p>
    </div>

    <div class="genres">
      <section v-for="genre in genres" :key="genre.label" class="genre-section">
        <div class="genre-label">{{ genre.label }}</div>
        <div class="cards">
          <button
            v-for="game in genre.games"
            :key="game.name"
            class="card"
            @click="open(game)"
          >
            <div class="card-top">
              <span class="card-emoji">{{ game.emoji }}</span>
              <div class="card-tags">
                <span v-for="tag in game.tags" :key="tag" class="ptag">{{ tag }}</span>
              </div>
            </div>
            <div class="card-name">{{ game.name }}</div>
            <span class="card-hint">click for details</span>
          </button>
        </div>
      </section>
    </div>

    <GameModal :game="activeGame" @close="close" />
  </div>
</template>

<style lang="scss" scoped>
.games-view {
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

  p { color: $muted; font-size: 0.8rem; }
}

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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 0.75rem;
}

.card {
  background: $bg2;
  border: 1px solid $border;
  border-radius: $radius-lg;
  padding: 1.1rem 1.2rem;
  cursor: pointer;
  text-align: left;
  font-family: $font-mono;
  color: $text;
  width: 100%;
  position: relative;
  overflow: hidden;
  transition: all 0.25s;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, $accent, $accent2);
    opacity: 0;
    transition: opacity 0.25s;
  }

  &:hover {
    border-color: rgba(155, 93, 229, 0.35);
    transform: translateY(-2px);
    &::before { opacity: 1; }

    .card-hint { opacity: 1; }
  }
}

.card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.6rem;
}

.card-emoji {
  font-size: 1.3rem;
  line-height: 1;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  justify-content: flex-end;
}

.card-name {
  font-family: $font-heading;
  font-weight: 700;
  font-size: 0.92rem;
  margin-bottom: 0.4rem;
}

.card-hint {
  font-size: 0.6rem;
  color: $muted;
  letter-spacing: 0.06em;
  opacity: 0;
  transition: opacity $transition;
}

.ptag {
  font-size: 0.6rem;
  padding: 0.15rem 0.4rem;
  background: $bg3;
  border: 1px solid $border;
  color: $muted;
  border-radius: $radius-sm;
}
</style>
