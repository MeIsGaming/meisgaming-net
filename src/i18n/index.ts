import { reactive, readonly } from 'vue'

type Lang = 'en' | 'de'

const translations = {
  en: {
    nav_home:     'home',
    nav_projects: 'projects',
    nav_games:    'games',
    nav_ffxiv:    'ffxiv',

    hero_label: '// freelance IT · gamer · self-hoster',
    hero_bio:   "IT freelancer based in Weiden, Bavaria. Self-taught since childhood, running MeIsGaming since 2022. Into Linux, FFXIV, anime, and building things that probably shouldn't be built.",

    proj_h:   'Projects',
    proj_sub: 'Things I build when I should probably be sleeping.',
    p1: 'Freelance IT services since 2022. Web, infrastructure, Linux setups, selfhosted solutions. Based in Weiden, Bavaria.',
    p2: 'Multi-agent AI system with an isometric office UI. Vue/Vite frontend, Claude API + Ollama fallback. In development.',
    p3: 'Top-down 2D survivor game inspired by Brotato & BoI. Java/libGDX. Very early. The first enemies are cats. Obviously.',
    p4: 'Open-source browser extension for AI slop detection and illegal content reporting. Plasmo/TypeScript. Concept stage.',

    games_h:   'Games',
    games_sub: 'Currently obsessed with.',

    xiv_h:    'Warrior of Light',
    xiv_sub:  'Free Trial. Forever. No regrets.',
    xiv_main: '♥ MAIN',
    xiv_wip:  'in progress...',
    xiv_note: "Playing on EU servers. If you spot a Red Mage dramatically casting Verraise on the entire party, that's probably me.",

    footer_copy: '© 2026 MeIsGaming · Weiden, Bavaria',
  },
  de: {
    nav_home:     'start',
    nav_projects: 'projekte',
    nav_games:    'games',
    nav_ffxiv:    'ffxiv',

    hero_label: '// Freelance IT · Gamerin · Self-Hosterin',
    hero_bio:   'IT-Freelancerin aus Weiden in der Oberpfalz. Seit Kindheit selbst beigebracht, MeIsGaming seit 2022. Linux, FFXIV, Anime, und Dinge bauen die vielleicht nicht gebaut werden sollten.',

    proj_h:   'Projekte',
    proj_sub: 'Was ich baue wenn ich eigentlich schlafen sollte.',
    p1: 'Freelance IT-Dienstleistungen seit 2022. Web, Infrastruktur, Linux-Setups, Selfhosted-Lösungen. Ansässig in Weiden, Bayern.',
    p2: 'Multi-Agenten KI-System mit isometrischem Büro-UI. Vue/Vite Frontend, Claude API + Ollama Fallback. In Entwicklung.',
    p3: 'Top-Down 2D Survivorgame inspiriert von Brotato & BoI. Java/libGDX. Sehr früh. Die ersten Gegner sind Katzen. Natürlich.',
    p4: 'Open-Source Browser-Extension zur KI-Slop-Erkennung und Meldung illegaler Inhalte. Plasmo/TypeScript. Konzeptphase.',

    games_h:   'Games',
    games_sub: 'Aktuell besessen von.',

    xiv_h:    'Kriegerin des Lichts',
    xiv_sub:  'Free Trial. Für immer. Keine Reue.',
    xiv_main: '♥ MAIN',
    xiv_wip:  'in Arbeit...',
    xiv_note: 'Spiele auf EU-Servern. Wer eine Red Mage sieht die dramatisch Verraise auf die gesamte Gruppe castet, das bin wahrscheinlich ich.',

    footer_copy: '© 2026 MeIsGaming · Weiden, Bayern',
  },
} as const

type TranslationKey = keyof typeof translations.en

const state = reactive({ lang: 'en' as Lang })

export function useI18n() {
  function t(key: TranslationKey): string {
    return translations[state.lang][key]
  }

  function setLang(l: Lang) {
    state.lang = l
  }

  return { t, lang: readonly(state), setLang }
}
