<script setup lang="ts">
import { useI18n } from '@/i18n'
const { t } = useI18n()

const chips = ['Arch Linux', 'Self-hosted', 'FFXIV', 'IT Services', 'sie/ihr', 'Weiden, DE']

const socials = [
  {
    name: 'Discord',
    href: 'https://discord.com/users/871497360658800640',
    svg: 'M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.01.044.03.084.058.104a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/MeIsGaming',
    svg: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  },
  {
    name: 'Twitch',
    href: 'https://www.twitch.tv/meisstreaming',
    svg: 'M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@meisgaming',
    svg: 'M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z',
  },
  {
    name: 'Twitter',
    href: 'https://x.com/Me_IsGaming',
    svg: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    name: 'Spotify',
    href: 'https://open.spotify.com/user/meisgaming',
    svg: 'M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z',
  },
  {
    name: 'Last.fm',
    href: 'https://www.last.fm/user/MeIsGaming',
    svg: 'M11.87 17.516c-.24-.84-1.32-1.559-1.32-1.559l-.72 1.68s.48.48 1.08.6c.48.12.96-.721.96-.721zm1.56-2.88c-.12-.48-.6-.72-.6-.72l-.48 1.08s.36.36.72.48c.36.12.48-.48.36-.84zm8.04-1.44c0 .84-.48 1.44-1.32 1.44-.72 0-1.32-.6-1.32-1.44s.6-1.44 1.32-1.44c.84 0 1.32.6 1.32 1.44zM12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm6.12 14.636c-.12.6-.48 1.08-.96 1.44-.48.36-1.08.48-1.68.48-.96 0-1.8-.48-2.28-1.32l-.96 2.16c-.12.24-.36.36-.6.24-.24-.12-.36-.36-.24-.6l2.04-4.56c.12-.24.36-.36.6-.24.12.06.18.156.21.264l-.57 1.276c.42.516 1.02.78 1.68.78.48 0 .9-.12 1.26-.36.36-.24.6-.6.72-1.02.12-.48.06-.96-.12-1.38-.18-.42-.48-.72-.84-.9-.36-.18-.78-.24-1.2-.12l.24-.54c.54-.06 1.08.06 1.56.36.48.3.84.72 1.02 1.26.18.54.18 1.08.06 1.62zM9.6 16.316c-.36.84-1.08 1.32-1.92 1.32-1.14 0-2.04-.84-2.04-1.92s.9-1.92 2.04-1.92c.42 0 .84.12 1.2.36l-.24.54c-.3-.18-.6-.24-.96-.24-.72 0-1.32.54-1.32 1.26s.6 1.26 1.32 1.26c.54 0 1.02-.3 1.26-.78l.66.12z',
  },
  {
    name: 'Lodestone',
    href: 'https://de.finalfantasyxiv.com/lodestone/character/57364768/',
    svgStroke: true,
    svg: 'M12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2',
  },
]
</script>

<template>
  <div class="home">
    <div class="hero">
      <div>
        <p class="hero-label">{{ t('hero_label') }}</p>
        <h1>MeIs<em>Gaming</em></h1>
        <p class="bio">{{ t('hero_bio') }}</p>
        <div class="chips">
          <span v-for="chip in chips" :key="chip" class="chip">{{ chip }}</span>
        </div>
        <div class="socials">
          <a
            v-for="s in socials"
            :key="s.name"
            :href="s.href"
            class="social-link"
            target="_blank"
            rel="noopener"
          >
            <svg viewBox="0 0 24 24" :fill="s.svgStroke ? 'none' : 'currentColor'" :stroke="s.svgStroke ? 'currentColor' : undefined" :stroke-width="s.svgStroke ? '1.5' : undefined">
              <path v-if="!s.svgStroke" :d="s.svg" />
              <polygon v-else :points="s.svg" />
            </svg>
            {{ s.name }}
          </a>
        </div>
      </div>
      <div class="avatar-wrap">
        <div class="avatar">
          <div class="avatar-inner">
            <span class="avatar-initials">M</span>
            <span class="avatar-sub">MEISGAMING</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  padding-bottom: 4rem;
}

.hero {
  padding: 5rem 0 3rem;
  display: grid;
  grid-template-columns: 1fr 160px;
  gap: 3rem;
  align-items: center;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    padding: 3rem 0 2rem;
  }
}

.hero-label {
  font-size: 0.7rem;
  color: $accent;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

h1 {
  font-family: $font-heading;
  font-weight: 800;
  font-size: clamp(2.8rem, 7vw, 5rem);
  line-height: 0.93;
  letter-spacing: -0.03em;
  margin-bottom: 1.5rem;

  em {
    font-style: normal;
    color: $accent;
  }
}

.bio {
  font-size: 0.85rem;
  line-height: 1.85;
  color: $muted;
  max-width: 480px;
  margin-bottom: 2rem;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 2.5rem;
}

.chip {
  font-size: 0.65rem;
  padding: 0.25rem 0.6rem;
  border: 1px solid $border;
  color: $muted;
  border-radius: $radius-sm;
  letter-spacing: 0.06em;
}

.avatar-wrap {
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 640px) {
    display: none;
  }
}

.avatar {
  width: 140px;
  height: 140px;
  border-radius: 14px;
  background: $bg2;
  border: 1px solid $border;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    background: linear-gradient(135deg, $accent, $accent2);
    border-radius: 14px;
    z-index: 0;
  }
}

.avatar-inner {
  position: relative;
  z-index: 1;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  background: $bg2;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
}

.avatar-initials {
  font-family: $font-heading;
  font-weight: 800;
  font-size: 1.8rem;
  color: $accent;
}

.avatar-sub {
  font-size: 0.55rem;
  color: $muted;
  letter-spacing: 0.12em;
}

.socials {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.5rem 0.85rem;
  border: 1px solid $border;
  color: $muted;
  text-decoration: none;
  font-size: 0.75rem;
  transition: all $transition;
  border-radius: 4px;
  background: $bg2;

  svg {
    width: 14px;
    height: 14px;
    fill: currentColor;
    flex-shrink: 0;
  }

  &:hover {
    border-color: $accent;
    color: $text;
    background: $glow;
  }
}
</style>
