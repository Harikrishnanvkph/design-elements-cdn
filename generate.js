const fs = require('fs');
const path = require('path');

const BASE_DIR = __dirname;
const SVGS_DIR = path.join(BASE_DIR, 'svgs');

const elements = [];

// Helper to register an element
function addElement(item) {
  elements.push(item);
  const catDir = path.join(SVGS_DIR, item.category);
  fs.mkdirSync(catDir, { recursive: true });
  fs.writeFileSync(path.join(catDir, `${item.id}.svg`), item.svg.trim(), 'utf8');
}

// ═══════════════════════════════════════════════════════════════
// 1. BRUSH STROKES & ACRYLICS (40 items)
// ═══════════════════════════════════════════════════════════════

const BRUSH_PALETTE = ['#EAB308', '#F59E0B', '#E11D48', '#6366F1', '#10B981', '#3B82F6', '#EC4899', '#8B5CF6', '#06B6D4', '#F97316'];

// 1.1 Acrylic strokes (10 items)
for (let i = 1; i <= 10; i++) {
  const curve = (i % 2 === 0 ? 1 : -1) * (i * 3);
  const thickness = 20 + (i % 4) * 6;
  const width = 280 + (i * 5);
  const yMid = 30;
  const topY = yMid - thickness / 2 + curve;
  const botY = yMid + thickness / 2 + curve;
  const color = BRUSH_PALETTE[(i - 1) % BRUSH_PALETTE.length];

  addElement({
    id: `brush-acrylic-${String(i).padStart(2, '0')}`,
    name: `Acrylic Brush Stroke ${i}`,
    category: 'brushes',
    tags: ['brush', 'acrylic', 'stroke', 'paint', 'underline', 'art', 'texture'],
    width: 280,
    height: 50,
    defaultColor: color,
    svg: `<svg viewBox="0 0 320 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 ${topY + 6} C40 ${topY - 4}, 110 ${topY + 2}, 180 ${topY - 2} C240 ${topY + 3}, 285 ${topY + 6}, 308 ${topY + 12} C302 ${botY + 6}, 255 ${botY - 2}, 190 ${botY + 2} C130 ${botY - 3}, 55 ${botY + 5}, 14 ${botY - 2} C8 ${yMid + 4}, 7 ${yMid - 4}, 12 ${topY + 6} Z" fill="currentColor"/>
      <path d="M25 ${topY + 12} C75 ${topY + 8}, 145 ${topY + 6}, 215 ${topY + 8} C265 ${topY + 12}, 295 ${topY + 14}, 290 ${botY - 6} C245 ${botY - 8}, 160 ${botY - 6}, 80 ${botY - 6}, 30 ${botY - 4} Z" fill="currentColor" opacity="0.8"/>
      <circle cx="${312 - i}" cy="${topY + 16}" r="2" fill="currentColor"/>
      <circle cx="${8 + i}" cy="${botY - 4}" r="1.5" fill="currentColor"/>
    </svg>`
  });
}

// 1.2 Paint Roller Stripes (6 items)
for (let i = 1; i <= 6; i++) {
  const h = 40 + i * 3;
  const color = BRUSH_PALETTE[(i + 2) % BRUSH_PALETTE.length];
  addElement({
    id: `brush-roller-${String(i).padStart(2, '0')}`,
    name: `Paint Roller Stripe ${i}`,
    category: 'brushes',
    tags: ['roller', 'stripe', 'banner', 'paint', 'heading', 'poster'],
    width: 290,
    height: 55,
    defaultColor: color,
    svg: `<svg viewBox="0 0 320 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 10 C70 ${10 + (i%2)*3}, 160 ${9 - (i%2)*2}, 240 ${11 + (i%3)}, 305 12 C312 16, 314 28, 312 42 C310 48, 305 52, 298 52 C230 ${50 + (i%2)*2}, 140 ${48 - (i%2)}, 60 51, 14 49 C7 45, 6 32, 8 18 C9 13, 11 11, 15 10 Z" fill="currentColor"/>
      <path d="M5 16 C2 18, 3 26, 5 34 C4 38, 8 30, 7 22 Z" fill="currentColor"/>
      <circle cx="316" cy="48" r="2" fill="currentColor"/>
      <circle cx="7" cy="44" r="1.5" fill="currentColor"/>
    </svg>`
  });
}

// 1.3 Calligraphy Swooshes (6 items)
for (let i = 1; i <= 6; i++) {
  const lift = i * 4;
  const color = BRUSH_PALETTE[(i + 4) % BRUSH_PALETTE.length];
  addElement({
    id: `brush-calligraphy-${String(i).padStart(2, '0')}`,
    name: `Calligraphy Swoosh ${i}`,
    category: 'brushes',
    tags: ['calligraphy', 'swoosh', 'flourish', 'underline', 'curve', 'elegant'],
    width: 250,
    height: 42,
    defaultColor: color,
    svg: `<svg viewBox="0 0 280 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 ${30 - lift/2} C50 ${16 - lift/3}, 110 ${14 - lift/4}, 165 ${20 - lift/3} C215 ${26 - lift/2}, 245 ${22 - lift/2}, 274 ${12 - lift/3} C268 ${26 + lift/3}, 225 ${38 + lift/4}, 175 36 C120 34, 65 38, 24 42 C14 43, 8 38, 12 ${30 - lift/2} Z" fill="currentColor"/>
      <path d="M255 14 C265 11, 274 9, 277 10 C273 16, 262 19, 255 14 Z" fill="currentColor"/>
    </svg>`
  });
}

