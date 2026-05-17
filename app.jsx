// app.jsx — Main app shell: navigation + state

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "accent": "#1A2B48",
  "collaborative": false
}/*EDITMODE-END*/;

function App() {
  const tw = (typeof useTweaks === 'function') ? useTweaks(TWEAK_DEFAULTS) : { tweaks: TWEAK_DEFAULTS, setTweak: () => {} };
  const { tweaks, setTweak } = tw;

  const [items, setItems] = React.useState(ITEMS);
  const [tab, setTab] = React.useState('collection');
  const [stack, setStack] = React.useState([]); // navigation stack for modals/sub-screens
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [collaborative, setCollaborative] = React.useState(false);

  const profile = { name: 'Ludo', email: 'ludo.curator@gmail.com', initial: 'L', color: '#1A2B48' };

  const openDetail = (item) => setStack(s => [...s, { type: 'detail', item }]);
  const openAdd = () => setStack(s => [...s, { type: 'add' }]);
  const openSync = () => setStack(s => [...s, { type: 'sync' }]);
  const openMembers = () => setStack(s => [...s, { type: 'members' }]);
  const popStack = () => setStack(s => s.slice(0, -1));

  const updateItem = (next) => {
    setItems(prev => prev.map(it => it.id === next.id ? next : it));
  };

  const onNav = (id) => {
    if (id === 'collection') setTab('collection');
    else if (id === 'wishlist') setTab('wishlist');
    else if (id === 'stats') setTab('stats');
    else if (id === 'members') openMembers();
    else if (id === 'sync') openSync();
  };

  const bottomTabs = [
    { id: 'collection', label: 'Collection', icon: Icon.Collection },
    { id: 'wishlist',   label: 'Wishlist',   icon: Icon.Heart },
    { id: 'add',        label: 'Ajouter',    icon: Icon.PlusTab },
    { id: 'stats',      label: 'Stats',      icon: Icon.Stats },
  ];

  let mainContent = null;
  if (tab === 'collection') {
    mainContent = <CollectionScreen items={items} onOpen={openDetail} onMenu={() => setMenuOpen(true)}
      collaborative={collaborative} profile={profile}/>;
  } else if (tab === 'wishlist') {
    mainContent = <WishlistScreen items={WISHLIST} onMenu={() => setMenuOpen(true)} profile={profile}/>;
  } else if (tab === 'stats') {
    mainContent = <StatsScreen items={items} onMenu={() => setMenuOpen(true)} profile={profile}/>;
  }

  // Top of stack — overlay screen
  const top = stack[stack.length - 1];

  return (
    <div className="app-shell" style={{
      width: '100%', height: '100dvh', maxWidth: 480, margin: '0 auto',
      overflow: 'hidden', position: 'relative', background: '#F4F6FB',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased',
    }}>
      {/* Scrollable area */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        overflowY: 'auto', overflowX: 'hidden',
        paddingTop: 'env(safe-area-inset-top, 0px)',
      }} key={tab}>
        {mainContent}
      </div>

      {/* FAB */}
      <FAB onClick={openAdd} bottom={100}/>

      {/* Bottom nav */}
      <BottomNav tabs={bottomTabs} active={tab}
        onPick={(id) => id === 'add' ? openAdd() : setTab(id)}/>

      {/* Side menu */}
      <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)}
        onNav={onNav} profile={profile}
        collaborative={collaborative}
        onToggleCollab={setCollaborative}/>

      {/* Overlay screens */}
      {top && top.type === 'detail' && (
        <Overlay>
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            overflowY: 'auto', overflowX: 'hidden', background: '#F4F6FB',
            paddingTop: 'env(safe-area-inset-top, 0px)',
          }}>
            <DetailScreen item={items.find(i => i.id === top.item.id) || top.item}
              onBack={popStack} onUpdate={updateItem}/>
          </div>
          <BottomNav tabs={bottomTabs} active={tab}
            onPick={(id) => { popStack(); id === 'add' ? openAdd() : setTab(id); }}/>
        </Overlay>
      )}
      {top && top.type === 'add' && (
        <Overlay>
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            paddingTop: 'env(safe-area-inset-top, 0px)',
          }}>
            <AddScreen onClose={popStack} onSearch={() => popStack()} profile={profile}/>
          </div>
          <BottomNav tabs={bottomTabs} active="add"
            onPick={(id) => { popStack(); id !== 'add' && setTab(id); }}/>
        </Overlay>
      )}
      {top && top.type === 'sync' && (
        <Overlay>
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            overflowY: 'auto', overflowX: 'hidden', background: '#F4F6FB',
            paddingTop: 'env(safe-area-inset-top, 0px)',
          }}>
            <SyncScreen onBack={popStack} profile={profile}/>
          </div>
          <BottomNav tabs={bottomTabs} active={tab}
            onPick={(id) => { popStack(); id === 'add' ? openAdd() : setTab(id); }}/>
        </Overlay>
      )}
      {top && top.type === 'members' && (
        <Overlay>
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            overflowY: 'auto', overflowX: 'hidden', background: '#F4F6FB',
            paddingTop: 'env(safe-area-inset-top, 0px)',
          }}>
            <MembersScreen members={MEMBERS} onBack={popStack} profile={profile}/>
          </div>
          <BottomNav tabs={bottomTabs} active={tab}
            onPick={(id) => { popStack(); id === 'add' ? openAdd() : setTab(id); }}/>
        </Overlay>
      )}
    </div>
  );
}

function Overlay({ children }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 60, background: '#F4F6FB',
      animation: 'overlayin 0.28s cubic-bezier(.2,.8,.2,1)',
    }}>
      <style>{`@keyframes overlayin { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: none } }`}</style>
      {children}
    </div>
  );
}

// ─── Mount ────────────────────────────────────────────────
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
