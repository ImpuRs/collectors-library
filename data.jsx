// data.jsx — Collection items (multi-media) + Cover component
// Categories: Livres, BD, Films, Musique, Jeux Vidéo

const STATUS_BY_TYPE = {
  Livre:    { done: 'Lu',      todo: 'Non lu' },
  BD:       { done: 'Lu',      todo: 'Non lu' },
  Film:     { done: 'Vu',      todo: 'À voir' },
  Musique:  { done: 'Écouté',  todo: 'À écouter' },
  'Jeu Vidéo': { done: 'Joué',   todo: 'À jouer' },
};

const TYPE_PLURAL = {
  Livre: 'Livres', BD: 'BD', Film: 'Films',
  Musique: 'Musique', 'Jeu Vidéo': 'Jeux Vidéo',
};

const ITEMS = [
  // ── BD / MANGA ──────────────────────────────────────────
  {
    id: 'vagabond-1', type: 'BD', title: 'Vagabond Vol. 1', author: 'Takehiko Inoue',
    year: 1998, pages: 232, publisher: 'Tonkam', barcode: '9782845800014',
    status: 'done', rating: 4,
    cover: { bg: '#1C1815', ink: '#E8D9B5', accent: '#C84B31', art: 'samurai' },
    addedOn: '8 mars 2026',
    synopsis: "Miyamoto Musashi, un jeune guerrier sauvage, tente de se faire un nom par la voie de l'épée. Récit historique épique mis en images par le maître Inoue.",
    tags: ['Seinen', 'Historique', 'Samouraï'],
  },
  {
    id: 'berserk-1', type: 'BD', title: 'Berserk - Tome 01', author: 'Kentaro Miura',
    year: 1989, pages: 230, publisher: 'Glénat', barcode: '9782723452243',
    status: 'done', rating: 5,
    cover: { bg: '#0F1216', ink: '#F0F0F0', accent: '#3C8FB8', art: 'warrior' },
    addedOn: '15 mars 2026',
    synopsis: "Guts, mercenaire au glaive démesuré, traque les apôtres pour assouvir sa vengeance. Œuvre majeure du dark fantasy japonais.",
    tags: ['Seinen', 'Dark fantasy'],
  },
  {
    id: 'monster-1', type: 'BD', title: 'Monster Vol. 1', author: 'Naoki Urasawa',
    year: 1994, pages: 224, publisher: 'Kana', barcode: '9782505005896',
    status: 'todo', rating: null,
    cover: { bg: '#243640', ink: '#F4E4C1', accent: '#B91C1C', art: 'portrait' },
    addedOn: '1 avril 2026',
    synopsis: "Le Dr Tenma sauve la vie d'un enfant. Neuf ans plus tard, il découvre que celui-ci est devenu un tueur en série. Thriller psychologique magistral.",
    tags: ['Seinen', 'Thriller'],
  },
  {
    id: 'tintin-tibet', type: 'BD', title: 'Tintin au Tibet', author: 'Hergé',
    year: 1960, pages: 64, publisher: 'Casterman', barcode: '9782203001190',
    status: 'done', rating: 5,
    cover: { bg: '#D97847', ink: '#3D1F0F', accent: '#1A1410', art: 'mountain' },
    addedOn: '20 février 2026',
    synopsis: "Tintin part au Tibet à la recherche de Tchang, son ami chinois disparu dans un accident d'avion en Himalaya.",
    tags: ['Aventure', 'Classique'],
  },

  // ── LIVRES ──────────────────────────────────────────────
  {
    id: 'dune', type: 'Livre', title: 'Dune', author: 'Frank Herbert',
    year: 1965, pages: 880, publisher: 'Pocket', barcode: '9782266320481',
    status: 'todo', rating: null,
    cover: { bg: '#E8DEC5', ink: '#1A0F08', accent: '#A86F2D', art: 'desert' },
    addedOn: '10 avril 2026',
    synopsis: "Sur la planète désertique Arrakis, seule source de l'épice qui permet les voyages interstellaires, le jeune Paul Atréides devra accomplir son destin.",
    tags: ['SF', 'Saga'],
  },
  {
    id: 'design-everyday', type: 'Livre', title: 'The Design of Everyday Things', author: 'Don Norman',
    year: 2013, pages: 368, publisher: 'Basic Books', barcode: '9780465050659',
    status: 'done', rating: 4,
    cover: { bg: '#1F2937', ink: '#F0E5C2', accent: '#D4A437', art: 'teapot' },
    addedOn: '5 mars 2026',
    synopsis: "Ouvrage fondateur sur le design d'expérience. Don Norman démontre comment les objets bien conçus se laissent comprendre sans mode d'emploi.",
    tags: ['Design', 'Référence'],
  },
  {
    id: '1984', type: 'Livre', title: '1984', author: 'George Orwell',
    year: 1949, pages: 328, publisher: 'Folio', barcode: '9782070368228',
    status: 'done', rating: 5,
    cover: { bg: '#161616', ink: '#FFFFFF', accent: '#E63946', art: 'eye' },
    addedOn: '5 février 2026',
    synopsis: "Dans un futur totalitaire, Winston Smith travaille au ministère de la Vérité, où il réécrit l'histoire pour la faire correspondre aux mensonges du Parti.",
    tags: ['Dystopie', 'Politique'],
  },
  {
    id: 'bovary', type: 'Livre', title: 'Madame Bovary', author: 'Gustave Flaubert',
    year: 1856, pages: 432, publisher: 'Folio Classique', barcode: '9782070413119',
    status: 'todo', rating: null,
    cover: { bg: '#7D2E2E', ink: '#F2E8D5', accent: '#D4A437', art: 'classic' },
    addedOn: '12 mars 2026',
    synopsis: "Le drame d'Emma Bovary, jeune femme provinciale qui rêve d'une vie passionnée et tente d'échapper à la médiocrité de son existence.",
    tags: ['Roman', 'Classique'],
  },

  // ── FILMS ───────────────────────────────────────────────
  {
    id: 'sept-samourais', type: 'Film', title: 'Les Sept Samouraïs', author: 'Akira Kurosawa',
    year: 1954, duration: '3h27', publisher: 'Toho', barcode: '3700301030986',
    status: 'done', rating: 5, format: 'Noir & Blanc',
    cover: { bg: '#5C2A1D', ink: '#F2D8A0', accent: '#D4A437', art: 'samurai-film' },
    addedOn: '18 février 2026',
    synopsis: "Au XVIe siècle, dans le Japon féodal, un village de paysans décide de recruter des samouraïs pour se défendre contre les brigands qui les pillent régulièrement.",
    tags: ['Drame', 'Jidaigeki'],
    hasTrailer: true,
  },
  {
    id: 'interstellar', type: 'Film', title: 'Interstellar', author: 'Christopher Nolan',
    year: 2014, duration: '2h49', publisher: 'Paramount', barcode: '5051889529576',
    status: 'done', rating: 5, format: 'Couleur',
    cover: { bg: '#0F1830', ink: '#E8ECF5', accent: '#5BA3E0', art: 'space' },
    addedOn: '3 mars 2026',
    synopsis: "Dans un futur proche, la Terre se meurt. Une équipe d'astronautes traverse un trou de ver à la recherche d'une nouvelle planète habitable pour l'humanité.",
    tags: ['SF', 'Drame'],
    hasTrailer: true,
  },
  {
    id: 'chihiro', type: 'Film', title: 'Le Voyage de Chihiro', author: 'Hayao Miyazaki',
    year: 2001, duration: '2h05', publisher: 'Studio Ghibli', barcode: '3700301030986',
    status: 'done', rating: 5, format: 'Couleur',
    cover: { bg: '#3D5A4C', ink: '#F2D8A0', accent: '#E8B935', art: 'ghibli' },
    addedOn: '3 mars 2026',
    synopsis: "Chihiro, 10 ans, et ses parents tombent par hasard sur un parc d'attractions désaffecté qui se révèle être un monde habité par des esprits.",
    tags: ['Animation', 'Fantastique'],
    hasTrailer: true,
  },
  {
    id: 'blade-runner', type: 'Film', title: 'Blade Runner 2049', author: 'Denis Villeneuve',
    year: 2017, duration: '2h44', publisher: 'Warner', barcode: '5051889612568',
    status: 'todo', rating: null, format: 'Couleur',
    cover: { bg: '#7A3520', ink: '#F2D58A', accent: '#1A1410', art: 'noir' },
    addedOn: '18 mars 2026',
    synopsis: "Trente ans après Blade Runner, l'officier K, blade runner du LAPD, découvre un secret enfoui susceptible de plonger la société dans le chaos.",
    tags: ['SF', 'Néo-noir'],
    hasTrailer: true,
  },

  // ── MUSIQUE ─────────────────────────────────────────────
  {
    id: 'ram', type: 'Musique', title: 'Random Access Memories', author: 'Daft Punk',
    year: 2013, tracks: 13, duration: '1h14', publisher: 'Columbia', barcode: '0888837168625',
    status: 'done', rating: 5,
    cover: { bg: '#0B1633', ink: '#5FB3F0', accent: '#D4A437', art: 'wave' },
    addedOn: '14 février 2026',
    synopsis: "Quatrième album studio du duo français, rendant hommage à la musique des années 70-80 avec Pharrell Williams, Nile Rodgers, Giorgio Moroder.",
    tags: ['Électro', 'Disco'],
  },
  {
    id: 'currents', type: 'Musique', title: 'Currents', author: 'Tame Impala',
    year: 2015, tracks: 13, duration: '51 min', publisher: 'Modular', barcode: '0602547398017',
    status: 'done', rating: 5,
    cover: { bg: '#E8C03A', ink: '#3D1F4A', accent: '#9D4A8E', art: 'currents' },
    addedOn: '8 avril 2026',
    synopsis: "Troisième album de Kevin Parker, virage psyché-pop synthétique. Production hypnotique, voix éthérées, sommets émotionnels.",
    tags: ['Psyché', 'Pop'],
  },
  {
    id: 'kob', type: 'Musique', title: 'Kind of Blue', author: 'Miles Davis',
    year: 1959, tracks: 9, duration: '45 min', publisher: 'Columbia', barcode: '0886972993621',
    status: 'done', rating: 5,
    cover: { bg: '#1C3F5F', ink: '#F0E4C8', accent: '#5FB3F0', art: 'minimal' },
    addedOn: '1 février 2026',
    synopsis: "Album de jazz modal enregistré en 1959 avec John Coltrane, Cannonball Adderley, Bill Evans. L'un des disques les plus influents du 20e siècle.",
    tags: ['Jazz', 'Modal'],
  },
  {
    id: 'okc', type: 'Musique', title: 'OK Computer', author: 'Radiohead',
    year: 1997, tracks: 12, duration: '53 min', publisher: 'Parlophone', barcode: '0724385522925',
    status: 'todo', rating: null,
    cover: { bg: '#D9D3C0', ink: '#1A1A1A', accent: '#C84B31', art: 'minimal' },
    addedOn: '25 février 2026',
    synopsis: "Troisième album du groupe britannique, exploration sombre de l'isolement moderne, du capitalisme et des technologies.",
    tags: ['Rock', 'Alternative'],
  },

  // ── JEUX VIDÉO ──────────────────────────────────────────
  {
    id: 'elden-ring', type: 'Jeu Vidéo', title: 'Elden Ring', author: 'FromSoftware',
    year: 2022, duration: '~100h', publisher: 'Bandai Namco', barcode: '3391892017502', platform: 'PS5',
    status: 'done', rating: 5,
    cover: { bg: '#D97A2C', ink: '#1A0F08', accent: '#3D1F0F', art: 'fantasy' },
    addedOn: '2 mars 2026',
    synopsis: "Action-RPG en monde ouvert dans les Terres entre. Univers façonné par George R.R. Martin et Hidetaka Miyazaki.",
    tags: ['Action-RPG', 'Souls'],
  },
  {
    id: 'last-of-us', type: 'Jeu Vidéo', title: 'The Last of Us Part II', author: 'Naughty Dog',
    year: 2020, duration: '~30h', publisher: 'Sony', barcode: '0711719950608', platform: 'PS5',
    status: 'done', rating: 5,
    cover: { bg: '#243640', ink: '#E8D9B5', accent: '#B91C1C', art: 'post-apo' },
    addedOn: '5 mars 2026',
    synopsis: "Cinq ans après le premier épisode, Ellie se lance dans un cycle de violence dont elle peine à mesurer le coût. Récit dense et brutal.",
    tags: ['Action', 'Aventure'],
  },
  {
    id: 'hollow-knight', type: 'Jeu Vidéo', title: 'Hollow Knight', author: 'Team Cherry',
    year: 2017, duration: '~40h', publisher: 'Team Cherry', barcode: '5060760885502', platform: 'Switch',
    status: 'todo', rating: null,
    cover: { bg: '#0F1E2E', ink: '#9DB5C9', accent: '#5FB3F0', art: 'pixel' },
    addedOn: '15 avril 2026',
    synopsis: "Metroidvania d'exploration sous le royaume insecte d'Hallownest. Direction artistique magnifique, gameplay précis et exigeant.",
    tags: ['Metroidvania', 'Indé'],
  },
];

