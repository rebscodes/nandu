// Southern styles movement database based on IWUF rules (Nanquan, Nandao, Nangun)
export const southernMovements = [
  // Leg Techniques
  { id: '244A', name: 'Qián Sǎo Tuǐ 540°', chinese: '前扫腿 540°', english: 'Front Sweep 540°', category: 'Leg', grade: 'A', points: 0.2 },
  { id: '244B', name: 'Qián Sǎo Tuǐ 900°', chinese: '前扫腿 900°', english: 'Front Sweep 900°', category: 'Leg', grade: 'B', points: 0.3 },
  
  // Jumping Techniques
  { id: '312A', name: 'Téng Kōng Fēi Jiǎo', chinese: '腾空飞脚', english: 'Jumping Front Slap Kick', category: 'Jumping', grade: 'A', points: 0.2 },
  { id: '323A', name: 'Xuàn Fēng Jiǎo 360°', chinese: '旋风脚 360°', english: 'Tornado Kick 360°', category: 'Jumping', grade: 'A', points: 0.2 },
  { id: '323B', name: 'Xuàn Fēng Jiǎo 540°', chinese: '旋风脚 540°', english: 'Tornado Kick 540°', category: 'Jumping', grade: 'B', points: 0.3 },
  { id: '323C', name: 'Xuàn Fēng Jiǎo 630°(F)/720°', chinese: '旋风脚 630°（女）/720°', english: 'Tornado Kick 630°(F)/720°', category: 'Jumping', grade: 'C', points: 0.4 },
  { id: '324A', name: 'Téng Kōng Wài Bǎi Tuǐ 360°', chinese: '腾空外摆腿 360°', english: 'Jumping Lotus Kick 360°', category: 'Jumping', grade: 'A', points: 0.2 },
  { id: '324B', name: 'Téng Kōng Wài Bǎi Tuǐ 540°', chinese: '腾空外摆腿 540°', english: 'Jumping Lotus Kick 540°', category: 'Jumping', grade: 'B', points: 0.3 },
  { id: '324C', name: 'Téng Kōng Wài Bǎi Tuǐ 630°(F)/720°', chinese: '腾空外摆腿 630°（女）/720°', english: 'Jumping Lotus Kick 630°(F)/720°', category: 'Jumping', grade: 'C', points: 0.4 },
  { id: '335A', name: 'Cè Kōng Fān', chinese: '侧空翻', english: 'Aerial Cartwheel', category: 'Jumping', grade: 'A', points: 0.2 },
  { id: '346A', name: 'Yuán Dì Hòu Kōng Fān', chinese: '原地后空翻', english: 'No-Step Back Flip', category: 'Jumping', grade: 'A', points: 0.2 },
  { id: '346B', name: 'Dān Tiào Hòu Kōng Fān', chinese: '单跳后空翻', english: 'Single Step Back Flip', category: 'Jumping', grade: 'B', points: 0.3 },
  
  // Tumbling Techniques
  { id: '415A', name: 'Téng Kōng Shuāng Cè Chuài', chinese: '腾空双侧踹', english: 'Jumping Double Side Kick', category: 'Tumbling', grade: 'A', points: 0.2 },
  { id: '423A', name: 'Téng Kōng Pán Tuǐ 360° Cè Pū', chinese: '腾空盘腿 360°侧扑', english: 'Flying Cross Legged 360° Kick to Falling on Side', category: 'Tumbling', grade: 'A', points: 0.2 },
  { id: '447A', name: 'Lǐ Yú Dǎ Tǐng', chinese: '鲤鱼打挺', english: 'Carp Kip-Up', category: 'Tumbling', grade: 'A', points: 0.2 },
  
  // Stances for connections
  { id: '0', name: 'Pū Bù', chinese: '仆步', english: 'Crouching Stance', category: 'Stance', grade: '-', points: 0 },
  { id: '1', name: 'Mǎ Bù', chinese: '马步', english: 'Horse Stance', category: 'Stance', grade: '-', points: 0 },
  { id: '2', name: 'Dié Bù', chinese: '蝶步', english: 'Butterfly Stance', category: 'Stance', grade: '-', points: 0 },
  { id: '3', name: 'Tí Xī Dú Lì', chinese: '提膝独立', english: 'Single Raised-Knee Stance', category: 'Stance', grade: '-', points: 0 },
  { id: '10', name: 'Jiǎn Shì', chinese: '剪势', english: 'Scissor Position', category: 'Stance', grade: '-', points: 0 },
  { id: '11', name: 'Xiē Shì', chinese: '蝎势', english: 'Scorpion Stance', category: 'Stance', grade: '-', points: 0 }
];

