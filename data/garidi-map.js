// ============================================
// garidi-map.js — الخريطة التفاعلية للإقامة
// متكاملة مع قسم "مدرستي" في guide.html
// ============================================

(function() {
  
  // ============ البيانات ============
  const W = 705, H = 596;
  
  const N = {
    gate:{x:655,y:548,l:1}, gd:{x:674,y:524}, g2:{x:640,y:495}, g3:{x:618,y:440,l:1},
    re:{x:602,y:395}, rm:{x:545,y:392}, rde:{x:480,y:396,l:1},
    rc:{x:432,y:398,l:1}, rb:{x:352,y:404,l:1}, rw:{x:300,y:408,l:1},
    pk:{x:562,y:432},
    n1:{x:428,y:356}, td:{x:413,y:314,l:1}, c2:{x:420,y:282}, cd:{x:408,y:245,l:1},
    adm:{x:456,y:198}, act:{x:452,y:238}, clinic:{x:474,y:266,l:1},
    c3:{x:428,y:200}, c4:{x:416,y:150}, ab:{x:318,y:106}, ae:{x:380,y:112,l:1}, wk:{x:445,y:98}, cl:{x:486,y:182},
    e3:{x:540,y:200}, e2:{x:546,y:270,l:1}, e1:{x:548,y:345}, rest:{x:548,y:122},
    bn1:{x:268,y:300}, bn2:{x:250,y:255}, bn3:{x:228,y:175}, bd:{x:256,y:124,l:1}, bk:{x:215,y:258},
    f1:{x:290,y:395}, foot:{x:275,y:368}, sw1:{x:278,y:445}, sw:{x:254,y:480}
  };
  
  const E = [
    ['gate','gd'],['gate','g2'],['g2','g3'],['g3','re'],['re','rm'],['rm','rde'],['rde','rc'],['rc','rb'],['rb','rw'],['rm','pk'],
    ['n1','td'],['e2','clinic'],['td','c2'],['c2','cd'],['c2','clinic'],['adm','cl'],['adm','c3'],['cd','act'],
    ['cd','c3'],['c3','c4'],['c4','ae'],['ae','ab'],['c4','wk'],['c3','cl'],
    ['rm','e1'],['e1','e2'],['e2','e3'],['e3','rest'],
    ['rw','f1'],['f1','foot'],['rw','sw1'],['sw1','sw'],
    ['rw','bn1'],['bn1','bn2'],['bn2','bn3'],['bn3','bd'],['bn2','bk']
  ];
  
  // ============ الرسم البياني ============
  const adj = {};
  E.forEach(([a,b]) => {
    const d = Math.hypot(N[a].x - N[b].x, N[a].y - N[b].y);
    (adj[a] = adj[a] || []).push([b, d]);
    (adj[b] = adj[b] || []).push([a, d]);
  });
  
  function shortestPath(from, to) {
    const dist = {}, prev = {}, q = new Set(Object.keys(N));
    Object.keys(N).forEach(k => dist[k] = Infinity);
    dist[from] = 0;
    while (q.size) {
      let u = null;
      q.forEach(k => { if (u === null || dist[k] < dist[u]) u = k; });
      if (u === to || dist[u] === Infinity) break;
      q.delete(u);
      (adj[u] || []).forEach(([v, d]) => {
        if (dist[u] + d < dist[v]) { dist[v] = dist[u] + d; prev[v] = u; }
      });
    }
    const p = [];
    let c = to;
    while (c) { p.unshift(c); c = prev[c]; }
    return p[0] === from ? p : [from, to];
  }
  
  // ============ الأماكن ============
  const PLACES = {
    gate:{n:{ar:'المدخل الرئيسي',fr:'Entrée principale',en:'Main entrance'},node:'gate',emoji:'🚪',nochip:true},
    guard:{n:{ar:'مركز الحراسة',fr:'Poste de garde',en:'Guard post'},node:'gd',emoji:'🛡️',img:'guard',
      hint:{ar:'عند باب مدخل الإقامة.',fr:'À la porte d’entrée.',en:'At the entrance gate.'}},
    adm:{n:{ar:'الإدارة',fr:'Administration',en:'Administration'},node:'adm',emoji:'🏢',img:'adm',
      hint:{ar:'باب حديدي أزرق، اللافتة الزرقاء على يمين الباب.',fr:'Porte en fer bleue, enseigne bleue à droite.',en:'Blue iron gate, blue sign on the right.'}},
    act:{n:{ar:'مصلحة النشاطات',fr:'Service des activités',en:'Activities Service'},node:'act',emoji:'🩺',img:'act',
      hint:{ar:'باب أسود بشبكة حديدية.',fr:'Porte noire avec grille.',en:'Black door with iron grille.'}},
    clinic:{n:{ar:'العيادة',fr:'Infirmerie',en:'Clinic'},node:'clinic',emoji:'🏥',img:'clinic',
      hint:{ar:'لافتة زرقاء على الجدار. عمود أحمر وأبيض أمام المدخل.',fr:'Plaque bleue. Poteau rouge et blanc.',en:'Blue sign. Red-and-white pole.'}},
    rest:{n:{ar:'المطعم',fr:'Restaurant',en:'Restaurant'},node:'rest',emoji:'🍽️',
      imgs:['rest1','rest2','rest3'],
      hint:{ar:'قاعة الإطعام مع شباك شحن بطاقات الإطعام.',fr:'Salle avec guichet de rechargement.',en:'Dining hall with meal card top-up.'}},
    club:{n:{ar:'النادي (أكل سريع ومقهى)',fr:'Club (fast-food, café)',en:'Club (fast food, café)'},node:'cl',emoji:'☕',img:'club',
      hint:{ar:'لافتة «النادي · FOYER» على يمين الباب.',fr:'Enseigne « FOYER · النادي ».',en:'“FOYER · النادي” sign.'}},
    work:{n:{ar:'المرش',fr:'Douches',en:'Showers'},node:'wk',emoji:'🚿'},
    foot:{n:{ar:'ملعب كرة القدم',fr:'Terrain de football',en:'Football pitch'},node:'foot',emoji:'⚽'},
    basket:{n:{ar:'ملعب كرة السلة',fr:'Terrain de basket',en:'Basketball court'},node:'bk',emoji:'🏀'},
    park:{n:{ar:'موقف السيارات',fr:'Parking',en:'Parking'},node:'pk',emoji:'🅿️'},
    mosalla:{n:{ar:'مصلى الفضيل الورتلاني',fr:'Salle de prière El Fodhil El Ourtilani',en:'El Fodhil El Ourtilani prayer room'},node:'ab',emoji:'🕌',
      imgs:['mosalla1','mosalla2'],
      hint:{ar:'يقع تحت الطابق الأول، ومدخله هو مدخل الجناحين A وB.',fr:'Sous le 1er étage, entrée par ailes A et B.',en:'Below the first floor, via Wings A and B.'}},
    sw:{n:{ar:'Street Workout',fr:'Street Workout',en:'Street Workout'},node:'sw',emoji:'🏋️'}
  };
  
  // ============ الأجنحة ============
  const BLOCKS = {
    A:{node:'ab',x:370,y:58,f:{0:[1,11],1:[12,22]},partial:true},
    B:{node:'ab',x:255,y:92,f:{0:[1,11],1:[12,22],2:[23,33],3:[34,44]}},
    C:{node:'cd',x:360,y:205,f:{0:[1,17],1:[22,43],2:[44,65],3:[66,87]},gap:[18,21]},
    D:{node:'td',x:480,y:313,f:{1:[1,13],2:[14,26],3:[27,39]}},
    E:{node:'td',x:352,y:350,f:{1:[1,11],2:[12,22],3:[23,33]}}
  };
  
  // ============ الترجمة ============
  const DIR = {ar:'rtl', fr:'ltr', en:'ltr'};
  const frTo = x => x.startsWith('le ') ? 'au '+x.slice(3) : x.startsWith('les ') ? 'aux '+x.slice(4) : 'à '+x;
  const frFrom = x => x.startsWith('le ') ? 'du '+x.slice(3) : x.startsWith('les ') ? 'des '+x.slice(4) : 'de '+x;
  
  const TX = {
    ar:{
      startLabel:'أنا الآن عند', tabPlaces:'أماكن', tabRooms:'غرف',
      ph:'رقم الغرفة، مثال: 52', go:'ابحث',
      zin:'تكبير', zout:'تصغير', zhome:'العودة للمركز', tsat:'تبديل للصورة الجوية',
      here:'أنت هنا', dest:'الوجهة', tap:'المس أي رمز لاختياره · 🛰️ الصورة الجوية',
      foot:'المسارات تقريبية ومرسومة على رسم مبسّط.',
      emptyPlaces:'اختر وجهة من الأعلى أو المس رمزاً على الخريطة.',
      emptyRooms:'اختر الجناح ثم اكتب رقم غرفتك.',
      pickBlock:'اختر الجناح أولاً.', enterNum:'اكتب رقم الغرفة بالأرقام.',
      gapMsg:(a,b)=>`الغرف ${a} إلى ${b} في الجناح C غير ظاهرة.`,
      partialMsg:(n,b)=>`الغرفة ${n} خارج الممرات الموثّقة للجناح ${b}.`,
      maxMsg:(b,mx)=>`أكبر رقم غرفة في الجناح ${b} هو ${mx}.`,
      nfMsg:(n,b)=>`الغرفة ${n} غير موجودة في الجناح ${b}.`,
      routeFrom:s=>`الطريق من ${s}`, howEntrance:'كيف يبدو المدخل؟',
      startFrom:s=>`انطلق من <b>${s}</b>`, via:x=>`مرّ على <b>${x}</b>`,
      arrive:x=>`ستصل إلى <b>${x}</b>`, arriveWing:b=>`ستصل إلى <b>مدخل الجناح ${b}</b>`,
      near:'أنت قريب من الوجهة بالفعل.',
      shared:(o,w)=>`تشترك مع ${o} في مدخل واحد: «الجناح ${w}»`,
      pickOrNum:'اختر الممر أو اكتب رقم الغرفة.', noDocs:'لم تُوثَّق لوحات هذا الجناح بعد.',
      roomHead:(n,f)=>n!==null?`الغرفة ${n} · ${f}`:f,
      corrLine:(b,a,z,tot)=>`الجناح ${b} · الممر من ${a} إلى ${z} (${tot} غرفة)`,
      corrTitle:'مدخل الممر', corrDesc:s=>`باب حديدي رمادي مزدوج، لوحة بيضاء: <span dir="ltr">${s}</span>.`,
      enterWing:w=>`ادخل من <b>الجناح ${w}</b>`, climb:f=>`اصعد إلى <b>${f}</b>`, stay:'ابقَ في <b>الطابق الأرضي</b>',
      findSign:s=>`ابحث فوق الباب عن اللوحة <b dir="ltr">${s}</b>`,
      yourRoom:n=>`غرفتك <b>${n}</b> داخل هذا الممر`,
      FL:['الطابق الأرضي','الطابق الأول','الطابق الثاني','الطابق الثالث']
    },
    fr:{
      startLabel:'Je suis à', tabPlaces:'Lieux', tabRooms:'Chambres',
      ph:'N° de chambre, ex. 52', go:'Chercher',
      zin:'Zoom avant', zout:'Zoom arrière', zhome:'Centre', tsat:'Vue aérienne',
      here:'Vous êtes ici', dest:'Destination', tap:'Touchez un symbole · 🛰️ vue aérienne',
      foot:'Itinéraires approximatifs.',
      emptyPlaces:'Choisissez une destination ci-dessus.',
      emptyRooms:'Choisissez l’aile puis le numéro.',
      pickBlock:'Choisissez l’aile d’abord.', enterNum:'Saisissez le numéro.',
      gapMsg:(a,b)=>`Chambres ${a} à ${b} de l’aile C non documentées.`,
      partialMsg:(n,b)=>`Chambre ${n} hors des couloirs de l’aile ${b}.`,
      maxMsg:(b,mx)=>`Numéro max de l’aile ${b} : ${mx}.`,
      nfMsg:(n,b)=>`Chambre ${n} introuvable dans l’aile ${b}.`,
      routeFrom:s=>`Chemin depuis : ${s}`, howEntrance:'À quoi ressemble l’entrée ?',
      startFrom:s=>`Partez <b>${frFrom(s)}</b>`, via:x=>`Passez par <b>${x}</b>`,
      arrive:x=>`Vous arrivez <b>${frTo(x)}</b>`, arriveWing:b=>`Vous arrivez à <b>l’entrée de l’aile ${b}</b>`,
      near:'Vous êtes déjà proche.',
      shared:(o,w)=>`Entrée commune avec l’aile ${o} : « Aile ${w} »`,
      pickOrNum:'Choisissez le couloir ou saisissez le numéro.', noDocs:'Plaques non documentées.',
      roomHead:(n,f)=>n!==null?`Chambre ${n} · ${f}`:f,
      corrLine:(b,a,z,tot)=>`Aile ${b} · couloir ${a} à ${z} (${tot} chambres)`,
      corrTitle:'Entrée du couloir', corrDesc:s=>`Double porte métallique grise, plaque blanche : <span dir="ltr">${s}</span>.`,
      enterWing:w=>`Entrez par l’<b>aile ${w}</b>`, climb:f=>`Montez au <b>${f}</b>`, stay:'Restez au <b>rez-de-chaussée</b>',
      findSign:s=>`Cherchez la plaque <b dir="ltr">${s}</b> au-dessus de la porte`,
      yourRoom:n=>`Votre chambre <b>${n}</b> est dans ce couloir`,
      FL:['Rez-de-chaussée','1er étage','2e étage','3e étage']
    },
    en:{
      startLabel:'I am at', tabPlaces:'Places', tabRooms:'Rooms',
      ph:'Room number, e.g. 52', go:'Search',
      zin:'Zoom in', zout:'Zoom out', zhome:'Center', tsat:'Aerial view',
      here:'You are here', dest:'Destination', tap:'Tap a symbol · 🛰️ aerial view',
      foot:'Approximate routes.',
      emptyPlaces:'Pick a destination above.',
      emptyRooms:'Pick wing then number.',
      pickBlock:'Pick the wing first.', enterNum:'Type the room number.',
      gapMsg:(a,b)=>`Rooms ${a}–${b} in Wing C not documented.`,
      partialMsg:(n,b)=>`Room ${n} outside documented corridors of Wing ${b}.`,
      maxMsg:(b,mx)=>`Highest room in Wing ${b} is ${mx}.`,
      nfMsg:(n,b)=>`Room ${n} not found in Wing ${b}.`,
      routeFrom:s=>`Route from ${s}`, howEntrance:'What does the entrance look like?',
      startFrom:s=>`Start from <b>${s}</b>`, via:x=>`Go via <b>${x}</b>`,
      arrive:x=>`Arrive at <b>${x}</b>`, arriveWing:b=>`Arrive at the <b>Wing ${b} entrance</b>`,
      near:'You are already close.',
      shared:(o,w)=>`Shared entrance with Wing ${o}: “Wing ${w}”`,
      pickOrNum:'Choose corridor or type number.', noDocs:'Plates not documented.',
      roomHead:(n,f)=>n!==null?`Room ${n} · ${f}`:f,
      corrLine:(b,a,z,tot)=>`Wing ${b} · corridor ${a} to ${z} (${tot} rooms)`,
      corrTitle:'Corridor entrance', corrDesc:s=>`Grey double metal door, white plate: <span dir="ltr">${s}</span>.`,
      enterWing:w=>`Enter via <b>Wing ${w}</b>`, climb:f=>`Go up to the <b>${f}</b>`, stay:'Stay on the <b>ground floor</b>',
      findSign:s=>`Look for the plate <b dir="ltr">${s}</b> above the door`,
      yourRoom:n=>`Your room <b>${n}</b> is in this corridor`,
      FL:['Ground floor','1st floor','2nd floor','3rd floor']
    }
  };
  
  // ============ أسماء معالم للوصف ============
  const WL = {
    gate:{ar:'المدخل الرئيسي',fr:'l’entrée principale',en:'the main entrance'},
    g3:{ar:'الطريق بمحاذاة الموقف',fr:'la route le long du parking',en:'the road along the parking'},
    td:{ar:'البرج المركزي (D وE)',fr:'la tour centrale (D et E)',en:'the central tower (D & E)'},
    cd:{ar:'شرق الجناح C',fr:'le côté est de l’aile C',en:'the east side of Wing C'},
    e2:{ar:'شرق الجناح D',fr:'le côté est de l’aile D',en:'the east side of Wing D'},
    rw:{ar:'آخر الطريق غرب الجناح E',fr:'le bout de la route à l’ouest de l’aile E',en:'the end of the road, west of Wing E'}
  };
  
  // ============ الحالة ============
  const S = {tab:'places', start:'gate', dest:null, block:null, floor:null, num:null, zoom:1, msg:null};
  let startOpts = [];
  let currentLang = 'ar';
  let $gm = null; // الحاوية الحالية
  
  function t(k, ...a) {
    const v = TX[currentLang][k] !== undefined ? TX[currentLang][k] : TX.ar[k];
    return typeof v === 'function' ? v(...a) : v;
  }
  const L = o => o[currentLang] || o.ar;
  const pname = id => PLACES[id].n;
  const sname = id => L(pname(id));
  const pad = n => String(n).padStart(2, '0');
  const pct = (x,y) => `left:${x/W*100}%;top:${y/H*100}%`;
  
  // ============ بناء الخريطة ============
  function buildMap() {
    $gm = document.getElementById('garidi-map-container');
    if (!$gm) return;
    
    // اللغة الحالية من الموقع
    currentLang = window.LANG || localStorage.getItem('lang') || 'ar';
    if (!TX[currentLang]) currentLang = 'ar';
    
    const stage = $gm.querySelector('#gm-stage');
    if (!stage) return;
    
    // إضافة أيقونة المطبخ
    const kitchen = document.createElement('span');
    kitchen.className = 'gm-lb';
    kitchen.style.cssText = pct(587,148);
    kitchen.textContent = currentLang === 'ar' ? 'مطبخ' : currentLang === 'fr' ? 'Cuisine' : 'Kitchen';
    stage.appendChild(kitchen);
    
    // إضافة العلامات
    Object.entries(PLACES).forEach(([id, p]) => {
      const n = N[p.node];
      const b = document.createElement('button');
      b.className = 'gm-pin';
      b.dataset.id = id;
      b.dataset.kind = 'p';
      b.style.cssText = pct(n.x, n.y);
      b.innerHTML = `${p.emoji}<span class="gm-cap"></span>`;
      b.onclick = () => { S.tab = 'places'; S.dest = id; S.msg = null; render(true); };
      stage.appendChild(b);
    });
    
    // إضافة الأجنحة
    Object.entries(BLOCKS).forEach(([id, bl]) => {
      const b = document.createElement('button');
      b.className = 'gm-bp';
      b.dataset.id = id;
      b.dataset.kind = 'b';
      b.style.cssText = pct(bl.x, bl.y);
      b.textContent = id;
      b.onclick = () => { S.tab = 'rooms'; S.block = id; S.floor = null; S.num = null; S.msg = null; render(true); };
      stage.appendChild(b);
    });
    
    // الأحداث
    const startSel = $gm.querySelector('#gm-start');
    if (startSel) startSel.onchange = e => { S.start = e.target.value; render(); };
    
    const tabPlaces = $gm.querySelector('#gm-tab-places');
    const tabRooms = $gm.querySelector('#gm-tab-rooms');
    if (tabPlaces) tabPlaces.onclick = () => { S.tab = 'places'; render(); };
    if (tabRooms) tabRooms.onclick = () => { S.tab = 'rooms'; render(); };
    
    const zin = $gm.querySelector('#gm-zin');
    const zout = $gm.querySelector('#gm-zout');
    const zhome = $gm.querySelector('#gm-zhome');
    const tsat = $gm.querySelector('#gm-tsat');
    if (zin) zin.onclick = () => setZoom(S.zoom + .5);
    if (zout) zout.onclick = () => setZoom(S.zoom - .5);
    if (zhome) zhome.onclick = home;
    if (tsat) tsat.onclick = e => { const on = stage.classList.toggle('sat'); e.currentTarget.setAttribute('aria-pressed', on); };
    
    const goBtn = $gm.querySelector('#gm-go');
    const numInput = $gm.querySelector('#gm-num');
    if (goBtn) goBtn.onclick = search;
    if (numInput) numInput.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); search(); } });
    
    // تحديث النصوص
    updateLabels();
    
    // الرسم الأولي
    render();
    home();
  }
  
  function updateLabels() {
    if (!$gm) return;
    const setText = (sel, txt) => { const el = $gm.querySelector(sel); if (el) el.textContent = txt; };
    const setPlaceholder = (sel, txt) => { const el = $gm.querySelector(sel); if (el) el.placeholder = txt; };
    const setAria = (sel, txt) => { const el = $gm.querySelector(sel); if (el) el.setAttribute('aria-label', txt); };
    
    setText('[data-gm="startLabel"]', t('startLabel'));
    setText('[data-gm="tabPlaces"]', t('tabPlaces'));
    setText('[data-gm="tabRooms"]', t('tabRooms'));
    setText('[data-gm="go"]', t('go'));
    setText('[data-gm="here"]', t('here'));
    setText('[data-gm="dest"]', t('dest'));
    setText('[data-gm="tap"]', t('tap'));
    setText('[data-gm="foot"]', t('foot'));
    setPlaceholder('#gm-num', t('ph'));
    setAria('#gm-num', t('ph'));
    setAria('#gm-zin', t('zin'));
    setAria('#gm-zout', t('zout'));
    setAria('#gm-zhome', t('zhome'));
    setAria('#gm-tsat', t('tsat'));
    
    // تحديث قائمة الانطلاق
    startOpts = Object.keys(PLACES).map(id => [id, sname(id)])
      .concat(Object.keys(BLOCKS).map(b => [b, currentLang === 'ar' ? 'الجناح ' + b : currentLang === 'fr' ? 'Aile ' + b : 'Wing ' + b]));
    const sel = $gm.querySelector('#gm-start');
    if (sel) {
      const curr = sel.value || S.start;
      sel.innerHTML = startOpts.map(([v,x]) => `<option value="${v}">${x}</option>`).join('');
      sel.value = curr;
    }
  }
  
  function setZoom(z) {
    S.zoom = Math.max(1, Math.min(4, z));
    const stage = $gm.querySelector('#gm-stage');
    if (stage) {
      stage.style.width = (S.zoom * 100) + '%';
      stage.classList.toggle('gm-zoomed', S.zoom >= 2.6);
    }
  }
  
  function home() {
    setZoom(1.8);
    const sc = $gm.querySelector('#gm-scroller');
    if (!sc) return;
    requestAnimationFrame(() => {
      const w = sc.clientWidth, h = sc.clientHeight, z = S.zoom;
      sc.scrollTo({ left: 410/W*w*z - w/2, top: 240/H*(w*H/W)*z - h/2 });
    });
  }
  
  function findRoom(b, n) {
    const bl = BLOCKS[b];
    for (const f in bl.f) {
      const r = bl.f[f];
      if (n >= r[0] && n <= r[1]) return +f;
    }
    return null;
  }
  
  function search() {
    const raw = $gm.querySelector('#gm-num').value.trim();
    const n = parseInt(raw, 10);
    if (!S.block) { S.msg = () => t('pickBlock'); return render(); }
    if (!raw || isNaN(n)) { S.msg = () => t('enterNum'); return render(); }
    const bl = BLOCKS[S.block], b = S.block;
    const f = findRoom(b, n);
    if (f === null) {
      const mx = Math.max(...Object.values(bl.f).map(r => r[1]));
      if (bl.gap && n >= bl.gap[0] && n <= bl.gap[1]) S.msg = () => t('gapMsg', bl.gap[0], bl.gap[1]);
      else if (n > mx && bl.partial) S.msg = () => t('partialMsg', n, b);
      else if (n > mx) S.msg = () => t('maxMsg', b, mx);
      else S.msg = () => t('nfMsg', n, b);
      S.floor = null; S.num = null; return render();
    }
    S.msg = null; S.floor = f; S.num = n; render(true);
  }
  
  function curDest() {
    if (S.tab === 'places' && S.dest) return { node: PLACES[S.dest].node, id: S.dest, kind: 'p' };
    if (S.tab === 'rooms' && S.block) return { node: BLOCKS[S.block].node, id: S.block, kind: 'b' };
    return null;
  }
  function startNode() {
    const s = S.start;
    return PLACES[s] ? PLACES[s].node : BLOCKS[s].node;
  }
  function startName() {
    const found = startOpts.find(o => o[0] === S.start);
    return found ? found[1] : S.start;
  }
  
  function render(focusMap) {
    if (!$gm) return;
    const FL = t('FL');
    
    // التبويبات
    const tp = $gm.querySelector('#gm-tab-places');
    const tr = $gm.querySelector('#gm-tab-rooms');
    if (tp) tp.classList.toggle('on', S.tab === 'places');
    if (tr) tr.classList.toggle('on', S.tab === 'rooms');
    
    const pp = $gm.querySelector('#gm-panel-places');
    const pr = $gm.querySelector('#gm-panel-rooms');
    if (pp) pp.hidden = S.tab !== 'places';
    if (pr) pr.hidden = S.tab !== 'rooms';
    
    // chips
    const chips = $gm.querySelector('#gm-chips');
    if (chips) {
      chips.innerHTML = Object.entries(PLACES).filter(([,p]) => !p.nochip).map(([id,p]) =>
        `<button class="gm-chip${S.dest === id ? ' on' : ''}" data-id="${id}"><span>${p.emoji}</span>${sname(id)}</button>`
      ).join('');
      chips.querySelectorAll('.gm-chip').forEach(b => b.onclick = () => { S.dest = b.dataset.id; render(true); });
    }
    
    // الأجنحة
    const blocksEl = $gm.querySelector('#gm-blocks');
    if (blocksEl) {
      blocksEl.innerHTML = Object.keys(BLOCKS).map(b =>
        `<button class="${S.block === b ? 'on' : ''}" data-b="${b}">${b}</button>`
      ).join('');
      blocksEl.querySelectorAll('button').forEach(b => b.onclick = () => { S.block = b.dataset.b; S.floor = null; S.num = null; S.msg = null; render(true); });
    }
    
    // الطوابق
    const floorsEl = $gm.querySelector('#gm-floors');
    if (floorsEl) {
      if (S.block) {
        floorsEl.innerHTML = Object.keys(BLOCKS[S.block].f).map(f => {
          const r = BLOCKS[S.block].f[f];
          const active = S.floor == f && S.num === null;
          return `<button class="gm-plate${active ? ' on' : ''}" data-f="${f}"><span class="gm-L">${S.block}</span><span class="gm-R"><i>${f===0?'RDC':f+' ETAGE'}</i><b>${pad(r[0])}-${pad(r[1])}</b></span></button>`;
        }).join('');
        floorsEl.querySelectorAll('button').forEach(b => b.onclick = () => { S.floor = +b.dataset.f; S.num = null; S.msg = null; $gm.querySelector('#gm-num').value = ''; render(true); });
      } else {
        floorsEl.innerHTML = '';
      }
    }
    
    // الرسالة
    const msgEl = $gm.querySelector('#gm-msg');
    if (msgEl) msgEl.innerHTML = S.msg ? `<div class="gm-msg">${S.msg()}</div>` : '';
    
    // تظليل العلامات
    const stage = $gm.querySelector('#gm-stage');
    const d = curDest(), sn = startNode();
    if (stage) {
      stage.querySelectorAll('.gm-pin,.gm-bp').forEach(el => {
        const id = el.dataset.id, kind = el.dataset.kind;
        const isStart = S.start === id, isDest = !!d && d.kind === kind && d.id === id;
        el.classList.toggle('on', isDest && !isStart);
        el.classList.toggle('start', isStart);
        const cap = el.querySelector('.gm-cap');
        if (cap) cap.textContent = isStart ? t('here') : sname(id);
      });
    }
    
    drawRoute(d, sn, focusMap);
    renderResult(d, sn);
  }
  
  function drawRoute(d, sn, focus) {
    if (!$gm) return;
    const rline = $gm.querySelector('#gm-rline');
    const rcase = $gm.querySelector('#gm-rcase');
    if (!rline || !rcase) return;
    if (!d || sn === d.node) { rline.setAttribute('points', ''); rcase.setAttribute('points', ''); return; }
    const p = shortestPath(sn, d.node);
    const pts = p.map(k => `${N[k].x},${N[k].y}`).join(' ');
    rline.setAttribute('points', pts);
    rcase.setAttribute('points', pts);
    if (focus) {
      const xs = p.map(k => N[k].x), ys = p.map(k => N[k].y);
      const minx = Math.min(...xs), maxx = Math.max(...xs), miny = Math.min(...ys), maxy = Math.max(...ys);
      const sc = $gm.querySelector('#gm-scroller');
      if (!sc) return;
      const w = sc.clientWidth, h = sc.clientHeight;
      const bw = Math.max(60, (maxx-minx)/W*w), bh = Math.max(60, (maxy-miny)/W*w);
      let z = Math.min(w/(bw*1.5), h/(bh*1.5));
      z = Math.max(1.2, Math.min(3, Math.round(z*2)/2));
      setZoom(z);
      requestAnimationFrame(() => {
        const cx = (minx+maxx)/2/W*w*z - w/2, cy = (miny+maxy)/2/H*(w*H/W)*z - h/2;
        sc.scrollTo({ left: cx, top: cy, behavior: 'smooth' });
      });
    }
  }
  
  function routeSteps(d, sn, destHTML, isEnd = true) {
    if (sn === d.node) return `<li${isEnd ? ' class="end"' : ''}>${t('near')}</li>`;
    const p = shortestPath(sn, d.node);
    const mids = p.slice(1, -1).filter(k => N[k].l);
    let h = `<li>${t('startFrom', PLACES[S.start] ? sname(S.start) : (currentLang === 'ar' ? 'الجناح ' + S.start : currentLang === 'fr' ? 'l’aile ' + S.start : 'Wing ' + S.start))}</li>`;
    mids.forEach(k => { h += `<li>${t('via', k === 'clinic' ? sname('clinic') : L(WL[k]))}</li>`; });
    h += `<li${isEnd ? ' class="end"' : ''}>${destHTML}</li>`;
    return h;
  }
  
  function renderResult(d, sn) {
    const r = $gm.querySelector('#gm-result');
    if (!r) return;
    const FL = t('FL');
    if (!d) {
      r.innerHTML = `<p class="gm-empty">${S.tab === 'places' ? t('emptyPlaces') : t('emptyRooms')}</p>`;
      return;
    }
    
    if (S.tab === 'places') {
      const p = PLACES[d.id], nm = sname(d.id);
      r.innerHTML = `<h2>${p.emoji} ${nm}</h2><p class="gm-sub">${t('routeFrom', startName())}</p>
        ${p.img ? `<div class="gm-photo"><img src="garidi-images/${p.img}.jpg" alt="${nm}" onerror="this.style.display='none'"><p><b>${t('howEntrance')}</b><br>${L(p.hint)}</p></div>` : ''}
        ${p.imgs ? `<div class="gm-gal">${p.imgs.map(k => `<figure><img src="garidi-images/${k}.jpg" alt="${nm}" onerror="this.parentElement.style.display='none'"></figure>`).join('')}</div>` : ''}
        ${!p.img && !p.imgs && p.hint ? `<p class="gm-sub" style="margin-top:8px">${L(p.hint)}</p>` : ''}
        <ol class="gm-steps">${routeSteps(d, sn, t('arrive', nm))}</ol>`;
      return;
    }
    
    const b = S.block, bl = BLOCKS[b];
    let h = '';
    const wing = {A:'A B', B:'A B', D:'D E', E:'D E'}[b];
    const shared = !!wing, other = {A:'B', B:'A', D:'E', E:'D'}[b];
    
    if (S.floor === null) {
      h = `<h2>${currentLang === 'ar' ? 'الجناح ' + b : currentLang === 'fr' ? 'Aile ' + b : 'Wing ' + b}</h2>
        <p class="gm-sub">${shared ? t('shared', other, wing) : (Object.keys(bl.f).length ? t('pickOrNum') : t('noDocs'))}</p>
        <ol class="gm-steps">${routeSteps(d, sn, t('arriveWing', b))}</ol>`;
      if (b === 'C') h += `<p class="gm-note">${t('gapNote', bl.gap[0], bl.gap[1])}</p>`;
      r.innerHTML = h;
      return;
    }
    const f = S.floor, rg = bl.f[f], total = rg[1] - rg[0] + 1;
    h = `<h2>${t('roomHead', S.num, FL[f])}</h2>
      <p class="gm-sub">${t('corrLine', b, rg[0], rg[1], total)}</p>
      <ol class="gm-steps">${routeSteps(d, sn, t('arriveWing', b), false)}`;
    if (shared) h += `<li>${t('enterWing', wing)}</li>`;
    h += f > 0 ? `<li>${t('climb', FL[f])}</li>` : `<li>${t('stay')}</li>`;
    h += `<li${S.num === null ? ' class="end"' : ''}>${t('findSign', `${b} · ${f===0?'RDC':f+' ETAGE'} · ${pad(rg[0])}-${pad(rg[1])}`)}</li>`;
    if (S.num !== null) h += `<li class="end">${t('yourRoom', S.num)}</li>`;
    h += `</ol>`;
    r.innerHTML = h;
  }
  
  // ============ واجهة برمجية عامة ============
  window.garidiMap = {
    init: function() {
      // انتظر حتى يتم عرض القسم
      setTimeout(buildMap, 50);
    },
    refresh: function() {
      const newLang = window.LANG || localStorage.getItem('lang') || 'ar';
      if (newLang !== currentLang) {
        currentLang = TX[newLang] ? newLang : 'ar';
        updateLabels();
        render();
      }
    },
    destroy: function() {
      $gm = null;
    }
  };
  
})();
