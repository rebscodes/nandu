// Movement database based on the provided tables
export const movements = [
  // Balance Techniques
  { id: '111A', name: 'Bān Tuǐ Cháo Tiān Zhí Lì', english: 'Grasp the foot and bring it to head level', category: 'Balance', grade: 'A', points: 0.2 },
  { id: '112A', name: 'Cè Tī Bào Jiǎo Zhí Lì', english: 'Side kick up to catch the foot at head level', category: 'Balance', grade: 'A', points: 0.2 },
  { id: '133B', name: 'Shí Zì Píng Héng', english: 'Forward Leaning Balance with Arms Outspread', category: 'Balance', grade: 'B', points: 0.3 },
  { id: '123A', name: 'Yǎng Shēn Píng Héng', english: 'Backward Leaning Balance', category: 'Balance', grade: 'A', points: 0.2 },
  { id: '153A', name: 'Tàn Hǎi Píng Héng', english: 'Exploring the Ocean Balance', category: 'Balance', grade: 'A', points: 0.2 },
  { id: '163A', name: 'Wàng Yuè Píng Héng', english: 'Gazing at the Moon Balance', category: 'Balance', grade: 'A', points: 0.2 },
  
  // Leg Techniques
  { id: '244A', name: 'Qián Sǎo Tuǐ 540°', english: 'Front Sweep 540°', category: 'Leg', grade: 'A', points: 0.2 },
  { id: '244B', name: 'Qián Sǎo Tuǐ 900°', english: 'Front Sweep 900°', category: 'Leg', grade: 'B', points: 0.3 },
  
  // Jumping Techniques
  { id: '312A', name: 'Téng Kōng Fēi Jiǎo', english: 'Jumping Front Slap Kick', category: 'Jumping', grade: 'A', points: 0.2 },
  { id: '312B', name: 'Téng Kōng Zhèng Tī Tuǐ', english: 'Jumping Front Straight Kick', category: 'Jumping', grade: 'B', points: 0.3 },
  { id: '323A', name: 'Xuàn Fēng Jiǎo 360°', english: 'Tornado Kick 360°', category: 'Jumping', grade: 'A', points: 0.2 },
  { id: '323B', name: 'Xuàn Fēng Jiǎo 540°', english: 'Tornado Kick 540°', category: 'Jumping', grade: 'B', points: 0.3 },
  { id: '323C', name: 'Xuàn Fēng Jiǎo 630°(F)/720°', english: 'Tornado Kick 630°(F)/720°', category: 'Jumping', grade: 'C', points: 0.4 },
  { id: '324A', name: 'Téng Kōng Bǎi Lián 360°', english: 'Jumping Lotus Kick 360°', category: 'Jumping', grade: 'A', points: 0.2 },
  { id: '324B', name: 'Téng Kōng Bǎi Lián 540°', english: 'Jumping Lotus Kick 540°', category: 'Jumping', grade: 'B', points: 0.3 },
  { id: '324C', name: 'Téng Kōng Bǎi Lián 630°(F)/720°', english: 'Jumping Lotus Kick 630°(F)/720°', category: 'Jumping', grade: 'C', points: 0.4 },
  { id: '333A', name: 'Xuànzi', english: 'Butterfly Kick', category: 'Jumping', grade: 'A', points: 0.2 },
  { id: '353B', name: 'Xuàn Zǐ Zhuǎn Tǐ 360°', english: 'Butterfly Twist 360°', category: 'Jumping', grade: 'B', points: 0.3 },
  { id: '353C', name: 'Xuàn Zǐ Zhuǎn Tǐ 720°', english: 'Butterfly Twist 720°', category: 'Jumping', grade: 'C', points: 0.4 },
  { id: '335A', name: 'Cè Kōng Fān', english: 'Aerial Cartwheel', category: 'Jumping', grade: 'A', points: 0.2 },
  { id: '355B', name: 'Cè Kōng Fān Zhuǎn Tǐ 360°', english: 'Aerial Cartwheel Twist 360°', category: 'Jumping', grade: 'B', points: 0.3 },
  
  // Stances for connections
  { id: '1', name: 'Mǎ Bù', english: 'Horse Stance', category: 'Stance', grade: '-', points: 0 },
  { id: '3', name: 'Tí Xī Dú Lì', english: 'Single Raised-Knee Stance', category: 'Stance', grade: '-', points: 0 },
  { id: '4', name: 'Diē Shù Chà', english: 'Falling Front Split', category: 'Stance', grade: '-', points: 0 },
  { id: '6', name: 'Zuò Pán', english: 'Cross-Legged Sitting', category: 'Stance', grade: '-', points: 0 },
  { id: '0', name: 'Pū Bù', english: 'Crouching Stance', category: 'Stance', grade: '-', points: 0 },
  { id: '7', name: 'Gōng Bù', english: 'Bow Stance', category: 'Stance', grade: '-', points: 0 }
];