// 1.4 Dry Brush & Grunge (6 items)
for (let i = 1; i <= 6; i++) {
  const color = BRUSH_PALETTE[(i + 5) % BRUSH_PALETTE.length];
  addElement({
    id: `brush-dry-${String(i).padStart(2, '0')}`,
    name: `Dry Bristle Grunge Stroke ${i}`,
    category: 'brushes',
    tags: ['dry', 'bristle', 'grunge', 'distressed', 'textured', 'stroke'],
    width: 290,
    height: 52,
    defaultColor: color,
    svg: `<svg viewBox="0 0 340 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 24 C55 16, 120 14, 185 17 C245 20, 295 18, 332 23 C338 27, 335 34, 326 36 C275 38, 195 36, 125 41 C65 40, 24 37, 8 32 C4 28, 7 26, 14 24 Z" fill="currentColor"/>
      <path d="M30 20 L80 18 L160 21 L240 19 L300 24 L260 28 L170 28 L90 29 L40 28 Z" fill="currentColor" opacity="0.65"/>
      <path d="M50 34 L130 33 L210 35 L280 34 L250 37 L160 38 L70 38 Z" fill="currentColor" opacity="0.5"/>
      <circle cx="336" cy="30" r="1.5" fill="currentColor"/>
      <circle cx="5" cy="30" r="2" fill="currentColor"/>
    </svg>`
  });
}

// 1.5 Watercolor Washes (6 items)
for (let i = 1; i <= 6; i++) {
  const color = BRUSH_PALETTE[(i + 6) % BRUSH_PALETTE.length];
  addElement({
    id: `brush-watercolor-${String(i).padStart(2, '0')}`,
    name: `Watercolor Organic Wash ${i}`,
    category: 'brushes',
    tags: ['watercolor', 'wash', 'organic', 'soft', 'cloud', 'art'],
    width: 250,
    height: 100,
    defaultColor: color,
    svg: `<svg viewBox="0 0 280 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 30 C80 16, 145 20, 200 26 C245 30, 265 46, 260 70 C254 94, 218 102, 168 98 C118 94, 62 104, 30 88 C10 78, 6 54, 20 40 C26 34, 34 30, 40 30 Z" fill="currentColor" opacity="0.6"/>
      <path d="M58 40 C98 30, 158 34, 202 40 C235 45, 245 60, 238 75 C228 90, 188 92, 145 90 C100 88, 55 94, 40 82 C30 72, 35 50, 58 40 Z" fill="currentColor"/>
      <circle cx="266" cy="50" r="3" fill="currentColor" opacity="0.75"/>
      <circle cx="16" cy="65" r="2.5" fill="currentColor" opacity="0.75"/>
    </svg>`
  });
}

// 1.6 Zen Enso Circles & Arcs (6 items)
for (let i = 1; i <= 6; i++) {
  const color = BRUSH_PALETTE[(i + 7) % BRUSH_PALETTE.length];
  const arcGap = 15 + i * 6;
  addElement({
    id: `brush-zen-${String(i).padStart(2, '0')}`,
    name: `Zen Ink Brush Circle ${i}`,
    category: 'brushes',
    tags: ['zen', 'enso', 'circle', 'ink', 'brush', 'calligraphy', 'japan'],
    width: 130,
    height: 130,
    defaultColor: color,
    svg: `<svg viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M68 18 C105 15, 138 42, 136 82 C134 118, 102 142, 65 138 C32 134, 12 108, 14 74 C16 46, 34 26, 58 18 C64 16, 68 20, 62 25 C42 32, 28 50, 26 74 C24 102, 44 124, 72 126 C100 128, 124 108, 126 80 C128 50, 102 28, 72 30 C66 30, 64 24, 68 18 Z" fill="currentColor"/>
      <circle cx="${45 + i*2}" cy="${135 + (i%2)*4}" r="${2 + (i%2)}" fill="currentColor"/>
      <circle cx="134" cy="42" r="2" fill="currentColor"/>
    </svg>`
  });
}

// ═══════════════════════════════════════════════════════════════
// 2. PAINT SPLATTERS & SPRAY DRIPS (40 items)
// ═══════════════════════════════════════════════════════════════