const WISHLIST = [
  { id: 'w1', type: 'Livre', title: "L'Art de la Guerre", author: 'Sun Tzu', price: '14,99 €',
    cover: { bg: '#1A2B48', ink: '#E8D9B5', accent: '#D4A437', art: 'classic' } },
  { id: 'w2', type: 'Musique', title: 'Random Access Memories — Vinyle', author: 'Daft Punk', price: '34,50 €',
    cover: { bg: '#0B1633', ink: '#D4A437', accent: '#5FB3F0', art: 'wave' } },
  { id: 'w3', type: 'Film', title: '2001 : L\u2019Odyssée de l\u2019espace', author: 'Stanley Kubrick', price: '14,99 €',
    cover: { bg: '#0A0A14', ink: '#E63946', accent: '#FFFFFF', art: 'space' } },
  { id: 'w4', type: 'Livre', title: 'Notion Design Atlas', author: 'Collectif', price: '22,00 €',
    cover: { bg: '#C9A35F', ink: '#1A1410', accent: '#3D1F0F', art: 'minimal' } },
  { id: 'w5', type: 'BD', title: 'Pluto Vol. 1', author: 'Naoki Urasawa', price: '8,95 €',
    cover: { bg: '#1A2540', ink: '#D4A437', accent: '#5FB3F0', art: 'robot' } },
  { id: 'w6', type: 'Jeu Vidéo', title: 'Final Fantasy XVI', author: 'Square Enix', price: '69,99 €',
    cover: { bg: '#3D1F4A', ink: '#E8C547', accent: '#B91C1C', art: 'fantasy' } },
];

