// =====================================================================
//  places-west.js — Kazakhstan to Italy: steppe, Silk Road domes, the Caspian, the Caucasus, Turkey, Greece, Rome.
// =====================================================================
function yurt(x, y, s, key) {
  cut(rect(x - 90 * s, y - 70 * s, 180 * s, 70 * s, 5), '#f6f1e2', { key: key + 'a', sb: 6, pat: pat.gingham('rgba(200,64,47,0.18)', 10 * s) });
  cut(domePts(x, y - 70 * s, 100 * s, 70 * s), '#f6f1e2', { key: key + 'b', sb: 6 });
  cut(rect(x - 90 * s, y - 40 * s, 180 * s, 14 * s, 2), '#c8402f', { key: key + 'c', shadow: false, pat: pat.dots('rgba(255,235,200,0.6)', 3, 18) });
  cut(rect(x - 20 * s, y - 50 * s, 40 * s, 50 * s, 12 * s), PAL.woodD, { key: key + 'd', shadow: false, sb: 2 });
}
function camel(x, y, s, key, c = '#c9a574') {
  
  [-46, -28, 30, 48].forEach((dx, i) => tube([x + dx * s, y - 70 * s], [x + (dx + (i % 2 ? 4 : -4)) * s, y], 12 * s, c, key + 'l' + i, { sb: 3, grain: 0.4 }));
  cut(ellipsePts(x, y - 90 * s, 70 * s, 36 * s, 0, 22), c, { key: key + 'b', sb: 5, crayon: '#8a6a3a', crAl: 0.3 });
  cut(ellipsePts(x - 26 * s, y - 130 * s, 18 * s, 22 * s, 0, 14), c, { key: key + 'h1', shadow: false }); cut(ellipsePts(x + 20 * s, y - 130 * s, 18 * s, 22 * s, 0, 14), c, { key: key + 'h2', shadow: false });
  tube([x + 56 * s, y - 100 * s], [x + 98 * s, y - 160 * s], 18 * s, c, key + 'n', { sb: 4, grain: 0.4 }); cut(ellipsePts(x + 112 * s, y - 166 * s, 24 * s, 14 * s, -0.4, 14), c, { key: key + 'hd', sb: 3 });
}
// ---- Almaty: pink peaks, an apple tree, a yurt on the steppe
function placeAlmaty(s) {
  wall('#8fd3c8', { k: 'al', pat: pat.stripes('rgba(255,255,255,0.22)', 40, 130) }); sunDisc(740, 230, 64, '#fff3b0', 'alsun'); cloud(1100, 180, 1.1, 'alc1', 6); cloud(1600, 300, 0.8, 'alc2', 5);
  peaks([[860, 330], [1100, 250], [1340, 300], [1580, 210], [1840, 300]], 730, '#f0b4c0', 'alp1', { snow: '#fff', snowW: 80, crayon: '#c4748a' });
  peaks([[980, 480], [1240, 440], [1500, 480], [1760, 450]], 740, '#d98aa8', 'alp2', { snow: '#fff', snowW: 46 });
  hills('#c9b06a', 760, 36, 'alh', { f: 0.004, drift: -8, bottom: 900 });
  ground('#d9c06a', '#7d7480', { k: 'al', crayon: '#b09240', pat: pat.stripes('rgba(120,90,20,0.12)', 3, 16, 0.2) });
  yurt(1300, 830, 1.1, 'aly'); roundTree(1700, 850, 1.1, '#5aa05a', 'alt');
  [[1660, 760], [1730, 780], [1690, 810], [1750, 740]].forEach(([x, y], i) => cut(ellipsePts(x, y, 9, 9, 0, 10), '#d4382c', { key: 'alap' + i, shadow: false, tear: 0.3 }));
  birds(900, 200, 'alb', 4);
}
// ---- Bishkek: the red flag with the tunduk, poplars, snow peaks
function placeBishkek(s) {
  wall('#cfe2ee', { k: 'bi', pat: pat.stripes('rgba(255,255,255,0.22)', 40, 130) }); cloud(500, 220, 1.1, 'bic1', 6); cloud(1500, 160, 0.9, 'bic2', 5);
  peaks([[800, 360], [1060, 270], [1320, 340], [1620, 250], [1880, 350]], 730, '#4c6fb5', 'bip1', { snow: '#f6fafc', snowW: 84, crayon: '#2f4a8a' });
  hills('#7fb06a', 770, 30, 'bih', { f: 0.004, drift: -8, bottom: 900 });
  ground('#7fb06a', '#7d7480', { k: 'bi', crayon: '#5a8a50' });
  for (let i = 0; i < 7; i++) { const x = 900 + i * 62; tube([x, 790], [x, 752], 8, PAL.woodD, 'bipt' + i, { shadow: false }); cut(ellipsePts(x, 690, 24, 78, 0, 18), i % 2 ? '#3d7c46' : '#5aa05a', { key: 'bipo' + i, sb: 4, crayon: PAL.greenD, crAl: 0.25 }); }
  tube([1560, 860], [1560, 400], 12, PAL.charcoal, 'bipole', { sb: 4 });
  const wv = Math.sin(TT * 3) * 10, fx = 1566, fy = 410;
  cut([[fx, fy], [fx + 180, fy + wv], [fx + 360, fy - wv * 0.5], [fx + 360, fy + 240 - wv * 0.5], [fx + 180, fy + 244 + wv], [fx, fy + 240]], '#d4382c', { key: 'biflag', sb: 8, pat: pat.dots('rgba(255,255,255,0.12)', 3, 22) });
  cut(ellipsePts(fx + 180, fy + 122, 70, 70, 0, 28), '#f6cf55', { key: 'bisun', shadow: false, sb: 3 }); cut(ellipsePts(fx + 180, fy + 122, 36, 36, 0, 22), '#d4382c', { key: 'bitun', shadow: false });
  for (let k = 0; k < 3; k++) { ink([[fx + 144, fy + 122 - 36 + k * 36], [fx + 216, fy + 122 - 36 + k * 36]], { w: 3, color: '#f6cf55', amt: 0.3, key: 'bitl' + k }); }
}
// ---- Samarkand: the Registan, three madrasas with blue domes
function placeRegistan(s) {
  wall('#9cd0e8', { k: 'rg', pat: pat.stripes('rgba(255,255,255,0.22)', 40, 130) }); sunDisc(740, 220, 64, '#fff3b0', 'rgsun'); cloud(1000, 150, 1.0, 'rgc1', 5);
  const sand = '#e9d3a4', teal = '#2f9aa0', blue = '#3f6fb5';
  const minaret = (x, h, key) => { cut([[x - 36, GY + 20], [x - 28, GY - h], [x + 28, GY - h], [x + 36, GY + 20]], sand, { key, sb: 6, pat: bandsPat([sand, '#d9bd80', teal, sand], 28, 0) }); cut(domePts(x, GY - h, 36, 44), teal, { key: key + 'd', sb: 4, pat: pat.stripes('rgba(255,255,255,0.25)', 3, 12) }); };
  cut(rect(900, GY - 190, 940, 210, 3), sand, { key: 'rgwall', sb: 8, pat: pat.dots('rgba(47,154,160,0.22)', 3, 26) });
  minaret(930, 270, 'rgm1'); minaret(1830, 270, 'rgm2');
  cut(rect(1250, GY - 330, 240, 350, 3), '#e0c48a', { key: 'rgpi', sb: 8, pat: pat.dots('rgba(47,154,160,0.3)', 3, 22) });   // the central pishtaq
  cut(domePts(1370, GY - 40, 76, 190), '#3a2f45', { key: 'rgar', shadow: false, sb: 2 }); cut(domePts(1370, GY - 40, 60, 160), '#d6b072', { key: 'rgar2', shadow: false, pat: pat.dots('rgba(47,154,160,0.4)', 3, 14) });
  [[1080, 120], [1650, 120]].forEach(([x, h], i) => { cut(domePts(x, GY - 190, 90, 120), teal, { key: 'rgdm' + i, sb: 8, pat: pat.stripes('rgba(255,255,255,0.25)', 4, 16), crayon: '#1d6a70' }); cut(rect(x - 12, GY - 330, 24, 20, 3), GOLD, { key: 'rgfin' + i, shadow: false }); });
  cut(domePts(1370, GY - 330, 80, 70), blue, { key: 'rgdc', sb: 8, pat: pat.stripes('rgba(255,255,255,0.28)', 4, 16) });
  ground('#9a7a50', '#6a5a50', { k: 'rg', crayon: '#6a4a24', pat: pat.dots('rgba(60,40,20,0.3)', 3, 30) });
  palm(100, 850, 0.9, 'rgp1'); roundTree(1800, 850, 0.9, '#5aa05a', 'rgt');
  birds(1500, 330, 'rgb', 4);
}
// ---- Khiva: the short turquoise minaret, a mud-brick wall, a camel caravan
function placeKhiva(s) {
  wall('#f6d9a8', { k: 'kh', pat: pat.stripes('rgba(255,255,255,0.2)', 40, 130) }); sunDisc(1700, 210, 72, '#fff3b0', 'khsun'); cloud(500, 220, 1.0, 'khc1', 5);
  const mud = '#d9b784';
  cut(rect(-30, GY - 120, W + 60, 140, 0), mud, { key: 'khw', sb: 8, tear: 1.4, pat: pat.dots('rgba(120,80,40,0.25)', 3, 22), crayon: '#a87a44' });
  for (let i = 0; i < 18; i++) cut(rect(i * 110 - 20, GY - 150, 60, 36, 3), mud, { key: 'khc' + i, sb: 4, shadow: false, tear: 0.8, pat: pat.dots('rgba(120,80,40,0.25)', 3, 22) });
  cut([[1230, GY + 10], [1270, GY - 400], [1470, GY - 400], [1510, GY + 10]], '#2f9aa0', { key: 'khm', sb: 10, pat: bandsPat(['#2f9aa0', '#fbf6ea', '#3f6fb5', '#fbf6ea'], 22, 0), crayon: '#1d6a70' });
  cut(rect(1250, GY - 410, 240, 22, 4), '#fbf6ea', { key: 'khtop', sb: 4, shadow: false }); cut(domePts(1370, GY - 410, 0.1, 0.1), '#2f9aa0', { key: 'khx', shadow: false });
  ground('#e0c48a', '#8a7a70', { k: 'kh', crayon: '#b98a52' });
  camel(1000, 840, 0.9, 'khcm1'); camel(1700, 850, 0.85, 'khcm2');
  roundTree(100, 850, 1.0, '#8fae5a', 'kht');
}
// ---- ferries: the Caspian, the Aegean, the Ionian, the Baltic — a deck, a rail, a sea; s.sky picks the light
function ferryScene(s, o) {
  const m = s.sky ?? 'day', skyC = { day: o.sky, dusk: '#f3a3bf', night: '#26315f', dawn: '#f6c9bd' }[m], seaC = { day: o.sea, dusk: '#8c7ad8', night: '#141c40', dawn: '#a9c8dc' }[m];
  wall(skyC, { k: 'fr', pat: pat.stripes('rgba(255,255,255,0.18)', 40, 130) });
  if (m === 'night') { const R = RNG('frst', s.i); for (let i = 0; i < 24; i++) sparkle(R.r(100, W - 100), R.r(80, 520), R.r(4, 10) * (0.6 + 0.4 * ((B + i) % 2))); cut(ellipsePts(1100, 300, 50, 50, 0, 26), '#f6ecc8', { key: 'frmoon', sb: 12 }); }
  else sunDisc(m === 'day' ? 1500 : 1400, m === 'day' ? 230 : 560, 66, m === 'dusk' ? '#f6cf55' : '#fff3b0', 'frsun');
  if (m !== 'night') { cloud(500, 200, 1.1, 'frc1', 6); cloud(1100, 130, 0.8, 'frc2', 5); }
  cut(rect(-30, 640, W + 60, 230, 0), seaC, { key: 'sea', tear: 1.2, sy: -3, pat: wavePat([seaC, m === 'night' ? '#1d2a5c' : 'rgba(255,255,255,0.18)'], 14, 4, 0.03, TT * 2) });
  if (o.after) o.after(s);
  cut(rect(1540, 770, 380, 90, 0), '#2a3a6a', { key: 'hull', sb: 6, shade: false });
  cut(rect(1560, 540, 330, 232, 4), '#fbf6ea', { key: 'cabin', sb: 8, pat: pat.lines('rgba(0,0,0,0.08)', 16) }); for (let i = 0; i < 6; i++) cut(rect(1585 + i * 50, 580, 32, 36, 3), m === 'night' ? '#f6e08a' : '#6f9fb8', { key: 'cabw' + i, shadow: false, shade: false, tear: 0.3, line: PAL.charcoal, lw: 2 });
  cut(rect(1680, 440, 76, 106, 4), PAL.navy, { key: 'funnel', sb: 6 }); cut(rect(1680, 466, 76, 22, 0), '#d4382c', { key: 'funnelb', shadow: false, shade: false, tear: 0.3 });
  cut(ellipsePts(1620, 700, 24, 24, 0, 20), '#fbf6ea', { key: 'ring', sb: 4, line: '#d4382c', lw: 8 });
  // the deck, the rail
  cut(rect(-30, ROADY - 20, W + 60, 136, 0), '#5a5a68', { key: 'deck', tear: 1.0, sy: -4, sb: 8, pat: pat.lines('rgba(0,0,0,0.18)', 22), crayon: 'rgba(255,255,255,0.18)' });
  for (let i = 0; i < 11; i++) cut(rect(i * 220 - 220 - mod(TT * 331, 220), 920, 110, 8, 3), '#f6f1e2', { key: 'fdash' + i, shadow: false, sb: 2, tear: 0.4, grain: 0.3, shade: false });
  tube([-30, 770], [W + 30, 770], 12, '#fbf6ea', 'rail', { sb: 4, grain: 0.3 }); tube([-30, 820], [W + 30, 820], 10, '#fbf6ea', 'rail2', { sb: 3, grain: 0.3 });
  for (let i = 0; i < 12; i++) tube([i * 190 + 60, 760], [i * 190 + 60, 860], 11, '#fbf6ea', 'post' + i, { sb: 3, grain: 0.3 });
  birds(800, 330, 'frb', 4, m === 'night' ? '#f6ecc8' : PAL.ink);
}
function derricks(x0, n, key) {   // offshore rigs: legs, a deck, a lattice derrick
  for (let i = 0; i < n; i++) { const x = x0 + i * 190, h = 120 + (i % 3) * 30;
    [-34, -12, 12, 34].forEach((dx, k) => tube([x + dx, 700], [x + dx, 650], 6, PAL.charcoal, key + 'l' + i + k, { shadow: false, shade: false }));
    cut(rect(x - 46, 638, 92, 16, 2), PAL.charcoal, { key: key + 'd' + i, sb: 3, shade: false });
    cut(tri(x, 640, 56, h), 'rgba(0,0,0,0.001)', { key: key + 't' + i, shadow: false, grain: false, shade: false, line: PAL.charcoal, lw: 5 });
    ink([[x - 18, 640 - h * 0.3], [x + 18, 640 - h * 0.6]], { w: 3, color: PAL.charcoal, amt: 0.3, key: key + 'x1' + i }); ink([[x + 18, 640 - h * 0.3], [x - 18, 640 - h * 0.6]], { w: 3, color: PAL.charcoal, amt: 0.3, key: key + 'x2' + i });
    cut(rect(x + 30, 590, 10, 50, 2), '#fbf6ea', { key: key + 'f' + i, shadow: false, shade: false }); } }
