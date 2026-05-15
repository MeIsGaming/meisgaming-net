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
        description: 'Hundreds of runs and still finding new synergies. Repentance is the definitive version and it broke me in the best way.',
        descriptionDe: 'Hunderte von Runs und immer noch neue Synergien entdecken. Repentance ist die definitive Version und hat mich auf die beste Art gebrochen.',
      },
      {
        name: 'Dome Keeper',
        emoji: '⛏️',
        genre: 'Roguelike',
        tags: ['mining', 'wave defense', 'cozy panic'],
        description: 'Mine deeper, defend longer. Somehow both chill and incredibly stressful at the same time. A perfect game.',
        descriptionDe: 'Tiefer schürfen, länger verteidigen. Irgendwie gleichzeitig entspannt und unglaublich stressig. Ein perfektes Spiel.',
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
        description: 'Stop an ever-spreading liquid from consuming everything. Deceptively simple, endlessly complex. The creeper will win eventually.',
        descriptionDe: 'Eine sich ausbreitende Flüssigkeit aufhalten die alles verschlingt. Täuschend einfach, endlos komplex. Die Creeper werden irgendwann gewinnen.',
      },
      {
        name: 'Upload Labs',
        emoji: '🔌',
        genre: 'Puzzle',
        tags: ['node-based', 'optimization', 'Very Positive'],
        description: 'Build and optimize node-based systems to prevent universal heat death. Actually a great brain workout disguised as a game.',
        descriptionDe: 'Node-basierte Systeme bauen und optimieren um den universellen Wärmetod zu verhindern. Eigentlich ein tolles Gehirntraining als Spiel verkleidet.',
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
        tags: ['ETS2', 'chill driving', 'EU roads'],
        description: "There's something deeply satisfying about driving across Europe at 2am with a podcast on. ETS2 is therapy. Also running ETS2LA (AI lane assist) and TruckersMP for the full experience.",
        descriptionDe: 'Es ist irgendwie unglaublich befriedigend um 2 Uhr nachts mit einem Podcast quer durch Europa zu fahren. ETS2 ist Therapie. Läuft mit ETS2LA (KI-Lane-Assist) und TruckersMP.',
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
        tags: ['Java Edition', 'survival', 'no creative mode shame'],
        description: 'Classic. Java Edition, survival mode, occasional creative-mode cheating on massive builds. No regrets.',
        descriptionDe: 'Ein Klassiker. Java Edition, Survival-Modus, gelegentliches Creative-Mode-Cheaten bei großen Bauprojekten. Keine Reue.',
        links: [
          { label: '→ NameMC', href: 'https://namemc.com/profile/MeIsGaming' },
        ],
      },
    ],
  },
]