const MEMBERS = [
  { id: 'me', name: 'Ludo', email: 'ludo@library.com', role: 'Propriétaire', initial: 'L', color: '#1A2B48' },
  { id: 'marie', name: 'Marie', email: 'marie.design@studio.fr', role: 'Éditeur', initial: 'M', color: '#C84B31' },
  { id: 'thomas', name: 'Thomas', email: 'thomas.v@archive.org', role: 'Lecteur', initial: 'T', color: '#3D5A4C' },
];

const CATEGORIES = [
  { id: 'all',    label: 'Tout' },
  { id: 'Livre',  label: 'Livres' },
  { id: 'Film',   label: 'Films' },
  { id: 'Musique', label: 'Musique' },
  { id: 'Jeu Vidéo', label: 'Jeux Vidéo' },
  { id: 'BD',     label: 'BD' },
];

// ─── Stylized cover art ───────────────────────────────────
// Renders a poster-like illustration per `art` recipe.
function CoverArt({ type, art, bg, ink, accent, w }) {
  const r = w / 100;
  const px = (v) => v * r;

  if (art === 'samurai' || art === 'samurai-film') {
    return (
      <svg viewBox="0 0 100 150" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <defs>
          <radialGradient id={`g-${art}-${ink.replace('#','')}`} cx="50%" cy="40%" r="65%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.55"/>
            <stop offset="100%" stopColor={bg} stopOpacity="0"/>
          </radialGradient>
        </defs>
        <rect width="100" height="150" fill={bg}/>
        <rect width="100" height="150" fill={`url(#g-${art}-${ink.replace('#','')})`}/>
        {/* katana */}
        <line x1="15" y1="135" x2="85" y2="55" stroke={ink} strokeWidth="1.3" opacity="0.85"/>
        <line x1="15" y1="135" x2="22" y2="128" stroke={accent} strokeWidth="3" strokeLinecap="round"/>
        {/* moon */}
        <circle cx="74" cy="36" r="13" fill={ink} opacity="0.18"/>
        <circle cx="74" cy="36" r="9" fill={ink} opacity="0.12"/>
        {/* silhouette */}
        <path d="M50 90 Q47 78 50 70 Q53 78 50 90 Z" fill={ink} opacity="0.6"/>
      </svg>
    );
  }
  if (art === 'space') {
    return (
      <svg viewBox="0 0 100 150" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <defs>
          <radialGradient id={`gs-${ink.replace('#','')}`} cx="68%" cy="42%" r="40%">
            <stop offset="0%" stopColor={accent}/>
            <stop offset="40%" stopColor={accent} stopOpacity="0.4"/>
            <stop offset="100%" stopColor={bg} stopOpacity="0"/>
          </radialGradient>
        </defs>
        <rect width="100" height="150" fill={bg}/>
        <rect width="100" height="150" fill={`url(#gs-${ink.replace('#','')})`}/>
        <circle cx="68" cy="58" r="2" fill="#fff"/>
        {[[20,30],[35,80],[80,110],[55,125],[15,100],[88,40],[10,50]].map(([x,y],i)=>(
          <circle key={i} cx={x} cy={y} r="0.6" fill="#fff" opacity="0.7"/>
        ))}
        <line x1="65" y1="58" x2="92" y2="78" stroke="#fff" strokeWidth="0.4" opacity="0.6"/>
      </svg>
    );
  }
  if (art === 'wave') {
    return (
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <rect width="100" height="100" fill={bg}/>
        {[0,1,2,3,4,5,6].map(i => (
          <path key={i} d={`M0 ${30+i*8} Q25 ${20+i*8} 50 ${30+i*8} T100 ${30+i*8}`}
            stroke={ink} strokeWidth="1.4" fill="none" opacity={0.35 + i*0.07}/>
        ))}
        <circle cx="50" cy="50" r="9" fill="none" stroke={ink} strokeWidth="1.2" opacity="0.85"/>
        <circle cx="50" cy="50" r="2.5" fill={ink}/>
      </svg>
    );
  }
  if (art === 'currents') {
    return (
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <rect width="100" height="100" fill={bg}/>
        {[...Array(20)].map((_,i)=>{
          const off = i*5 - 50;
          return <path key={i} d={`M${50+off} 100 Q${52+off} 60 ${50+off+Math.sin(i)*8} 30 T${50+off-5} 0`}
            stroke={accent} strokeWidth="0.7" fill="none" opacity={0.4+i*0.02}/>;
        })}
        <circle cx="50" cy="40" r="14" fill="none" stroke={ink} strokeWidth="1.5"/>
      </svg>
    );
  }
  if (art === 'minimal' || art === 'teapot') {
    return (
      <svg viewBox="0 0 100 150" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <rect width="100" height="150" fill={bg}/>
        {art === 'teapot' && (
          <g opacity="0.85">
            <ellipse cx="50" cy="78" rx="22" ry="14" fill="none" stroke={accent} strokeWidth="1.4"/>
            <path d="M28 78 Q22 70 30 65" fill="none" stroke={accent} strokeWidth="1.4"/>
            <path d="M70 78 Q80 70 80 76" fill="none" stroke={accent} strokeWidth="1.4"/>
            <rect x="46" y="58" width="8" height="3" fill={accent}/>
          </g>
        )}
        <line x1="20" y1="125" x2="80" y2="125" stroke={ink} strokeWidth="0.5" opacity="0.4"/>
      </svg>
    );
  }
  if (art === 'desert') {
    return (
      <svg viewBox="0 0 100 150" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <rect width="100" height="150" fill={bg}/>
        <circle cx="50" cy="55" r="20" fill={accent} opacity="0.5"/>
        <path d="M0 110 Q30 85 50 95 T100 100 L100 150 L0 150 Z" fill={accent} opacity="0.4"/>
        <path d="M0 125 Q40 110 60 118 T100 122 L100 150 L0 150 Z" fill={accent} opacity="0.6"/>
      </svg>
    );
  }
  if (art === 'eye') {
    return (
      <svg viewBox="0 0 100 150" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <rect width="100" height="150" fill={bg}/>
        <ellipse cx="50" cy="75" rx="35" ry="15" fill="none" stroke={ink} strokeWidth="1"/>
        <circle cx="50" cy="75" r="11" fill={accent}/>
        <circle cx="50" cy="75" r="4" fill={bg}/>
      </svg>
    );
  }
  if (art === 'warrior' || art === 'portrait') {
    return (
      <svg viewBox="0 0 100 150" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <rect width="100" height="150" fill={bg}/>
        <ellipse cx="50" cy="55" rx="14" ry="17" fill={ink} opacity="0.85"/>
        <path d="M30 95 Q50 70 70 95 L70 150 L30 150 Z" fill={ink} opacity="0.7"/>
        <line x1="50" y1="40" x2="50" y2="20" stroke={accent} strokeWidth="2"/>
      </svg>
    );
  }
  if (art === 'mountain') {
    return (
      <svg viewBox="0 0 100 150" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <rect width="100" height="150" fill={bg}/>
        <circle cx="78" cy="32" r="9" fill={accent} opacity="0.5"/>
        <path d="M0 110 L25 75 L45 100 L60 70 L100 115 L100 150 L0 150 Z" fill={ink} opacity="0.85"/>
        <path d="M25 75 L32 85 L40 80 L25 75 Z" fill="#FFF" opacity="0.7"/>
        <path d="M60 70 L67 82 L75 76 L60 70 Z" fill="#FFF" opacity="0.7"/>
      </svg>
    );
  }
  if (art === 'ghibli') {
    return (
      <svg viewBox="0 0 100 150" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <rect width="100" height="150" fill={bg}/>
        <circle cx="70" cy="38" r="14" fill={accent} opacity="0.7"/>
        <path d="M0 90 Q40 70 100 85 L100 150 L0 150 Z" fill={ink} opacity="0.3"/>
        <path d="M0 115 Q50 100 100 110 L100 150 L0 150 Z" fill={ink} opacity="0.5"/>
        <circle cx="35" cy="100" r="3" fill={accent}/>
      </svg>
    );
  }
  if (art === 'noir') {
    return (
      <svg viewBox="0 0 100 150" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <rect width="100" height="150" fill={bg}/>
        <rect x="0" y="0" width="100" height="60" fill={accent} opacity="0.18"/>
        <path d="M40 70 L40 130 L60 130 L60 70 Z" fill={ink} opacity="0.6"/>
        <circle cx="50" cy="55" r="6" fill={ink}/>
      </svg>
    );
  }
  if (art === 'fantasy') {
    return (
      <svg viewBox="0 0 100 150" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <rect width="100" height="150" fill={bg}/>
        <circle cx="50" cy="50" r="20" fill={accent} opacity="0.55"/>
        <path d="M50 30 L60 45 L75 50 L60 55 L50 70 L40 55 L25 50 L40 45 Z" fill={accent} opacity="0.9"/>
        <line x1="50" y1="80" x2="50" y2="135" stroke={ink} strokeWidth="2"/>
      </svg>
    );
  }
  if (art === 'post-apo') {
    return (
      <svg viewBox="0 0 100 150" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <rect width="100" height="150" fill={bg}/>
        <rect x="10" y="60" width="6" height="60" fill={ink} opacity="0.6"/>
        <rect x="22" y="40" width="6" height="80" fill={ink} opacity="0.7"/>
        <rect x="34" y="55" width="6" height="65" fill={ink} opacity="0.6"/>
        <rect x="64" y="35" width="6" height="85" fill={ink} opacity="0.7"/>
        <rect x="76" y="50" width="6" height="70" fill={ink} opacity="0.6"/>
        <circle cx="50" cy="40" r="6" fill={accent} opacity="0.7"/>
      </svg>
    );
  }
  if (art === 'pixel') {
    return (
      <svg viewBox="0 0 100 150" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <rect width="100" height="150" fill={bg}/>
        <ellipse cx="50" cy="55" rx="14" ry="14" fill={ink} opacity="0.85"/>
        <circle cx="44" cy="52" r="2.5" fill={accent}/>
        <circle cx="56" cy="52" r="2.5" fill={accent}/>
        <path d="M50 70 L40 90 L50 85 L60 90 Z" fill={ink} opacity="0.7"/>
      </svg>
    );
  }
  if (art === 'robot') {
    return (
      <svg viewBox="0 0 100 150" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <rect width="100" height="150" fill={bg}/>
        <rect x="35" y="50" width="30" height="35" rx="4" fill={ink} opacity="0.85"/>
        <circle cx="44" cy="63" r="3" fill={accent}/>
        <circle cx="56" cy="63" r="3" fill={accent}/>
        <line x1="50" y1="35" x2="50" y2="50" stroke={ink} strokeWidth="2"/>
        <circle cx="50" cy="35" r="3" fill={accent}/>
      </svg>
    );
  }
  // 'classic' fallback — typographic
  return (
    <div style={{ position: 'absolute', inset: 0, background: bg }} />
  );
}

