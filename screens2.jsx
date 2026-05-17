// screens2.jsx — Wishlist, Stats, Sync (Drive), Members, SideMenu

// ============================================================
// WISHLIST
// ============================================================
function WishlistScreen({ items, onMenu, profile, onOpen }) {
  const [search, setSearch] = React.useState('');
  const [cat, setCat] = React.useState('all');
  const tabs = [
    { id: 'all', label: 'Tous' },
    { id: 'Livre', label: 'Livres' },
    { id: 'Film', label: 'Films' },
    { id: 'Musique', label: 'Musique' },
    { id: 'BD', label: 'BD' },
    { id: 'Jeu Vidéo', label: 'Jeux Vidéo' },
  ];
  const filtered = items.filter(it => {
    if (cat !== 'all' && it.type !== cat) return false;
    if (search && !`${it.title} ${it.author}`.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });
  return (
    <div style={{ paddingBottom: 100 }}>
      <TopBar onMenu={onMenu} profile={profile}/>
      <div style={{
        padding: '12px 16px 0',
        fontFamily: 'Newsreader, Georgia, serif', fontSize: 26, fontWeight: 700, color: '#1A2B48',
        letterSpacing: -0.4,
      }}>Ma Wishlist</div>
      <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Rechercher un article souhaité..."/>
      <TabPills tabs={tabs} active={cat} onPick={setCat}/>
      <div style={{
        padding: '18px 16px 0', display: 'grid',
        gridTemplateColumns: '1fr 1fr', gap: 14,
      }}>
        {filtered.map(item => (
          <div key={item.id} style={{ cursor: 'pointer' }}>
            <div style={{ width: '100%', aspectRatio: '2 / 3', borderRadius: 12, overflow: 'hidden', position: 'relative' }}>
              <Cover item={item} w={172} h={258}/>
              <button style={{
                ...btnReset, position: 'absolute', top: 8, right: 8,
                width: 28, height: 28, borderRadius: '50%',
                background: 'rgba(0,0,0,0.55)', color: '#fff',
                backdropFilter: 'blur(6px)',
              }}>
                <Icon.Bookmark s={14} c="#fff"/>
              </button>
            </div>
            <div style={{ marginTop: 10 }}>
              <div><TypeBadge type={item.type}/></div>
              <div style={{
                fontFamily: 'system-ui, sans-serif', fontSize: 14, fontWeight: 700,
                color: '#1A2B48', marginTop: 4,
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              }}>{item.title}</div>
              <div style={{
                fontFamily: 'system-ui, sans-serif', fontSize: 12, color: '#6B7280',
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              }}>{item.author}</div>
              <div style={{
                fontFamily: 'system-ui, sans-serif', fontSize: 13, color: '#1A2B48', fontWeight: 700,
                marginTop: 4,
              }}>{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// STATS
// ============================================================
function StatsScreen({ items, onMenu, profile }) {
  // counts per type
  const counts = {};
  items.forEach(it => { counts[it.type] = (counts[it.type] || 0) + 1; });
  const total = items.length;

  const COLORS = {
    'Livre': '#1A2B48',
    'Film':  '#3D5A4C',
    'Musique': '#A86F2D',
    'Jeu Vidéo': '#C84B31',
    'BD': '#7D5A1F',
  };
  // build donut segments
  const segs = Object.entries(counts).map(([type, count]) => ({
    type, count, ratio: count / total, color: COLORS[type] || '#9CA3AF',
  }));

  // Latest 3 additions
  const latest = [...items].slice(-3).reverse();

  return (
    <div style={{ paddingBottom: 100 }}>
      <TopBar onMenu={onMenu} profile={profile}/>

      {/* Total card (navy) */}
      <div style={{ padding: '12px 16px 0' }}>
        <div style={{
          background: 'linear-gradient(135deg, #1A2B48, #2E4267)', borderRadius: 18,
          padding: '20px 18px 22px', textAlign: 'center',
          boxShadow: '0 6px 20px rgba(26,43,72,0.25)',
        }}>
          <div style={{
            fontFamily: 'system-ui, sans-serif', fontSize: 11, fontWeight: 700,
            color: 'rgba(240,229,194,0.75)', letterSpacing: 1.5, textTransform: 'uppercase',
          }}>Total articles</div>
          <div style={{
            fontFamily: 'Newsreader, Georgia, serif', fontWeight: 700, fontSize: 56,
            color: '#fff', marginTop: 2, letterSpacing: -1,
          }}>1,248</div>
          <div style={{
            display: 'inline-block', marginTop: 4,
            padding: '3px 12px', borderRadius: 999,
            background: 'rgba(240,229,194,0.18)',
            fontFamily: 'system-ui, sans-serif', fontSize: 11.5, color: '#F0E5C2', fontWeight: 600,
          }}>+12 cette semaine</div>
        </div>
      </div>

      {/* Répartition donut */}
      <div style={{ padding: '14px 16px 0' }}>
        <Card style={{ padding: 18 }}>
          <div style={{
            fontFamily: 'Newsreader, Georgia, serif', fontSize: 18, fontWeight: 700, color: '#1A2B48',
          }}>Répartition</div>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginTop: 18,
          }}>
            <Donut segs={segs} size={170}/>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 18px', marginTop: 20 }}>
            {segs.map(s => (
              <div key={s.type} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{
                  width: 9, height: 9, borderRadius: 99, background: s.color, flexShrink: 0,
                }}/>
                <div>
                  <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 13, fontWeight: 600, color: '#1A2B48' }}>
                    {TYPE_PLURAL[s.type]}
                  </div>
                  <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 11, color: '#9CA3AF' }}>
                    {s.count} {s.count > 1 ? 'articles' : 'article'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Derniers ajouts */}
      <div style={{ padding: '14px 16px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4px 10px' }}>
          <div style={{
            fontFamily: 'Newsreader, Georgia, serif', fontSize: 18, fontWeight: 700, color: '#1A2B48',
          }}>Derniers ajouts</div>
          <span style={{
            fontFamily: 'system-ui, sans-serif', fontSize: 13, color: '#1A2B48', fontWeight: 500,
          }}>Tout voir</span>
        </div>
        <Card style={{ padding: 8 }}>
          {latest.map((it, i) => (
            <div key={it.id} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '10px',
              borderBottom: i < latest.length - 1 ? '1px solid #F1F3F8' : 'none',
            }}>
              <div style={{ width: 44, height: 60, borderRadius: 6, overflow: 'hidden' }}>
                <Cover item={it} w={44} h={60}/>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontFamily: 'system-ui, sans-serif', fontSize: 14, fontWeight: 600, color: '#1A2B48',
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                }}>{it.title}</div>
                <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 12, color: '#6B7280', marginTop: 2 }}>
                  {it.author} · {it.year}
                </div>
                <div style={{ marginTop: 4 }}><TypeBadge type={it.type}/></div>
              </div>
              <Icon.Chevron c="#9CA3AF"/>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}

// SVG donut chart
function Donut({ segs, size = 170 }) {
  const r = size / 2;
  const stroke = 22;
  const innerR = r - stroke / 2;
  const C = 2 * Math.PI * innerR;
  let acc = 0;
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={r} cy={r} r={innerR} fill="none" stroke="#F1F3F8" strokeWidth={stroke}/>
        {segs.map((s, i) => {
          const len = s.ratio * C;
          const off = -acc;
          acc += len;
          return (
            <circle key={i} cx={r} cy={r} r={innerR} fill="none"
              stroke={s.color} strokeWidth={stroke}
              strokeDasharray={`${len} ${C}`} strokeDashoffset={off}
              strokeLinecap="butt"/>
          );
        })}
      </svg>
      <div style={{
        position: 'absolute', inset: 0, display: 'flex',
        flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          fontFamily: 'Newsreader, Georgia, serif', fontSize: 32, fontWeight: 700, color: '#1A2B48',
        }}>{segs.length}</div>
        <div style={{
          fontFamily: 'system-ui, sans-serif', fontSize: 11, color: '#9CA3AF',
          letterSpacing: 0.5, textTransform: 'uppercase', fontWeight: 600,
        }}>Médias</div>
      </div>
    </div>
  );
}

