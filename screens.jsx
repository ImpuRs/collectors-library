// screens.jsx — All app screens (Collection, Detail, Add, Wishlist, Stats, Sync, Members, Menu)

// ============================================================
// COLLECTION (home grid)
// ============================================================
function CollectionScreen({ items, onOpen, onMenu, onAdd, collaborative, profile }) {
  const [search, setSearch] = React.useState('');
  const [cat, setCat] = React.useState('all');
  const filtered = items.filter(it => {
    if (cat !== 'all' && it.type !== cat) return false;
    if (search && !`${it.title} ${it.author}`.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });
  return (
    <div style={{ paddingBottom: 100 }}>
      <TopBar onMenu={onMenu} badge={collaborative ? 'Collaboratif' : null} profile={profile}/>
      <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Rechercher dans ma collection..."/>
      <TabPills tabs={CATEGORIES} active={cat} onPick={setCat}/>
      <div style={{
        padding: '18px 16px 0', display: 'grid',
        gridTemplateColumns: '1fr 1fr', gap: 14,
      }}>
        {filtered.map(item => <GridCard key={item.id} item={item} onClick={() => onOpen(item)}/>)}
      </div>
      {filtered.length === 0 && (
        <div style={{
          padding: '60px 32px', textAlign: 'center', color: '#9CA3AF',
          fontFamily: 'system-ui, sans-serif', fontSize: 14,
        }}>Aucun article ne correspond à votre recherche.</div>
      )}
    </div>
  );
}

function GridCard({ item, onClick }) {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer' }}>
      <div style={{
        width: '100%', aspectRatio: '2 / 3', borderRadius: 12, overflow: 'hidden',
        position: 'relative',
      }}>
        <Cover item={item} w={172} h={258}/>
      </div>
      <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div><TypeBadge type={item.type}/></div>
        <div style={{
          fontFamily: 'system-ui, sans-serif', fontSize: 14, fontWeight: 700,
          color: '#1A2B48', lineHeight: 1.2,
          overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box',
          WebkitLineClamp: 1, WebkitBoxOrient: 'vertical',
        }}>{item.title}</div>
        <div style={{
          fontFamily: 'system-ui, sans-serif', fontSize: 12, color: '#6B7280',
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>{item.author}</div>
      </div>
    </div>
  );
}

// ============================================================
// DETAIL
// ============================================================
function DetailScreen({ item, onBack, onUpdate }) {
  const labels = STATUS_BY_TYPE[item.type];
  const [status, setStatus] = React.useState(item.status);
  const [rating, setRating] = React.useState(item.rating || 0);

  React.useEffect(() => {
    onUpdate?.({ ...item, status, rating: rating || null });
  // eslint-disable-next-line
  }, [status, rating]);

  return (
    <div style={{ paddingBottom: 110 }}>
      {/* Hero */}
      <div style={{ position: 'relative', height: 320, overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(180deg, ${item.cover.bg} 0%, ${shade(item.cover.bg, -25)} 100%)`,
        }}/>
        {/* big stylised cover floating in 3/4 perspective */}
        <div style={{
          position: 'absolute', left: '50%', top: 70, transform: 'translateX(-50%) rotate(-3deg)',
        }}>
          <Cover item={item} w={170} h={item.type === 'Musique' ? 170 : 255} lift/>
        </div>
        {/* back / overlay */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, zIndex: 5,
        }}>
          <button onClick={onBack} style={{
            ...btnReset, width: 36, height: 36, borderRadius: '50%',
            background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)',
          }}>
            <Icon.Back c="#1A2B48"/>
          </button>
          <div style={{
            flex: 1, fontFamily: 'Newsreader, Georgia, serif', fontSize: 17, fontWeight: 700,
            color: '#fff', textShadow: '0 1px 4px rgba(0,0,0,0.4)',
          }}>Détails de l'article</div>
          <Avatar size={32}/>
        </div>
        {/* glow */}
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 120,
          background: 'linear-gradient(0deg, rgba(0,0,0,0.4), transparent)' }}/>
      </div>

      {/* Header info */}
      <div style={{ padding: '16px 16px 0' }}>
        <TypeBadge type={item.type}/>
        <div style={{
          fontFamily: 'Newsreader, Georgia, serif', fontSize: 26, fontWeight: 700,
          color: '#1A2B48', lineHeight: 1.15, marginTop: 8, letterSpacing: -0.4,
        }}>{item.title}</div>
        <div style={{
          fontFamily: 'system-ui, sans-serif', fontSize: 14, color: '#6B7280', marginTop: 6,
        }}>
          {item.author} <span style={{ opacity: 0.5 }}>•</span> {item.year}
        </div>
      </div>

      {/* Status + rating card */}
      <div style={{ padding: '16px 16px 0' }}>
        <Card style={{ padding: 18 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <SectionLabel>Statut</SectionLabel>
            <StatusToggle status={status} statusLabels={labels} onChange={setStatus}/>
          </div>
          <div style={{ height: 1, background: '#F1F3F8', margin: '16px -18px' }}/>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <SectionLabel>Ma note</SectionLabel>
            <div style={{ display: 'flex', gap: 4 }}>
              {[1,2,3,4,5].map(n => (
                <button key={n} onClick={() => setRating(n === rating ? 0 : n)} style={btnReset}>
                  <Icon.Star s={22} c={n <= rating ? '#E8B935' : '#E5E7EB'} filled={n <= rating}/>
                </button>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Trailer for films */}
      {item.hasTrailer && (
        <div style={{ padding: '16px 16px 0' }}>
          <div style={{
            position: 'relative', borderRadius: 16, overflow: 'hidden',
            height: 180, background: `linear-gradient(135deg, ${shade(item.cover.bg, -15)}, ${item.cover.bg})`,
            boxShadow: '0 4px 14px rgba(15,20,40,0.12)',
          }}>
            {/* stylised film still */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.6, transform: 'scale(1.4)' }}>
              <Cover item={item} w={300} h={450}/>
            </div>
            <div style={{ position: 'absolute', inset: 0,
              background: 'linear-gradient(0deg, rgba(0,0,0,0.55), rgba(0,0,0,0.18))' }}/>
            <button style={{
              ...btnReset, position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 56, height: 56, borderRadius: '50%',
              background: 'rgba(255,255,255,0.95)', boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            }}>
              <Icon.Play s={22} c="#1A2B48"/>
            </button>
            <div style={{
              position: 'absolute', bottom: 12, left: 14,
              fontFamily: 'system-ui, sans-serif', fontSize: 11, fontWeight: 700,
              color: '#fff', letterSpacing: 1, textTransform: 'uppercase',
              textShadow: '0 1px 3px rgba(0,0,0,0.5)',
            }}>Voir la bande-annonce</div>
            <div style={{
              position: 'absolute', bottom: 12, right: 14,
              fontFamily: 'system-ui, sans-serif', fontSize: 11, color: '#fff', opacity: 0.85,
            }}>2:45</div>
          </div>
        </div>
      )}

      {/* Synopsis */}
      <div style={{ padding: '16px 16px 0' }}>
        <Card style={{ padding: 18 }}>
          <SectionLabel>Synopsis</SectionLabel>
          <div style={{
            fontFamily: 'Newsreader, Georgia, serif', fontSize: 15.5, lineHeight: 1.55,
            color: '#1A2B48', marginTop: 10, textWrap: 'pretty',
          }}>{item.synopsis}</div>
          <div style={{
            display: 'flex', gap: 6, marginTop: 14, flexWrap: 'wrap',
          }}>
            {item.tags.map(t => (
              <span key={t} style={{
                padding: '4px 10px', borderRadius: 999, background: '#F1F3F8',
                fontFamily: 'system-ui, sans-serif', fontSize: 11.5, color: '#6B7280', fontWeight: 500,
              }}>{t}</span>
            ))}
          </div>
        </Card>
      </div>

      {/* Detail rows (publisher / format / etc.) */}
      <div style={{ padding: '14px 16px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {item.publisher && <DetailRow label={item.type === 'Film' ? 'Studio' : item.type === 'Musique' ? 'Label' : 'Éditeur'} value={item.publisher}/>}
        {item.format && <DetailRow label="Format" value={item.format}/>}
        {item.duration && <DetailRow label="Durée" value={item.duration}/>}
        {item.pages && <DetailRow label="Pages" value={item.pages}/>}
        {item.platform && <DetailRow label="Plateforme" value={item.platform}/>}
        {item.tracks && <DetailRow label="Titres" value={item.tracks}/>}
        <DetailRow label="Ajouté le" value={item.addedOn}/>
        {item.barcode && <DetailRow label="Code-barres" value={item.barcode} mono/>}
      </div>
    </div>
  );
}

function DetailRow({ label, value, mono }) {
  return (
    <Card style={{ padding: '12px 14px' }}>
      <SectionLabel>{label}</SectionLabel>
      <div style={{
        fontFamily: mono ? 'ui-monospace, Menlo, monospace' : 'system-ui, sans-serif',
        fontSize: mono ? 12 : 14, color: '#1A2B48', fontWeight: 600, marginTop: 4,
      }}>{value}</div>
    </Card>
  );
}

// ============================================================
// ADD (scanner + manual search)
// ============================================================
function AddScreen({ onClose, onSearch, profile }) {
  const [title, setTitle] = React.useState('');
  const [mediaType, setMediaType] = React.useState('Film');
  const types = [
    { id: 'Musique', label: 'Musique', icon: Icon.Music },
    { id: 'Film', label: 'Films', icon: Icon.Film },
    { id: 'Jeu Vidéo', label: 'Jeux Vidéo', icon: Icon.Gamepad },
    { id: 'Livre', label: 'Livres', icon: Icon.Book },
  ];
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#111' }}>
      {/* scanner top */}
      <div style={{ position: 'relative', height: 340, overflow: 'hidden' }}>
        {/* fake bookshelf "camera view" */}
        <div style={{ position: 'absolute', inset: 0, background: '#1A1A1A', display: 'flex' }}>
          {/* simulated book spines */}
          {Array.from({ length: 28 }).map((_, i) => {
            const colors = ['#7D2E2E','#3A5A40','#1F4068','#A86F2D','#5C2A1D','#243640','#0F1830','#3D5A4C','#7A3520'];
            const c = colors[i % colors.length];
            const h = 70 + (i % 4) * 10;
            return (
              <div key={i} style={{
                flex: 1, background: `linear-gradient(90deg, ${shade(c,-20)}, ${c} 30%, ${shade(c, 15)} 50%, ${c} 70%, ${shade(c,-20)})`,
                height: '100%', borderRight: '1px solid rgba(0,0,0,0.45)',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', top: `${20 + (i%5)*8}%`, left: 0, right: 0,
                  height: 2, background: 'rgba(255,255,255,0.18)',
                }}/>
              </div>
            );
          })}
        </div>
        {/* top chrome */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, zIndex: 5,
        }}>
          <button onClick={onClose} style={{
            ...btnReset, width: 36, height: 36, borderRadius: '50%',
            background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)',
          }}>
            <Icon.Close c="#fff"/>
          </button>
          <div style={{
            flex: 1, fontFamily: 'Newsreader, Georgia, serif', fontSize: 19, fontWeight: 700,
            color: '#fff',
          }}>Scanner le code-barres</div>
          <button style={{
            ...btnReset, width: 36, height: 36, borderRadius: '50%',
            background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)',
          }}>
            <Icon.Flash s={18} c="#fff"/>
          </button>
        </div>
        {/* scanner frame */}
        <div style={{
          position: 'absolute', left: '50%', top: '52%', transform: 'translate(-50%, -50%)',
          width: 260, height: 140,
        }}>
          {[
            { t: 0, l: 0, br: '12px 0 0 0', bd: '2px 0 0 2px' },
            { t: 0, r: 0, br: '0 12px 0 0', bd: '2px 2px 0 0' },
            { b: 0, l: 0, br: '0 0 0 12px', bd: '0 0 2px 2px' },
            { b: 0, r: 0, br: '0 0 12px 0', bd: '0 2px 2px 0' },
          ].map((c, i) => (
            <div key={i} style={{
              position: 'absolute', top: c.t, left: c.l, right: c.r, bottom: c.b,
              width: 22, height: 22,
              borderTop: c.bd.split(' ')[0].startsWith('2') ? '2px solid #fff' : 'none',
              borderRight: c.bd.split(' ')[1].startsWith('2') ? '2px solid #fff' : 'none',
              borderBottom: c.bd.split(' ')[2].startsWith('2') ? '2px solid #fff' : 'none',
              borderLeft: c.bd.split(' ')[3].startsWith('2') ? '2px solid #fff' : 'none',
              borderRadius: c.br,
            }}/>
          ))}
          {/* scan line */}
          <div style={{
            position: 'absolute', left: 10, right: 10, top: '50%',
            height: 2, background: 'linear-gradient(90deg, transparent, #E63946, transparent)',
            boxShadow: '0 0 8px #E63946', animation: 'scan 2.5s ease-in-out infinite',
          }}/>
        </div>
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 18, textAlign: 'center',
          fontFamily: 'system-ui, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.85)',
          textShadow: '0 1px 4px rgba(0,0,0,0.6)',
        }}>Alignez le code-barres dans le cadre</div>
        <style>{`@keyframes scan { 0%,100% { top: 18%; } 50% { top: 78%; } }`}</style>
      </div>

      {/* manual search bottom sheet */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0, top: 310,
        background: '#fff', borderRadius: '24px 24px 0 0', padding: 20,
        boxShadow: '0 -8px 24px rgba(0,0,0,0.2)', overflowY: 'auto',
      }}>
        <div style={{
          width: 36, height: 4, borderRadius: 2, background: '#D9DEE6',
          margin: '0 auto 16px',
        }}/>
        <div style={{
          fontFamily: 'Newsreader, Georgia, serif', fontSize: 20, fontWeight: 700, color: '#1A2B48',
        }}>Recherche manuelle</div>
        <div style={{
          fontFamily: 'system-ui, sans-serif', fontSize: 13, color: '#6B7280', marginTop: 4,
        }}>Si le scan ne fonctionne pas, saisissez les informations ci-dessous.</div>

        <SectionLabel style={{ marginTop: 18 }}>Titre du média</SectionLabel>
        <div style={{
          background: '#F7F9FF', borderRadius: 12, height: 44, marginTop: 8,
          display: 'flex', alignItems: 'center', padding: '0 14px', gap: 10,
          border: '1px solid #E5E7EB',
        }}>
          <Icon.Search c="#9CA3AF"/>
          <input value={title} onChange={(e) => setTitle(e.target.value)}
            placeholder="Ex : Inception, The Beatles..."
            style={{ flex: 1, border: 0, outline: 'none', background: 'transparent',
              fontFamily: 'system-ui, sans-serif', fontSize: 14, color: '#1A2B48' }}/>
        </div>

        <SectionLabel style={{ marginTop: 16 }}>Type de média</SectionLabel>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 8,
        }}>
          {types.map(t => {
            const on = mediaType === t.id;
            return (
              <button key={t.id} onClick={() => setMediaType(t.id)} style={{
                ...btnReset, padding: '12px 8px', borderRadius: 12,
                background: on ? '#1A2B48' : '#fff',
                color: on ? '#fff' : '#1A2B48',
                border: on ? '1px solid #1A2B48' : '1px solid #E5E7EB',
                display: 'flex', flexDirection: 'column', gap: 6,
                transition: 'all 0.15s',
              }}>
                <t.icon c={on ? '#fff' : '#1A2B48'} s={20}/>
                <span style={{
                  fontFamily: 'system-ui, sans-serif', fontSize: 13, fontWeight: 600,
                }}>{t.label}</span>
              </button>
            );
          })}
        </div>

        <button onClick={() => onSearch?.(title, mediaType)} style={{
          ...btnReset, width: '100%', height: 48, borderRadius: 14, marginTop: 18,
          background: '#1A2B48', color: '#fff',
          fontFamily: 'system-ui, sans-serif', fontSize: 14.5, fontWeight: 600,
          gap: 8,
        }}>
          <Icon.Search s={18} c="#fff"/>
          Rechercher dans la bibliothèque
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { CollectionScreen, GridCard, DetailScreen, AddScreen });
