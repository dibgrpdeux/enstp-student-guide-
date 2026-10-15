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
  const DIR =