// ============================================================
// SYNC / GOOGLE DRIVE
// ============================================================
function SyncScreen({ onBack, profile }) {
  const [driveOn, setDriveOn] = React.useState(true);
  const [autoSync, setAutoSync] = React.useState(false);
  return (
    <div style={{ paddingBottom: 100 }}>
      <TopBar onBack={onBack} showSearch profile={profile}/>
      <div style={{ padding: '8px 16px 0' }}>
        <div style={{
          fontFamily: 'Newsreader, Georgia, serif', fontSize: 22, fontWeight: 700, color: '#1A2B48',
          letterSpacing: -0.3,
        }}>Synchronisation et sauvegarde</div>
        <div style={{
          fontFamily: 'system-ui, sans-serif', fontSize: 13.5, color: '#6B7280', marginTop: 4, lineHeight: 1.45,
        }}>Gérez la sécurité de votre collection en la synchronisant avec le cloud.</div>
      </div>

      <div style={{ padding: '16px 16px 0' }}>
        <Card style={{ padding: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 38, height: 38, borderRadius: '50%', background: '#F1F3F8',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon.Cloud c="#1A2B48" s={20}/>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 14.5, fontWeight: 700, color: '#1A2B48' }}>
                Compte Google
              </div>
              <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 12.5, color: '#6B7280', marginTop: 1 }}>
                ludo.curator@gmail.com
              </div>
            </div>
            <span style={{
              padding: '4px 10px', borderRadius: 999, background: '#1A2B48', color: '#F0E5C2',
              fontFamily: 'system-ui, sans-serif', fontSize: 11, fontWeight: 600,
            }}>Connecté</span>
          </div>
          <button style={{
            ...btnReset, width: '100%', height: 40, marginTop: 14,
            borderRadius: 12, border: '1px solid #E5E7EB',
            fontFamily: 'system-ui, sans-serif', fontSize: 13.5, fontWeight: 600, color: '#1A2B48',
            gap: 8,
          }}>
            <Icon.Refresh s={16} c="#1A2B48"/>
            Changer de compte
          </button>
        </Card>
      </div>

      <div style={{ padding: '14px 16px 0' }}>
        <SectionLabel style={{ padding: '0 4px 8px' }}>Options de sauvegarde</SectionLabel>
        <Card>
          <Row icon={<Icon.Cloud c="#1A2B48"/>} title="Sauvegarder sur Google Drive"
            subtitle="Protégez vos données sur votre stockage personnel"
            trailing={<Toggle on={driveOn} onChange={setDriveOn}/>}/>
          <Row icon={<Icon.Refresh c="#1A2B48"/>} title="Synchronisation automatique"
            subtitle="Mise à jour en temps réel lors de l'ajout d'objets"
            trailing={<Toggle on={autoSync} onChange={setAutoSync}/>}/>
          <Row icon={<Icon.Clock c="#1A2B48"/>} title="Dernière sauvegarde"
            subtitle="14 mai 2026 · 18:42"
            trailing={<Icon.CheckCircle c="#3D5A4C"/>} last/>
        </Card>
      </div>

      <div style={{ padding: '16px 16px 0' }}>
        <button style={{
          ...btnReset, width: '100%', height: 48, borderRadius: 14,
          background: '#1A2B48', color: '#fff',
          fontFamily: 'system-ui, sans-serif', fontSize: 14.5, fontWeight: 600, gap: 8,
        }}>
          <Icon.Cloud c="#fff" s={18}/>
          Sauvegarder maintenant
        </button>
        <div style={{
          textAlign: 'center', marginTop: 8, fontFamily: 'system-ui, sans-serif',
          fontSize: 12, color: '#9CA3AF',
        }}>Environ 24,5 Mo de données à transférer</div>
      </div>

      <div style={{ padding: '16px 16px 0' }}>
        <Card style={{ padding: 14, marginBottom: 10 }}>
          <div style={{ display: 'flex', gap: 12 }}>
            <Icon.Wifi c="#1A2B48"/>
            <div>
              <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 13.5, fontWeight: 700, color: '#1A2B48' }}>
                Wi-Fi uniquement
              </div>
              <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 12, color: '#6B7280', marginTop: 2, lineHeight: 1.45 }}>
                Activé pour économiser vos données mobiles.
              </div>
            </div>
          </div>
        </Card>
        <Card style={{ padding: 14 }}>
          <div style={{ display: 'flex', gap: 12 }}>
            <Icon.Shield c="#1A2B48"/>
            <div>
              <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 13.5, fontWeight: 700, color: '#1A2B48' }}>
                Chiffrement AES-256
              </div>
              <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 12, color: '#6B7280', marginTop: 2, lineHeight: 1.45 }}>
                Vos données de collection sont sécurisées de bout en bout.
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function Row({ icon, title, subtitle, trailing, last }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px',
      borderBottom: last ? 'none' : '1px solid #F1F3F8',
    }}>
      <div style={{ width: 24, display: 'flex', justifyContent: 'center', color: '#1A2B48' }}>{icon}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 14, fontWeight: 700, color: '#1A2B48' }}>{title}</div>
        {subtitle && (
          <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 12, color: '#6B7280', marginTop: 2, lineHeight: 1.4 }}>
            {subtitle}
          </div>
        )}
      </div>
      {trailing}
    </div>
  );
}

