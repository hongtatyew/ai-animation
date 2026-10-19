// =====================================================================
//  places-asia.js — Malaysia to China. Each place draws the world behind and around the rider (sky, scenery, ground);
//  it may return a function for the foreground, drawn after the rider.
// =====================================================================
const wavePat = (cols, th, amp, f, ph = 0) => (bb) => {   // wavy contour bands (terraces, water)
  let i = 0;
  for (let y = bb.y0 - amp; y < bb.y1 + amp; y += th, i++) {
    ctx.fillStyle = cols[i % cols.length]; ctx.beginPath(); ctx.moveTo(bb.x0 - 10, y);
    for (let x = bb.x0 - 10; x <= bb.x1 + 10; x += 24) ctx.lineTo(x, y + Math.sin(x * f + i * 0.7 + ph) * amp * (0.5 + 0.5 * Math.sin(i * 1.3)));
    ctx.lineTo(bb.x1 + 10, y + th + amp); ctx.lineTo(bb.x0 - 10, y + th + amp); ctx.closePath(); ctx.fill();
  }
};
function windows(x, y, w, h, cols, rows, c = 'rgba(255,245,200,0.8)') {
  const cw = w / cols, rh = h / rows;
  ctx.fillStyle = c; ctx.beginPath(); for (let r = 0; r < rows; r++) for (let k = 0; k < cols; k++) ctx.rect(x + k * cw + cw * 0.28, y + r * rh + rh * 0.3, cw * 0.44, rh * 0.4); ctx.fill();
}

