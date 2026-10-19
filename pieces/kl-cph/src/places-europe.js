// =====================================================================
//  places-europe.js — Florence to Copenhagen, the whole-route map.
// =====================================================================
function fachwerk(x, y, w, h, c, rc, key, o = {}) {   // a half-timbered house: x, y = bottom-left
  cut(rect(x, y - h, w, h, 3), c, { key: key + 'w', sb: 6 });
  cut([[x - 10, y - h + 2], [x + w / 2, y - h - (o.rh ?? w * 0.5)], [x + w + 10, y - h + 2]], rc, { key: key + 'r', sb: 6, pat: pat.stripes('rgba(0,0,0,0.14)', 4, 14, 0.5) });
  ink([[x, y - h], [x + w, y - h]], { w: 6, color: '#5a3a24', amt: 0.4, key: key + 'b1' }); ink([[x + w / 2, y - h], [x + w / 2, y]], { w: 6, color: '#5a3a24', amt: 0.4, key: key + 'b2' }); ink([[x, y - h * 0.5], [x + w, y - h * 0.5]], { w: 6, color: '#5a3a24', amt: 0.4, key: key + 'b3' });
  ink([[x, y - h], [x + w / 2, y - h * 0.5]], { w: 5, color: '#5a3a24', amt: 0.4, key: key + 'b4' }); ink([[x + w, y - h], [x + w / 2, y - h * 0.5]], { w: 5, color: '#5a3a24', amt: 0.4, key: key + 'b5' });
  [[0.22, 0.28], [0.7, 0.28], [0.22, 0.74], [0.7, 0.74]].forEach(([fx, fy], i) => cut(rect(x + w * fx - 9, y - h + h * fy - 12, 18, 24, 2), '#fff3c8', { key: key + 'x' + i, shadow: false, shade: false, tear: 0.3, line: '#5a3a24', lw: 2 }));
}
function spire(x, base, w, h, c, key) { cut(rect(x - w / 2, base - h, w, h, 3), '#b84a3a', { key: key + 'a', sb: 6, pat: pat.lines('rgba(0,0,0,0.15)', 10) }); cut(tri(x, base - h, w * 1.2, w * 2.8), c, { key: key + 'b', sb: 5, tear: 0.5 }); }
// ---- Florence: the Duomo's red dome and Giotto's striped campanile
function placeFlorence(s) {
  wall('#cfe2ee', { k: 'fl', pat: pat.stripes('rgba(255,255,255,0.22)', 40, 130) }); sunDisc(740, 220, 64, '#fff3b0', 'flsun'); cloud(900, 170, 1.0, 'flc1', 5);
  hills('#a9c46a', 770, 40, 'flh', { f: 0.004, drift: -6, bottom: 900 });
  cut(rect(1100, 440, 320, 280, 4), '#f6ecd6', { key: 'fldr', sb: 8, pat: bandsPat(['#f6ecd6', '#f3a3bf', '#a9d9c6'], 22, 0) });
  cut(domePts(1260, 440, 150, 210), '#b84a3a', { key: 'fldm', sb: 10, pat: pat.stripes('rgba(255,245,230,0.6)', 4, 36), crayon: '#8a2f22', crAl: 0.25 }); cut(rect(1244, 190, 32, 50, 3), '#f6ecd6', { key: 'fllt', sb: 5 }); cut(tri(1260, 190, 40, 50), '#b84a3a', { key: 'flls', sb: 4 }); cut(ellipsePts(1260, 138, 12, 12, 0, 12), GOLD, { key: 'flgl', shadow: false });
  cut(rect(1560, 280, 110, 440, 3), '#f6ecd6', { key: 'flct', sb: 8, pat: bandsPat(['#f6ecd6', '#f3a3bf', '#a9d9c6'], 20, 1.5707) }); [330, 440, 550].forEach((y, i) => cut(domePts(1615, y + 40, 20, 50), '#3a2f45', { key: 'flcw' + i, shadow: false }));
  ground('#c9b06a', '#7d7480', { k: 'fl', crayon: '#a8814a' });
  [[940, 840], [1000, 835]].forEach(([x, y], i) => { tube([x, y], [x + 4, y - 150], 12, PAL.woodD, 'flc' + i, { sb: 3 }); cut(ellipsePts(x + 4, y - 160, 26, 70, 0, 18), PAL.greenD, { key: 'flcy' + i, sb: 4 }); });
  birds(700, 280, 'flb');
}
// ---- Venice: palazzi over a canal, a gondola, the campanile
function placeVenice(s) {
  wall('#cfe2ee', { k: 've', pat: pat.stripes('rgba(255,255,255,0.25)', 40, 130) }); sunDisc(1700, 220, 66, '#fff3b0', 'vesun'); cloud(500, 200, 1.0, 'vec1', 6);
  cut(rect(1495, 380, 90, 340, 3), '#9a3a3a', { key: 'vect', sb: 8, pat: pat.lines('rgba(0,0,0,0.15)', 12) }); cut(rect(1475, 370, 130, 30, 3), '#f6ecd6', { key: 'vect2', sb: 4 }); cut(tri(1540, 370, 110, 100), '#3f9f9a', { key: 'vects', sb: 5, tear: 0.5 }); sparkle(1540, 258, 12, GOLD);
  const cols = ['#f3a3bf', '#f6cf55', '#f0e2b8', '#c97a8a', '#a9d9c6'];
  for (let i = 0; i < 6; i++) { const x = 820 + i * 140, h = 230 + (i % 3) * 36; cut(rect(x, GY - h + 30, 134, h, 3), cols[i % 5], { key: 'vep' + i, sb: 7, pat: pat.dots('rgba(255,255,255,0.18)', 3, 22) }); for (let r = 0; r < 2; r++) for (let c = 0; c < 2; c++) cut(domePts(x + 34 + c * 62, GY - h + 100 + r * 86, 16, 36), '#6a4a34', { key: 'vew' + i + r + c, shadow: false, shade: false, sb: 2, tear: 0.3 }); }
  ground('#d9c9a8', '#8a7a70', { k: 've', crayon: '#b98a52', pat: pat.dots('rgba(120,100,70,0.2)', 3, 26) });
  cut(rect(-30, GY + 20, W + 60, 150, 0), '#3f9f9a', { key: 'vewater', tear: 1.0, sy: -3, pat: wavePat(['#3f9f9a', '#52bfb8', '#2f8a90'], 12, 3, 0.03, TT) });
  const gx = 1560 + Math.sin(TT * 0.7) * 24, gk = 1.4, gp = (dx, dy) => [gx + dx * gk, GY + 82 + dy * gk];
  cut([gp(-130, 0), gp(130, 0), gp(190, -42), gp(130, -16), gp(-130, -16), gp(-180, -46)], PAL.ink, { key: 'gond', sb: 5, tear: 0.6 }); tube(gp(190, -42), gp(196, -80), 9, GOLD, 'gondp', { sb: 2 });
  tube(gp(-110, -16), gp(-110, -86), 34, '#d4382c', 'gdl', { sb: 3, pat: pat.stripes('rgba(255,255,255,0.8)', 5, 14) }); cut(ellipsePts(...gp(-110, -112), 20, 20, 0, 14), PAL.skin2, { key: 'gdh', sb: 3 }); cut(ellipsePts(...gp(-110, -130), 34, 9, 0, 14), '#e6c36a', { key: 'gdhat', sb: 3 }); tube(gp(-110, -70), gp(-40, 22), 6, PAL.woodD, 'gdoar', { sb: 2, shade: false });
  [[700, 740], [860, 750]].forEach(([x, y], i) => { cut(rect(x, y - 70, 14, 100, 3), i % 2 ? '#d4382c' : '#3f6fb5', { key: 'vepole' + i, sb: 4, pat: pat.stripes('rgba(255,255,255,0.7)', 5, 18, 0) }); });
}
// ---- the Dolomites: pale spires at alpenglow, meadows, a chalet
function placeDolomites(s) {
  wall('#e8d4e6', { k: 'do', pat: pat.stripes('rgba(255,255,255,0.25)', 40, 130) }); sunDisc(740, 230, 62, '#fff3b0', 'dosun'); cloud(1100, 160, 1.0, 'doc1', 5);
  peaks([[860, 330], [1000, 240], [1140, 320], [1300, 200], [1460, 310], [1640, 250], [1840, 330]], 740, '#f0d9c8', 'dop1', { snow: '#fff', snowW: 46, pat: bandsPat(['#f0d9c8', '#e6bfae', '#f6e6d8'], 30, 1.5707), crayon: '#b98a7a' });
  hills('#8fcf9a', 780, 40, 'doh', { f: 0.005, drift: -8, bottom: 900 });
  ground('#7fb06a', '#7d7480', { k: 'do', crayon: '#5a8a50' });
  for (let i = 0; i < 8; i++) pine(900 + i * 110, 800 + (i % 2) * 20, 0.7 + (i % 3) * 0.12, '#2f7a5c', 'dopn' + i);
  house(1640, 830, 150, 100, '#d9b784', '#8a5638', 'dochal', { cols: 2, rows: 1 }); cut(rect(1650, 770, 130, 16, 2), PAL.pink, { key: 'dofl', shadow: false, sb: 2, shade: false });
  birds(780, 300, 'dob');
}
// ---- Innsbruck: pastel houses on the Inn, a green onion dome, the mountains behind
function placeInnsbruck(s) {
  wall('#cfe2ee', { k: 'in', pat: pat.stripes('rgba(255,255,255,0.22)', 40, 130) }); cloud(500, 190, 1.0, 'inc1', 5); cloud(1300, 140, 0.8, 'inc2', 6);
  peaks([[860, 360], [1080, 290], [1320, 360], [1600, 270], [1860, 350]], 730, '#8c9ab5', 'inp', { snow: '#f6fafc', snowW: 74, crayon: '#5b6a8a' });
  const cols = ['#f3a3bf', '#f6cf55', '#a9d9c6', '#8c7ad8', '#f8c3d4', '#d98b7a'];
  for (let i = 0; i < 7; i++) house(820 + i * 124, GY + 90, 116, 150 + (i % 3) * 30, cols[i % 6], '#a8603a', 'inh' + i, { cols: 2, rows: 2, rh: 56 });
  cut(rect(1540, 340, 70, 400, 3), '#f0e2b8', { key: 'inch', sb: 6 }); cut(domePts(1575, 340, 50, 90), '#3f9f9a', { key: 'inon', sb: 6, pat: pat.stripes('rgba(255,255,255,0.22)', 3, 12) }); cut(tri(1575, 250, 16, 60), '#3f9f9a', { key: 'inns', sb: 3 });
  ground('#7fae6a', '#7d7480', { k: 'in', crayon: '#5a8a50' });
  cut(rect(-30, GY + 90, W + 60, 80, 0), '#3fbfc0', { key: 'inriver', tear: 1.0, sy: -3, pat: wavePat(['#3fbfc0', '#52d6c4'], 12, 3, 0.03, TT) });
  tube([300, 860], [300, 560], 10, PAL.charcoal, 'inpole', { sb: 4 }); cut(rect(300, 570, 220, 40, 0), '#d4382c', { key: 'inf1', sb: 5, tear: 0.3 }); cut(rect(300, 610, 220, 40, 0), '#fff', { key: 'inf2', sb: 5, tear: 0.3 }); cut(rect(300, 650, 220, 40, 0), '#d4382c', { key: 'inf3', sb: 5, tear: 0.3 });
}
// ---- Munich: the Frauenkirche's twin domes, blue-and-white bunting, a maypole
function placeMunich(s) {
  wall('#8fc7e0', { k: 'mu', pat: pat.stripes('rgba(255,255,255,0.22)', 40, 130) }); sunDisc(740, 230, 62, '#fff3b0', 'musun'); cloud(900, 170, 1.0, 'muc1', 5); cloud(1600, 300, 0.8, 'muc2', 6);
  cut(rect(1130, 380, 420, 340, 4), '#b84a3a', { key: 'mubd', sb: 8, pat: pat.lines('rgba(0,0,0,0.16)', 12) }); cut([[1110, 392], [1340, 310], [1570, 392]], '#8a5638', { key: 'murf', sb: 7 });
  [1220, 1460].forEach((x, i) => { cut(rect(x - 50, 220, 100, 220, 3), '#b84a3a', { key: 'mutw' + i, sb: 7, pat: pat.lines('rgba(0,0,0,0.16)', 12) }); cut(domePts(x, 224, 58, 100), '#3f9f7a', { key: 'mudm' + i, sb: 7, pat: pat.stripes('rgba(255,255,255,0.18)', 3, 12), crayon: '#2f6a50' }); cut(tri(x, 128, 14, 50), '#3f9f7a', { key: 'mup' + i, sb: 3 }); });
  ground('#7fae6a', '#7d7480', { k: 'mu', crayon: '#5a8a50' });
  tube([1800, 860], [1800, 380], 14, PAL.woodL, 'mumay', { sb: 5, grain: 0.6 }); [[420, '#3f6fb5'], [520, '#fff'], [620, '#3f6fb5'], [720, '#fff']].forEach(([y, c], i) => cut([[1800, y], [1800 + (i % 2 ? -70 : 70), y + 16], [1800, y + 34]], c, { key: 'mupn' + i, sb: 3, tear: 0.4 }));
  for (let i = 0; i < 12; i++) { const bx = 840 + i * 80; cut([[bx, 690 + Math.sin(i) * 6], [bx + 40, 690 + 40], [bx + 80, 690 + Math.sin(i + 1) * 6]], i % 2 ? '#fff' : '#3f6fb5', { key: 'mubn' + i, sb: 3, tear: 0.4 }); }
  birds(700, 280, 'mub');
}
// ---- Nuremberg: the Kaiserburg on its sandstone rock, half-timbered houses
function placeNuremberg(s) {
  wall('#d6dff0', { k: 'nu', pat: pat.stripes('rgba(255,255,255,0.25)', 40, 130) }); cloud(500, 190, 1.0, 'nuc1', 5); cloud(1500, 140, 0.8, 'nuc2', 6);
  cut([[880, GY + 30], [940, 480], [1700, 460], [1840, GY + 30]], '#d9b784', { key: 'nurock', sb: 10, tear: 1.6, crayon: '#a8814a', crAl: 0.4 });
  cut(rect(980, 300, 660, 190, 4), '#d9c9a8', { key: 'nucas', sb: 8, pat: pat.dots('rgba(120,100,70,0.3)', 3, 18) });
  [[1040, 150], [1330, 210], [1600, 120]].forEach(([x, h], i) => { cut(rect(x - 54, 460 - h - 60, 108, h + 60, 3), '#c9b894', { key: 'nuto' + i, sb: 7, pat: pat.dots('rgba(120,100,70,0.3)', 3, 18) }); cut(tri(x, 400 - h, 150, 120), '#b84a3a', { key: 'nutr' + i, sb: 6, tear: 0.5 }); });
  ground('#7fae6a', '#7d7480', { k: 'nu', crayon: '#5a8a50' });
  [[900, '#f6ecd6', '#b84a3a'], [1040, '#f0e2b8', '#8a5638'], [1180, '#f6ecd6', '#b84a3a']].forEach(([x, c, rc], i) => fachwerk(x, 850, 120, 150, c, rc, 'nufw' + i));
  roundTree(100, 850, 1.0, '#5aa05a', 'nut'); birds(700, 300, 'nub');
}
// ---- the German countryside: four villages for the rush (v = 0..3)
function placeVillage(s) {
  const v = s.v ?? 0, skies = ['#cfe2ee', '#d6ecd0', '#e8d4e6', '#f6e3a8'];
  wall(skies[v], { k: 'vl' + v, pat: pat.stripes('rgba(255,255,255,0.25)', 40, 130) }); sunDisc(1700 - v * 300, 210, 60, '#fff3b0', 'vlsun'); cloud(500 + v * 120, 190, 1.0, 'vlc1', 6); cloud(1200, 130, 0.8, 'vlc2', 5);
  hills(['#8fcf9a', '#5aa05a', '#a9c46a', '#c9b06a'][v], 700, 80, 'vlh1', { f: 0.003, ph: v, drift: -8, bottom: 900 });
  hills(['#6fae6a', '#3d7c46', '#8fb04a', '#a89a50'][v], 760, 60, 'vlh2', { f: 0.004, ph: v + 2, drift: -14, bottom: 900 });
  ground(['#7fae6a', '#4a8c4e', '#9ab84a', '#c9b86a'][v], '#7d7480', { k: 'vl' + v, crayon: '#5a8a50' });
  if (v === 1) for (let i = 0; i < 12; i++) pine(880 + i * 90, 790 + (i % 3) * 20, 0.8 + (i % 4) * 0.15, '#2f7a5c', 'vlpn' + i);
  const hc = [['#f6ecd6', '#b84a3a'], ['#f0e2b8', '#8a5638'], ['#f6ecd6', '#a8603a']];
  [1000, 1170, 1340].forEach((x, i) => fachwerk(x, 850, 125 + (i % 2) * 20, 140 + (i % 3) * 18, hc[i][0], hc[i][1], 'vlf' + i));
  if (v !== 2) spire(1600, 850, 70, 220, '#3f9f7a', 'vlsp');
  if (v === 2) [1050, 1330, 1620].forEach((x, i) => { tube([x, 830], [x, 440], 16, '#fbf6ea', 'vltw' + i, { sb: 5 }); for (let k = 0; k < 3; k++) { const a = TT * 1.4 + i + k * TAU / 3; tube([x, 440], [x + Math.cos(a) * 130, 440 + Math.sin(a) * 130], 9, '#fbf6ea', 'vlbl' + i + k, { sb: 3, shade: false }); } });
  if (v === 3) windmill(1800, 850, 1.2, 'vlwm');
  roundTree(100, 850, 1.0, '#5aa05a', 'vlt'); birds(800, 300, 'vlb');
}
// ---- Lüneburg Heath: purple heather, birches, sheep
function placeHeath(s) {
  wall('#e2dcea', { k: 'he', pat: pat.stripes('rgba(255,255,255,0.3)', 40, 130) }); cloud(600, 200, 1.2, 'hec1', 5); cloud(1400, 140, 0.9, 'hec2', 6); sunDisc(1700, 230, 60, '#fff3b0', 'hesun');
  hills('#a89ad8', 740, 60, 'heh1', { f: 0.004, ph: 1, drift: -8, bottom: 900, pat: pat.dots('rgba(255,255,255,0.35)', 2, 16) });
  ground('#8c7ad8', '#7d7480', { k: 'he', crayon: '#5e4fb0', pat: pat.dots('rgba(255,235,255,0.4)', 2, 14) });
  for (let i = 0; i < 4; i++) { const x = 1000 + i * 190; tube([x, 820], [x + 6, 560], 16, '#f6f1e2', 'heb' + i, { sb: 4, pat: pat.stripes('rgba(0,0,0,0.5)', 3, 40, 0) }); cut(ellipsePts(x + 6, 520, 70, 64, 0, 22), '#a9c46a', { key: 'hel' + i, sb: 6, crayon: '#6a8a30', crAl: 0.3 }); }
  [[1250, 800], [1520, 820]].forEach(([x, y], i) => { cut(ellipsePts(x, y, 40, 28, 0, 16), '#f6f1e2', { key: 'hes' + i, sb: 4, pat: pat.dots('rgba(0,0,0,0.12)', 3, 12) }); cut(ellipsePts(x + 36, y - 8, 16, 14, 0, 12), PAL.charcoal, { key: 'hesh' + i, shadow: false }); [-20, 20].forEach((dx, k) => tube([x + dx, y + 14], [x + dx, y + 42], 7, PAL.charcoal, 'hesl' + i + k, { shadow: false })); });
}
// ---- Lübeck: the Holstentor, brick towers with green cones, church spires
function placeLubeck(s) {
  wall('#cfe2ee', { k: 'lu', pat: pat.stripes('rgba(255,255,255,0.22)', 40, 130) }); cloud(500, 190, 1.0, 'luc1', 5); sunDisc(740, 230, 60, '#fff3b0', 'lusun');
  [880, 1760].forEach((x, i) => spire(x, GY + 10, 54, 260, '#3f9f7a', 'lusp' + i));
  [1100, 1520].forEach((x, i) => { cut(rect(x - 90, 400, 180, 340, 4), '#b84a3a', { key: 'lut' + i, sb: 9, pat: pat.lines('rgba(0,0,0,0.16)', 12), crayon: '#8a2f22', crAl: 0.2 }); cut(tri(x, 400, 220, 190), '#3f9f7a', { key: 'luc' + i, sb: 8, tear: 0.5, pat: pat.stripes('rgba(255,255,255,0.18)', 3, 12) }); [0, 1, 2].forEach((k) => cut(domePts(x - 40 + k * 40, 540, 12, 28), '#3a2f45', { key: 'luw' + i + k, shadow: false })); });
  cut(rect(1190, 480, 240, 260, 4), '#c0503f', { key: 'lug', sb: 8, pat: pat.lines('rgba(0,0,0,0.16)', 12) }); cut([[1170, 484], [1310, 400], [1450, 484]], '#8a5638', { key: 'lugr', sb: 6 }); cut(domePts(1310, 740, 60, 150), '#3a2f45', { key: 'luar', shadow: false });
  ground('#7fae6a', '#7d7480', { k: 'lu', crayon: '#5a8a50' });
  roundTree(100, 850, 1.0, '#5aa05a', 'lut2'); birds(760, 290, 'lub');
}
// ---- Kosel on the Schlei: a jetty, white sails, reeds
function placeKosel(s) {
  wall('#f6e3a8', { k: 'ko', pat: pat.stripes('rgba(255,255,255,0.25)', 40, 130) }); sunDisc(1500, 540, 80, '#f6cf55', 'kosun'); cloud(500, 200, 1.1, 'koc1', 5);
  ground('#a9c46a', '#7d7480', { k: 'ko', crayon: '#7a9a40' });
  cut(rect(-30, 640, W + 60, 230, 0), '#6fa9c0', { key: 'kosea', tear: 1.0, sy: -3, pat: wavePat(['#6fa9c0', 'rgba(255,240,200,0.3)'], 12, 3, 0.03, TT) });
  [[1000, 1.0], [1260, 0.8], [1700, 0.7]].forEach(([x, k], i) => { cut([[x - 60 * k, 700], [x + 60 * k, 700], [x + 40 * k, 722], [x - 40 * k, 722]], PAL.woodD, { key: 'kobt' + i, sb: 4 }); tube([x, 700], [x, 560 * (1 + (1 - k) * 0.2)], 5, PAL.charcoal, 'komast' + i, { shadow: false }); cut(tri(x + 6 * k, 696, 90 * k, 120 * k), '#fff', { key: 'kosl' + i, sb: 3, shade: false }); });
  for (let i = 0; i < 14; i++) tube([780 + i * 60, 800], [780 + i * 60 + Math.sin(TT + i) * 6, 730 - (i % 3) * 14], 5, '#b0a050', 'kor' + i, { shadow: false, shade: false });
  cut(rect(1000, 800, 460, 18, 3), PAL.woodD, { key: 'kojet', sb: 5, pat: pat.grainWood('rgba(60,30,10,0.3)') });
}
// ---- Middelfart: the old Little Belt bridge and the Danish flag
function placeMiddelfart(s) {
  wall('#cfe2ee', { k: 'mi', pat: pat.stripes('rgba(255,255,255,0.22)', 40, 130) }); cloud(500, 190, 1.0, 'mic1', 5); cloud(1300, 140, 0.9, 'mic2', 6); sunDisc(1700, 210, 60, '#fff3b0', 'misun');
  ground('#7fae6a', '#7d7480', { k: 'mi', crayon: '#5a8a50' });
  cut(rect(-30, 660, 1220, 206, 0), '#4c6fb5', { key: 'misea', tear: 1.0, sy: -3, pat: wavePat(['#4c6fb5', 'rgba(255,255,255,0.18)'], 12, 3, 0.03, TT) });
  cut(rect(-30, 630, 1220, 22, 3), '#8a8590', { key: 'midk', sb: 6 }); [-60, 260, 580, 900].forEach((x, i) => { tube([x, 640], [x + 160, 600], 12, '#d4382c', 'mitr' + i, { sb: 4 }); tube([x + 160, 600], [x + 320, 640], 12, '#d4382c', 'mitl' + i, { sb: 4 }); tube([x + 160, 600], [x + 160, 640], 8, '#d4382c', 'mitv' + i, { sb: 3, shade: false }); });
  fachwerk(1240, 850, 120, 140, '#f6ecd6', '#d4382c', 'mifw'); house(1400, 850, 110, 120, '#f6cf55', '#d4382c', 'mih1', { cols: 2, rows: 1 });
  tube([1760, 860], [1760, 440], 12, PAL.charcoal, 'mipole', { sb: 4 }); const wv = Math.sin(TT * 3) * 6;
  cut([[1766, 450], [1946, 450 + wv], [1946, 600 - wv], [1766, 600]], '#d4382c', { key: 'miflag', sb: 6, tear: 0.4 }); cut(rect(1830, 450, 24, 150, 0), '#fff', { key: 'mic', shadow: false, shade: false, tear: 0 }); cut(rect(1766, 510, 180, 24, 0), '#fff', { key: 'mic2', shadow: false, shade: false, tear: 0 });
  birds(800, 300, 'mib');
}
// ---- Nyborg at dusk: a long, slow shot — the sun sinks, the farm lights, fireflies
function placeDusk(s) {
  const k = clamp((TT - s.t0) / (s.t1 - s.t0)), sy = 560 + k * 130;
  wall('#f3a3bf', { k: 'du', pat: pat.stripes('rgba(255,255,255,0.18)', 40, 130) });
  ['#8c7ad8', '#a98ad8', '#c590d4', '#e29bc8', '#f3a3bf', '#f8c3b8'].forEach((c, i) => cut(rect(-30, -30 + i * 124, W + 60, 150, 0), c, { key: 'duband' + i, shadow: false, tear: 1.6, shade: false, grain: 0.5 }));
  sunDisc(1400, sy, 100, '#f6cf55', 'dusun'); cloud(500, 220, 1.2, 'duc1', 5); cloud(1100, 150, 0.9, 'duc2', 6);
  hills('#8c7ad8', 740, 50, 'duh', { f: 0.004, ph: 1, drift: -6, bottom: 900 });
  ground('#5a7a6a', '#6a6470', { k: 'du', crayon: '#3d5a4a', pat: bandsPat(['#5a7a6a', '#4d6e5e'], 14, 0) });
  fachwerk(1000, 850, 150, 110, '#c8402f', '#4a4a5a', 'dubarn', { rh: 70 });
  fachwerk(1180, 850, 190, 120, '#f6ecd6', '#d4382c', 'dufarm', { rh: 80 }); cut(rect(1240, 770, 28, 36, 2), '#f6cf55', { key: 'duwin', shadow: false, shade: false, tear: 0.3 });
  windmill(1600, 850, 1.3, 'duwm'); roundTree(100, 850, 1.1, '#3d7c46', 'dut');
  for (let i = 0; i < 10; i++) { const R = RNG('duff', i), fx = R.r(700, 1850) + Math.sin(TT * 1.3 + i) * 20, fy = R.r(690, 800) + Math.cos(TT * 1.1 + i * 2) * 12; if ((B + i) % 3) sparkle(fx, fy, 12, '#fff3b0'); }
  birds(700, 260 + k * 30, 'dub', 5, PAL.charcoal);
}
// ---- the dawn signpost: the silence
function placeSign(s) {
  wall('#4a3a6a', { k: 'sg' }); cut(rect(-30, 300, W + 60, 440, 0), '#8a62a8', { key: 'sgmid', shadow: false, tear: 1.6, shade: false, grain: 0.4 }); cut(rect(-30, 430, W + 60, 310, 0), '#f3a3bf', { key: 'sglow', shadow: false, tear: 1.6, shade: false, grain: 0.4 }); cut(rect(-30, 620, W + 60, 120, 0), '#f8d9b0', { key: 'sglow2', shadow: false, tear: 1.6, shade: false, grain: 0.4 });
  const R = RNG('sgst'); for (let i = 0; i < 26; i++) sparkle(R.r(60, W - 60), R.r(60, 420), R.r(3, 8) * (0.6 + 0.4 * ((B + i) % 3 ? 1 : 0.5)), '#fff8dc');
  cut(ellipsePts(900, 200, 44, 44, 0, 26), '#f6ecc8', { key: 'sgmoon', sb: 12 }); cut(ellipsePts(918, 190, 40, 40, 0, 26), '#2f3470', { key: 'sgmoon2', shadow: false, shade: false, grain: 0.2 });
  hills('#3a4a8a', 740, 50, 'sgh', { f: 0.004, ph: 3, drift: -3, bottom: 900 });
  ground('#4a5a8a', '#4a4a68', { k: 'sg', crayon: '#34457a', dashC: '#c8c0d8' });
  tube([1360, 860], [1360, 400], 16, '#d8d0e0', 'sgpole', { sb: 5, line: PAL.charcoal });
  cut(rect(1160, 350, 520, 140, 8), '#f6f1e2', { key: 'sgboard', sb: 8, line: PAL.charcoal, lw: 5 });
  handText('København', 1190, 442, 78, PAL.ink, { key: 'sgtxt' });
  cut([[1590, 394], [1630, 420], [1590, 446]], PAL.ink, { key: 'sgarr', shadow: false, tear: 0.2 });
  for (let i = 0; i < 4; i++) cut(ellipsePts(500 + i * 380 + Math.sin(TT * 0.6 + i) * 20, 700, 190, 16, 0, 20), 'rgba(246,236,230,0.22)', { key: 'sgmist' + i, shadow: false, grain: 0.3, shade: false });
}
// ---- Nyhavn: a row of coloured gabled houses; used for the payoff and the closing frame
function nyhavnRow(x0, base, k, key) {
  const cols = ['#f6cf55', '#c8402f', '#f3a3bf', '#a9d9c6', '#4c6fb5', '#d9a441', '#8c7ad8', '#f0e2b8'];
  for (let i = 0; i < 8; i++) {
    const x = x0 + i * 112 * k, w = 106 * k, h = (300 + (i % 3) * 46 + (i === 4 ? 60 : 0)) * k, c = cols[i % 8];
    cut(rect(x, base - h, w, h, 3), c, { key: key + 'h' + i, sb: 7, pat: pat.dots('rgba(255,255,255,0.14)', 3, 24) });
    cut([[x - 6 * k, base - h + 2], [x + w * 0.2, base - h - 26 * k], [x + w * 0.5, base - h - 8 * k], [x + w * 0.8, base - h - 26 * k], [x + w + 6 * k, base - h + 2]], i % 2 ? '#f6ecd6' : '#8a5638', { key: key + 'g' + i, sb: 5, tear: 0.6 });
    for (let r = 0; r < Math.floor(h / (80 * k)); r++) for (let c2 = 0; c2 < 2; c2++) cut(rect(x + w * (c2 + 0.5) / 2 - 11 * k, base - h + 22 * k + r * 76 * k, 22 * k, 44 * k, 2), '#fff3c8', { key: key + 'x' + i + r + c2, shadow: false, shade: false, tear: 0.3, line: PAL.ink, lw: 2 });
    cut(rect(x + w / 2 - 14 * k, base - 56 * k, 28 * k, 56 * k, 3), '#f6f1e2', { key: key + 'd' + i, shadow: false, shade: false, tear: 0.3 });
  }
}
function placeNyhavn(s, dawn) {
  const kk = TT - s.t0;
  wall('#f6c9bd', { k: 'nyd', pat: pat.stripes('rgba(255,255,255,0.28)', 40, 130) });
  sunDisc(1250, 300, 120, '#f8d56a', 'nysund');
  cloud(900, 160, 1.1, 'nyc1', 5); cloud(1500, 110, 0.9, 'nyc2', 6);
  nyhavnRow(1000, GY + 30, 1.0, 'ny');
  ground('#cfc2b0', '#8a8590', { k: 'ny', crayon: '#a89a88', pat: pat.dots('rgba(100,80,60,0.25)', 3, 28), rcrayon: 'rgba(255,255,255,0.1)', dash: false });
  cut(rect(-30, GY + 30, W + 60, 140, 0), '#4c6fb5', { key: 'nywater', tear: 1.0, sy: -3, pat: wavePat(['#4c6fb5', '#5a82c4', '#3a5a9a'], 12, 3, 0.03, TT) });
  [[1080, 1.0, PAL.woodD], [1380, 0.8, '#b84a3a'], [1700, 0.9, PAL.navy]].forEach(([x, k, c], i) => { cut([[x - 120 * k, GY + 96], [x + 120 * k, GY + 96], [x + 90 * k, GY + 130], [x - 90 * k, GY + 130]], c, { key: 'nybt' + i, sb: 5 }); tube([x, GY + 96], [x, GY - 240 * k], 7, PAL.charcoal, 'nym' + i, { shadow: false, shade: false }); tube([x, GY - 160 * k], [x + 90 * k, GY + 96], 3, PAL.charcoal, 'nyr' + i, { shadow: false, shade: false }); tube([x, GY - 160 * k], [x - 90 * k, GY + 96], 3, PAL.charcoal, 'nyq' + i, { shadow: false, shade: false }); cut([[x, GY - 240 * k], [x + 50 * k, GY - 224 * k], [x, GY - 208 * k]], '#d4382c', { key: 'nyfl' + i, sb: 2, tear: 0.3 }); });
  { const sag = (i) => 360 + 34 * Math.sin(Math.PI * i / 14), d = (1840 - 1030) / 14, bx0 = (i) => 1030 + i * d;
    [1030, 1840].forEach((px, k) => tube([px, 800], [px, 352], 12, PAL.charcoal, 'nypl' + k, { sb: 5 }));
    ink(Array.from({ length: 15 }, (_, i) => [bx0(i), sag(i)]), { w: 4, color: PAL.charcoal, amt: 0.5, key: 'nystr' });
    for (let i = 0; i < 14; i++) cut([[bx0(i) + 8, sag(i) + 3], [bx0(i) + d / 2, sag(i + 0.5) + 46], [bx0(i + 1) - 8, sag(i + 1) + 3]], i % 2 ? '#d4382c' : '#fff', { key: 'nybn' + i, sb: 3, tear: 0.4 }); }
  return dawn ? null : () => { const R = RNG('nyconf'); for (let i = 0; i < 60; i++) { const fx = R.r(0, W), fy = (R.r(-200, H) + kk * R.r(60, 140)) % (H + 100) - 50; cut(rect(fx, fy, 18, 10, 2), ['#f6cf55', '#f3a3bf', '#a9d9c6', '#8c7ad8', '#fff', '#4c6fb5'][i % 6], { key: 'nycf' + i, sb: 3, tear: 0.2, grain: 0.2, shade: false }); } };
}
// ---- the whole-route map: Eurasia in cut paper, the red thread from Kuala Lumpur to Copenhagen
const MAPW = { x: 70, y: 240, w: 1780, h: 650 }, MAPLON = [-12, 125], MAPLAT = [66, -4];
const mp = (lon, lat) => [MAPW.x + (lon - MAPLON[0]) / (MAPLON[1] - MAPLON[0]) * MAPW.w, MAPW.y + (lat - MAPLAT[0]) / (MAPLAT[1] - MAPLAT[0]) * MAPW.h];
const LAND = [[-9.5, 37], [-9.5, 43.5], [-1.8, 43.4], [-1.2, 46], [-4.5, 48.4], [-1.5, 49.7], [1.5, 50.9], [4, 51.5], [8, 53.6], [8.1, 57], [10.6, 57.7], [10.5, 55], [14, 54.1], [19, 54.4], [21, 55.5], [21, 57], [24, 57.3], [24, 59.4], [30, 60], [28, 62], [22, 61], [24, 65], [17, 62], [19, 59], [12, 56], [11, 59], [5, 59], [5, 62], [14, 67], [25, 71], [40, 68], [60, 69], [80, 73], [100, 76], [130, 72], [130, 45], [122, 40], [121, 37], [119, 35], [122, 31], [121, 28], [118, 24], [113, 22], [108, 21.5], [106, 19.5], [109, 13], [109, 11.5], [105, 8.6], [104.8, 10.4], [100.9, 13.3], [99.5, 10.5], [100.3, 8], [102, 6], [103.4, 4], [104.2, 1.4], [103.5, 1.3], [101.3, 2.8], [100.3, 5.6], [98.5, 8], [98.4, 10], [98.7, 13.5], [97.6, 16.5], [94.5, 16], [94.3, 18.5], [92.3, 20.6], [91, 22.5], [87, 21.5], [85, 19.5], [80.3, 15.5], [80, 13], [79.8, 10.3], [77.5, 8], [76.3, 10], [74.8, 13], [73, 17.5], [72.8, 20.5], [72.6, 21.5], [70, 21], [68.5, 23.3], [66, 25.3], [61.5, 25.2], [57, 25.7], [56.4, 27], [54, 26.7], [50.8, 29], [49, 30.3], [48, 30], [50.2, 26], [51.5, 24.5], [54, 24.2], [56.2, 26.2], [56.4, 24.8], [58.5, 23.7], [59.8, 22.5], [57.8, 19], [55, 17], [52, 16], [45, 12.8], [43.3, 12.7], [42.8, 16], [39.2, 21.5], [37.2, 25], [35, 28], [34.9, 29.5], [34.3, 31.2], [35, 33], [35.8, 36.6], [32, 36.1], [30.5, 36.6], [28, 36.8], [27.2, 38.2], [26.5, 40], [26, 40.7], [24, 40.8], [23, 40], [24, 37.8], [22.8, 36.4], [21.7, 36.8], [21.1, 38.3], [20, 39.7], [19.4, 41.9], [18, 42.7], [15, 44.5], [13.7, 45.6], [12.3, 45.3], [12.5, 44], [13.6, 43.5], [16.4, 41.9], [18.5, 40.1], [17, 39], [16.6, 38.4], [15.7, 37.9], [15.7, 38.5], [16, 39.5], [15.6, 40.2], [14.3, 40.8], [13, 41.3], [11, 42.5], [10.2, 43.9], [8.7, 44.3], [6.5, 43.1], [4, 43.5], [3.1, 42.4], [0.8, 40.8], [-0.2, 39.4], [-0.3, 38.5], [-2, 36.8], [-5.5, 36.1]];
const BLACKSEA = [[28, 41.2], [27.8, 43.5], [29.5, 45.2], [31.5, 46.5], [33.5, 46], [35.5, 45], [38, 46.8], [41, 43], [41.5, 41.5], [38, 41], [35, 42], [32, 41.2], [29, 41.2]];
const CASPIAN = [[47, 45], [49, 46.8], [53, 46.5], [53.5, 44], [51.5, 42.5], [52.7, 40.5], [53.8, 37.3], [50.5, 37.3], [49, 38.5], [49.5, 40.5], [47.5, 42.5]];
const AFRICA = [[-12, 34], [-6, 35.8], [10, 37.2], [11, 33.5], [20, 32.5], [25, 32], [32, 31.2], [34.5, 31], [37, 22], [39, 15], [43, 11.5], [51, 12], [52, 2], [45, -4], [-12, -4]], SUMATRA = [[95, 5.5], [98, 4], [104, -1], [106, -3.5], [103, -4], [98, 0], [95, 3]];
const ROUTE = [[101.7, 3.1], [100.5, 13.75], [104.8, 17.4], [103.97, 22.5], [102.7, 25.0], [104.07, 30.67], [100.45, 38.93], [93.5, 42.8], [87.6, 43.8], [80.4, 44.2], [76.9, 43.25], [74.6, 42.9], [69.2, 41.3], [66.96, 39.65], [64.4, 39.77], [60.36, 41.38], [51.2, 43.65], [49.87, 40.4], [44.8, 41.7], [41.6, 41.65], [39.7, 41.0], [35.5, 38.7], [27.14, 38.42], [23.73, 37.98], [21.73, 38.25], [16.28, 41.32], [12.5, 41.9], [11.25, 43.77], [12.33, 45.44], [11.4, 47.27], [11.58, 48.14], [11.08, 49.45], [10.69, 53.87], [9.73, 55.5], [10.79, 55.31], [12.57, 55.68]];
function placeMap(s) {
  const k = ev(s.t0 + 0.3, 2.2);   // the thread draws itself over 2.2s
  wall('#9cc9e8', { k: 'mp', pat: pat.stripes('rgba(255,255,255,0.18)', 40, 130) });
  const P = (poly) => poly.map(([lo, la]) => mp(lo, la));
  cut(P(AFRICA), '#e0c9a0', { key: 'mpaf', sb: 10, sy: 6, tear: 2.0, pat: pat.dots('rgba(150,110,60,0.2)', 3, 28), crayon: '#c9a574', crAl: 0.4 }); cut(P(SUMATRA), '#e9d3a4', { key: 'mpsu', sb: 8, sy: 5, tear: 1.6 });
  cut(P(LAND), '#e9d3a4', { key: 'mpland', sb: 12, sy: 8, tear: 2.0, pat: pat.dots('rgba(150,110,60,0.22)', 3, 28), crayon: '#c9a574', crAl: 0.4 });
  cut(P(BLACKSEA), '#9cc9e8', { key: 'mpbs', shadow: false, tear: 1.2, grain: 0.3, shade: false }); cut(P(CASPIAN), '#9cc9e8', { key: 'mpcs', shadow: false, tear: 1.2, grain: 0.3, shade: false });
  const pts = ROUTE.map(([lo, la]) => mp(lo, la)), upto = subPath(pts, k);
  ink(pts, { w: 4, color: 'rgba(120,80,40,0.35)', amt: 0.6, key: 'mpg' });
  if (k > 0) ink(upto, { w: 9, color: THREAD, amt: 0.8, key: 'mpt' });
  pts.forEach(([x, y], i) => { if (i / (pts.length - 1) <= k + 0.001) cut(ellipsePts(x, y, 9, 9, 0, 12), THREAD, { key: 'mpd' + i, sb: 3, sy: 2, tear: 0.4, grain: 0.3, shade: false }); });
  const tip = upto[upto.length - 1];
  cut(ellipsePts(tip[0], tip[1], 26, 26, 0, 22), PAL.orange, { key: 'mptok', sb: 8, sy: 4, tear: 0.7, crayon: PAL.orangeD, crPer: 20 });
  const a = mp(101.7, 3.1), z = mp(12.57, 55.68);
  cut(ellipsePts(a[0], a[1], 14, 14, 0, 16), '#fff', { key: 'mpa', sb: 4, line: THREAD, lw: 5 }); cut(ellipsePts(z[0], z[1], 30, 30, 0, 20), '#fff', { key: 'mpz', sb: 6, line: THREAD, lw: 8 }); sparkle(z[0], z[1], 20, PAL.yellow);
  return null;
}