// ============================================================
// MEMBERS & SHARING
// ============================================================
function MembersScreen({ members, onMenu, onBack, profile }) {
  const [shared, setShared] = React.useState(true);
  const [allowAdd, setAllowAdd] = React.useState(true);
  const [allowEdit, setAllowEdit] = React.useState(false);
  return (
    <div style={{ paddingBottom: 100 }}>
      <TopBar onBack={onBack} showSearch profile={profile}/>
      <div style={{ padding: '8px 16px 0' }}>
        <div style={{
          fontFamily: 'Newsreader, Georgia, serif', fontSize: 24, fontWeight: 700, color: '#1A2B48',
          letterSpacing: -0.3,
        }}>Membres & Partage</div>
      </div>

      <div style={{ padding: '14px 16px 0' }}>
        <Card style={{ padding: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 38, height: 38, borderRadius: '50%', background: '#F0E5C2',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon.Share c="#1A2B48" s={18}/>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 14.5, fontWeight: 700, color: '#1A2B48' }}>
                Bibliothèque partagée
              </div>
              <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 12.5, color: '#6B7280', marginTop: 2 }}>
                Rendre cette collection accessible à d'autres membres.
              </div>
            </div>
            <Toggle on={shared} onChange={setShared}/>
          </div>
        </Card>
      </div>

      <div style={{ padding: '14px 16px 0' }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4px 8px',
        }}>
          <SectionLabel>Membres de la collection</SectionLabel>
          <span style={{
            fontFamily: 'system-ui, sans-serif', fontSize: 12, color: '#9CA3AF', fontWeight: 600,
          }}>{members.length} membres</span>
        </div>
        <Card>
          {members.map((m, i) => (
            <div key={m.id} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px',
              borderBottom: i < members.length - 1 ? '1px solid #F1F3F8' : 'none',
            }}>
              <Avatar profile={m} size={36}/>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 14, fontWeight: 700, color: '#1A2B48' }}>
                  {m.name}
                </div>
                <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 12, color: '#6B7280', marginTop: 1 }}>
                  {m.email}
                </div>
              </div>
              {m.role === 'Propriétaire' ? (
                <span style={{
                  padding: '4px 10px', borderRadius: 999, background: '#1A2B48', color: '#F0E5C2',
                  fontFamily: 'system-ui, sans-serif', fontSize: 11, fontWeight: 600,
                }}>{m.role}</span>
              ) : (
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 4, padding: '4px 10px', borderRadius: 999,
                  background: '#F1F3F8',
                  fontFamily: 'system-ui, sans-serif', fontSize: 11.5, color: '#1A2B48', fontWeight: 600,
                }}>{m.role} <Icon.ChevronDown s={12} c="#6B7280"/></div>
              )}
            </div>
          ))}
        </Card>
        <button style={{
          ...btnReset, width: '100%', height: 46, borderRadius: 14, marginTop: 12,
          background: '#1A2B48', color: '#fff',
          fontFamily: 'system-ui, sans-serif', fontSize: 14, fontWeight: 600, gap: 8,
        }}>
          <Icon.UserPlus c="#fff" s={18}/>
          Inviter un membre
        </button>
      </div>

      <div style={{ padding: '14px 16px 0' }}>
        <SectionLabel style={{ padding: '0 4px 8px' }}>Paramètres de partage</SectionLabel>
        <Card>
          <Row icon={<Icon.Plus c="#1A2B48"/>} title="Autoriser l'ajout d'éléments"
            subtitle="Les membres peuvent enrichir la collection"
            trailing={<Toggle on={allowAdd} onChange={setAllowAdd}/>}/>
          <Row icon={<Icon.Settings c="#1A2B48"/>} title="Autoriser la modification"
            subtitle="Les membres peuvent éditer les métadonnées"
            trailing={<Toggle on={allowEdit} onChange={setAllowEdit}/>} last/>
        </Card>
      </div>
    </div>
  );
}

