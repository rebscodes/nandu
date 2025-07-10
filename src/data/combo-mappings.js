// Complete lookup table mapping connection codes to combo criteria
export const connectionToComboCriteria = {
  // Dynamic + Static Connections - Cross-Legged Sitting (坐盘)
  "244A-6": "COMBO_DS_QIANSAOTUI_ZUOPAN",        // Front Sweep 540° + Cross-Legged Sitting
  "312A-6": "COMBO_DS_FEIJIAO_ZUOPAN",           // Jumping Front Slap Kick + Cross-Legged Sitting
  "323A-6": "COMBO_DS_XUANFENG_ZUOPAN",          // Tornado Kick 360° + Cross-Legged Sitting
  "323B-6": "COMBO_DS_XUANFENG_ZUOPAN",          // Tornado Kick 540° + Cross-Legged Sitting
  "323C-6": "COMBO_DS_XUANFENG_ZUOPAN",          // Tornado Kick 630°/720° + Cross-Legged Sitting
  "324A-6": "COMBO_DS_BAILIANG_ZUOPAN",          // Jumping Lotus Kick 360° + Cross-Legged Sitting
  "324B-6": "COMBO_DS_BAILIANG_ZUOPAN",          // Jumping Lotus Kick 540° + Cross-Legged Sitting
  "324C-6": "COMBO_DS_BAILIANG_ZUOPAN",          // Jumping Lotus Kick 630°/720° + Cross-Legged Sitting
  "333A-6": "COMBO_DS_XUANZI_ZUOPAN",            // Butterfly Kick + Cross-Legged Sitting

  // Dynamic + Static Connections - Single Raised-Knee Stance (提膝独立)
  "323A-3": "COMBO_DS_XUANFENG_TIXIDULI",        // Tornado Kick 360° + Single Raised-Knee Stance
  "323B-3": "COMBO_DS_XUANFENG_TIXIDULI",        // Tornado Kick 540° + Single Raised-Knee Stance
  "324A-3": "COMBO_DS_BAILIANG_TIXIDULI",        // Jumping Lotus Kick 360° + Single Raised-Knee Stance
  "324B-3": "COMBO_DS_BAILIANG_TIXIDULI",        // Jumping Lotus Kick 540° + Single Raised-Knee Stance

  // Dynamic + Static Connections - Horse Stance (马步)
  "323A-1": "COMBO_DS_XUANFENG_MABU",            // Tornado Kick 360° + Horse Stance
  "323B-1": "COMBO_DS_XUANFENG_MABU",            // Tornado Kick 540° + Horse Stance
  "323C-1": "COMBO_DS_XUANFENG_MABU",            // Tornado Kick 630°/720° + Horse Stance
  "324A-1": "COMBO_DS_BAILIANCOMBO_MABU",        // Jumping Lotus Kick 360° + Horse Stance
  "324B-1": "COMBO_DS_BAILIANCOMBO_MABU",        // Jumping Lotus Kick 540° + Horse Stance
  "324C-1": "COMBO_DS_BAILIANCOMBO_MABU",        // Jumping Lotus Kick 630°/720° + Horse Stance

  // Dynamic + Static Connections - Falling Front Split (跌竖叉)
  "323A-4": "COMBO_DS_XUANFENG_DIESHUCHA",       // Tornado Kick 360° + Falling Front Split
  "323B-4": "COMBO_DS_XUANFENG_DIESHUCHA",       // Tornado Kick 540° + Falling Front Split
  "323C-4": "COMBO_DS_XUANFENG_DIESHUCHA",       // Tornado Kick 630°/720° + Falling Front Split
  "324A-4": "COMBO_DS_BAILIANG360_DIESHUCHA",    // Jumping Lotus Kick 360° + Falling Front Split
  "335A-4": "COMBO_DS_CEKONGFAN_DIESHUCHA",      // Aerial Cartwheel + Falling Front Split
  "353B-4": "COMBO_DS_XUANZIZHUANTI_DIESHUCHA",  // Butterfly Twist 360° + Falling Front Split (inferred)
  "353C-4": "COMBO_DS_XUANZIZHUANTI_DIESHUCHA",  // Butterfly Twist 720° + Falling Front Split

  // Dynamic + Static Connections - Bow Stance (弓步)
  "324A-7": "COMBO_DS_BAILIANG360_GONGBU",       // Jumping Lotus Kick 360° + Bow Stance

  // Dynamic + Static Connections - Crouching Stance (仆步)
  "324B-0": "COMBO_DS_BAILIANG540_PUBU",         // Jumping Lotus Kick 540° + Crouching Stance

  // Dynamic + Dynamic Connections - No run-up allowed
  "323A-324A": "COMBO_DD_XUANFENG_BAILIAN",      // Tornado Kick 360° + Jumping Lotus Kick 360°
  "323A-324B": "COMBO_DD_XUANFENG_BAILIAN",      // Tornado Kick 360° + Jumping Lotus Kick 540°
  "323B-324B": "COMBO_DD_XUANFENG540_BAILIAN",   // Tornado Kick 540° + Jumping Lotus Kick 540°
  "323B-324C": "COMBO_DD_XUANFENG540_BAILIAN",   // Tornado Kick 540° + Jumping Lotus Kick 630°/720°
  "312A-324B": "COMBO_DD_FEIJIAO_BAILIANCOMBO",  // Jumping Front Slap Kick + Jumping Lotus Kick 540°
  "312A-324C": "COMBO_DD_FEIJIAO_BAILIANCOMBO",  // Jumping Front Slap Kick + Jumping Lotus Kick 630°/720°

  // Dynamic + Dynamic Connections - 1 step maximum
  "312A-335A": "COMBO_DD_FEIJIAO_CEKONGFAN",     // Jumping Front Slap Kick + Aerial Cartwheel
  "333A-353B": "COMBO_DD_XUANZI_XUANZIZHUANTI",  // Butterfly Kick + Butterfly Twist 360°

  // Dynamic + Dynamic Connections - 2 steps maximum  
  "312A-323A": "COMBO_DD_FEIJIAO_XUANFENG_2STEP", // Jumping Front Slap Kick + Tornado Kick 360°
  "312A-323B": "COMBO_DD_FEIJIAO_XUANFENG_2STEP", // Jumping Front Slap Kick + Tornado Kick 540°
  "312A-324A": "COMBO_DD_FEIJIAO_BAILIANG360",    // Jumping Front Slap Kick + Jumping Lotus Kick 360°

  // Dynamic + Dynamic Connections - 4 steps maximum
  "312A-323C": "COMBO_DD_FEIJIAO_XUANFENG_4STEP", // Jumping Front Slap Kick + Tornado Kick 630°/720°
  "312A-353B": "COMBO_DD_FEIJIAO_XUANZIZHUANTI",  // Jumping Front Slap Kick + Butterfly Twist 360°
  "312A-353C": "COMBO_DD_FEIJIAO_XUANZIZHUANTI",  // Jumping Front Slap Kick + Butterfly Twist 720°
  "323A-353B": "COMBO_DD_XUANFENG_XUANZIZHUANTI", // Tornado Kick 360° + Butterfly Twist 360°
  "323A-353C": "COMBO_DD_XUANFENG_XUANZIZHUANTI", // Tornado Kick 360° + Butterfly Twist 720°
  "333A-353C": "COMBO_DD_XUANZI_XUANZIZHUANTI720", // Butterfly Kick + Butterfly Twist 720°
  "353B-323B": "COMBO_DD_XUANZIZHUANTI_XUANFENG", // Butterfly Twist 360° + Tornado Kick 540°
  "353B-323C": "COMBO_DD_XUANZIZHUANTI_XUANFENG", // Butterfly Twist 360° + Tornado Kick 630°/720°
  "335A-323B": "COMBO_DD_CEKONGFAN_XUANFENG",     // Aerial Cartwheel + Tornado Kick 540°
  "335A-323C": "COMBO_DD_CEKONGFAN_XUANFENG",     // Aerial Cartwheel + Tornado Kick 630°/720°
  "335A-353B": "COMBO_DD_CEKONGFAN_XUANZIZHUANTI", // Aerial Cartwheel + Butterfly Twist 360°
  "335A-353C": "COMBO_DD_CEKONGFAN_XUANZIZHUANTI", // Aerial Cartwheel + Butterfly Twist 720°

  // Dynamic + Dynamic Connections - Pause required
  "333A-244A": "COMBO_DD_XUANZI_QIANSAOTUI",      // Butterfly Kick + Front Sweep 540°

  // Weapon Throwing/Catching Combinations
  "THROW-312A": "COMBO_PAO_TENG_JIE",             // Toss + Jumping Front Slap Kick
  "312A-CATCH": "COMBO_PAO_TENG_JIE",             // Jumping Front Slap Kick + Catch
  "THROW-445A": "COMBO_PAO_QIANG_JIE",            // Toss + Forward Dive Roll
  "445A-CATCH": "COMBO_PAO_QIANG_JIE",            // Forward Dive Roll + Catch
  "THROW-323A": "COMBO_PAO_XUAN_JIE",             // Toss + Tornado Kick 360° (inferred)
  "323A-CATCH": "COMBO_PAO_XUAN_JIE",             // Tornado Kick 360° + Catch (inferred)
  "THROW-324A": "COMBO_PAO_LIAN_JIE",             // Toss + Jumping Lotus Kick 360° (inferred)
  "324A-CATCH": "COMBO_PAO_LIAN_JIE",             // Jumping Lotus Kick 360° + Catch (inferred)
};

// Helper function to get non-conformity criteria for a connection
export function getNonConformityCriteria(fromCode, toCode, judgingCriteria) {
  const key = `${fromCode}-${toCode}`;
  const comboKey = connectionToComboCriteria[key];
  
  if (!comboKey) {
    return null;
  }
  
  return judgingCriteria?.combo_criteria?.[comboKey] || null;
}

// Helper function to get all possible connections for a technique
export function getPossibleConnections(techniqueCode) {
  const connections = [];
  
  Object.keys(connectionToComboCriteria).forEach(key => {
    const [from, to] = key.split('-');
    if (from === techniqueCode) {
      connections.push({
        to: to,
        comboKey: connectionToComboCriteria[key]
      });
    }
  });
  
  return connections;
}

// Helper function to validate if a connection exists
export function isValidConnection(fromCode, toCode) {
  const key = `${fromCode}-${toCode}`;
  return key in connectionToComboCriteria;
}