export const southernConnections = [
  // A Grade Connections (0.1 points)
  { from: '312A', to: '3', points: 0.1, grade: 'A', description: 'Jumping Front Slap Kick + Single Raised-Knee Stance' },
  { from: '323A', to: '3', points: 0.1, grade: 'A', description: 'Tornado Kick 360° + Single Raised-Knee Stance' },
  { from: '323A', to: '1', points: 0.1, grade: 'A', description: 'Tornado Kick 360° + Horse Stance' },
  { from: '323A', to: '2', points: 0.1, grade: 'A', description: 'Tornado Kick 360° + Butterfly Stance' },
  { from: '323A', to: '312A', points: 0.1, grade: 'A', description: 'Tornado Kick 360° + (within 2 steps) Jumping Front Slap Kick' },
  { from: '323A', to: '324A', points: 0.1, grade: 'A', description: 'Tornado Kick 360° + Jumping Lotus Kick 360°' },
  { from: '324A', to: '1', points: 0.1, grade: 'A', description: 'Jumping Lotus Kick 360° + Horse Stance' },
  { from: '324A', to: '3', points: 0.1, grade: 'A', description: 'Jumping Lotus Kick 360° + Single Raised-Knee Stance' },
  { from: '335A', to: '10', points: 0.1, grade: 'A', description: 'Aerial Cartwheel + Scissor Position' },
  { from: '447A', to: '2', points: 0.1, grade: 'A', description: 'Carp Kip-Up + Butterfly Stance' },
  { from: '346A', to: '2', points: 0.1, grade: 'A', description: 'No-Step Back Flip + Butterfly Stance' },

  // B Grade Connections (0.15 points)
  { from: '312A', to: '346B', points: 0.15, grade: 'B', description: 'Jumping Front Slap Kick + (within 2 steps) Single Step Back Flip' },
  { from: '323A', to: '324B', points: 0.15, grade: 'B', description: 'Tornado Kick 360° + (within 2 steps) Jumping Lotus Kick 540°' },
  { from: '323A', to: '346B', points: 0.15, grade: 'B', description: 'Tornado Kick 360° + (within 2 steps) Single Step Back Flip' },
  { from: '323B', to: '1', points: 0.15, grade: 'B', description: 'Tornado Kick 540° + Horse Stance' },
  { from: '323B', to: '2', points: 0.15, grade: 'B', description: 'Tornado Kick 540° + Butterfly Stance' },
  { from: '324A', to: '346B', points: 0.15, grade: 'B', description: 'Jumping Lotus Kick 360° + (within 2 steps) Single Step Back Flip' },
  { from: '324B', to: '1', points: 0.15, grade: 'B', description: 'Jumping Lotus Kick 540° + Horse Stance' },
  { from: '346B', to: '2', points: 0.15, grade: 'B', description: 'Single Step Back Flip + Butterfly Stance' },
  { from: '346B', to: '11', points: 0.15, grade: 'B', description: 'Single Step Back Flip + Scorpion Stance' },

  // C Grade Connections (0.2 points)
  { from: '323A', to: '3', points: 0.2, grade: 'C', description: 'Tornado Kick 360° + Single Raised-Knee Stance' },
  { from: '323B', to: '1', points: 0.2, grade: 'C', description: 'Tornado Kick 540° + Horse Stance' },
  { from: '323B', to: '324B', points: 0.2, grade: 'C', description: 'Tornado Kick 540° + Jumping Lotus Kick 540°' },
  { from: '324A', to: '3', points: 0.2, grade: 'C', description: 'Jumping Lotus Kick 360° + Single Raised-Knee Stance' },
  { from: '324B', to: '0', points: 0.2, grade: 'C', description: 'Jumping Lotus Kick 540° + Crouching Stance' },
  { from: '324B', to: '346B', points: 0.2, grade: 'C', description: 'Jumping Lotus Kick 540° + (within 2 steps) Single Step Back Flip' },
  { from: '323C', to: '1', points: 0.2, grade: 'C', description: 'Tornado Kick 630°(F)/720° + Horse Stance' },

  // D Grade Connections (0.25 points)
  { from: '323C', to: '1', points: 0.25, grade: 'D', description: 'Tornado Kick 630°(F)/720° + Horse Stance' },
  { from: '324C', to: '1', points: 0.25, grade: 'D', description: 'Jumping Lotus Kick 630°(F)/720° + Horse Stance' },
  { from: '323B', to: '324C', points: 0.25, grade: 'D', description: 'Tornado Kick 540° + Jumping Lotus Kick 630°(F)/720°' },
  { from: '324A', to: '346A', points: 0.25, grade: 'D', description: 'Jumping Lotus Kick 360° + No-Step Back Flip' }
];

// Categories specific to southern styles
export const southernCategories = [
  'Leg',
  'Jumping', 
  'Tumbling'
];

// Grade point values
export const southernGradePoints = {
  'A': 0.2,
  'B': 0.3, 
  'C': 0.4
};

export const southernConnectionPoints = {
  'A': 0.1,
  'B': 0.15,
  'C': 0.2,
  'D': 0.25
};