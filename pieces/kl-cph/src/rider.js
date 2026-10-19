// =====================================================================
//  rider.js — the hero on its bike, the HUD (day tag, place tag, passport band), and shared scenery helpers.
//  The rider sits at the same spot in every shot and the world is drawn around him; cameras (src/shots.js) are centred on his face.
//  Orange is the spark's alone; the red thread (THREAD) is the ridden path.
// =====================================================================
const HX = 600, GY = 700, WY = 828, WR = 92, ROADY = 866, HS = 1.15;   // HS: the rider is drawn larger about its ground contact
const HEAD = [HX + 52, WY - 346];   // the rider's face: the anchor every camera is centred on
const GROUND_Y = WY + WR, HSX = HX + (HEAD[0] - HX) * HS, HSY = GROUND_Y + (HEAD[1] - GROUND_Y) * HS;   // the hero's screen spot
const THREAD = '#c8402f';
const GOLD = '#e0a826';

// ---- limb IK: the knee/elbow of a two-segment limb from a to b
function ik2(a, b, L1, L2, bend) {
  const dx = b[0] - a[0], dy = b[1] - a[1], d = Math.min(Math.hypot(dx, dy), L1 + L2 - 0.5);
  const ang = Math.acos(clamp((L1 * L1 + d * d - L2 * L2) / (2 * L1 * d), -1, 1)), k = Math.atan2(dy, dx) + bend * ang;
  return [a[0] + Math.cos(k) * L1, a[1] + Math.sin(k) * L1];
}
const tube = (a, b, w, c, key, o = {}) => cut(capsulePts(a[0], a[1], b[0], b[1], w, 6), c, { key, sb: 5, sy: 3, sx: 2, tear: 0.5, grain: 0.5, ...o });
function limb(a, b, L1, L2, bend, w, c, key, cr = PAL.orangeD) {
  const k = ik2(a, b, L1, L2, bend);
  tube(a, k, w, c, key + 'a', { crayon: cr, crAl: 0.35, crPer: 30 }); tube(k, b, w * 0.88, c, key + 'b', { crayon: cr, crAl: 0.35, crPer: 30 });
}
function wheel(x, y, key) {
  ink(ellipsePts(x, y, WR, WR, 0, 48), { closed: true, w: 17, color: PAL.ink, amt: 0.8, key: key + 't' });
  ink(ellipsePts(x, y, WR - 12, WR - 12, 0, 40), { closed: true, w: 3, color: '#d8cfc0', amt: 0.6, key: key + 'i', alpha: 0.9 });
  for (let i = 0; i < 12; i++) { const a = TT * 3.6 + i / 12 * TAU; ink([[x, y], [x + Math.cos(a) * (WR - 14), y + Math.sin(a) * (WR - 14)]], { w: 2.2, color: PAL.ink, alpha: 0.5, amt: 0.3, key: key + 's' + i }); }
  cut(ellipsePts(x, y, 13, 13, 0, 16), GOLD, { key: key + 'h', sb: 4, sy: 3 });
}


// ---- the HUD: day and date tags (top-left), the place (top-right), the passport band (bottom): 16 dots, a red thread through the ones ridden
function hud(s) {
  const f = () => {
    const mk = s.kind === 'map' ? ev(s.t0 + 0.3, 2.2) : 1, day = s.kind === 'map' ? Math.max(1, Math.round(244 * mk)) : s.day;   // on the map the counter replays the trip
    const dayS = 'DAY ' + day, dw = handW(dayS, 84) + 76;
    tag(dayS, 70 + dw / 2, SAFE.top + 70, 84, { rot: -0.04, fill: PAL.yellow });
    if (s.kind !== 'map') { const dtw = handW(s.date, 52) + 47; tag(s.date, 70 + dtw / 2 + 8, SAFE.top + 168, 52, { rot: 0.03, tape: false }); }
    const pw = handW(s.place, 62) + 56; tag(s.place, W - SAFE.right - pw / 2, SAFE.top + 70, 62, { rot: 0.025, tape: false });
    // passport band
    cut(rect(-30, 986, W + 60, 130, 0), PAL.navy, { key: 'band', tear: 1.6, sy: -5, sb: 9, shade: false, pat: pat.dots('rgba(255,230,180,0.10)', 3, 40) });
    const n = 16, x0 = 150, x1 = W - 150, y = 1034, px = (k) => x0 + (x1 - x0) * k / (n - 1), py = (k) => y + Math.sin(k * 1.3) * 5, cur = s.kind === 'map' ? Math.min(15, Math.floor(mk * 16)) : s.entered - 1;
    ink(Array.from({ length: n }, (_, k) => [px(k), py(k)]), { w: 3, color: 'rgba(250,244,230,0.45)', amt: 0.8, key: 'rb0' });
    if (cur > 0) ink(Array.from({ length: cur + 1 }, (_, k) => [px(k), py(k)]), { w: 7, color: THREAD, amt: 0.8, key: 'rb1' });
    for (let k = 0; k < n; k++) cut(ellipsePts(px(k), py(k), k <= cur ? 15 : 12, k <= cur ? 15 : 12, 0, 18), k <= cur ? THREAD : PAL.cream, { key: 'rd' + k, sb: 4, sy: 2, tear: 0.5, grain: 0.4, shade: false });
    cut(ellipsePts(px(cur), py(cur) - 2, 22, 22, 0, 22), COBALT, { key: 'rm', sb: 6, sy: 3, tear: 0.6, crayon: COBALT_D, crPer: 20 });
  };
  if (DEFER) DEFER.push(f); else f();
}

