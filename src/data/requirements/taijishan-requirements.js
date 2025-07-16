// Taijishan competition requirements based on IWUF rules
import { taijiquanRequirements } from './taijiquan-requirements.js';

export const taijishanRequirements = {
  "fan_techniques": {
    "required_count": 8,
    "movements": [
      {
        "chinese": "开扇",
        "pinyin": "Kāi Shàn",
        "english": "Fan Opening",
        "description": "The fan opens completely. Two major fan ribs must be in a straight line (180°)."
      },
      {
        "chinese": "合扇",
        "pinyin": "Hé Shàn",
        "english": "Fan Closing",
        "description": "The fan closes, and two major fan ribs are overlapped."
      },
      {
        "chinese": "刺扇",
        "pinyin": "Cì Shàn",
        "english": "Fan Thrust",
        "description": "The closed fan thrusts straight forward, the arm and the fan are aligned in a line and the focus of force on the tip of fan."
      },
      {
        "chinese": "挂扇",
        "pinyin": "Guà Shàn",
        "english": "Fan Hooking Parry",
        "description": "The fan is closed with wrist rising vertically and keep close to the body, the tip of the fan travels from the front head down or to the rear with focus of force on the upper portion of the fan."
      },
      {
        "chinese": "撩扇",
        "pinyin": "Liāo Shàn",
        "english": "Fan Uppercut",
        "description": "The opened fan travels upwards from below to the front in an uppercutting arc with the focus of force on the curved edge at the top of the fan face, the forearm and the major ribs must be aligned. With the closed fan orientated vertically, the fan travels upwards from below to the front in an uppercutting arc with the focus of force on the upper portion of fan.",
        "variations": [
          "Open fan: Focus on curved edge at top of fan face, forearm and major ribs aligned",
          "Closed fan: Focus on upper portion of fan"
        ]
      },
      {
        "chinese": "点扇",
        "pinyin": "Diǎn Shàn",
        "english": "Fan Dotting",
        "description": "With the fan closed, and fan head points forward and downward with the focus of force on the front of fan head."
      },
      {
        "chinese": "劈扇",
        "pinyin": "Pī Shàn",
        "english": "Fan Smack",
        "description": "The closed fan chops downwards with the focus of force on the fan body."
      },
      {
        "chinese": "抛接扇",
        "pinyin": "Pāo Jiē Shàn",
        "english": "Fan Toss/Throw & Catch",
        "description": "The opened fan throws away the body. The fan rotates (turns over) not less than 360° in the air before holding the fan root; when the closed fan is thrown away the body, the fan rotates (turns) no less than 180° in the air before holding the fan's head."
      }
    ]
  },
  // Import stances from taijiquan (same 3 stances required)
  "stances": taijiquanRequirements.stances
};