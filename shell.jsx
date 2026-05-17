// shell.jsx — Chrome components (top bar, bottom nav, FAB, badges, etc.)

// ─── Icons ────────────────────────────────────────────────
const Icon = {
  Menu: ({ s = 22, c = 'currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round">
      <line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="13" x2="20" y2="13"/><line x1="4" y1="19" x2="14" y2="19"/>
    </svg>
  ),
  Back: ({ s = 22, c = 'currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 6l-6 6 6 6"/>
    </svg>
  ),
  Search: ({ s = 18, c = 'currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7"/><line x1="20" y1="20" x2="16.5" y2="16.5"/>
    </svg>
  ),
  Close: ({ s = 22, c = 'currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.2" strokeLinecap="round">
      <line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/>
    </svg>
  ),
  Plus: ({ s = 22, c = 'currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round">
      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  ),
  Collection: ({ s = 22, c = 'currentColor', fill = false }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={fill ? c : 'none'} stroke={c} strokeWidth="1.8" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="2"/>
      <line x1="3" y1="9" x2="21" y2="9" strokeWidth="1.6"/>
      <line x1="9" y1="14" x2="15" y2="14" strokeWidth="1.6" stroke={fill ? '#fff' : c}/>
    </svg>
  ),
  Heart: ({ s = 22, c = 'currentColor', fill = false }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={fill ? c : 'none'} stroke={c} strokeWidth="1.8" strokeLinejoin="round">
      <path d="M12 21s-7-4.5-7-10.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 7 4.5C19 16.5 12 21 12 21z"/>
    </svg>
  ),
  PlusTab: ({ s = 22, c = 'currentColor', fill = false }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={fill ? c : 'none'} stroke={c} strokeWidth="1.8">
      <circle cx="12" cy="12" r="9"/>
      <line x1="12" y1="8" x2="12" y2="16" strokeLinecap="round" stroke={fill ? '#fff' : c} strokeWidth="2"/>
      <line x1="8" y1="12" x2="16" y2="12" strokeLinecap="round" stroke={fill ? '#fff' : c} strokeWidth="2"/>
    </svg>
  ),
  Stats: ({ s = 22, c = 'currentColor', fill = false }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={fill ? c : 'none'} stroke={c} strokeWidth="1.8" strokeLinecap="round">
      <line x1="5" y1="20" x2="5" y2="13"/>
      <line x1="12" y1="20" x2="12" y2="8"/>
      <line x1="19" y1="20" x2="19" y2="15"/>
    </svg>
  ),
  Members: ({ s = 22, c = 'currentColor', fill = false }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={fill ? c : 'none'} stroke={c} strokeWidth="1.7">
      <circle cx="9" cy="9" r="3.2"/>
      <path d="M3.5 19c.7-3 3-4.5 5.5-4.5s4.8 1.5 5.5 4.5"/>
      <circle cx="16.5" cy="8" r="2.5"/>
      <path d="M14 14.5c2-1 5.5-.5 6.5 3.5"/>
    </svg>
  ),
  Star: ({ s = 22, c = '#D4A437', filled = true }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={filled ? c : 'none'} stroke={c} strokeWidth="1.6" strokeLinejoin="round">
      <path d="M12 2.5l2.9 6.1 6.7.7-5 4.6 1.4 6.6L12 17.3 6 20.5l1.4-6.6-5-4.6 6.7-.7L12 2.5z"/>
    </svg>
  ),
  Play: ({ s = 26, c = '#fff' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
      <path d="M7 4l13 8-13 8V4z"/>
    </svg>
  ),
  Flash: ({ s = 22, c = 'currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinejoin="round">
      <path d="M13 2L5 14h6l-1 8 8-12h-6l1-8z"/>
    </svg>
  ),
  Chevron: ({ s = 18, c = 'currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 6l6 6-6 6"/>
    </svg>
  ),
  ChevronDown: ({ s = 16, c = 'currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6"/>
    </svg>
  ),
  Bookmark: ({ s = 18, c = 'currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinejoin="round">
      <path d="M6 3h12v18l-6-4-6 4V3z"/>
    </svg>
  ),
  Cloud: ({ s = 20, c = 'currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinejoin="round">
      <path d="M7 18a5 5 0 1 1 1.5-9.8A6 6 0 0 1 20 12a4 4 0 0 1 0 6H7z"/>
    </svg>
  ),
  Refresh: ({ s = 20, c = 'currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 4v6h6"/><path d="M21 20v-6h-6"/>
      <path d="M5 14a8 8 0 0 0 14 4M19 10A8 8 0 0 0 5 6"/>
    </svg>
  ),
  Clock: ({ s = 20, c = 'currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>
    </svg>
  ),
  Wifi: ({ s = 20, c = 'currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 8.5a16 16 0 0 1 20 0"/><path d="M5 12.5a11 11 0 0 1 14 0"/><path d="M8.5 16.5a6 6 0 0 1 7 0"/><circle cx="12" cy="20" r="1" fill={c}/>
    </svg>
  ),
  Shield: ({ s = 20, c = 'currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinejoin="round">
      <path d="M12 2.5L4 5.5v6c0 5 3.5 9 8 10.5 4.5-1.5 8-5.5 8-10.5v-6L12 2.5z"/>
    </svg>
  ),
  CheckCircle: ({ s = 22, c = 'currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/><path d="M8 12.5l3 3 5-6"/>
    </svg>
  ),
  Film: ({ s = 20, c = 'currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="1.5"/>
      <line x1="7" y1="4" x2="7" y2="20"/><line x1="17" y1="4" x2="17" y2="20"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
    </svg>
  ),
  Music: ({ s = 20, c = 'currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7" strokeLinejoin="round">
      <circle cx="7" cy="18" r="2.5"/><circle cx="17" cy="16" r="2.5"/>
      <path d="M9.5 18V6l10-2v12"/>
    </svg>
  ),
  Book: ({ s = 20, c = 'currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7" strokeLinejoin="round">
      <path d="M4 4h6a3 3 0 0 1 3 3v14a2 2 0 0 0-2-2H4V4z"/>
      <path d="M20 4h-6a3 3 0 0 0-3 3v14a2 2 0 0 1 2-2h7V4z"/>
    </svg>
  ),
  Gamepad: ({ s = 20, c = 'currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7" strokeLinejoin="round">
      <path d="M6 7h12a4 4 0 0 1 4 4v3a3 3 0 0 1-5.5 1.7L15 14h-6l-1.5 1.7A3 3 0 0 1 2 14v-3a4 4 0 0 1 4-4z"/>
      <line x1="7" y1="11" x2="9" y2="11" strokeWidth="1.9"/><line x1="8" y1="10" x2="8" y2="12" strokeWidth="1.9"/>
      <circle cx="16" cy="11" r="0.6" fill={c}/><circle cx="18" cy="11" r="0.6" fill={c}/>
    </svg>
  ),
  Filter: ({ s = 18, c = 'currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6"/><line x1="6" y1="12" x2="18" y2="12"/><line x1="10" y1="18" x2="14" y2="18"/>
    </svg>
  ),
  UserPlus: ({ s = 20, c = 'currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3.5"/><path d="M3 19c.5-3 3-5 6-5s5.5 2 6 5"/>
      <line x1="18" y1="6" x2="18" y2="12"/><line x1="15" y1="9" x2="21" y2="9"/>
    </svg>
  ),
  Share: ({ s = 20, c = 'currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
      <line x1="8.5" y1="10.5" x2="15.5" y2="6.5"/><line x1="8.5" y1="13.5" x2="15.5" y2="17.5"/>
    </svg>
  ),
  Settings: ({ s = 20, c = 'currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>
    </svg>
  ),
  Logout: ({ s = 20, c = 'currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4"/><path d="M16 17l5-5-5-5M21 12H9"/>
    </svg>
  ),
};

// ─── Top bar (hamburger + title + avatar) ────────────────
function TopBar({ onMenu, onBack, showSearch = false, onSearch, badge, profile }) {
  return (
    <div style={{
      padding: '8px 16px 0', display: 'flex', alignItems: 'center', gap: 12,
      paddingTop: 12,
    }}>
      <button onClick={onBack || onMenu} style={btnReset}>
        {onBack ? <Icon.Back c="#1A2B48"/> : <Icon.Menu c="#1A2B48"/>}
      </button>
      <div style={{
        flex: 1, fontFamily: 'Newsreader, Georgia, serif',
        fontSize: 19, fontWeight: 700, color: '#1A2B48',
        letterSpacing: -0.3,
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        Collector's Library
        {badge && (
          <span style={{
            fontFamily: 'system-ui, sans-serif', fontSize: 10, fontWeight: 700,
            background: '#F0E5C2', color: '#1A2B48', padding: '3px 7px',
            borderRadius: 999, letterSpacing: 0.5, textTransform: 'uppercase',
          }}>{badge}</span>
        )}
      </div>
      {showSearch && (
        <button onClick={onSearch} style={btnReset}>
          <Icon.Search s={20} c="#1A2B48"/>
        </button>
      )}
      <Avatar profile={profile} size={32}/>
    </div>
  );
}

function Avatar({ profile, size = 32 }) {
  const p = profile || { initial: 'L', color: '#1A2B48' };
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: `linear-gradient(135deg, ${p.color}, ${shade(p.color, -20)})`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#F0E5C2', fontWeight: 600, fontSize: size * 0.45,
      fontFamily: 'Newsreader, Georgia, serif',
      flexShrink: 0,
      boxShadow: '0 1px 2px rgba(0,0,0,0.15), inset 0 0 0 1px rgba(255,255,255,0.1)',
    }}>{p.initial}</div>
  );
}

function shade(hex, p) {
  const c = parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.min(255, ((c>>16)&255) + p));
  const g = Math.max(0, Math.min(255, ((c>>8)&255) + p));
  const b = Math.max(0, Math.min(255, (c&255) + p));
  return '#' + [r,g,b].map(x=>x.toString(16).padStart(2,'0')).join('');
}

// ─── Search input ────────────────────────────────────────
function SearchInput({ placeholder, value, onChange, onFocus }) {
  return (
    <div style={{ padding: '12px 16px 0' }}>
      <div style={{
        background: '#fff', borderRadius: 14, height: 44,
        display: 'flex', alignItems: 'center', padding: '0 14px', gap: 10,
        boxShadow: '0 1px 2px rgba(15,20,40,0.04), 0 0 0 1px rgba(15,20,40,0.05)',
      }}>
        <Icon.Search c="#9CA3AF"/>
        <input
          value={value || ''} onChange={onChange} onFocus={onFocus}
          placeholder={placeholder}
          style={{
            flex: 1, border: 0, outline: 'none', background: 'transparent',
            fontFamily: 'system-ui, sans-serif', fontSize: 15, color: '#1A2B48',
          }}/>
      </div>
    </div>
  );
}

// ─── Type tabs (pills) ────────────────────────────────────
function TabPills({ tabs, active, onPick }) {
  return (
    <div style={{
      display: 'flex', gap: 8, padding: '14px 16px 0',
      overflowX: 'auto', scrollbarWidth: 'none',
    }}>
      {tabs.map(t => {
        const on = t.id === active;
        return (
          <button key={t.id} onClick={() => onPick(t.id)} style={{
            ...btnReset, flexShrink: 0,
            padding: '8px 16px', borderRadius: 999,
            background: on ? '#1A2B48' : '#fff',
            color: on ? '#fff' : '#1A2B48',
            fontFamily: 'system-ui, sans-serif', fontSize: 14, fontWeight: 600,
            boxShadow: on ? '0 2px 6px rgba(26,43,72,0.25)' : '0 1px 2px rgba(15,20,40,0.04), 0 0 0 1px rgba(15,20,40,0.05)',
            transition: 'all 0.15s',
          }}>{t.label}</button>
        );
      })}
    </div>
  );
}

// ─── Type badge (small chip on item cards) ───────────────
function TypeBadge({ type, variant = 'default' }) {
  const TYPE_COLOR = {
    'Livre':    { bg: '#F0E5C2', fg: '#7D5A1F' },
    'BD':       { bg: '#E8D9B5', fg: '#7D5A1F' },
    'Film':     { bg: '#DCE3F2', fg: '#1A2B48' },
    'Musique':  { bg: '#EFE0C8', fg: '#7D5A1F' },
    'Jeu Vidéo': { bg: '#F5D6D0', fg: '#8B2E1A' },
  };
  const label = type === 'Jeu Vidéo' ? 'JEUX VIDÉO' : (type === 'Livre' ? 'LIVRE' : type === 'Musique' ? 'MUSIQUE' : type === 'Film' ? 'FILM' : type).toUpperCase();
  const c = TYPE_COLOR[type] || { bg: '#F0E5C2', fg: '#1A2B48' };
  return (
    <span style={{
      display: 'inline-block', padding: '3px 9px', borderRadius: 999,
      background: c.bg, color: c.fg,
      fontFamily: 'system-ui, sans-serif', fontSize: 10, fontWeight: 700,
      letterSpacing: 0.6,
    }}>{label}</span>
  );
}

// ─── Rating stars row ────────────────────────────────────
function StarsRow({ rating, size = 18, gap = 3 }) {
  return (
    <div style={{ display: 'flex', gap }}>
      {[1,2,3,4,5].map(i => (
        <Icon.Star key={i} s={size} c={i <= (rating || 0) ? '#E8B935' : '#E5E7EB'} filled={i <= (rating || 0)}/>
      ))}
    </div>
  );
}

// ─── Bottom navigation ───────────────────────────────────
function BottomNav({ tabs, active, onPick }) {
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      minHeight: 64,
      background: '#fff', borderTop: '1px solid rgba(15,20,40,0.06)',
      paddingBottom: 'max(8px, env(safe-area-inset-bottom, 0px))',
      paddingTop: 6, paddingLeft: 6, paddingRight: 6,
      display: 'flex', alignItems: 'center', justifyContent: 'space-around',
      zIndex: 30,
    }}>
      {tabs.map(t => {
        const on = t.id === active;
        const IconComp = t.icon;
        return (
          <button key={t.id} onClick={() => onPick(t.id)} style={{
            ...btnReset, flex: 1, height: 52,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            gap: 3,
            background: on ? '#1A2B48' : 'transparent',
            borderRadius: 14, margin: '0 2px',
            transition: 'background 0.15s',
          }}>
            <IconComp s={22} c={on ? '#fff' : '#9CA3AF'}/>
            <span style={{
              fontFamily: 'system-ui, sans-serif', fontSize: 10.5, fontWeight: 600,
              color: on ? '#fff' : '#9CA3AF', letterSpacing: 0.1,
            }}>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}

// ─── FAB ─────────────────────────────────────────────────
function FAB({ onClick, bottom = 100 }) {
  return (
    <button onClick={onClick} style={{
      ...btnReset, position: 'absolute', right: 16,
      bottom: `calc(${bottom - 22}px + max(22px, env(safe-area-inset-bottom, 0px)))`,
      width: 52, height: 52, borderRadius: '50%',
      background: '#1A2B48', color: '#fff',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 8px 20px rgba(26,43,72,0.4), 0 2px 4px rgba(0,0,0,0.18)',
      zIndex: 25,
    }}>
      <Icon.Plus s={24} c="#fff"/>
    </button>
  );
}

// ─── Toggle switch ───────────────────────────────────────
function Toggle({ on, onChange }) {
  return (
    <button onClick={() => onChange?.(!on)} style={{
      ...btnReset, width: 44, height: 26, borderRadius: 999,
      background: on ? '#1A2B48' : '#D9DEE6', position: 'relative',
      transition: 'background 0.2s',
    }}>
      <span style={{
        position: 'absolute', top: 2, left: on ? 20 : 2,
        width: 22, height: 22, borderRadius: '50%', background: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.18)', transition: 'left 0.2s',
      }}/>
    </button>
  );
}

// ─── Status pill toggle (Lu / Non lu) ────────────────────
function StatusToggle({ status, statusLabels, onChange }) {
  return (
    <div style={{
      display: 'inline-flex', background: '#F1F3F8', borderRadius: 999,
      padding: 3,
    }}>
      {['done', 'todo'].map(s => {
        const on = status === s;
        return (
          <button key={s} onClick={() => onChange?.(s)} style={{
            ...btnReset, padding: '7px 16px', borderRadius: 999,
            background: on ? '#1A2B48' : 'transparent',
            color: on ? '#fff' : '#6B7280',
            fontFamily: 'system-ui, sans-serif', fontSize: 13, fontWeight: 600,
            transition: 'all 0.15s',
          }}>
            {s === 'done' ? statusLabels.done : statusLabels.todo}
          </button>
        );
      })}
    </div>
  );
}

// ─── Section header ──────────────────────────────────────
function SectionLabel({ children, style }) {
  return (
    <div style={{
      fontFamily: 'system-ui, sans-serif', fontSize: 11, fontWeight: 700,
      color: '#9CA3AF', letterSpacing: 0.8, textTransform: 'uppercase',
      ...style,
    }}>{children}</div>
  );
}

// ─── Card wrapper ─────────────────────────────────────────
function Card({ children, style, onClick }) {
  return (
    <div onClick={onClick} style={{
      background: '#fff', borderRadius: 16,
      boxShadow: '0 1px 2px rgba(15,20,40,0.04), 0 0 0 1px rgba(15,20,40,0.05)',
      ...style,
    }}>{children}</div>
  );
}

// Reset helper
const btnReset = {
  border: 0, background: 'transparent', padding: 0, cursor: 'pointer',
  font: 'inherit', color: 'inherit', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
};

Object.assign(window, {
  Icon, TopBar, Avatar, SearchInput, TabPills, TypeBadge, StarsRow,
  BottomNav, FAB, Toggle, StatusToggle, SectionLabel, Card, btnReset, shade,
});