// ---- scenery helpers
const wall = (c, o = {}) => cut(rect(-30, -30, W + 60, H + 60, 0), c, { key: 'wall' + (o.k ?? ''), shadow: false, tear: 0, shade: false, pat: o.pat, crayon: o.crayon, crPer: 90 });
function hills(c, base, amp, key, o = {}) {
  const f = o.f ?? 0.004, ph = o.ph ?? 0, dr = (o.drift ?? 0) * TT, P = [[-40, o.bottom ?? H + 40]];
  for (let x = -40; x <= W + 40; x += 40) P.push([x, base - amp * (0.5 + 0.5 * Math.sin((x + dr) * f + ph)) - amp * 0.4 * Math.sin((x + dr) * f * 2.3 + ph * 1.7)]);
  P.push([W + 40, o.bottom ?? H + 40]);
  return cut(P, c, { key, sy: -4, sb: 8, tear: 1.1, pat: o.pat, crayon: o.crayon, shadow: o.shadow });
}
function ground(field, roadC, o = {}) {
  cut(rect(-30, GY, W + 60, H - GY + 40, 0), field, { key: 'fld' + (o.k ?? ''), tear: 0.9, sy: -7, sb: 10, pat: o.pat, crayon: o.crayon });
  cut(rect(-30, ROADY, W + 60, 116, 0), roadC, { key: 'rd' + (o.k ?? ''), tear: 0.8, sy: -4, sb: 8, crayon: o.rcrayon ?? 'rgba(255,255,255,0.22)' });
  if (o.dash !== false) { const off = mod(TT * 331, 220); for (let i = 0; i < 11; i++) cut(rect(i * 220 - 220 - off, 918, 110, 11, 4), o.dashC ?? '#f6f1e2', { key: 'dash' + i, sb: 2, sy: 1, tear: 0.4, grain: 0.3, shade: false }); }
}
function bandsPat(cols, th, ang = 0) {   // a pattern of coloured bands, for striped rock and water
  return (bb) => {
    ctx.save(); const cx = (bb.x0 + bb.x1) / 2, cy = (bb.y0 + bb.y1) / 2, R = Math.hypot(bb.x1 - bb.x0, bb.y1 - bb.y0) / 2 + 10;
    ctx.translate(cx, cy); ctx.rotate(ang); let i = 0; for (let y = -R; y < R; y += th, i++) { ctx.fillStyle = cols[i % cols.length]; ctx.fillRect(-R, y, 2 * R, th + 1); } ctx.restore();
  };
}
function sunDisc(x, y, r, c = PAL.yellow, key = 'sun') {
  if ((x > 1280 || x < 560) && y < 330) y = 330;   // keep the sun clear of the day tag (left) and the place tag (right)
  cut(ellipsePts(x, y, r * 1.3, r * 1.3, 0, 36), 'rgba(255,248,210,0.55)', { key: key + 'h', shadow: false, grain: 0.3, shade: false }); cut(ellipsePts(x, y, r, r, 0, 36), c, { key, crayon: '#e6b23a', crAl: 0.35, sb: 14, sy: 5 });
}
function cloud(x, y, s, key, spd = 9) {
  const cx = x + TT * spd * s, c = 'rgba(255,255,255,0.96)';
  if (y < 280 && (cx < 560 || cx > 1320)) y = 290;   // clear of the day tag and the place tag
  cut(ellipsePts(cx, y, 70 * s, 26 * s, 0, 22), c, { key: key + 'a', sb: 6, sy: 4, grain: 0.3 }); cut(ellipsePts(cx - 34 * s, y + 8 * s, 44 * s, 20 * s, 0, 18), c, { key: key + 'b', shadow: false, grain: 0.3 }); cut(ellipsePts(cx + 38 * s, y + 6 * s, 48 * s, 22 * s, 0, 18), c, { key: key + 'c', shadow: false, grain: 0.3 });
}
function birds(x, y, key, n = 3, col = PAL.ink) {
  for (let i = 0; i < n; i++) { const bx = x + i * 46 + TT * 20 + (i % 2) * 14, by = y + (i % 2) * 22 + Math.sin(TT * 2 + i) * 6, fl = (B + i) % 2 ? 7 : 12;
    ink([[bx - 15, by - fl * 0.4], [bx, by], [bx + 15, by - fl * 0.4]], { w: 3.6, color: col, amt: 0.4, key: key + i }); }
}
function palm(x, y, s, key) {
  tube([x, y], [x + 30 * s, y - 250 * s], 22 * s, PAL.woodD, key + 't', { sb: 4, grain: 0.7, crayon: '#6b3a1a' });
  for (let i = 0; i < 7; i++) { const a = -Math.PI / 2 + (i - 3) * 0.62 + Math.sin(TT * 2 + i) * 0.04, L = 120 * s; cut(rot(ellipsePts(x + 30 * s + Math.cos(a) * L * 0.5, y - 250 * s + Math.sin(a) * L * 0.5, L * 0.55, 15 * s, 0, 14), x + 30 * s + Math.cos(a) * L * 0.5, y - 250 * s + Math.sin(a) * L * 0.5, a), i % 2 ? PAL.green : PAL.greenD, { key: key + 'l' + i, sb: 4, tear: 0.8 }); }
}
function pine(x, y, s, c, key) {
  tube([x, y], [x, y - 30 * s], 14 * s, PAL.woodD, key + 't', { sb: 3, grain: 0.4 });
  [[0, 90, 120], [-40, 62, 100], [-76, 44, 80]].forEach(([dy, hw, h], i) => cut([[x - hw * s, y - 20 * s + dy * s], [x, y - 20 * s + (dy - h) * s], [x + hw * s, y - 20 * s + dy * s]], i % 2 ? c : PAL.greenD, { key: key + i, sb: 4, tear: 0.8 }));
}
function roundTree(x, y, s, c, key) {
  tube([x, y], [x, y - 90 * s], 16 * s, PAL.woodD, key + 't', { sb: 3, grain: 0.4 });
  cut(ellipsePts(x, y - 130 * s, 66 * s, 58 * s, 0, 24), c, { key: key + 'c', sb: 6, crayon: PAL.greenD, crAl: 0.3 });
  cut(ellipsePts(x - 34 * s, y - 100 * s, 40 * s, 36 * s, 0, 18), c, { key: key + 'd', shadow: false, crayon: PAL.greenD, crAl: 0.3 });
  cut(ellipsePts(x + 38 * s, y - 104 * s, 40 * s, 34 * s, 0, 18), c, { key: key + 'e', shadow: false, crayon: PAL.greenD, crAl: 0.3 });
}
// a house: x, y = bottom-left; w, h; wall colour; roof colour; style 'gable' | 'flat'
function house(x, y, w, h, c, rc, key, o = {}) {
  cut(rect(x, y - h, w, h, 3), c, { key: key + 'w', sb: 6, pat: o.pat });
  if (o.roof !== 'flat') cut([[x - 10, y - h + 2], [x + w / 2, y - h - (o.rh ?? w * 0.42)], [x + w + 10, y - h + 2]], rc, { key: key + 'r', sb: 6, pat: pat.stripes('rgba(0,0,0,0.12)', 4, 14, 0.5) });
  const cols = o.cols ?? 2, rows = o.rows ?? Math.max(1, Math.floor(h / 70));
  for (let r = 0; r < rows; r++) for (let cI = 0; cI < cols; cI++) cut(rect(x + w * (cI + 0.5) / cols - 13, y - h + 18 + r * 66, 26, 38, 3), o.win ?? '#fff3c8', { key: key + 'x' + r + cI, shadow: false, sb: 2, tear: 0.4, shade: false, line: PAL.ink, lw: 2 });
}
// a bell-shaped dome or arch: a half ellipse from (x - rx, y) to (x + rx, y), height ry
const domePts = (x, y, rx, ry, n = 20) => { const P = [[x - rx, y]]; for (let i = 0; i <= n; i++) { const a = Math.PI + i / n * Math.PI; P.push([x + Math.cos(a) * rx, y + Math.sin(a) * ry]); } P.push([x + rx, y]); return P; };
const tri = (x, y, w, h) => [[x - w / 2, y], [x, y - h], [x + w / 2, y]];
// a mountain range of peaks: pts = [[x, peakY], ...] all down to base; optional snow caps
function peaks(P, base, c, key, o = {}) {
  const poly = [[P[0][0] - 200, base], ...P, [P[P.length - 1][0] + 200, base]];
  const Q = cut(poly, c, { key, sb: 8, sy: -3, tear: 1.2, pat: o.pat, crayon: o.crayon });
  if (o.snow) {   // snow caps clipped to the mountain so they never float off it
    ctx.save(); trace(Q, true); ctx.clip();
    P.forEach(([x, y], i) => { const w = o.snowW ?? 60, R = RNG('snow', key, i); ctx.fillStyle = o.snow; ctx.beginPath(); ctx.moveTo(x, y - 12);
      [[x + w * 1.8, y + w * 1.5], [x + w * 1.1, y + w * 1.0], [x + w * 0.7, y + w * 1.25], [x + w * 0.3, y + w * 0.85], [x - w * 0.1, y + w * 1.2], [x - w * 0.6, y + w * 0.9], [x - w * 1.1, y + w * 1.3], [x - w * 1.8, y + w * 1.5]].forEach(([px, py]) => ctx.lineTo(px + R.n(2), py + R.n(2))); ctx.closePath(); ctx.fill(); });
    ctx.restore();
  }
}