// ============================================================
// SIDE DRAWER MENU
// ============================================================
function SideMenu({ open, onClose, onNav, profile, collaborative, onToggleCollab }) {
  if (!open) return null;
  const items = [
    { id: 'collection', label: 'Ma Collection', icon: Icon.Collection },
    { id: 'wishlist', label: 'Liste de souhaits', icon: Icon.Heart },
    { id: 'stats', label: 'Statistiques', icon: Icon.Stats },
    { id: 'members', label: 'Membres & Partage', icon: Icon.Members },
    { id: 'sync', label: 'Sauvegarde Cloud', icon: Icon.Cloud },
  ];
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 100 }}>
      <div onClick={onClose} style={{
        position: 'absolute', inset: 0, background: 'rgba(15,20,40,0.4)',
        animation: 'fade 0.18s ease-out',
      }}/>
      <div style={{
        position: 'absolute', top: 0, left: 0, bottom: 0, width: 290,
        background: '#fff',
        boxShadow: '0 0 30px rgba(0,0,0,0.18)',
        animation: 'slidein 0.22s cubic-bezier(.2,.8,.2,1)',
        display: 'flex', flexDirection: 'column',
      }}>
        <style>{`
          @keyframes fade { from { opacity: 0 } to { opacity: 1 } }
          @keyframes slidein { from { transform: translateX(-100%) } to { transform: none } }
        `}</style>
        {/* profile header */}
        <div style={{
          padding: '60px 20px 20px',
          background: 'linear-gradient(135deg, #1A2B48, #2E4267)',
          color: '#fff',
        }}>
          <Avatar profile={profile} size={52}/>
          <div style={{
            fontFamily: 'Newsreader, Georgia, serif', fontSize: 19, fontWeight: 700, marginTop: 12,
          }}>{profile.name}</div>
          <div style={{
            fontFamily: 'system-ui, sans-serif', fontSize: 12.5, color: 'rgba(240,229,194,0.8)', marginTop: 2,
          }}>{profile.email}</div>
        </div>
        {/* nav */}
        <div style={{ padding: '12px 0', flex: 1 }}>
          {items.map(it => (
            <button key={it.id} onClick={() => { onNav(it.id); onClose(); }} style={{
              ...btnReset, width: '100%', justifyContent: 'flex-start',
              padding: '14px 22px', gap: 14,
              fontFamily: 'system-ui, sans-serif', fontSize: 14.5, fontWeight: 600, color: '#1A2B48',
            }}>
              <it.icon c="#1A2B48" s={20}/>
              {it.label}
            </button>
          ))}
          <div style={{ height: 1, background: '#F1F3F8', margin: '12px 22px' }}/>
          <div style={{ padding: '14px 22px', display: 'flex', alignItems: 'center', gap: 14 }}>
            <Icon.Share c="#1A2B48" s={20}/>
            <div style={{ flex: 1, fontFamily: 'system-ui, sans-serif', fontSize: 14.5, fontWeight: 600, color: '#1A2B48' }}>
              Mode collaboratif
            </div>
            <Toggle on={collaborative} onChange={onToggleCollab}/>
          </div>
        </div>
        <div style={{ padding: '14px 22px', borderTop: '1px solid #F1F3F8' }}>
          <button style={{
            ...btnReset, gap: 12, padding: '8px 0',
            fontFamily: 'system-ui, sans-serif', fontSize: 14, fontWeight: 600, color: '#6B7280',
          }}>
            <Icon.Logout c="#6B7280" s={18}/>
            Se déconnecter
          </button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { WishlistScreen, StatsScreen, Donut, SyncScreen, Row, MembersScreen, SideMenu });
