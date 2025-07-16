// Taiji styles movement database based on IWUF rules (Taijiquan, Taijijian, Taijishan)
export const taijiMovements = [
  // Balance Techniques
  { id: '142A', name: 'Dīshì Qián Dēng Cǎi Jiǎo Píng Héng', chinese: '低势前蹬踩脚平衡', english: 'Forward Stepping Kick with Low Step Balance', category: 'Balance', grade: 'A', points: 0.2 },
  { id: '143A', name: 'Qián Jǔ Tuǐ Dī Shì Píng Héng', chinese: '前举腿低势平衡', english: 'Low Balance with Leg Stretched Forward', category: 'Balance', grade: 'A', points: 0.2 },
  { id: '143B', name: 'Hòu Chā Tuǐ Dī Shì Píng Héng', chinese: '后插腿低势平衡', english: 'Low Balance with Leg Crossed Behind', category: 'Balance', grade: 'B', points: 0.3 },
  
  // Leg Techniques
  { id: '212A', name: 'Fēn Jiǎo / Dēng Jiǎo', chinese: '分脚 / 蹬脚', english: 'Parting Kick / Heel Kick', category: 'Leg', grade: 'A', points: 0.2 },
  
  // Jumping Techniques
  { id: '312A', name: 'Téng Kōng Fēi Jiǎo', chinese: '腾空飞脚', english: 'Jumping Front Slap Kick', category: 'Jumping', grade: 'A', points: 0.2 },
  { id: '312B', name: 'Téng Kōng Zhèng Tī Tuǐ', chinese: '腾空正踢腿', english: 'Jumping Front Straight Kick', category: 'Jumping', grade: 'B', points: 0.3 },
  { id: '323A', name: 'Xuàn Fēng Jiǎo 180°', chinese: '旋风脚 180°', english: 'Tornado Kick 180°', category: 'Jumping', grade: 'A', points: 0.2 },
  { id: '323B', name: 'Xuàn Fēng Jiǎo 360°', chinese: '旋风脚 360°', english: 'Tornado Kick 360°', category: 'Jumping', grade: 'B', points: 0.3 },
  { id: '323C', name: 'Xuàn Fēng Jiǎo 450°(F)/540°', chinese: '旋风脚 450°（女）/540°', english: 'Tornado Kick 450°(F)/540°', category: 'Jumping', grade: 'C', points: 0.4 },
  { id: '324B', name: 'Téng Kōng Bǎi Lián 360°', chinese: '腾空摆莲 360°', english: 'Jumping Lotus Kick 360°', category: 'Jumping', grade: 'B', points: 0.3 },
  { id: '324C', name: 'Téng Kōng Bǎi Lián 450°(F)/540°', chinese: '腾空摆莲 450°（女）/540°', english: 'Jumping Lotus Kick 450°(F)/540°', category: 'Jumping', grade: 'C', points: 0.4 },
  
  // Stances for connections
  { id: '3', name: 'Tí Xī Dú Lì', chinese: '提膝独立', english: 'Single Raised-Knee Stance', category: 'Stance', grade: '-', points: 0 },
  { id: '5', name: 'Diē Chà', chinese: '跌叉', english: "Hurdler's Split Position", category: 'Stance', grade: '-', points: 0 },
  { id: '8', name: 'Qi Tiào Jiǎo Luò Di', chinese: '起跳脚落地', english: 'Landing on takeoff foot', category: 'Stance', grade: '-', points: 0 }
];

export const taijiConnections = [
  // A Grade Connections (0.1 points)
  { from: '142A', to: '3', points: 0.1, grade: 'A', description: 'Forward Stepping Kick with Low Balance + 180° Body Turn into Single Raised-Knee Stance' },
  { from: '143A', to: '3', points: 0.1, grade: 'A', description: 'Low Balance with Leg Stretched Forward + 180° Body Turn into Single Raised-Knee Stance' },
  { from: '143A', to: '212A', points: 0.1, grade: 'A', description: 'Low Balance with Leg Stretched Forward + Heel Kick/Parting Kick' },
  { from: '312A', to: '3', points: 0.1, grade: 'A', description: 'Jumping Front Slap Kick + Single Raised-Knee Stance' },
  { from: '312A', to: '324B', points: 0.1, grade: 'A', description: 'Jumping Front Slap Kick + Jumping Lotus Kick 360°' },
  { from: '323A', to: '3', points: 0.1, grade: 'A', description: 'Tornado Kick 180° + Single Raised-Knee Stance' },
  { from: '323B', to: '8', points: 0.1, grade: 'A', description: 'Tornado Kick 360° + Landing on takeoff foot' },
  { from: '324B', to: '8', points: 0.1, grade: 'A', description: 'Jumping Lotus Kick 360° + Landing on takeoff foot' },

  // B Grade Connections (0.15 points)
  { from: '143B', to: '3', points: 0.15, grade: 'B', description: 'Low Balance with Leg Crossed Behind + Lotus Kick into 180° Body Turn into Single Raised-Knee Stance' },
  { from: '143B', to: '212A', points: 0.15, grade: 'B', description: 'Low Balance with Leg Crossed Behind + Heel Kick/Parting Kick' },
  { from: '312A', to: '324C', points: 0.15, grade: 'B', description: 'Jumping Front Slap Kick + Jumping Lotus Kick 450°(F)/540°' },
  { from: '312B', to: '8', points: 0.15, grade: 'B', description: 'Jumping Front Straight Kick + Landing on takeoff foot' },
  { from: '324B', to: '5', points: 0.2, grade: 'C', description: "Jumping Lotus Kick 360° + Hurdler's Split Position" },
  
  // C Grade Connections (0.2 points)
  { from: '323B', to: '3', points: 0.2, grade: 'C', description: 'Tornado Kick 360° + Single Raised-Knee Stance' },
  { from: '324B', to: '3', points: 0.2, grade: 'C', description: 'Jumping Lotus Kick 360° + Single Raised-Knee Stance' },
  { from: '324C', to: '5', points: 0.2, grade: 'C', description: "Jumping Lotus Kick 450°(F)/540° + Hurdler's Split Position" }
  
  // D Grade Connections (0.25 points)
  { from: '323C', to: '3', points: 0.25, grade: 'D', description: 'Tornado Kick 450°(F)/540° + Single Raised-Knee Stance' },
  { from: '324C', to: '3', points: 0.25, grade: 'D', description: 'Jumping Lotus Kick 450°(F)/540° + Single Raised-Knee Stance' },
];

// Categories specific to taiji styles
export const taijiCategories = [
  'Balance',
  'Leg', 
  'Jumping'
];

// Grade point values (same as other styles)
export const taijiGradePoints = {
  'A': 0.2,
  'B': 0.3, 
  'C': 0.4
};

export const taijiConnectionPoints = {
  'A': 0.1,
  'B': 0.15,
  'C': 0.2,
  'D': 0.25
};