// Connection database based on the provided tables (CORRECTED VERSION)
export const connections = [
  // A Grade Connections (0.1 points)
  { from: '244A', to: '6', points: 0.1, grade: 'A', description: 'Front Sweep 540° + Cross-Legged Sitting' },
  { from: '312A', to: '6', points: 0.1, grade: 'A', description: 'Jumping Front Slap Kick + Cross-Legged Sitting' },
  { from: '312A', to: '323A', points: 0.1, grade: 'A', description: 'Jumping Front Slap Kick + Tornado Kick 360° (within 2 steps)' },
  { from: '312A', to: '324A', points: 0.1, grade: 'A', description: 'Jumping Front Slap Kick + Jumping Lotus Kick 360° (within 2 steps)' },
  { from: '312A', to: '353B', points: 0.1, grade: 'A', description: 'Jumping Front Slap Kick + Butterfly Twist 360° (within 4 steps)' },
  { from: '323A', to: '3', points: 0.1, grade: 'A', description: 'Tornado Kick 360° + Single Raised-Knee Stance' },
  { from: '323A', to: '1', points: 0.1, grade: 'A', description: 'Tornado Kick 360° + Horse Stance' },
  { from: '323A', to: '4', points: 0.1, grade: 'A', description: 'Tornado Kick 360° + Falling Front Split' },
  { from: '323A', to: '6', points: 0.1, grade: 'A', description: 'Tornado Kick 360° + Cross-Legged Sitting' },
  { from: '323A', to: '324A', points: 0.1, grade: 'A', description: 'Tornado Kick 360° + Jumping Lotus Kick 360°' },
  { from: '323B', to: '1', points: 0.1, grade: 'A', description: 'Tornado Kick 540° + Horse Stance' },
  { from: '323B', to: '3', points: 0.1, grade: 'A', description: 'Tornado Kick 540° + Single Raised-Knee Stance' },
  { from: '323B', to: '4', points: 0.1, grade: 'A', description: 'Tornado Kick 540° + Falling Front Split' },
  { from: '323B', to: '6', points: 0.1, grade: 'A', description: 'Tornado Kick 540° + Cross-Legged Sitting' },
  { from: '323B', to: '324B', points: 0.1, grade: 'A', description: 'Tornado Kick 540° + Jumping Lotus Kick 540°' },
  { from: '323C', to: '1', points: 0.1, grade: 'A', description: 'Tornado Kick 630°(F)/720° + Horse Stance' },
  { from: '323C', to: '6', points: 0.1, grade: 'A', description: 'Tornado Kick 630°(F)/720° + Cross-Legged Sitting' },
  { from: '333A', to: '6', points: 0.1, grade: 'A', description: 'Butterfly Kick + Cross-Legged Sitting' },
  { from: '324A', to: '1', points: 0.1, grade: 'A', description: 'Jumping Lotus Kick 360° + Horse Stance' },
  { from: '324A', to: '4', points: 0.1, grade: 'A', description: 'Jumping Lotus Kick 360° + Falling Front Split' },
  { from: '324A', to: '6', points: 0.1, grade: 'A', description: 'Jumping Lotus Kick 360° + Cross-Legged Sitting' },
  
  // B Grade Connections (0.15 points)
  { from: '312A', to: '335A', points: 0.15, grade: 'B', description: 'Jumping Front Slap Kick + Aerial Cartwheel (within 1 step)' },
  { from: '312A', to: '323B', points: 0.15, grade: 'B', description: 'Jumping Front Slap Kick + Tornado Kick 540° (within 2 steps)' },
  { from: '312A', to: '324B', points: 0.15, grade: 'B', description: 'Jumping Front Slap Kick + Jumping Lotus Kick 540°' },
  { from: '323A', to: '324B', points: 0.15, grade: 'B', description: 'Tornado Kick 360° + Jumping Lotus Kick 540°' },
  { from: '323A', to: '353B', points: 0.15, grade: 'B', description: 'Tornado Kick 360° + Butterfly Twist 360° (within 4 steps)' },
  { from: '324A', to: '3', points: 0.15, grade: 'B', description: 'Jumping Lotus Kick 360° + Single Raised-Knee Stance' },
  { from: '324B', to: '0', points: 0.15, grade: 'B', description: 'Jumping Lotus Kick 540° + Crouching Stance' },
  { from: '324B', to: '1', points: 0.15, grade: 'B', description: 'Jumping Lotus Kick 540° + Horse Stance' },
  { from: '324B', to: '3', points: 0.15, grade: 'B', description: 'Jumping Lotus Kick 540° + Single Raised-Knee Stance' },
  { from: '324B', to: '6', points: 0.15, grade: 'B', description: 'Jumping Lotus Kick 540° + Cross-Legged Sitting' },
  { from: '324C', to: '6', points: 0.15, grade: 'B', description: 'Jumping Lotus Kick 630°(F)/720° + Cross-Legged Sitting' },
  
  // C Grade Connections (0.2 points)
  { from: '312A', to: '323C', points: 0.2, grade: 'C', description: 'Jumping Front Slap Kick + Tornado Kick 630°(F)/720° (within 4 steps)' },
  { from: '312A', to: '324C', points: 0.2, grade: 'C', description: 'Jumping Front Slap Kick + Jumping Lotus Kick 630°(F)/720°' },
  { from: '312A', to: '353C', points: 0.2, grade: 'C', description: 'Jumping Front Slap Kick + Butterfly Twist 720° (within 4 steps)' },
  { from: '323A', to: '353C', points: 0.2, grade: 'C', description: 'Tornado Kick 360° + Butterfly Twist 720° (within 4 steps)' },
  { from: '333A', to: '244A', points: 0.2, grade: 'C', description: 'Butterfly Kick + Front Sweep 540°' },
  { from: '333A', to: '353C', points: 0.2, grade: 'C', description: 'Butterfly Kick + Butterfly Twist 720° (within 4 steps)' },
  
  // D Grade Connections (0.25 points)
  { from: '323B', to: '324C', points: 0.25, grade: 'D', description: 'Tornado Kick 540° + Jumping Lotus Kick 630°(F)/720°' },
  { from: '323C', to: '4', points: 0.25, grade: 'D', description: 'Tornado Kick 630°(F)/720° + Falling Front Split' },
  { from: '324C', to: '1', points: 0.25, grade: 'D', description: 'Jumping Lotus Kick 630°(F)/720° + Horse Stance' },
  { from: '353C', to: '4', points: 0.25, grade: 'D', description: 'Butterfly Twist 720° + Falling Front Split' }
];