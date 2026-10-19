// =====================================================================
//  hero-person.js — the rider himself in cut paper (from the user's photo: black vented helmet, dark glasses, a big grin,
//  a cobalt wind jacket, black dry bags with a blue bungee). Cobalt is the hero's colour and nothing else in the piece
//  uses it. A sticker lands on the rear pannier for every country completed (16 at the end).
//  The only hero: it replaced the spark once approved.
// =====================================================================
const COBALT = '#2447c4', COBALT_D = '#16308a', BAG = '#2a2630', PANTS = '#34303c', PANTS_F = '#201c26', SKIN = '#efc19e', SKIN_D = '#d9966a';
const STICKER_COLS = ['#f3a3bf', '#f6cf55', '#a9d9c6', '#c9b0e8', '#d4382c', '#fbf6ea', '#3f9f9a', '#f8c3d4', '#e6c36a', '#8fcf9a', '#f6e08a', '#d98b7a', '#a9c8dc', '#c9a574', '#e87aa0', '#9ad0c0'];

function stickers(x, y, w, h, n, fresh) {
  for (let i = 0; i < n && i < 16; i++) {
    const c = i % 4, r = Math.floor(i / 4), cx = x + w * (c + 0.5) / 4, cy = y + h * (r + 0.5) / 4, big = fresh && i === n - 1, k = big ? 1.5 : 1;
    cut(ellipsePts(cx, cy, 13 * k, 13 * k, 0, 14), STICKER_COLS[i], { key: 'stk' + i, sb: big ? 6 : 3, sy: 2, tear: 0.5, grain: 0.3, shade: false, pat: pat.stripes('rgba(255,255,255,0.55)', 4, 9, i * 0.7), line: '#fbf6ea', lw: 2.4 });
  }
}
// the head: a helmet, dark glasses, a grin. mood: 'smile' (teeth), 'wow' (open mouth), 'flat'
function headP(x, y, mood) {
  cut(rect(x - 20, y + 30, 40, 52, 10), SKIN_D, { key: 'neck', shadow: false, sb: 3 });
  cut(ellipsePts(x - 52, y + 6, 11, 15, 0, 12), SKIN_D, { key: 'ear', shadow: false });
  cut(ellipsePts(x, y, 56, 60, 0, 30), SKIN, { key: 'head', sb: 8, crayon: SKIN_D, crAl: 0.22 });
  ctx.fillStyle = 'rgba(240,110,120,0.38)'; ctx.beginPath(); ctx.ellipse(x - 36, y + 24, 11, 7, 0, 0, TAU); ctx.ellipse(x + 38, y + 24, 11, 7, 0, 0, TAU); ctx.fill();
  ink([[x + 2, y + 6], [x + 6, y + 14], [x + 1, y + 17]], { w: 3, color: SKIN_D, amt: 0.3, key: 'nose' });
  if (mood === 'wow') {
    cut(ellipsePts(x + 4, y + 34, 15, 20, 0, 16), '#3a1f24', { key: 'mouth', shadow: false, shade: false, tear: 0.3 }); cut(ellipsePts(x + 4, y + 44, 9, 7, 0, 10), '#e8707a', { key: 'tongue', shadow: false, shade: false, grain: false });
    ink([[x - 44, y - 30], [x - 8, y - 38]], { w: 4, color: '#1f1c24', amt: 0.3, key: 'brL' }); ink([[x + 8, y - 38], [x + 44, y - 30]], { w: 4, color: '#1f1c24', amt: 0.3, key: 'brR' });
  } else if (mood === 'flat') ink([[x - 18, y + 32], [x + 24, y + 30]], { w: 4, color: '#1f1c24', amt: 0.3, key: 'flat' });
  else {
    const M = [[x - 30, y + 22]]; for (let i = 0; i <= 12; i++) { const a = i / 12 * Math.PI; M.push([x + 4 + Math.cos(a) * -32, y + 22 + Math.sin(a) * 22]); }
    cut(M, '#fff', { key: 'mouth', shadow: false, shade: false, tear: 0.3, grain: 0.2, line: '#3a1f24', lw: 3 });
    ink([[x - 26, y + 33], [x + 34, y + 33]], { w: 2.4, color: 'rgba(60,30,30,0.5)', amt: 0.2, key: 'teeth' });
  }
  // dark glasses
  cut(rect(x - 46, y - 18, 41, 27, 12), '#17151c', { key: 'lensL', sb: 4, shade: false, tear: 0.3 }); cut(rect(x + 5, y - 18, 41, 27, 12), '#17151c', { key: 'lensR', sb: 4, shade: false, tear: 0.3 });
  ink([[x - 6, y - 8], [x + 6, y - 8]], { w: 4, color: '#17151c', amt: 0.2, key: 'bridge' }); ink([[x - 46, y - 10], [x - 56, y - 14]], { w: 4, color: '#17151c', amt: 0.2, key: 'tmpl' });
  ink([[x - 38, y - 12], [x - 30, y - 15]], { w: 3, color: 'rgba(255,255,255,0.8)', amt: 0.1, key: 'gl1' }); ink([[x + 13, y - 12], [x + 21, y - 15]], { w: 3, color: 'rgba(255,255,255,0.8)', amt: 0.1, key: 'gl2' });
  // helmet and strap
  ink([[x - 53, y - 2], [x - 40, y + 34]], { w: 3.4, color: '#2a2630', amt: 0.3, key: 'str1' }); ink([[x + 52, y - 4], [x + 38, y + 36]], { w: 3.4, color: '#2a2630', amt: 0.3, key: 'str2' });
  cut(domePts(x, y - 16, 66, 74), '#1f1c24', { key: 'helm', sb: 7, crayon: '#4a4650', crAl: 0.3 });
  cut(rect(x + 26, y - 28, 46, 11, 4), '#1f1c24', { key: 'visor', sb: 3, shade: false });
  [[-34, -62, -16, -34], [-8, -70, 10, -38], [18, -66, 34, -36]].forEach(([a, b, c, d], i) => ink([[x + a, y + b], [x + c, y + d]], { w: 9, color: '#5a5662', amt: 0.3, key: 'vent' + i }));
}
function riderPerson(s, o = {}) {
  ctx.save(); ctx.translate(HX, GROUND_Y); ctx.scale(HS, HS); ctx.translate(-HX, -GROUND_Y);
  const n = s.rays, th = TT * 3.6, cr = 40;
  const Rr = [HX - 150, WY], Fh = [HX + 160, WY], BB = [HX - 10, WY], S = [HX - 52, WY - 140], Hd = [HX + 112, WY - 158];
  ctx.fillStyle = 'rgba(35,20,10,0.22)'; ctx.beginPath(); ctx.ellipse(HX + 5, WY + WR + 6, 250, 15, 0, 0, TAU); ctx.fill();
  const hip = [HX - 60, WY - 166], sh = [HX + 30, WY - 268], grip = [Hd[0] + 46, Hd[1] - 32];
  const pNear = [BB[0] + Math.cos(th) * cr, BB[1] + Math.sin(th) * cr], pFar = [BB[0] - Math.cos(th) * cr, BB[1] - Math.sin(th) * cr];
  limb(hip, pFar, 96, 100, -1, 30, PANTS_F, 'legF', '#000');
  wheel(Rr[0], Rr[1], 'wr'); wheel(Fh[0], Fh[1], 'wf');
  const fr = PAL.teal;
  tube(Rr, BB, 13, fr, 'cs'); tube(Rr, S, 11, fr, 'ss'); tube(BB, S, 14, fr, 'st'); tube(S, Hd, 14, fr, 'tt'); tube(BB, Hd, 16, fr, 'dt'); tube(Hd, Fh, 12, fr, 'fk');
  cut(ellipsePts(BB[0], BB[1], 26, 26, 0, 20), GOLD, { key: 'ring', sb: 4, sy: 3 });
  // rear rack, the dry bag with its blue bungee, the pannier with a sticker for each country completed
  tube([Rr[0] - 74, WY - 98], [S[0] + 6, WY - 98], 9, PAL.charcoal, 'rack', { grain: 0.3 }); tube([Rr[0] - 70, WY - 96], Rr, 6, PAL.charcoal, 'rstrut', { grain: 0.2, shade: false });
  cut(rect(Rr[0] - 70, WY - 100, 124, 112, 12), BAG, { key: 'pan', sb: 7, pat: pat.stripes('rgba(255,255,255,0.08)', 5, 20) });
  stickers(Rr[0] - 64, WY - 92, 112, 100, n, s.fresh);
  tube([Rr[0] - 84, WY - 120], [S[0] + 26, WY - 120], 40, BAG, 'roll', { crayon: '#4a4650', crAl: 0.3 });
  [-60, -10, 40].forEach((dx, i) => ink([[Rr[0] + dx, WY - 140], [Rr[0] + dx + 14, WY - 100]], { w: 4, color: COBALT, amt: 0.3, key: 'cord' + i }));
  { const fx = Rr[0] - 82, lean = 8 + Math.sin(TT * 5) * 3, tx = fx - lean;   // the pole leans back with the wind
    cut([[fx - 4, WY - 126], [tx - 6, WY - 336], [tx + 6, WY - 338], [fx + 6, WY - 126]], PAL.woodL, { key: 'fpole', sb: 3, tear: 0.2, shade: false, line: PAL.ink, lw: 2 });
    const up = [], dn = [];   // the flag streams backwards, tapering, a wave running from the pole to the tip
    for (let k = 0; k <= 12; k++) { const t = k / 12, x = tx - 2 - 170 * t, cy = WY - 304 - 10 * t + Math.sin(TT * 8 - t * 7) * 22 * t, hh = 40 * (1 - 0.72 * t); up.push([x, cy - hh]); dn.unshift([x, cy + hh]); }
    cut([...up, ...dn], PAL.yellow, { key: 'flag', sb: 4, tear: 0.5, line: PAL.ink, lw: 3 }); }
  cut(rect(Fh[0] - 30, WY - 84, 64, 72, 10), BAG, { key: 'fpan', sb: 6, pat: pat.stripes('rgba(255,255,255,0.08)', 5, 20) });
  tube([S[0] - 30, S[1] - 12], [S[0] + 22, S[1] - 14], 17, PAL.ink, 'sad', { grain: 0.3 });
  tube(Hd, [Hd[0] + 18, Hd[1] - 32], 11, PAL.charcoal, 'stem', { grain: 0.3 }); tube([Hd[0] + 18, Hd[1] - 32], [Hd[0] + 46, Hd[1] - 32], 12, PAL.ink, 'bar', { grain: 0.3 });
  cut(rect(Hd[0] + 8, Hd[1] - 36, 84, 58, 10), BAG, { key: 'bag', sb: 6, pat: pat.stripes('rgba(255,255,255,0.08)', 4, 18) });
  [0, 1, 2].forEach((i) => ink([[Hd[0] + 22 + i * 24, Hd[1] - 34], [Hd[0] + 22 + i * 24, Hd[1] + 18]], { w: 4, color: COBALT, amt: 0.3, key: 'bcord' + i }));
  tube(BB, pNear, 9, PAL.charcoal, 'crank', { grain: 0.2, shade: false }); cut(rect(pNear[0] - 15, pNear[1] - 5, 30, 10, 3), PAL.ink, { key: 'ped', sb: 2, shade: false });
  limb(hip, pNear, 96, 100, -1, 32, PANTS, 'legN', '#000');
  cut(ellipsePts(pNear[0] + 8, pNear[1] - 4, 22, 11, 0, 14), '#e8e2d4', { key: 'shoe', sb: 3 });
  // torso (cobalt jacket), hood, zip, then the head turned back to the camera
  tube(hip, sh, 100, COBALT, 'torso', { crayon: COBALT_D, crAl: 0.4, crPer: 28, sb: 7 });
  ink([[hip[0] + 8, hip[1] - 14], [sh[0] + 2, sh[1] + 26]], { w: 3, color: COBALT_D, amt: 0.4, key: 'zip' });
  cut(ellipsePts(sh[0] - 18, sh[1] - 12, 40, 26, -0.5, 18), COBALT, { key: 'hood', sb: 5, crayon: COBALT_D, crAl: 0.35 });
  const HD = [sh[0] + 22, sh[1] - 78]; headP(HD[0], HD[1], s.mood ?? 'smile');
  SPARK_AT = toScreen(HD[0], HD[1]);
  limb([sh[0] + 6, sh[1] + 10], grip, 80, 84, 1, 34, COBALT, 'arm', COBALT_D);
  cut(ellipsePts(grip[0], grip[1], 17, 15, 0, 14), SKIN, { key: 'hand', sb: 3 });
  if (s.fresh) { sparkle(HD[0] + 100, HD[1] - 40, 22, PAL.yellow); sparkle(HD[0] - 110, HD[1] - 20, 16, PAL.yellow); sparkle(Rr[0] - 20, WY - 120, 14, PAL.yellow); }
  if (s.kind === 'nyhavn') { const u = ev(s.t0, 0.9), v = ev(s.t0 + 0.9, 1.2); if (u > 0 && v < 1) burst(Rr[0] - 6, WY - 52, 60 + 20 * u, 90 + 90 * u, { n: 16, c: PAL.yellow, w: 9 * (1 - v), al: 1 - v, key: 'stk16' }); }
  ctx.restore();
}
