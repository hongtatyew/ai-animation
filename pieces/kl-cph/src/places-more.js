// =====================================================================
//  places-more.js — Hat Yai, Viet Tri, Kunming, Chengdu, Dujiangyan, Hami: the stops added from the rider's log.
//  Pictures only; the only text on screen is the tags (place, date, day).
// =====================================================================
const flagStar = (cx, cy, R, r) => Array.from({ length: 10 }, (_, i) => { const a = -Math.PI / 2 + i * Math.PI / 5, k = i % 2 ? r : R; return [cx + Math.cos(a) * k, cy + Math.sin(a) * k]; });
// ---- Hat Yai: Chinese-Thai shophouses with red eaves, lanterns on a string, a tuk-tuk
function placeHatYai(s) {
  wall('#f6d9a8', { k: 'hy', pat: pat.stripes('rgba(255,255,255,0.22)', 40, 130) });
  sunDisc(1240, 300, 70, '#fff3b0', 'hysun'); cloud(600, 290, 1.0, 'hyc1', 6); cloud(1660, 300, 0.8, 'hyc2', 5); birds(1000, 250, 'hyb');
  hills('#8fcf9a', 750, 50, 'hyh', { f: 0.004, ph: 1, drift: -8, bottom: 900 });
  ground('#8fbf7f', '#6a6470', { k: 'hy', crayon: '#5f9a58' });
  const cols = ['#a9d9c6', '#f8c3d4', '#f0e2b8', '#c9b0e8'];
  [960, 1130, 1300, 1470].forEach((x, i) => {
    const h = 235 + (i % 2) * 40;
    house(x, 850, 150, h, cols[i], '#8a5638', 'hys' + i, { roof: 'flat', cols: 2, rows: 3 });
    cut(rect(x - 8, 850 - h - 14, 166, 22, 3), '#c8402f', { key: 'hyr' + i, sb: 4, shade: false });
    cut(rect(x + 52, 850 - 54, 46, 54, 3), PAL.woodD, { key: 'hyd' + i, shadow: false, sb: 2 });
  });
  tube([930, 860], [930, 420], 12, PAL.charcoal, 'hypl', { sb: 4 }); tube([1760, 860], [1760, 420], 12, PAL.charcoal, 'hypr', { sb: 4 });
  const sag = (t) => 430 + 56 * Math.sin(Math.PI * t);
  ink(Array.from({ length: 12 }, (_, i) => [930 + 830 * i / 11, sag(i / 11)]), { w: 4, color: PAL.charcoal, amt: 0.4, key: 'hystr' });
  for (let i = 1; i < 10; i++) { const t = i / 10, lx = 930 + 830 * t, ly = sag(t) + 34 + Math.sin(TT * 2 + i) * 3;
    cut(ellipsePts(lx, ly, 22, 28, 0, 16), '#d4382c', { key: 'hyl' + i, sb: 4, shade: false }); cut(rect(lx - 9, ly - 32, 18, 8, 2), GOLD, { key: 'hylc' + i, shadow: false, shade: false }); tube([lx, ly + 28], [lx, ly + 52], 4, GOLD, 'hylt' + i, { shadow: false, shade: false }); }
  { const x = 1770, y = 850;   // a tuk-tuk
    ctx.save(); ctx.translate(x, y); ctx.scale(1.35, 1.35); ctx.translate(-x, -y);
    cut(rect(x - 70, y - 90, 140, 70, 18), '#f6cf55', { key: 'hytk', sb: 6 }); cut(domePts(x, y - 90, 82, 46), '#d4382c', { key: 'hytr', sb: 5 });
    cut(rect(x + 8, y - 80, 52, 36, 5), '#cfe2ee', { key: 'hytw', shadow: false, shade: false, tear: 0.3 });
    [-46, 52].forEach((dx, k) => { ink(ellipsePts(x + dx, y - 14, 20, 20, 0, 18), { closed: true, w: 9, color: PAL.ink, amt: 0.5, key: 'hytwh' + k }); });
    ctx.restore(); }
  [960, 1130, 1300, 1470].forEach((x, i) => { const h = 235 + (i % 2) * 40;   // vertical signboards
    cut(rect(x + 118, 850 - h + 30, 26, 96, 3), i % 2 ? '#d4382c' : GOLD, { key: 'hysg' + i, sb: 4, line: i % 2 ? GOLD : '#d4382c', lw: 3, shade: false }); });
  palm(100, 850, 1.0, 'hyp1'); palm(1880, 850, 0.8, 'hyp2');
}
// ---- Viet Tri: a tiled pagoda on a hill, the river with a sampan, the red flag with the yellow star
function placeVietTri(s) {
  wall('#cfe8e0', { k: 'vt', pat: pat.stripes('rgba(255,255,255,0.26)', 40, 130) });
  sunDisc(1500, 300, 66, '#fff3b0', 'vtsun'); cloud(600, 280, 1.0, 'vtc1', 5); cloud(1100, 220, 0.8, 'vtc2', 6);
  hills('#a9d9c6', 590, 110, 'vth1', { f: 0.003, ph: 1, drift: -4 });
  hills('#6fae8a', 700, 80, 'vth2', { f: 0.0038, ph: 3, drift: -9, bottom: 900 });
  cut(domePts(1260, 740, 320, 140), '#6fae6a', { key: 'vtmound', sb: 8, crayon: '#3d7c46', crAl: 0.3 });   // the hill under the pagoda
  [[1260, 600, 300], [1260, 540, 230], [1260, 480, 160]].forEach(([x, y, w], k) => {
    cut(rect(x - w / 2 + 30, y - 30, w - 60, 34, 3), '#f0e2b8', { key: 'vtw' + k, sb: 5 });
    cut([[x - w / 2 - 24, y - 24], [x - w / 2 + 14, y - 66], [x + w / 2 - 14, y - 66], [x + w / 2 + 24, y - 24]], '#b84a3a', { key: 'vtr' + k, sb: 6, pat: pat.stripes('rgba(255,255,255,0.14)', 3, 14, 0.4), line: GOLD, lw: 3 });
  });
  cut(tri(1260, 414, 18, 60), GOLD, { key: 'vtfin', sb: 3, tear: 0.3 });
  ground('#9fcf7a', '#7d7480', { k: 'vt', crayon: '#5a8a50', pat: bandsPat(['#9fcf7a', '#8fbf6a', '#b0d88a'], 16, 0) });
  cut(rect(-30, 772, 1560, 94, 0), '#7fb8c8', { key: 'vtriver', tear: 1.0, sy: -3, pat: wavePat(['#7fb8c8', '#9fd0dc', 'rgba(255,255,255,0.25)'], 12, 3, 0.03, TT) });
  { const bx = 1380 + Math.sin(TT * 0.8) * 16, by = 800;   // a sampan with a bamboo canopy
    cut([[bx - 130, by], [bx + 130, by], [bx + 100, by + 30], [bx - 100, by + 30]], PAL.woodD, { key: 'vtbt', sb: 5 }); cut(domePts(bx - 10, by, 70, 50), '#d9b784', { key: 'vtcan', sb: 5, pat: pat.stripes('rgba(120,70,20,0.3)', 3, 12, 0.5) }); }
  tube([1640, 860], [1640, 420], 12, PAL.charcoal, 'vtpole', { sb: 4 });
  const wv = Math.sin(TT * 3) * 6;
  cut([[1646, 430], [1866, 430 + wv], [1866, 600 - wv], [1646, 600]], '#d4382c', { key: 'vtflag', sb: 6, tear: 0.4 });
  cut(flagStar(1756, 516, 52, 22), '#f6cf55', { key: 'vtstar', shadow: false, shade: false, tear: 0.3 });
  palm(100, 850, 1.0, 'vtp1'); birds(900, 300, 'vtb');
}
// ---- Kunming: the lake under the Western Hills, twin pagodas, gulls, spring blossom
function pagoda(x, base, s, key) {
  let y = base;
  [[78, 56], [66, 52], [56, 48], [46, 44], [38, 40]].forEach(([w, h], i) => {
    cut(rect(x - w / 2 * s, y - h * s, w * s, h * s, 2), '#f0e2b8', { key: key + 'w' + i, sb: 5, line: '#8a5638', lw: 2, pat: pat.lines('rgba(150,110,60,0.25)', 12 * s) });
    cut([[x - (w / 2 + 14) * s, y - h * s + 4], [x - w / 2 * s, y - (h + 14) * s], [x + w / 2 * s, y - (h + 14) * s], [x + (w / 2 + 14) * s, y - h * s + 4]], '#a8503a', { key: key + 'r' + i, sb: 5, tear: 0.5 }); y -= (h + 10) * s;
  });
  cut(tri(x, y, 8 * s, 56 * s), GOLD, { key: key + 'sp', sb: 3, tear: 0.3 });
}
function placeKunming(s) {
  wall('#cfe2ee', { k: 'km', pat: pat.stripes('rgba(255,255,255,0.24)', 40, 130) });
  sunDisc(1560, 300, 66, '#fff3b0', 'kmsun'); cloud(620, 280, 1.0, 'kmc1', 5); cloud(1100, 230, 0.8, 'kmc2', 6);
  peaks([[900, 460], [1100, 390], [1320, 450], [1560, 380], [1840, 450]], 730, '#8c9ad8', 'kmp', { crayon: '#5b6a8a' });
  hills('#a9c8dc', 735, 24, 'kmfar', { f: 0.006, ph: 2, drift: -3, bottom: 900 });
  pagoda(1130, GY + 20, 1.2, 'kmpg1'); pagoda(1340, GY + 20, 1.0, 'kmpg2');
  cut(domePts(1240, 770, 340, 70), '#8fcf7a', { key: 'kmbank', sb: 6, crayon: '#5a8a50', crAl: 0.3 });   // the shore the pagodas stand on
  cut(rect(1090, 700, 90, 28, 3), '#d9c9a8', { key: 'kmpl1', sb: 4 }); cut(rect(1310, 700, 72, 24, 3), '#d9c9a8', { key: 'kmpl2', sb: 4 });
  ground('#8fcf7a', '#7d7480', { k: 'km', crayon: '#5a8a50' });
  cut(rect(-30, 748, W + 60, 118, 0), '#6fb3d0', { key: 'kmlake', tear: 1.0, sy: -3, pat: wavePat(['#6fb3d0', '#8fc7e0', 'rgba(255,255,255,0.22)'], 12, 3, 0.03, TT) });
  for (let i = 0; i < 6; i++) { const gx = 980 + i * 150 + Math.sin(TT * 1.2 + i) * 10, gy = 800 + (i % 2) * 30;   // gulls on the water
    cut(ellipsePts(gx, gy, 26, 12, 0, 14), '#fff', { key: 'kmg' + i, sb: 3 }); cut(ellipsePts(gx + 22, gy - 8, 10, 8, 0, 10), '#fff', { key: 'kmgh' + i, shadow: false }); cut(tri(gx + 33, gy - 7, 5, 10), GOLD, { key: 'kmgb' + i, shadow: false, tear: 0.2 }); }
  birds(820, 260, 'kmb', 4);
  [[160, 1.1], [1860, 1.0]].forEach(([x, k], i) => { roundTree(x, 850, k, '#6fae6a', 'kmt' + i); for (let p = 0; p < 12; p++) { const R = RNG('kmbl', i, p); cut(ellipsePts(x + R.r(-70, 70) * k, 850 - R.r(70, 190) * k, 9, 9, 0, 10), p % 2 ? PAL.pink : '#f8c3d4', { key: 'kmbp' + i + p, shadow: false, tear: 0.3 }); } });
}
// ---- Chengdu: a giant panda in a bamboo grove
function placeChengdu(s) {
  wall('#d6e4dc', { k: 'cd', pat: pat.stripes('rgba(255,255,255,0.26)', 40, 130) });
  sunDisc(880, 270, 60, 'rgba(255,248,210,0.9)', 'cdsun'); cloud(1300, 280, 1.2, 'cdc1', 5); cloud(1700, 230, 0.9, 'cdc2', 6);
  hills('#a9c8b0', 640, 90, 'cdh', { f: 0.003, ph: 2, drift: -3 });
  for (let i = 0; i < 16; i++) { const R = RNG('cdb', i), x = 900 + i * 62 + R.r(-12, 12), h = R.r(330, 560);
    tube([x, GY + 10], [x + R.r(-6, 6), GY + 10 - h], 16, i % 2 ? '#6fae6a' : '#5aa05a', 'cdst' + i, { sb: 5, crayon: PAL.greenD, crAl: 0.3 });
    for (let n = 1; n < 6; n++) ink([[x - 9, GY + 10 - h * n / 6], [x + 9, GY + 10 - h * n / 6]], { w: 3, color: PAL.greenD, amt: 0.3, key: 'cdn' + i + n });
    cut(rot(ellipsePts(x + 30, GY - h + 40, 44, 9, 0, 12), x + 30, GY - h + 40, -0.4), '#7fbf6a', { key: 'cdl' + i, shadow: false, tear: 0.4 }); }
  ground('#9fbf6a', '#7d7480', { k: 'cd', crayon: '#5a8a50' });
  { const px = 1500, py = 850, nod = Math.sin(TT * 3) * 6;   // the panda, sitting, chewing bamboo
    ctx.fillStyle = 'rgba(35,20,10,0.25)'; ctx.beginPath(); ctx.ellipse(px, py + 6, 170, 18, 0, 0, TAU); ctx.fill();
    [[-70, 1], [70, 1]].forEach(([dx], i) => cut(ellipsePts(px + dx, py - 20, 40, 28, 0, 16), PAL.ink, { key: 'cdlg' + i, sb: 5 }));
    cut(ellipsePts(px, py - 120, 120, 104, 0, 28), '#fbf6ea', { key: 'cdbd', sb: 8, crayon: '#d8d0c4', crAl: 0.25 });
    tube([px - 100, py - 170], [px - 140, py - 90], 40, PAL.ink, 'cdar1', { sb: 5 }); tube([px + 100, py - 170], [px + 70, py - 110], 40, PAL.ink, 'cdar2', { sb: 5 });
    tube([px + 60, py - 118], [px + 120, py - 290], 14, '#6fae6a', 'cdbam', { sb: 4, crayon: PAL.greenD });
    cut(ellipsePts(px, py - 250 + nod, 84, 74, 0, 24), '#fbf6ea', { key: 'cdhd', sb: 8, crayon: '#d8d0c4', crAl: 0.25 });
    [-62, 62].forEach((dx, i) => cut(ellipsePts(px + dx, py - 312 + nod, 26, 26, 0, 14), PAL.ink, { key: 'cdear' + i, sb: 4 }));
    [-32, 32].forEach((dx, i) => { cut(rot(ellipsePts(px + dx, py - 254 + nod, 18, 26, 0, 14), px + dx, py - 254 + nod, dx > 0 ? -0.5 : 0.5), PAL.ink, { key: 'cdey' + i, shadow: false, tear: 0.3 }); dot(px + dx, py - 258 + nod, 5, '#fff'); });
    cut(ellipsePts(px, py - 226 + nod, 14, 10, 0, 12), PAL.ink, { key: 'cdns', shadow: false, tear: 0.2 });
    cut(ellipsePts(px + 14, py - 196 + nod, 10, 7, 0, 10), '#e8707a', { key: 'cdmt', shadow: false, tear: 0.2 }); }
  birds(800, 300, 'cdbirds');
}
// ---- Dujiangyan: the river on the Min, a rope-and-plank suspension bridge, a water wheel
function placeDujiangyan(s) {
  wall('#d6ecd0', { k: 'dj', pat: pat.stripes('rgba(255,255,255,0.28)', 40, 130) });
  cloud(620, 280, 1.1, 'djc1', 5); cloud(1300, 220, 0.9, 'djc2', 6); sunDisc(1700, 300, 56, '#fff3b0', 'djsun');
  hills('#6fae6a', 540, 150, 'djh1', { f: 0.003, ph: 1, drift: -3, pat: wavePat(['#6fae6a', '#5aa05a'], 13, 5, 0.02) });
  hills('#3d7c46', 670, 100, 'djh2', { f: 0.004, ph: 3, drift: -7, bottom: 900 });
  [[1100, 600], [1500, 580], [1800, 620]].forEach(([x, y], i) => cut(ellipsePts(x + Math.sin(TT + i) * 18, y, 190, 18, 0, 22), 'rgba(255,255,255,0.6)', { key: 'djm' + i, shadow: false, grain: 0.3, shade: false }));
  ground('#6fae6a', '#7d7480', { k: 'dj', crayon: '#3d7c46' });
  cut(rect(-30, 760, W + 60, 106, 0), '#52bfb8', { key: 'djriver', tear: 1.0, sy: -3, pat: wavePat(['#52bfb8', '#3fa5a5', '#e8f6f4'], 11, 4, 0.04, TT * 2) });
  [[1000, 530], [1820, 530]].forEach(([x, y], i) => { cut(rect(x - 26, y, 52, 250, 3), PAL.woodD, { key: 'djtw' + i, sb: 6, pat: pat.grainWood('rgba(60,30,10,0.3)') }); cut([[x - 56, y + 4], [x, y - 44], [x + 56, y + 4]], '#b84a3a', { key: 'djtr' + i, sb: 5, tear: 0.5 }); });
  cut(rect(1000, 700, 820, 14, 3), PAL.woodL, { key: 'djdeck', sb: 6, pat: pat.lines('rgba(60,30,10,0.3)', 10) });
  const cableY = (t) => 570 + 80 * Math.sin(Math.PI * t);
  ink(Array.from({ length: 14 }, (_, i) => [1000 + 820 * i / 13, cableY(i / 13)]), { w: 5, color: '#c9a574', amt: 0.5, key: 'djcb' });
  for (let i = 1; i < 13; i++) { const x = 1000 + 820 * i / 13; ink([[x, cableY(i / 13)], [x, 700]], { w: 3, color: '#c9a574', amt: 0.3, key: 'djh' + i }); }
  { const wx = 1400, wy = 800, R = 64, a0 = TT * 0.9;   // a water wheel
    ctx.fillStyle = 'rgba(0,40,40,0.2)'; ctx.beginPath(); ctx.ellipse(wx, wy + R + 4, R * 1.1, 12, 0, 0, TAU); ctx.fill();
    ink(ellipsePts(wx, wy, R, R, 0, 32), { closed: true, w: 11, color: '#6b3f1f', amt: 0.6, key: 'djww' });
    for (let i = 0; i < 8; i++) { const a = a0 + i * Math.PI / 4; ink([[wx, wy], [wx + Math.cos(a) * R, wy + Math.sin(a) * R]], { w: 7, color: '#6b3f1f', amt: 0.4, key: 'djws' + i }); cut(rect(wx + Math.cos(a) * R - 10, wy + Math.sin(a) * R - 10, 20, 20, 2), PAL.woodL, { key: 'djwp' + i, sb: 3, shade: false }); } }
  birds(900, 300, 'djb');
}
// ---- Hami: desert and a roadside melon stall, distant snow peaks, a camel
function melon(x, y, k, key) {
  cut(ellipsePts(x, y, 38 * k, 27 * k, 0, 18), '#cfd37a', { key, sb: 4, crayon: '#9aa040', crAl: 0.4, pat: pat.dots('rgba(120,130,40,0.4)', 2, 11) });
  ink([[x - 30 * k, y - 4 * k], [x + 30 * k, y + 4 * k]], { w: 2.4, color: 'rgba(120,130,40,0.5)', amt: 0.6, key: key + 'l' });
}
function placeHami(s) {
  wall('#f6e3a8', { k: 'hm', pat: pat.stripes('rgba(255,255,255,0.26)', 40, 130) });
  sunDisc(1100, 300, 76, '#fff0a0', 'hmsun'); cloud(620, 290, 0.9, 'hmc1', 5);
  peaks([[900, 500], [1160, 440], [1420, 490], [1700, 430], [1920, 500]], 740, '#aab0c8', 'hmp', { snow: '#fff', snowW: 46 });
  hills('#e6c88a', 752, 90, 'hmd1', { f: 0.004, ph: 1, drift: -5, bottom: 900 });
  hills('#d9b070', 795, 60, 'hmd2', { f: 0.005, ph: 3, drift: -11, bottom: 900, crayon: '#b98a52' });
  ground('#d9b070', '#8a7a70', { k: 'hm', crayon: '#b98a52', pat: pat.stripes('rgba(120,80,30,0.12)', 3, 16, 0.2) });
  camel(1040, 840, 1.25, 'hmcm', '#8a5a32');
  { const x = 1620, y = 850;   // the melon stall
    tube([x - 120, y], [x - 120, y - 190], 12, '#5a3a24', 'hmp1', { sb: 4 }); tube([x + 140, y], [x + 140, y - 190], 12, '#5a3a24', 'hmp2', { sb: 4 });
    cut([[x - 150, y - 180], [x + 170, y - 180], [x + 190, y - 130], [x - 170, y - 130]], '#d4382c', { key: 'hmaw', sb: 6, pat: pat.stripes('rgba(255,255,255,0.8)', 22, 44, 0) });
    cut(rect(x - 130, y - 70, 260, 14, 3), '#5a3a24', { key: 'hmtb', sb: 5 }); tube([x - 100, y - 56], [x - 100, y], 12, '#5a3a24', 'hmt1', { sb: 3 }); tube([x + 100, y - 56], [x + 100, y], 12, '#5a3a24', 'hmt2', { sb: 3 });
    [[-90, 0], [-20, 0], [50, 0], [110, 0], [-55, -38], [15, -38], [80, -38], [-20, -76]].forEach(([dx, dy], i) => melon(x + dx, y - 100 + dy, 0.9, 'hmm' + i)); }
  birds(800, 260, 'hmb');
}