// ---- KL at dawn: the Petronas Towers (two silver towers and a skybridge), a lavender skyline, the low sun
function petronas(cx, base, s, key) {
  const tiers = [[96, 130], [82, 110], [68, 100], [56, 90], [44, 80]];
  [-1, 1].forEach((d, di) => {
    const x = cx + d * 78 * s; let y = base;
    tiers.forEach(([w, h], i) => { cut(rect(x - w / 2 * s, y - h * s, w * s, h * s, 5), '#aab8d4', { key: key + di + 't' + i, sb: 6, pat: pat.lines('rgba(70,90,130,0.30)', 14 * s), crayon: '#8fa0c0', crAl: 0.25 }); cut(rect(x - w / 2 * s + 6, y - h * s + 8, 10 * s, h * s - 14, 3), 'rgba(255,255,255,0.55)', { key: key + di + 'h' + i, shadow: false, grain: 0.2, shade: false }); y -= h * s; });
    cut(tri(x, y, 14 * s, 90 * s), '#e8eef7', { key: key + di + 'sp', sb: 3, tear: 0.4 });
  });
  cut(rect(cx - 62 * s, base - 300 * s, 124 * s, 24 * s, 3), '#b4c0d6', { key: key + 'br', sb: 5, pat: pat.lines('rgba(70,90,130,0.35)', 8) });
}
function skyline(x0, x1, base, key, c, seed) {
  const R = RNG('skyl', seed); let x = x0, i = 0;
  while (x < x1) { const w = R.r(60, 120), h = R.r(110, 300); cut(rect(x, base - h, w, h, 3), c, { key: key + i, sb: 4, pat: pat.dots('rgba(255,255,255,0.35)', 3, 22) }); x += w + R.r(4, 18); i++; }
}
function placeKl(s, end) {
  wall('#f6c9bd', { k: 'kl', pat: pat.stripes('rgba(255,255,255,0.16)', 40, 130), crayon: '#f0a8a0' });
  sunDisc(1490, 520, 150, '#f8d56a', 'klsun');
  cloud(380, 250, 1.1, 'klc1', 8); cloud(1240, 190, 0.9, 'klc2', 6); cloud(760, 150, 0.7, 'klc3', 7);
  birds(900, 330, 'klb');
  hills('#d9b5c7', 760, 70, 'klh1', { f: 0.003, ph: 1, drift: -6, bottom: 900 });
  if (end) { nyhavnRow(960, GY + 12, 0.95, 'kle'); } else { skyline(760, 1900, GY + 6, 'klsk', '#b7a6c7', 3); petronas(1490, GY + 6, 0.8, 'kltw'); }
  hills('#7fb38a', 790, 50, 'klh2', { f: 0.0045, ph: 2, drift: -14, bottom: 900 });
  ground('#6fae6a', '#6a6470', { k: 'kl', crayon: '#4d8a52', pat: pat.stripes('rgba(255,255,255,0.10)', 6, 26, 0.3) });
  palm(100, 850, 1.15, 'klp1'); palm(1790, 850, 1.0, 'klp2'); palm(1020, 815, 0.7, 'klp3');
  [[260, 842], [330, 846], [1700, 846]].forEach(([x, y], i) => { for (let p = 0; p < 5; p++) { const a = p / 5 * TAU; cut(ellipsePts(x + Math.cos(a) * 11, y + Math.sin(a) * 11 - 20, 9, 7, a, 10), [PAL.pink, PAL.yellow, '#fff'][i % 3], { key: 'klf' + i + p, shadow: false, tear: 0.3 }); } tube([x, y], [x, y - 20], 4, PAL.greenD, 'klst' + i, { shadow: false }); });
}
// ---- Sekinchan: rice fields, a hut, a scarecrow with a straw hat, egrets
function placePaddy(s) {
  wall('#bfe3dc', { k: 'pd', pat: pat.stripes('rgba(255,255,255,0.22)', 36, 120) });
  sunDisc(1560, 230, 76, PAL.yellow, 'pdsun'); cloud(360, 230, 1.2, 'pdc1', 8); cloud(1100, 340, 0.9, 'pdc2', 6);
  hills('#8fcf9a', 745, 36, 'pdh', { f: 0.005, ph: 2, drift: -10, bottom: 900 });
  ground('#b9d96a', '#7d7480', { k: 'pd', pat: bandsPat(['#b9d96a', '#a3cc5c', '#c8e07a', '#8fbf50'], 18, 0), crayon: '#6a9a40' });
  cut(rect(1160, 640, 180, 110, 4), PAL.woodL, { key: 'hut', sb: 8, pat: pat.grainWood('rgba(120,60,20,0.2)') });
  cut([[1130, 645], [1250, 560], [1370, 645]], '#8a6a3a', { key: 'hutr', sb: 8, pat: pat.stripes('rgba(0,0,0,0.2)', 3, 12, 0.6) });
  [1180, 1320].forEach((x, i) => tube([x, 750], [x, 800], 12, PAL.woodD, 'hutl' + i, { sb: 3 }));
  tube([1560, 840], [1560, 700], 10, PAL.woodD, 'scarep', { sb: 3 }); tube([1500, 740], [1620, 740], 9, PAL.woodD, 'scarea', { sb: 3 });
  cut([[1500, 690], [1560, 636], [1620, 690]], '#e6c36a', { key: 'scarehat', sb: 4, pat: pat.stripes('rgba(120,70,20,0.35)', 2, 9, 0.5) });
  cut(rect(1530, 700, 60, 62, 6), PAL.pink, { key: 'scareb', sb: 4 });
  palm(1850, 800, 0.95, 'pdp1'); palm(1000, 790, 0.7, 'pdp2'); palm(100, 830, 1.1, 'pdp3');
  for (let i = 0; i < 4; i++) { const ex = 900 + i * 190 + Math.sin(TT * 1.5 + i) * 6, ey = 780 + (i % 2) * 36; cut(ellipsePts(ex, ey, 22, 14, 0, 14), '#fff', { key: 'eg' + i, sb: 3 }); tube([ex + 14, ey - 4], [ex + 28, ey - 30], 5, '#fff', 'egn' + i, { sb: 2, shade: false }); cut(tri(ex + 33, ey - 30, 6, 12), GOLD, { key: 'egb' + i, shadow: false }); }
}
// ---- Bangkok: gold chedi, a tiered temple roof
function chedi(x, base, s, key) {
  [[170, 40], [130, 40], [92, 40]].forEach(([w, h], i) => { cut(rect(x - w / 2 * s, base - (40 * (i + 1) + 0) * s, w * s, h * s, 4), i % 2 ? '#f6e3a0' : '#fff6dc', { key: key + 'b' + i, sb: 6, line: GOLD, lw: 3 }); });
  cut(domePts(x, base - 120 * s, 54 * s, 120 * s), GOLD, { key: key + 'd', sb: 8, crayon: '#a8741d', crAl: 0.3 });
  for (let i = 0; i < 6; i++) cut(rect(x - (30 - i * 4) * s, base - (250 + i * 16) * s, (60 - i * 8) * s, 12 * s, 3), i % 2 ? '#f6cf55' : GOLD, { key: key + 'r' + i, shadow: false, sb: 3 });
  cut(tri(x, base - 336 * s, 10 * s, 80 * s), GOLD, { key: key + 'sp', sb: 3, tear: 0.3 });
}
function placeBangkok(s) {
  wall('#8fc7e0', { k: 'bk', pat: pat.stripes('rgba(255,255,255,0.20)', 36, 120) }); sunDisc(740, 250, 68, '#f6cf55', 'bksun');
  cloud(900, 200, 1.1, 'bkc1', 7); cloud(1500, 320, 0.8, 'bkc2', 5); birds(1000, 330, 'bkb');
  hills('#6fae8a', 770, 40, 'bkh', { f: 0.004, drift: -8, bottom: 900 });
  ground('#7fb06a', '#6a6470', { k: 'bk', crayon: '#5a8a50' });
  chedi(1420, GY + 70, 1.15, 'bkch'); chedi(1780, GY + 60, 0.75, 'bkc2h');
  cut(rect(930, 700, 380, 140, 3), '#fff6dc', { key: 'bkw', sb: 8, line: GOLD, lw: 3, pat: pat.dots('rgba(224,168,38,0.2)', 3, 22) });
  [960, 1040, 1120, 1200, 1270].forEach((x, i) => cut(rect(x, 712, 22, 118, 3), GOLD, { key: 'bkcol' + i, sb: 3, shade: false }));
  cut(domePts(1120, 830, 46, 100), '#3a2f45', { key: 'bkdr', shadow: false, sb: 2 });
  cut([[900, 706], [1010, 600], [1230, 600], [1340, 706]], '#c8402f', { key: 'bkr1', sb: 8, pat: pat.stripes('rgba(255,255,255,0.18)', 3, 14, 0.4), line: GOLD, lw: 4 });
  cut([[960, 620], [1050, 540], [1190, 540], [1280, 620]], '#3f9f9a', { key: 'bkr2', sb: 8, pat: pat.stripes('rgba(255,255,255,0.18)', 3, 14, 0.4), line: GOLD, lw: 4 });
  cut(tri(1120, 540, 16, 60), GOLD, { key: 'bkfin', sb: 3, tear: 0.3 });
  roundTree(860, 850, 0.8, '#3d7c46', 'bkt1'); roundTree(1360, 850, 0.8, '#3d7c46', 'bkt2');
  for (let i = 0; i < 8; i++) { const fx = 880 + i * 130; tube([fx, 850], [fx, 810], 4, PAL.greenD, 'bkst' + i, { shadow: false }); for (let p = 0; p < 6; p++) { const a = p / 6 * TAU; cut(ellipsePts(fx + Math.cos(a) * 12, 800 + Math.sin(a) * 12, 9, 6, a, 10), p % 2 ? GOLD : PAL.pink, { key: 'bkf' + i + p, shadow: false, tear: 0.3 }); } }
  palm(100, 850, 1.0, 'bkp1');
}
// ---- Thakhek: limestone karst over the Mekong
function karstTower(x, base, w, h, key) {
  const P = [[x - w / 2, base], [x - w * 0.46, base - h * 0.5], [x - w * 0.3, base - h * 0.92], [x - w * 0.08, base - h], [x + w * 0.2, base - h * 0.94], [x + w * 0.42, base - h * 0.55], [x + w / 2, base]];
  cut(P, '#b4ad9e', { key, sb: 8, crayon: '#7e786c', crAl: 0.5, crA: 1.5, crPer: 60 });
  cut([[x - w * 0.3, base - h * 0.92], [x - w * 0.08, base - h], [x + w * 0.2, base - h * 0.94], [x + w * 0.1, base - h * 0.82], [x - w * 0.15, base - h * 0.84]], '#6fae6a', { key: key + 'g', shadow: false, sb: 3, tear: 0.8, crayon: PAL.greenD });
}
function placeKarst(s) {
  wall('#eef0c4', { k: 'kr', pat: pat.stripes('rgba(255,255,255,0.25)', 40, 140) }); sunDisc(1560, 250, 78, '#fff3b0', 'krsun');
  cloud(420, 230, 1.0, 'krc1', 6); birds(1000, 250, 'krb');
  hills('#cfe0b0', 740, 40, 'krh', { f: 0.004, drift: -6, bottom: 900 });
  karstTower(1050, GY + 20, 260, 400, 'kr1'); karstTower(1400, GY + 20, 320, 520, 'kr2'); karstTower(1780, GY + 20, 280, 380, 'kr3');
  ground('#8fbf6a', '#7d7480', { k: 'kr', crayon: '#5a8a50', pat: null });
  cut(rect(-30, 748, W + 60, 56, 0), '#c9a574', { key: 'mek2', tear: 1.2, sy: -3, pat: wavePat(['#c9a574', '#d9b784'], 12, 3, 0.02, 1) });
  const bx = 1220 + Math.sin(TT * 0.8) * 20;
  cut([[bx - 90, 770], [bx + 90, 770], [bx + 130, 750], [bx - 120, 750]], '#c8402f', { key: 'boat', sb: 5 }); tube([bx + 100, 760], [bx + 190, 726], 7, PAL.charcoal, 'boatlt', { sb: 2 });
  palm(100, 850, 1.0, 'krp1'); palm(1860, 850, 0.8, 'krp2');
}
// ---- Lao Cai: layered misty hills, terraces, conical hats
function placeVnHills(s) {
  wall('#d6ecd0', { k: 'vn', pat: pat.stripes('rgba(255,255,255,0.28)', 40, 130) });
  sunDisc(1500, 240, 70, '#fff3b0', 'vnsun'); cloud(500, 210, 1.1, 'vnc1', 6);
  hills('#a9d9c6', 560, 140, 'vnh1', { f: 0.003, ph: 0.4, drift: -4 });
  hills('#7fbfa0', 640, 120, 'vnh2', { f: 0.0036, ph: 2.0, drift: -8, pat: wavePat(['#7fbfa0', '#8fcfb0'], 14, 8, 0.018) });
  hills('#4f9a78', 740, 90, 'vnh3', { f: 0.0042, ph: 4.0, drift: -14, pat: wavePat(['#4f9a78', '#5aa987', '#bfe3c8'], 12, 8, 0.02, 1), bottom: 900 });
  [[1000, 600], [1500, 560], [1800, 640]].forEach(([x, y], i) => cut(ellipsePts(x + Math.sin(TT + i) * 18, y, 190, 20, 0, 22), 'rgba(255,255,255,0.65)', { key: 'vnmist' + i, shadow: false, grain: 0.3, shade: false }));
  ground('#7fb06a', '#6a6470', { k: 'vn', crayon: '#5a8a50' });
  [[1180, 840], [1290, 840], [1400, 840]].forEach(([x, y], i) => { cut([[x - 56, y], [x, y - 66 - i * 10], [x + 56, y]], '#e6c36a', { key: 'hat' + i, sb: 5, pat: pat.stripes('rgba(120,70,20,0.35)', 2, 10, 0.4) }); });
  cut(rect(1560, 700, 170, 100, 4), PAL.woodL, { key: 'vnhut', sb: 6, pat: pat.grainWood('rgba(120,60,20,0.2)') }); cut([[1536, 704], [1645, 626], [1754, 704]], '#8a6a3a', { key: 'vnhr', sb: 6 });
  [1580, 1700].forEach((x, i) => tube([x, 800], [x, 850], 10, PAL.woodD, 'vnl' + i, { sb: 3 }));
  palm(100, 850, 1.0, 'vnp1');
}
// ---- Yuanyang: water-mirror terraces
function placeTerraces(s) {
  wall('#f3d3d8', { k: 'tr', pat: pat.stripes('rgba(255,255,255,0.25)', 40, 130) }); sunDisc(1460, 220, 70, '#fff3b0', 'trsun');
  cloud(380, 200, 1.2, 'trc1', 6); cloud(1000, 150, 0.8, 'trc2', 5); birds(760, 260, 'trb');
  hills('#6fae6a', 470, 170, 'trh1', { f: 0.0024, ph: 1, drift: -3, pat: wavePat(['#a9c8dc', '#6fae6a', '#cfe2ee', '#5aa05a'], 13, 9, 0.016) });
  hills('#5aa05a', 620, 150, 'trh2', { f: 0.0032, ph: 3, drift: -7, pat: wavePat(['#a9c8dc', '#5aa05a', '#f3d3d8', '#3d7c46'], 13, 10, 0.019, 2) });
  hills('#3d7c46', 760, 100, 'trh3', { f: 0.0038, ph: 5, drift: -12, pat: wavePat(['#a9c8dc', '#4a8c4e', '#f3d3d8', '#3d7c46'], 12, 9, 0.022, 4), bottom: 900 });
  [[1260, 470], [1500, 520], [1700, 480]].forEach(([x, y], i) => { cut(rect(x, y, 90, 60, 3), '#b98576', { key: 'trh' + i, sb: 5 }); cut(domePts(x + 45, y, 60, 36), '#e6c36a', { key: 'trr' + i, sb: 5, pat: pat.stripes('rgba(120,70,20,0.3)', 2, 9, 0.4) }); });
  [[900, 600], [1480, 660], [1750, 620]].forEach(([x, y], i) => cut(ellipsePts(x + Math.sin(TT + i) * 18, y, 170, 18, 0, 22), 'rgba(255,255,255,0.6)', { key: 'trm' + i, shadow: false, grain: 0.3, shade: false }));
  ground('#a9c46a', '#7d7480', { k: 'tr', crayon: '#7a9a40' });
  roundTree(1700, 850, 1.0, '#5aa05a', 'trt1'); roundTree(100, 850, 1.1, '#6fae6a', 'trt2');
}
// ---- Zhangye: striped Danxia peaks
function placeDanxia(s) {
  wall('#cfe2ee', { k: 'dx', pat: pat.stripes('rgba(255,255,255,0.25)', 40, 130) }); sunDisc(1700, 200, 66, PAL.yellow, 'dxsun');
  cloud(420, 230, 1.1, 'dxc1', 6); cloud(1180, 170, 0.9, 'dxc2', 5); birds(820, 280, 'dxb');
  hills('#d9b988', 700, 30, 'dxh', { f: 0.004, drift: -4, bottom: 900 });
  const bands = ['#c8402f', '#e9c36a', '#f0d9a8', '#b98576', '#d98b7a', '#8c6a9c', '#e9c36a', '#c8402f'];
  [[980, 420, 300], [1230, 330, 360], [1480, 380, 320], [1730, 300, 380], [1900, 400, 300]].forEach(([x, y, w], i) =>
    cut([[x - w * 0.5, 712], [x - w * 0.36, y + 140], [x - w * 0.18, y + 40], [x - w * 0.04, y], [x + w * 0.12, y + 50], [x + w * 0.3, y + 120], [x + w * 0.5, 712]], '#c8402f', { key: 'dxp' + i, sb: 10, sy: -4, tear: 1.4, pat: bandsPat(bands, 26 + (i % 2) * 6, 0.12 + i * 0.03), crayon: '#7a2a1a', crAl: 0.25 }));
  ground('#d9b988', '#7d7480', { k: 'dx', crayon: '#b98a52' });
  [[620, 800], [1100, 810], [1500, 820]].forEach(([x, y], i) => cut(ellipsePts(x, y, 26, 14, 0, 14), '#b98576', { key: 'dxb' + i, sb: 4 }));
  [[200, 830], [1100, 840], [1840, 835]].forEach(([x, y], i) => { for (let k = 0; k < 4; k++) tube([x, y], [x + (k - 1.5) * 12, y - 34 - k % 2 * 10], 5, PAL.green, 'dxs' + i + k, { shadow: false }); });
}
// ---- Urumqi: snow-capped Tian Shan, pines, a lake, a yurt
function placeTianShan(s) {
  wall('#9cc9e8', { k: 'ts', pat: pat.stripes('rgba(255,255,255,0.22)', 40, 130) }); sunDisc(740, 220, 66, '#fff3b0', 'tssun'); cloud(1300, 180, 1.1, 'tsc1', 5); cloud(800, 290, 0.8, 'tsc2', 7);
  peaks([[900, 340], [1120, 250], [1360, 320], [1600, 230], [1860, 330]], 720, '#7c86c4', 'tsp1', { snow: '#f6fafc', snowW: 90, crayon: '#5b66a8' });
  peaks([[1000, 470], [1300, 430], [1560, 470], [1800, 440]], 740, '#4c6fb5', 'tsp2', { snow: '#e6f1f8', snowW: 60 });
  cut(ellipsePts(1260, 780, 300, 36, 0, 30), '#3fbfc0', { key: 'tslake', sb: 6, sy: -2, pat: wavePat(['#3fbfc0', '#52d6c4'], 10, 2, 0.03) });
  ground('#7fae6a', '#7d7480', { k: 'ts', crayon: '#5a8a50' });
  for (let i = 0; i < 9; i++) pine(900 + i * 100 + (i % 2) * 24, 800 + (i % 3) * 16, 0.6 + (i % 3) * 0.12, '#2f7a5c', 'tspn' + i);
  const yx = 1620, yy = 830;   // a yurt
  cut(rect(yx - 90, yy - 70, 180, 70, 5), '#f6f1e2', { key: 'yurt', sb: 6, pat: pat.gingham('rgba(200,64,47,0.18)', 10) }); cut(domePts(yx, yy - 70, 100, 70), '#f6f1e2', { key: 'yurtd', sb: 6 }); cut(rect(yx - 90, yy - 40, 180, 14, 2), '#c8402f', { key: 'yurtb', shadow: false, pat: pat.dots('rgba(255,235,200,0.6)', 3, 18) });
  cut(rect(yx - 20, yy - 50, 40, 50, 12), PAL.woodD, { key: 'yurtdr', shadow: false, sb: 2 });
}