const SPLATTER_PALETTE = ['#06B6D4', '#EC4899', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#3B82F6', '#14B8A6'];

// 2.1 Hanging Gravity Drips (8 items)
for (let i = 1; i <= 8; i++) {
  const dripL = 70 + (i % 3) * 20;
  const dripR = 50 + (i % 4) * 15;
  const color = SPLATTER_PALETTE[(i - 1) % SPLATTER_PALETTE.length];
  addElement({
    id: `splatter-drip-${String(i).padStart(2, '0')}`,
    name: `Hanging Gravity Paint Drip ${i}`,
    category: 'splatters',
    tags: ['drip', 'gravity', 'paint', 'hang', 'border', 'graffiti', 'street'],
    width: 250,
    height: 110,
    defaultColor: color,
    svg: `<svg viewBox="0 0 280 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0 H280 V16 C260 16, 252 35, 246 ${dripR} C244 ${dripR + 6}, 238 ${dripR + 6}, 236 ${dripR} C232 35, 222 16, 208 16 C198 16, 192 40, 188 ${dripL} C186 ${dripL + 8}, 178 ${dripL + 8}, 176 ${dripL} C170 40, 162 16, 148 16 C138 16, 134 26, 130 42 C128 48, 122 48, 120 42 C116 26, 108 16, 95 16 C85 16, 78 45, 72 ${dripL - 10} C70 ${dripL - 2}, 62 ${dripL - 2}, 60 ${dripL - 10} C54 45, 48 16, 32 16 C24 16, 18 30, 15 48 C14 52, 8 52, 6 48 C4 30, 2 16, 0 16 Z" fill="currentColor"/>
      <circle cx="188" cy="${dripL + 16}" r="3.5" fill="currentColor"/>
      <circle cx="72" cy="${dripL + 6}" r="4" fill="currentColor"/>
      <circle cx="246" cy="${dripR + 14}" r="3" fill="currentColor"/>
    </svg>`
  });
}

// 2.2 Explosive Paint Splashes (8 items)
for (let i = 1; i <= 8; i++) {
  const color = SPLATTER_PALETTE[(i + 1) % SPLATTER_PALETTE.length];
  addElement({
    id: `splatter-burst-${String(i).padStart(2, '0')}`,
    name: `Explosive Splatter Burst ${i}`,
    category: 'splatters',
    tags: ['splatter', 'burst', 'splash', 'explosion', 'ink', 'pop', 'droplets'],
    width: 140,
    height: 140,
    defaultColor: color,
    svg: `<svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M78 45 C86 28, 98 34, 94 48 C108 38, 122 45, 112 58 C128 58, 134 74, 120 82 C135 94, 125 110, 110 106 C115 122, 100 132, 88 120 C78 135, 62 130, 65 114 C48 122, 38 108, 48 96 C32 90, 36 72, 50 68 C38 54, 52 42, 65 52 C68 38, 74 36, 78 45 Z" fill="currentColor"/>
      <circle cx="${95 + i*2}" cy="22" r="4" fill="currentColor"/>
      <circle cx="142" cy="${40 + i*3}" r="3.5" fill="currentColor"/>
      <circle cx="${138 - i*2}" cy="105" r="4.5" fill="currentColor"/>
      <circle cx="120" cy="138" r="3" fill="currentColor"/>
      <circle cx="82" cy="148" r="4" fill="currentColor"/>
      <circle cx="${35 + i}" cy="134" r="3.5" fill="currentColor"/>
      <circle cx="18" cy="82" r="4" fill="currentColor"/>
      <circle cx="28" cy="35" r="3" fill="currentColor"/>
      <circle cx="58" cy="16" r="2.5" fill="currentColor"/>
    </svg>`
  });
}

// 2.3 Airbrush Spray Mists (8 items)
for (let i = 1; i <= 8; i++) {
  const color = SPLATTER_PALETTE[(i + 2) % SPLATTER_PALETTE.length];
  addElement({
    id: `splatter-spray-${String(i).padStart(2, '0')}`,
    name: `Airbrush Spray Mist ${i}`,
    category: 'splatters',
    tags: ['spray', 'airbrush', 'mist', 'texture', 'speckles', 'grunge'],
    width: 130,
    height: 130,
    defaultColor: color,
    svg: `<svg viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="75" cy="75" r="28" fill="currentColor" opacity="0.6"/>
      <circle cx="75" cy="75" r="15" fill="currentColor"/>
      <circle cx="60" cy="68" r="4" fill="currentColor"/>
      <circle cx="88" cy="65" r="4.5" fill="currentColor"/>
      <circle cx="70" cy="90" r="4" fill="currentColor"/>
      <circle cx="90" cy="88" r="3.5" fill="currentColor"/>
      <circle cx="42" cy="52" r="3" fill="currentColor"/>
      <circle cx="110" cy="48" r="2.5" fill="currentColor"/>
      <circle cx="118" cy="80" r="3" fill="currentColor"/>
      <circle cx="106" cy="108" r="2" fill="currentColor"/>
      <circle cx="56" cy="112" r="3" fill="currentColor"/>
      <circle cx="32" cy="85" r="2.5" fill="currentColor"/>
      <circle cx="48" cy="32" r="1.5" fill="currentColor"/>
      <circle cx="90" cy="28" r="2" fill="currentColor"/>
    </svg>`
  });
}

// 2.4 Liquid Ink Blots (8 items)
for (let i = 1; i <= 8; i++) {
  const color = SPLATTER_PALETTE[(i + 3) % SPLATTER_PALETTE.length];
  addElement({
    id: `splatter-blot-${String(i).padStart(2, '0')}`,
    name: `Liquid Ink Blot ${i}`,
    category: 'splatters',
    tags: ['ink', 'blot', 'liquid', 'puddle', 'pool', 'blob', 'drop'],
    width: 125,
    height: 125,
    defaultColor: color,
    svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M68 30 C90 25, 115 42, 112 68 C110 88, 125 102, 105 115 C85 125, 55 120, 42 108 C25 95, 20 72, 35 52 C48 35, 55 32, 68 30 Z" fill="currentColor"/>
      <circle cx="${112 + i}" cy="36" r="4.5" fill="currentColor"/>
      <circle cx="122" cy="72" r="3.5" fill="currentColor"/>
      <circle cx="28" cy="32" r="4" fill="currentColor"/>
      <circle cx="20" cy="102" r="3" fill="currentColor"/>
      <circle cx="62" cy="125" r="4" fill="currentColor"/>
    </svg>`
  });
}

// 2.5 Directional Velocity Splatters (8 items)
for (let i = 1; i <= 8; i++) {
  const color = SPLATTER_PALETTE[(i + 4) % SPLATTER_PALETTE.length];
  addElement({
    id: `splatter-velocity-${String(i).padStart(2, '0')}`,
    name: `Directional Velocity Splatter ${i}`,
    category: 'splatters',
    tags: ['velocity', 'flick', 'speed', 'splatter', 'dynamic', 'action'],
    width: 160,
    height: 135,
    defaultColor: color,
    svg: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 130 C45 115, 75 80, 105 60 C125 48, 145 38, 165 25 C155 45, 135 75, 110 105 C85 130, 50 145, 30 130 Z" fill="currentColor"/>
      <circle cx="178" cy="18" r="4.5" fill="currentColor"/>
      <circle cx="192" cy="28" r="3" fill="currentColor"/>
      <circle cx="168" cy="42" r="3.5" fill="currentColor"/>
      <circle cx="145" cy="20" r="2.5" fill="currentColor"/>
      <circle cx="185" cy="55" r="2" fill="currentColor"/>
      <circle cx="120" cy="45" r="2.5" fill="currentColor"/>
      <circle cx="140" cy="85" r="3" fill="currentColor"/>
      <circle cx="95" cy="125" r="3.5" fill="currentColor"/>
    </svg>`
  });
}

// ═══════════════════════════════════════════════════════════════
// 3. HIGHLIGHTERS, UNDERLINES & CALLOUTS (40 items)
// ═══════════════════════════════════════════════════════════════

const MARKER_PALETTE = ['#EAB308', '#F59E0B', '#10B981', '#3B82F6', '#EC4899', '#8B5CF6', '#F97316', '#E11D48'];

// 3.1 Marker Underlines (8 items)
for (let i = 1; i <= 8; i++) {
  const color = MARKER_PALETTE[(i - 1) % MARKER_PALETTE.length];
  addElement({
    id: `marker-underline-${String(i).padStart(2, '0')}`,
    name: `Marker Underline Stroke ${i}`,
    category: 'highlighters',
    tags: ['marker', 'underline', 'highlight', 'emphasis', 'strike'],
    width: 250,
    height: 30,
    defaultColor: color,
    svg: `<svg viewBox="0 0 280 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 18 C65 ${12 + (i%3)*2}, 140 ${13 - (i%2)}, 215 ${14 + (i%2)*2}, 272 16 C264 22, 218 24, 165 22 C105 21, 50 25, 8 22 C6 19, 8 18, 10 18 Z" fill="currentColor"/>
    </svg>`
  });
}

// 3.2 Double Strike Underlines (6 items)
for (let i = 1; i <= 6; i++) {
  const color = MARKER_PALETTE[(i + 1) % MARKER_PALETTE.length];
  addElement({
    id: `marker-double-underline-${String(i).padStart(2, '0')}`,
    name: `Double Strike Marker Underline ${i}`,
    category: 'highlighters',
    tags: ['underline', 'double', 'strike', 'marker', 'accent'],
    width: 250,
    height: 34,
    defaultColor: color,
    svg: `<svg viewBox="0 0 280 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 10 C65 6, 135 7, 205 9 C235 10, 260 8, 274 12 C262 16, 215 16, 165 14 C105 13, 50 15, 8 13 Z" fill="currentColor"/>
      <path d="M35 24 C85 20, 150 21, 215 22 C245 23, 268 22, 278 25 C265 29, 220 28, 170 27 C110 26, 60 28, 30 26 Z" fill="currentColor" opacity="0.8"/>
    </svg>`
  });
}

// 3.3 Wavy & Zigzag Scribbles (6 items)
for (let i = 1; i <= 6; i++) {
  const color = MARKER_PALETTE[(i + 2) % MARKER_PALETTE.length];
  addElement({
    id: `marker-wavy-${String(i).padStart(2, '0')}`,
    name: `Wavy Scribble Underline ${i}`,
    category: 'highlighters',
    tags: ['wavy', 'squiggle', 'underline', 'scribble', 'marker'],
    width: 240,
    height: 36,
    defaultColor: color,
    svg: `<svg viewBox="0 0 260 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 20 Q 30 8, 50 20 T 90 20 T 130 20 T 170 20 T 210 20 T 252 20 C 255 24, 250 28, 245 26 Q 225 36, 205 24 T 165 24 T 125 24 T 85 24 T 45 24 T 12 28 Z" fill="currentColor"/>
    </svg>`
  });
}

// 3.4 Sketchy Circles & Loops (8 items)
for (let i = 1; i <= 8; i++) {
  const color = MARKER_PALETTE[(i + 3) % MARKER_PALETTE.length];
  addElement({
    id: `marker-circle-${String(i).padStart(2, '0')}`,
    name: `Sketchy Emphasis Loop Circle ${i}`,
    category: 'highlighters',
    tags: ['circle', 'loop', 'emphasis', 'stat', 'marker', 'highlight', 'doodle'],
    width: 140,
    height: 95,
    defaultColor: color,
    svg: `<svg viewBox="0 0 160 105" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M42 48 C28 32, 52 16, 88 15 C124 14, 150 32, 148 56 C146 80, 116 95, 78 94 C38 93, 14 74, 18 50 C22 28, 56 12, 98 12 C140 12, 158 35, 154 62 C150 88, 112 102, 68 100 C34 98, 22 84, 25 70 C28 56, 44 48, 62 48" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </svg>`
  });
}

// 3.5 Hand-Drawn Growth Arrows (8 items)
for (let i = 1; i <= 8; i++) {
  const color = MARKER_PALETTE[(i + 4) % MARKER_PALETTE.length];
  addElement({
    id: `marker-arrow-${String(i).padStart(2, '0')}`,
    name: `Hand-Drawn Growth Arrow ${i}`,
    category: 'highlighters',
    tags: ['arrow', 'pointer', 'growth', 'chart', 'spike', 'doodle', 'handdrawn'],
    width: 140,
    height: 110,
    defaultColor: color,
    svg: `<svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 100 C35 94, 60 84, 75 66 C90 48, 85 28, 68 27 C48 26, 40 44, 54 62 C68 80, 102 80, 125 50 C135 36, 142 20, 146 8" stroke="currentColor" stroke-width="5" stroke-linecap="round" fill="none"/>
      <path d="M146 8 L122 18 M146 8 L148 32" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  });
}

// 3.6 Capsules & Frame Boxes (4 items)
for (let i = 1; i <= 4; i++) {
  const color = MARKER_PALETTE[(i + 5) % MARKER_PALETTE.length];
  addElement({
    id: `marker-frame-${String(i).padStart(2, '0')}`,
    name: `Hand-Drawn Highlighter Frame ${i}`,
    category: 'highlighters',
    tags: ['frame', 'box', 'border', 'marker', 'highlight'],
    width: 135,
    height: 135,
    defaultColor: color,
    svg: `<svg viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22 C45 16, 95 18, 138 20 C144 26, 140 32, 132 30 C95 28, 48 26, 15 32 C10 30, 9 24, 12 22 Z" fill="currentColor"/>
      <path d="M136 18 C142 45, 140 92, 138 136 C130 142, 124 138, 126 128 C128 92, 130 48, 124 16 C128 14, 134 14, 136 18 Z" fill="currentColor"/>
      <path d="M140 128 C105 134, 55 132, 14 130 C8 124, 12 118, 20 120 C55 122, 102 124, 135 118 C140 120, 141 126, 140 128 Z" fill="currentColor"/>
      <path d="M18 135 C12 108, 14 62, 16 16 C24 10, 30 14, 28 24 C26 60, 24 105, 30 136 C26 138, 20 138, 18 135 Z" fill="currentColor"/>
    </svg>`
  });
}

// ═══════════════════════════════════════════════════════════════
// 4. RIBBONS, BANNERS & BADGES (40 items)
// ═══════════════════════════════════════════════════════════════

const RIBBON_PALETTE = ['#F59E0B', '#6366F1', '#E11D48', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899', '#06B6D4'];

// 4.1 3D Folded Banner Ribbons (8 items)
for (let i = 1; i <= 8; i++) {
  const color = RIBBON_PALETTE[(i - 1) % RIBBON_PALETTE.length];
  addElement({
    id: `ribbon-folded-${String(i).padStart(2, '0')}`,
    name: `Vintage 3D Folded Ribbon Banner ${i}`,
    category: 'ribbons',
    tags: ['ribbon', 'banner', 'vintage', 'folded', 'header', 'title', '3d'],
    width: 280,
    height: 70,
    defaultColor: color,
    svg: `<svg viewBox="0 0 320 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M42 42 L65 42 L65 58 Z" fill="#92400E"/>
      <path d="M278 42 L255 42 L255 58 Z" fill="#92400E"/>
      <path d="M12 24 L65 24 L65 52 L12 52 L26 38 Z" fill="#D97706"/>
      <path d="M308 24 L255 24 L255 52 L308 52 L294 38 Z" fill="#D97706"/>
      <path d="M52 14 L268 14 C272 14, 274 16, 274 20 L274 46 C274 50, 272 52, 268 52 L52 52 C48 52, 46 50, 46 46 L46 20 C46 16, 48 14, 52 14 Z" fill="currentColor"/>
    </svg>`
  });
}

// 4.2 Arched Banner Ribbons (8 items)
for (let i = 1; i <= 8; i++) {
  const color = RIBBON_PALETTE[(i + 1) % RIBBON_PALETTE.length];
  addElement({
    id: `ribbon-arch-${String(i).padStart(2, '0')}`,
    name: `Arched Header Ribbon Banner ${i}`,
    category: 'ribbons',
    tags: ['banner', 'ribbon', 'arch', 'curved', 'vintage', 'poster'],
    width: 260,
    height: 80,
    defaultColor: color,
    svg: `<svg viewBox="0 0 300 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M48 54 L68 50 L66 65 Z" fill="#312E81"/>
      <path d="M252 54 L232 50 L234 65 Z" fill="#312E81"/>
      <path d="M14 42 C30 38, 48 44, 68 50 L64 74 C45 68, 28 64, 18 68 L26 55 Z" fill="#4F46E5"/>
      <path d="M286 42 C270 38, 252 44, 232 50 L236 74 C255 68, 272 64, 282 68 L274 55 Z" fill="#4F46E5"/>
      <path d="M54 44 C115 18, 185 18, 246 44 L244 68 C185 44, 115 44, 56 68 Z" fill="currentColor"/>
    </svg>`
  });
}

// 4.3 Washi Masking Tape Strips (8 items)
for (let i = 1; i <= 8; i++) {
  addElement({
    id: `ribbon-washi-${String(i).padStart(2, '0')}`,
    name: `Washi Masking Tape Strip ${i}`,
    category: 'ribbons',
    tags: ['tape', 'washi', 'masking', 'ripped', 'craft', 'photo', 'pin'],
    width: 220,
    height: 52,
    defaultColor: '#CBD5E1',
    svg: `<svg viewBox="0 0 240 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 10 L228 10 L234 16 L228 22 L236 28 L228 34 L234 40 L228 46 L12 46 L6 40 L12 34 L4 28 L12 22 L6 16 Z" fill="currentColor" fill-opacity="0.85"/>
      <line x1="40" y1="12" x2="65" y2="44" stroke="#FFFFFF" stroke-width="2" opacity="0.4"/>
      <line x1="120" y1="12" x2="145" y2="44" stroke="#FFFFFF" stroke-width="2" opacity="0.4"/>
      <line x1="190" y1="12" x2="215" y2="44" stroke="#FFFFFF" stroke-width="2" opacity="0.4"/>
    </svg>`
  });
}

// 4.4 Award Rosettes (8 items)
for (let i = 1; i <= 8; i++) {
  const color = RIBBON_PALETTE[(i + 3) % RIBBON_PALETTE.length];
  addElement({
    id: `ribbon-rosette-${String(i).padStart(2, '0')}`,
    name: `Champion Award Rosette ${i}`,
    category: 'ribbons',
    tags: ['award', 'rosette', 'medal', 'ribbon', 'champion', 'first', 'badge'],
    width: 120,
    height: 160,
    defaultColor: color,
    svg: `<svg viewBox="0 0 140 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M52 105 L35 168 L55 158 L68 172 L64 105 Z" fill="#CA8A04"/>
      <path d="M88 105 L105 168 L85 158 L72 172 L76 105 Z" fill="#A16207"/>
      <path d="M70 12 L79 23 L93 18 L98 32 L112 32 L111 47 L124 53 L118 67 L127 78 L116 88 L120 102 L106 107 L104 122 L90 120 L82 132 L70 124 L58 132 L50 120 L36 122 L34 107 L20 102 L24 88 L13 78 L22 67 L16 53 L29 47 L28 32 L42 32 L47 18 L61 23 Z" fill="currentColor"/>
      <circle cx="70" cy="72" r="32" fill="#FEF08A"/>
      <circle cx="70" cy="72" r="26" stroke="#CA8A04" stroke-width="3" fill="none"/>
      <path d="M70 54 L74 65 L86 65 L76 72 L80 84 L70 77 L60 84 L64 72 L54 65 L66 65 Z" fill="#CA8A04"/>
    </svg>`
  });
}

// 4.5 Starburst Sale Seals (8 items)
for (let i = 1; i <= 8; i++) {
  const color = RIBBON_PALETTE[(i + 4) % RIBBON_PALETTE.length];
  addElement({
    id: `ribbon-seal-${String(i).padStart(2, '0')}`,
    name: `Retro Starburst Sale Seal ${i}`,
    category: 'ribbons',
    tags: ['starburst', 'sale', 'burst', 'seal', 'promo', 'sticker', 'pop'],
    width: 130,
    height: 130,
    defaultColor: color,
    svg: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M70 5 L80 22 L100 12 L104 32 L125 30 L120 50 L138 58 L126 75 L140 88 L122 98 L128 118 L108 120 L105 138 L88 130 L78 145 L68 130 L52 138 L48 120 L28 118 L35 98 L18 88 L30 75 L18 58 L36 50 L32 30 L52 32 L56 12 L76 22 Z" fill="currentColor"/>
      <circle cx="70" cy="75" r="42" fill="#FFFFFF" fill-opacity="0.25"/>
    </svg>`
  });
}

// ═══════════════════════════════════════════════════════════════
// 5. DOODLES, STARS & ACCENTS (40 items)
// ═══════════════════════════════════════════════════════════════

const DOODLE_PALETTE = ['#F59E0B', '#8B5CF6', '#10B981', '#EF4444', '#F43F5E', '#FACC15', '#38BDF8', '#60A5FA'];

// 5.1 Signature 4-Point Sparkle Stars (8 items)
for (let i = 1; i <= 8; i++) {
  const color = DOODLE_PALETTE[(i - 1) % DOODLE_PALETTE.length];
  addElement({
    id: `doodle-sparkle-${String(i).padStart(2, '0')}`,
    name: `Signature Sparkle Star ${i}`,
    category: 'doodles',
    tags: ['sparkle', 'star', 'twinkle', 'glitter', 'canva', 'magic', 'shine'],
    width: 100,
    height: 100,
    defaultColor: color,
    svg: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 8 C60 40, 72 52, 104 60 C72 68, 60 80, 60 112 C60 80, 48 68, 16 60 C48 52, 60 40, 60 8 Z" fill="currentColor"/>
      <circle cx="94" cy="26" r="3.5" fill="currentColor"/>
      <circle cx="26" cy="94" r="2.5" fill="currentColor"/>
    </svg>`
  });
}

// 5.2 Laurel Achievement Branches (8 items)
for (let i = 1; i <= 8; i++) {
  const color = DOODLE_PALETTE[(i + 1) % DOODLE_PALETTE.length];
  addElement({
    id: `doodle-laurel-${String(i).padStart(2, '0')}`,
    name: `Botanical Laurel Branch ${i}`,
    category: 'doodles',
    tags: ['laurel', 'wreath', 'branch', 'leaves', 'botanical', 'achievement', 'win'],
    width: 170,
    height: 110,
    defaultColor: color,
    svg: `<svg viewBox="0 0 180 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 102 C38 78, 62 48, 98 28 C125 14, 148 12, 160 12" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <path d="M38 78 C32 64, 42 56, 52 64 C56 72, 48 82, 38 78 Z" fill="currentColor"/>
      <path d="M52 88 C44 94, 46 104, 58 102 C64 96, 62 86, 52 88 Z" fill="currentColor"/>
      <path d="M64 56 C58 42, 68 34, 78 42 C82 50, 74 60, 64 56 Z" fill="currentColor"/>
      <path d="M78 68 C70 76, 74 86, 86 82 C90 74, 86 66, 78 68 Z" fill="currentColor"/>
      <path d="M96 38 C90 24, 102 18, 110 26 C114 34, 106 42, 96 38 Z" fill="currentColor"/>
      <path d="M108 50 C100 58, 106 68, 116 64 C122 56, 116 48, 108 50 Z" fill="currentColor"/>
      <path d="M130 24 C126 10, 138 6, 146 14 C148 22, 140 28, 130 24 Z" fill="currentColor"/>
      <path d="M160 12 C168 4, 178 8, 175 18 C168 22, 160 18, 160 12 Z" fill="currentColor"/>
    </svg>`
  });
}

// 5.3 Hand-Drawn Crowns (6 items)
for (let i = 1; i <= 6; i++) {
  const color = DOODLE_PALETTE[(i + 2) % DOODLE_PALETTE.length];
  addElement({
    id: `doodle-crown-${String(i).padStart(2, '0')}`,
    name: `Hand-Drawn King Crown ${i}`,
    category: 'doodles',
    tags: ['crown', 'king', 'vip', 'leader', 'gold', 'doodle'],
    width: 110,
    height: 80,
    defaultColor: color,
    svg: `<svg viewBox="0 0 130 95" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 72 L24 28 L50 50 L68 18 L88 52 L112 26 L120 74 C115 82, 30 84, 12 72 Z" fill="currentColor"/>
      <circle cx="24" cy="22" r="5" fill="currentColor"/>
      <circle cx="68" cy="12" r="6" fill="currentColor"/>
      <circle cx="114" cy="20" r="5" fill="currentColor"/>
      <path d="M18 80 C45 84, 85 84, 114 80 C116 86, 20 88, 18 80 Z" fill="currentColor" opacity="0.7"/>
    </svg>`
  });
}

// 5.4 Comic Action POW Explosions (6 items)
for (let i = 1; i <= 6; i++) {
  const color = DOODLE_PALETTE[(i + 3) % DOODLE_PALETTE.length];
  addElement({
    id: `doodle-pow-${String(i).padStart(2, '0')}`,
    name: `Comic Action POW Explosion ${i}`,
    category: 'doodles',
    tags: ['pow', 'comic', 'explosion', 'boom', 'action', 'pop', 'burst'],
    width: 140,
    height: 130,
    defaultColor: color,
    svg: `<svg viewBox="0 0 150 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M75 10 L88 38 L118 24 L114 54 L144 58 L126 82 L148 102 L118 108 L122 134 L95 120 L78 142 L65 118 L38 132 L44 105 L14 100 L32 78 L12 55 L40 50 L34 22 L65 35 Z" fill="currentColor"/>
      <path d="M75 35 L82 52 L102 44 L98 62 L116 66 L104 80 L118 92 L100 96 L102 110 L86 102 L76 114 L68 100 L52 108 L56 92 L38 90 L48 76 L36 62 L54 60 L50 44 L70 52 Z" fill="#FBBF24"/>
    </svg>`
  });
}

// 5.5 Doodle Hearts (6 items)
for (let i = 1; i <= 6; i++) {
  const color = DOODLE_PALETTE[(i + 4) % DOODLE_PALETTE.length];
  addElement({
    id: `doodle-heart-${String(i).padStart(2, '0')}`,
    name: `Sketchy Doodle Heart ${i}`,
    category: 'doodles',
    tags: ['heart', 'love', 'sketch', 'doodle', 'pink', 'favorite'],
    width: 100,
    height: 95,
    defaultColor: color,
    svg: `<svg viewBox="0 0 120 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 98 C45 82, 10 58, 12 32 C14 14, 32 6, 48 16 C55 22, 58 28, 60 32 C62 28, 65 22, 72 16 C88 6, 106 14, 108 32 C110 58, 75 82, 60 98 Z" fill="currentColor"/>
      <path d="M52 26 C42 18, 30 20, 24 30 C20 40, 26 55, 42 70" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.6"/>
    </svg>`
  });
}

// 5.6 Lightning Bolts & Energy (6 items)
for (let i = 1; i <= 6; i++) {
  const color = DOODLE_PALETTE[(i + 5) % DOODLE_PALETTE.length];
  addElement({
    id: `doodle-lightning-${String(i).padStart(2, '0')}`,
    name: `Hand-Drawn Lightning Bolt ${i}`,
    category: 'doodles',
    tags: ['lightning', 'bolt', 'flash', 'energy', 'electric', 'doodle'],
    width: 90,
    height: 130,
    defaultColor: color,
    svg: `<svg viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M58 8 L22 65 L48 65 L36 132 L78 68 L52 68 Z" fill="currentColor"/>
      <path d="M58 8 L54 28 L42 65 L52 68 L36 132 L40 108 L78 68 L62 68 Z" fill="#EAB308" opacity="0.6"/>
    </svg>`
  });
}

// Write master catalog.json
fs.writeFileSync(path.join(BASE_DIR, 'catalog.json'), JSON.stringify(elements, null, 2), 'utf8');

// Write README.md with clear git commands
const readmeContent = `# Design Elements CDN

High-definition, CC0 vector design elements for Canva-style graphic editors, posters, and charts.

Served globally via [jsDelivr](https://www.jsdelivr.com/) and Cloudflare Edge CDN with 0% server pressure.

## CDN Endpoints

### 1. Master Catalog JSON (200 Elements)
\`\`\`
https://cdn.jsdelivr.net/gh/Harikrishnanvkph/design-elements-cdn@main/catalog.json
\`\`\`

### 2. Direct SVG Access
\`\`\`
https://cdn.jsdelivr.net/gh/Harikrishnanvkph/design-elements-cdn@main/svgs/{category}/{id}.svg
\`\`\`

## Categories Included (${elements.length} Elements Total):
- **Brushes (40)**: Acrylic smears, paint roller stripes, calligraphy swooshes, dry brush grunge, watercolor washes, zen enso circles.
- **Splatters (40)**: Hanging gravity drips, explosive paint splashes, airbrush spray mists, liquid ink blots, velocity splatters.
- **Highlighters (40)**: Single & double strike marker underlines, wavy scribbles, double-loop emphasis circles, corkscrew growth arrows, frames.
- **Ribbons (40)**: 3D folded banner ribbons with shadow folds, arched ribbons, washi masking tape strips, award rosettes, starburst seals.
- **Doodles (40)**: Signature 4-point sparkle stars, botanical laurel branches, king crowns, comic POW explosions, sketchy hearts, lightning bolts.

## License
CC0 1.0 Universal (Public Domain) - Free for personal and commercial use.
`;

fs.writeFileSync(path.join(BASE_DIR, 'README.md'), readmeContent, 'utf8');

console.log(`Successfully generated ${elements.length} vector elements in ${BASE_DIR}!`);