function Cover({ item, w = 100, h = 150, lift = false }) {
  const r = w / 100;
  const px = (v) => v * r;
  const { bg, ink, accent = ink, art = 'classic' } = item.cover;
  const isMusic = item.type === 'Musique';
  const realH = isMusic ? w : h; // music = square album art

  const shadow = lift
    ? '0 14px 30px rgba(15,20,40,0.22), 0 2px 8px rgba(0,0,0,0.10)'
    : '0 4px 10px rgba(15,20,40,0.16), 0 1px 2px rgba(0,0,0,0.06)';

  const titleSize = item.title.length > 22 ? px(8.5) : item.title.length > 14 ? px(10.5) : px(13);

  return (
    <div style={{ width: w, height: realH, position: 'relative', flexShrink: 0 }}>
      <div style={{ position: 'absolute', inset: 0, borderRadius: px(3), overflow: 'hidden', boxShadow: shadow }}>
        <CoverArt type={item.type} art={art} bg={bg} ink={ink} accent={accent} w={w} />
        {/* darkening overlay for text legibility on art */}
        <div style={{ position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%)',
          pointerEvents: 'none' }} />
        {/* Title block at bottom */}
        <div style={{ position: 'absolute', left: px(8), right: px(8), bottom: px(7), color: ink }}>
          <div style={{
            fontFamily: 'Newsreader, Georgia, serif', fontWeight: 700,
            fontSize: titleSize, lineHeight: 1.05, letterSpacing: -0.2,
            textShadow: '0 1px 2px rgba(0,0,0,0.4)',
            textWrap: 'balance',
          }}>{item.title}</div>
          <div style={{
            fontFamily: 'system-ui, sans-serif', fontWeight: 500,
            fontSize: px(6.5), opacity: 0.92, marginTop: px(2),
            textShadow: '0 1px 2px rgba(0,0,0,0.4)',
          }}>{item.author}</div>
        </div>
        {/* subtle vignette */}
        <div style={{ position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 25% 18%, rgba(255,255,255,0.1), transparent 65%)',
          pointerEvents: 'none' }} />
      </div>
      {/* page edge for books/BD */}
      {(item.type === 'Livre' || item.type === 'BD') && (
        <div style={{ position: 'absolute', top: 0, right: -px(1.5), bottom: 0, width: px(2),
          background: 'linear-gradient(180deg, #f6efdf 0%, #d9c89c 100%)', borderRadius: '0 1px 1px 0' }} />
      )}
    </div>
  );
}

Object.assign(window, {
  ITEMS, WISHLIST, MEMBERS, CATEGORIES, STATUS_BY_TYPE, TYPE_PLURAL, Cover, CoverArt,
});