function placeFerryCaspian(s) { ferryScene(s, { sky: '#d6e4ea', sea: '#6f9fb8', after: () => derricks(1000, 3, 'drk') }); }
function windmill(x, base, s, key) {
  cut([[x - 36 * s, base], [x - 24 * s, base - 110 * s], [x + 24 * s, base - 110 * s], [x + 36 * s, base]], '#fbf6ea', { key: key + 'a', sb: 5 }); cut(domePts(x, base - 110 * s, 30 * s, 36 * s), '#c8402f', { key: key + 'b', sb: 4 });
  for (let k = 0; k < 4; k++) { const a = TT * 0.8 + k * Math.PI / 2; tube([x, base - 110 * s], [x + Math.cos(a) * 80 * s, base - 110 * s + Math.sin(a) * 80 * s], 6 * s, PAL.woodD, key + 'v' + k, { sb: 2, shade: false }); }
}
function placeFerryChios(s) { ferryScene(s, { sky: '#8fc7e0', sea: '#3fbfc0', after: () => { cut(domePts(1500, 650, 380, 90), '#e9dfc4', { key: 'island', sb: 6, crayon: '#b9a070' }); windmill(1380, 596, 0.8, 'chw1'); windmill(1560, 580, 0.7, 'chw2'); } }); }
function placeFerryPatras(s) { ferryScene({ ...s, sky: 'dusk' }, { sky: '#f3a3bf', sea: '#8c7ad8', after: () => { cut(domePts(1200, 650, 420, 70), '#4a3a6a', { key: 'pisl', sb: 6 }); } }); }
function placeFerryBaltic(s) { ferryScene(s, { sky: '#cfe2ee', sea: '#4c6fb5', after: () => { cut(domePts(1500, 650, 300, 40), '#3d7c46', { key: 'bisl', sb: 4 }); } }); }
// ---- Baku: the Flame Towers at dusk
function placeBaku(s) {
  wall('#b9a0e0', { k: 'ba', pat: pat.stripes('rgba(255,255,255,0.18)', 40, 130) }); sunDisc(1000, 440, 80, '#f6e08a', 'basun'); cloud(900, 200, 1.0, 'bac1', 5); cloud(1500, 330, 0.8, 'bac2', 6);
  hills('#b98ab0', 700, 60, 'bah', { f: 0.004, ph: 1, drift: -6, bottom: 900 });
  [[1300, 480, 70], [1500, 420, 86], [1700, 500, 64]].forEach(([x, h, w], i) => {
    const L = [], Rr = [];   // a flame: bulging body, the tip curling to the right
    for (let k = 0; k <= 20; k++) { const t = k / 20, hw = w * Math.pow(1 - t, 0.55), cx = x + w * 1.1 * t * t; L.push([cx - hw, GY + 20 - (h + 20) * t]); Rr.push([cx + hw, GY + 20 - (h + 20) * t]); }
    cut([...L, ...Rr.reverse()], '#e87aa0', { key: 'bafl' + i, sb: 8, pat: bandsPat(['#e87aa0', '#f6e08a', '#c966c0', '#f6e08a'], 22, 0), crayon: '#a04a90', crAl: 0.3 });
  });
  cut(rect(840, GY - 80, 420, 100, 3), '#d9b784', { key: 'bawall', sb: 6, pat: pat.dots('rgba(120,80,40,0.25)', 3, 22) }); for (let i = 0; i < 8; i++) cut(rect(850 + i * 52, GY - 108, 30, 34, 3), '#d9b784', { key: 'bac' + i, shadow: false, sb: 3, tear: 0.6 });
  ground('#c9a574', '#6a6470', { k: 'ba', crayon: '#9a7a44' });
  birds(700, 300, 'bab', 4); palm(1840, 850, 0.7, 'bap1'); roundTree(100, 850, 1.0, '#4a8c6a', 'bat');
}
// ---- Tbilisi: pastel houses with balconies climbing a hill, the fortress, the five-cross flag
function placeTbilisi(s) {
  wall('#cfe2ee', { k: 'tb', pat: pat.stripes('rgba(255,255,255,0.22)', 40, 130) }); sunDisc(740, 240, 64, '#fff3b0', 'tbsun'); cloud(900, 190, 1.0, 'tbc1', 5); cloud(1560, 150, 0.8, 'tbc2', 6);
  hills('#b98576', 520, 220, 'tbhill', { f: 0.0022, ph: 4, bottom: 900 });
  cut(rect(1420, 330, 260, 130, 4), '#d9c9a8', { key: 'tbfort', sb: 8, pat: pat.dots('rgba(120,100,70,0.3)', 3, 18) }); for (let i = 0; i < 6; i++) cut(rect(1424 + i * 44, 306, 26, 30, 3), '#d9c9a8', { key: 'tbfc' + i, shadow: false, sb: 3, tear: 0.6 });
  cut(rect(1660, 280, 60, 180, 4), '#d9c9a8', { key: 'tbtw', sb: 6, pat: pat.dots('rgba(120,100,70,0.3)', 3, 18) }); cut(tri(1690, 286, 90, 80), '#c8402f', { key: 'tbtr', sb: 5 });
  const cols = ['#f3a3bf', '#f6cf55', '#a9d9c6', '#8c7ad8', '#f8c3d4', '#d9a441'];
  for (let r = 0; r < 4; r++) for (let c = 0; c < 8; c++) { const x = 820 + c * 120 + (r % 2) * 55, y = 560 + r * 56 + c * 8; if (x > 1900) continue; house(x, y + 130, 100, 110, cols[(r * 3 + c) % 6], '#a8603a', 'tbh' + r + c, { cols: 2, rows: 1, rh: 34 }); cut(rect(x - 6, y + 66, 112, 12, 2), PAL.woodD, { key: 'tbb' + r + c, shadow: false, sb: 3, shade: false }); }
  ground('#7fae6a', '#7d7480', { k: 'tb', crayon: '#5a8a50' });
  tube([300, 860], [300, 520], 10, PAL.charcoal, 'tbpole', { sb: 4 });
  cut(rect(300, 530, 220, 150, 3), '#fff', { key: 'tbflag', sb: 6 }); cut(rect(396, 530, 28, 150, 0), '#d4382c', { key: 'tbf1', shadow: false, shade: false, tear: 0 }); cut(rect(300, 592, 220, 28, 0), '#d4382c', { key: 'tbf2', shadow: false, shade: false, tear: 0 });
  [[350, 560], [470, 560], [350, 650], [470, 650]].forEach(([x, y], i) => { cut(rect(x - 3, y - 12, 6, 24, 0), '#d4382c', { key: 'tbc' + i, shadow: false, shade: false, tear: 0 }); cut(rect(x - 12, y - 3, 24, 6, 0), '#d4382c', { key: 'tbd' + i, shadow: false, shade: false, tear: 0 }); });
}
// ---- Trabzon: tea terraces and a monastery in the cliff, the red flag with the crescent
function placeTrabzon(s) {
  wall('#b9dde0', { k: 'tz', pat: pat.stripes('rgba(255,255,255,0.28)', 40, 130) }); cloud(420, 200, 1.1, 'tzc1', 5);
  hills('#5aa05a', 520, 160, 'tzh1', { f: 0.0028, ph: 2, bottom: 900, pat: wavePat(['#5aa05a', '#4a8c4e', '#6fae6a'], 11, 4, 0.02) });
  cut([[1170, GY + 20], [1190, 520], [1230, 380], [1290, 400], [1330, 300], [1420, 330], [1480, 260], [1560, 300], [1640, 250], [1720, 330], [1760, GY + 20]], '#8a8590', { key: 'tzcl', sb: 10, tear: 1.6, crayon: '#5a5560', crA: 1.5, crAl: 0.4 });
  cut(rect(1280, 460, 360, 120, 4), '#e9d3a4', { key: 'tzmon', sb: 8, pat: pat.dots('rgba(120,80,40,0.2)', 3, 22) }); cut(rect(1300, 410, 120, 56, 4), '#d9b784', { key: 'tzm2', sb: 6 }); [1330, 1400, 1480, 1560].forEach((x, i) => cut(domePts(x, 580, 14, 36), '#3a2f45', { key: 'tzw' + i, shadow: false, sb: 2 }));
  cut([[1270, 464], [1460, 400], [1650, 464]], '#c8402f', { key: 'tzrf', sb: 6, pat: pat.stripes('rgba(0,0,0,0.12)', 4, 14, 0.5) });
  hills('#3d7c46', 770, 70, 'tzh2', { f: 0.0045, ph: 4, drift: -10, bottom: 900, pat: wavePat(['#3d7c46', '#6fae6a'], 10, 3, 0.03) });
  ground('#6f9a4a', '#7d7480', { k: 'tz', crayon: '#4a7a30' });
  tube([1640, 860], [1640, 500], 10, PAL.charcoal, 'tzpole', { sb: 4 }); cut(rect(1640, 510, 250, 170, 3), '#d4382c', { key: 'tzflag', sb: 6 });
  cut(ellipsePts(1722, 595, 46, 46, 0, 24), '#fff', { key: 'tzcr1', shadow: false }); cut(ellipsePts(1738, 595, 38, 38, 0, 24), '#d4382c', { key: 'tzcr2', shadow: false }); sparkle(1782, 595, 15, '#fff');
}
// ---- Cappadocia: fairy chimneys and hot-air balloons
function balloon(x, y, s, c1, c2, key) {
  const wob = Math.sin(TT * 1.3 + x) * 6 * s;
  cut(ellipsePts(x, y + wob, 70 * s, 86 * s, 0, 28), c1, { key: key + 'a', sb: 8, pat: bandsPat([c1, c2], 14 * s, 1.5707), crayon: 'rgba(0,0,0,0.2)', crAl: 0.2 });
  cut(rect(x - 20 * s, y + wob + 100 * s, 40 * s, 28 * s, 4), PAL.woodD, { key: key + 'b', sb: 4, shade: false }); tube([x - 18 * s, y + wob + 80 * s], [x - 16 * s, y + wob + 102 * s], 3, PAL.ink, key + 'r1', { shadow: false, shade: false }); tube([x + 18 * s, y + wob + 80 * s], [x + 16 * s, y + wob + 102 * s], 3, PAL.ink, key + 'r2', { shadow: false, shade: false });
}
function placeCappadocia(s) {
  wall('#b9a0e0', { k: 'cp', pat: pat.stripes('rgba(255,255,255,0.2)', 40, 130) }); cut(rect(-30, 560, W + 60, 220, 0), '#d8aee0', { key: 'cpglow', shadow: false, tear: 0, shade: false, grain: 0.5 }); sunDisc(720, 320, 74, '#fff3b0', 'cpsun');
  [[900, 270, 1.0, '#d4382c', '#fbf6ea'], [1250, 200, 0.8, PAL.blue, '#f6cf55'], [1650, 330, 1.1, PAL.teal, '#fbf6ea'], [1480, 450, 0.7, PAL.pink, '#fbf6ea'], [1080, 520, 0.5, PAL.yellow, '#fbf6ea']].forEach(([x, y, k, a, b], i) => balloon(x, y, k, a, b, 'cpb' + i));
  hills('#d9b988', 740, 60, 'cph', { f: 0.004, ph: 2, drift: -5, bottom: 900 });
  [[1000, 220, 80], [1180, 300, 100], [1380, 190, 74], [1580, 270, 96], [1780, 220, 84], [880, 140, 56]].forEach(([x, h, w], i) => { cut([[x - w, GY + 40], [x - w * 0.35, GY - h * 0.5], [x - w * 0.25, GY - h], [x + w * 0.25, GY - h], [x + w * 0.35, GY - h * 0.5], [x + w, GY + 40]], '#e9c9a0', { key: 'cpc' + i, sb: 8, crayon: '#b98a52', crAl: 0.4, crA: 1.5, pat: bandsPat(['#e9c9a0', '#dcb888', '#f0d6b0'], 26, 0) }); cut(domePts(x, GY - h, w * 0.42, 46), '#a8814a', { key: 'cpt' + i, sb: 5, crayon: '#6a4a24' }); [-0.3, 0.1].forEach((dx, k) => cut(domePts(x + dx * w, GY - h * 0.42, 14, 26), '#6a4a34', { key: 'cpw' + i + k, shadow: false, shade: false, sb: 2 })); });
  ground('#d9b988', '#7d7480', { k: 'cp', crayon: '#b98a52' });
  [[1100, 850], [1500, 860], [1860, 850]].forEach(([x, y], i) => cut(ellipsePts(x, y, 40, 22, 0, 16), '#c9a574', { key: 'cprk' + i, sb: 4, crayon: '#8a6a3a', crAl: 0.4 }));
  [[200, 860, 110, 50], [360, 850, 80, 38], [1740, 860, 120, 54]].forEach(([x, y, h, w], i) => { cut([[x - w, y], [x - w * 0.3, y - h], [x + w * 0.3, y - h], [x + w, y]], '#e9c9a0', { key: 'cpf' + i, sb: 6, crayon: '#b98a52', crAl: 0.4, pat: bandsPat(['#e9c9a0', '#dcb888'], 20, 0) }); cut(domePts(x, y - h, w * 0.45, 28), '#a8814a', { key: 'cpfc' + i, sb: 4 }); });
}
// ---- Izmir: the Konak clock tower on the bay
function placeIzmir(s) {
  wall('#a9d9f0', { k: 'iz', pat: pat.stripes('rgba(255,255,255,0.22)', 40, 130) }); sunDisc(1700, 220, 66, '#fff3b0', 'izsun'); cloud(600, 200, 1.1, 'izc1', 6); birds(1000, 280, 'izb');
  cut(rect(-30, 640, W + 60, 130, 0), '#3f9fc0', { key: 'izsea', tear: 1.2, sy: -3, pat: wavePat(['#3f9fc0', 'rgba(255,255,255,0.2)'], 12, 3, 0.03, TT) });
  [[1000, 700, 1.0], [1250, 690, 0.8]].forEach(([x, y, k], i) => { cut([[x - 50 * k, y], [x + 50 * k, y], [x + 36 * k, y + 20 * k], [x - 36 * k, y + 20 * k]], PAL.woodD, { key: 'izbt' + i, sb: 4 }); tube([x, y], [x, y - 110 * k], 5, PAL.charcoal, 'izm' + i, { shadow: false }); cut(tri(x + 4 * k, y - 10 * k, 60 * k, 96 * k), '#fff', { key: 'izs' + i, sb: 3, shade: false }); });
  ground('#e9d3a4', '#7d7480', { k: 'iz', crayon: '#b98a52' });
  cut(rect(1470, 380, 150, 340, 4), '#f0e2b8', { key: 'iztw', sb: 8, pat: pat.dots('rgba(120,80,40,0.2)', 3, 22), line: '#c9a574', lw: 3 }); cut(rect(1450, 370, 190, 24, 4), '#e9d3a4', { key: 'iztc', sb: 4 }); cut(domePts(1545, 370, 70, 60), '#3f9f9a', { key: 'iztd', sb: 6 });
  cut(ellipsePts(1545, 450, 42, 42, 0, 26), '#fff', { key: 'izck', sb: 3, line: PAL.ink, lw: 3 }); ink([[1545, 450], [1545, 422]], { w: 5, key: 'izh1' }); ink([[1545, 450], [1566, 456]], { w: 4, key: 'izh2' });
  cut(rect(1450, 700, 190, 28, 3), '#c9a574', { key: 'izbase', sb: 4 });
  palm(100, 850, 1.0, 'izp1'); palm(1840, 850, 0.8, 'izp2');
}
// ---- Athens: the Parthenon on its rock
function placeAthens(s) {
  wall('#8fc7e0', { k: 'at', pat: pat.stripes('rgba(255,255,255,0.2)', 40, 130) }); sunDisc(740, 230, 66, '#fff3b0', 'atsun'); cloud(1000, 170, 1.0, 'atc1', 5); birds(700, 300, 'atb');
  cut([[820, GY + 20], [900, 540], [1100, 470], [1500, 480], [1760, 540], [1900, GY + 20]], '#d9b988', { key: 'atrock', sb: 10, tear: 1.6, crayon: '#a8814a', crAl: 0.4 });
  cut(rect(1000, 440, 700, 20, 3), '#fbf6ea', { key: 'atst', sb: 5 }); cut(rect(1020, 420, 660, 18, 3), '#fbf6ea', { key: 'atst2', sb: 4 });
  for (let i = 0; i < 9; i++) cut(rect(1034 + i * 72, 300, 34, 120, 4), '#fbf6ea', { key: 'atcol' + i, sb: 5, pat: pat.stripes('rgba(120,100,70,0.25)', 3, 10) });
  cut(rect(1010, 276, 680, 26, 3), '#f2ead6', { key: 'atent', sb: 5 }); cut(tri(1350, 276, 680, 90), '#fbf6ea', { key: 'atped', sb: 6, line: '#d9c9a8', lw: 3 });
  ground('#c9b06a', '#7d7480', { k: 'at', crayon: '#a8814a' });
  for (let i = 0; i < 3; i++) { const x = 1760 + i * 8, y = 840 - i * 6; tube([x, y], [x, y - 70], 12, PAL.woodD, 'atot' + i, { sb: 3 }); cut(ellipsePts(x, y - 100, 60, 40, 0, 18), '#8fae7a', { key: 'atol' + i, sb: 5, crayon: '#5a7a4a' }); }
  roundTree(100, 850, 1.0, '#8fae7a', 'att');
}
// ---- Rome: the Colosseum, umbrella pines
function placeRome(s) {
  wall('#cfe2ee', { k: 'ro', pat: pat.stripes('rgba(255,255,255,0.22)', 40, 130) }); sunDisc(1700, 210, 66, '#fff3b0', 'rosun'); cloud(500, 190, 1.0, 'roc1', 5); cloud(1200, 130, 0.8, 'roc2', 6);
  hills('#c9b06a', 760, 36, 'roh', { f: 0.004, drift: -6, bottom: 900 });
  cut([[880, GY + 30], [940, 430], [1500, 420], [1620, 470], [1700, 530], [1800, GY + 30]], '#e0c9a0', { key: 'rocol', sb: 10, tear: 1.2, crayon: '#b98a52', crAl: 0.3 });
  for (let r = 0; r < 3; r++) for (let c = 0; c < 12; c++) { const x = 960 + c * 66, y = 450 + r * 80, top = x < 1480 ? 430 : 430 + (x - 1480) * 0.45; if (y < top) continue; cut(domePts(x + 24, y + 60, 22, 42), '#6a4a34', { key: 'roa' + r + c, shadow: false, sb: 2, shade: false, tear: 0.4 }); }
  ground('#a9c46a', '#7d7480', { k: 'ro', crayon: '#7a9a40' });
  [[190, 90], [250, 130]].forEach(([x, h], i) => { cut(rect(x, 850 - h, 30, h, 3), '#e9d9b8', { key: 'rocol' + i, sb: 5, pat: pat.stripes('rgba(120,100,70,0.25)', 3, 10) }); cut(rect(x - 6, 850 - h - 14, 42, 14, 2), '#e9d9b8', { key: 'rocap' + i, sb: 4 }); });
  [[140, 850], [1830, 850], [1060, 810]].forEach(([x, y], i) => { tube([x, y], [x + 8, y - 180 * (i === 2 ? 0.7 : 1)], 14, PAL.woodD, 'rop' + i, { sb: 3 }); cut(ellipsePts(x + 8, y - 190 * (i === 2 ? 0.7 : 1), 130 * (i === 2 ? 0.7 : 1), 36, 0, 22), PAL.greenD, { key: 'ropc' + i, sb: 5, crayon: '#2f6a3a' }); });
  birds(900, 330, 'rob', 4);
}
