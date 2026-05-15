export interface Job {
  emoji: string
  name: string
  status: string
  main: boolean
}

export interface GameEntry {
  name: string
  emoji: string
  genre: string
  tags: string[]
  description?: string
  descriptionDe?: string
  jobs?: Job[]
  links?: { label: string; href: string }[]
}

export interface Genre {
  label: string
  games: GameEntry[]
}

export const genres: Genre[] = [
  {
    label: 'MMO / RPG',
    games: [
      {
        name: 'Final Fantasy XIV',
        emoji: '⚔️',
        genre: 'MMO / RPG',
        tags: ['Lich · Light', 'Free Trial', 'Red Mage', 'Dark Knight'],
        description: "Mommynya Uwu on Lich (Light DC). Free Trial forever — no regrets. If you spot a Red Mage dramatically casting Verraise on the entire party, that's probably me.",
        descriptionDe: 'Mommynya Uwu auf Lich (Light DC). Free Trial für immer — keine Reue. Wer eine Red Mage sieht die dramatisch Verraise auf die gesamte Gruppe castet, das bin wahrscheinlich ich.',
        jobs: [
          { emoji: '🔴', name: 'Red Mage',    status: '♥ MAIN',      main: true  },
          { emoji: '🌑', name: 'Dark Knight', status: '♥ MAIN',      main: true  },
          { emoji: '🥷', name: 'Ninja',        status: 'in progress', main: false },
        ],
        links: [
          { label: '→ Lodestone', href: 'https://de.finalfantasyxiv.com/lodestone/character/57364768/' },
        ],
      },
    ],
  },
  {
    label: 'Roguelike',
    games: [
      {
        name: 'The Binding of Isaac',
        emoji: '💀',
        genre: 'Roguelike',
        tags: ['Repentance', 'many hours', 'send help'],
        description: 'Hundreds of runs and still finding new synergies. Repentance is the definitive version.',
        descriptionDe: 'Hunderte von Runs und immer noch neue Synergien am Entdecken. Repentance ist die definitive Version.',
      },
      {
        name: 'Dome Keeper',
        emoji: '⛏️',
        genre: 'Roguelike',
        tags: ['mining', 'wave defense', 'cozy panic'],
        description: 'Mine deeper, defend longer. Somehow both chill and stressful at the same time.',
        descriptionDe: 'Tiefer schürfen, länger verteidigen. Irgendwie gleichzeitig entspannt und stressig.',
      },
    ],
  },
  {
    label: 'Puzzle / Strategy',
    games: [
      {
        name: 'Creeper World 4',
        emoji: '🌊',
        genre: 'Strategy',
        tags: ['tower defense', 'real-time', 'brain hurt'],
        description: 'Stop an ever-spreading liquid from consuming everything. Deceptively simple, endlessly complex.',
        descriptionDe: 'Eine sich ausbreitende Flüssigkeit aufhalten die alles verschlingt. Täuschend einfach, endlos komplex.',
      },
      {
        name: 'Upload Labs',
        emoji: '🔌',
        genre: 'Puzzle',
        tags: ['node-based', 'optimization', 'Very Positive'],
        description: 'Build and optimize node-based systems to prevent universal heat death. Satisfying in a very specific way.',
        descriptionDe: 'Node-basierte Systeme bauen und optimieren um den universellen Wärmetod zu verhindern. Sehr spezifisch befriedigend.',
        links: [
          { label: '→ Steam', href: 'https://store.steampowered.com/app/3606890/Upload_Labs/' },
        ],
      },
    ],
  },
  {
    label: 'Simulation',
    games: [
      {
        name: 'Euro Truck Simulator 2',
        emoji: '🚛',
        genre: 'Simulation',
        tags: ['ETS2', 'chill', 'EU roads', 'ETS2LA'],
        description: 'Driving across Europe at 2am with a podcast on. Running ETS2LA for AI lane assist.',
        descriptionDe: 'Um 2 Uhr nachts mit einem Podcast quer durch Europa fahren. Läuft mit ETS2LA (KI-Lane-Assist).',
      },
    ],
  },
  {
    label: 'Sandbox',
    games: [
      {
        name: 'Minecraft',
        emoji: '🪨',
        genre: 'Sandbox',
        tags: ['Java Edition'],
        description: 'Java Edition. Classic.',
        descriptionDe: 'Java Edition. Ein Klassiker.',
        links: [
          { label: '→ NameMC', href: 'https://namemc.com/profile/MeIsGaming' },
        ],
      },
    ],
  },
]
