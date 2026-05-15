<script setup lang="ts">
import { useI18n } from '@/i18n'
import FFXIVSection from '@/components/games/FFXIVSection.vue'

const { t } = useI18n()

interface Game {
  name: string
  emoji: string
  tags: string[]
  link?: string
  linkLabel?: string
  featured?: boolean
}

interface Genre {
  label: string
  games: Game[]
}

const genres: Genre[] = [
  {
    label: 'MMO / RPG',
    games: [
      {
        name: 'Final Fantasy XIV',
        emoji: '⚔️',
        tags: ['EU', 'Free Trial', 'Red Mage', 'Dark Knight'],
        link: 'https://eu.finalfantasyxiv.com/lodestone/',
        linkLabel: '→ Lodestone',
        featured: true,
      },
    ],
  },
  {
    label: 'Roguelike',
    games: [
      {
        name: 'The Binding of Isaac',
        emoji: '💀',
        tags: ['Repentance', 'countless hours', 'RIP'],
      },
      {
        name: 'Dome Keeper',
        emoji: '⛏️',
        tags: ['mining', 'cozy panic'],
      },
    ],
  },
  {
    label: 'Puzzle / Strategy',
    games: [
      {
        name: 'Creeper World 4',
        emoji: '🌊',
        tags: ['tower defense', 'real-time', 'brain hurt'],
      },
      {
        name: 'Upload Labs',
        emoji: '🔌',
        tags: ['node-based', 'optimization', 'Very Positive'],
        link: 'https://store.steampowered.com/app/3606890/Upload_Labs/',
        linkLabel: '→ Steam',
      },
    ],
  },
  {
    label: 'Simulation',
    games: [
      {
        name: 'Euro Truck Simulator 2',
        emoji: '🚛',
        tags: ['ETS2', 'chill', 'EU roads'],
      },
    ],
  },
  {
    label: 'Sandbox',
    games: [
      {
        name: 'Minecraft',
        emoji: '🪨',
        tags: ['Java Edition', 'survival'],
        link: 'https://namemc.com/profile/MeIsGaming',
        linkLabel: '→ NameMC',
      },
    ],
  },
]
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
          <template v-for="game in genre.games" :key="game.name">
            <div class="card" :class="{ featured: game.featured }">
              <div class="card-top">
                <span class="card-emoji">{{ game.emoji }}</span>
                <div class="card-tags">
                  <span v-for="tag in game.tags" :key="tag" class="ptag">{{ tag }}</span>
                </div>
              </div>
              <div class="card-name">{{ game.name }}</div>
              <a v-if="game.link" :href="game.link" class="card-link" target="_blank" rel="noopener">
                {{ game.linkLabel }}
              </a>
            </div>
            <FFXIVSection v-if="game.featured" class="ffxiv-inline" />
          </template>
        </div>
      </section>
    </div>
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
  transition: all 0.25s;
  position: relative;
  overflow: hidden;

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
  }

  &.featured {
    grid-column: 1 / -1;
    border-color: rgba(155, 93, 229, 0.3);
    background: rgba(155, 93, 229, 0.04);
  }
}

.ffxiv-inline {
  grid-column: 1 / -1;
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
  margin-bottom: 0.5rem;
}

.ptag {
  font-size: 0.6rem;
  padding: 0.15rem 0.4rem;
  background: $bg3;
  border: 1px solid $border;
  color: $muted;
  border-radius: $radius-sm;
}

.card-link {
  font-size: 0.7rem;
  color: $accent;
  text-decoration: none;

  &:hover { text-decoration: underline; }
}
</style>
