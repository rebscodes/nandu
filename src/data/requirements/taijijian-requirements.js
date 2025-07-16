// Taijijian competition requirements based on IWUF rules
import { taijiquanRequirements } from './taijiquan-requirements.js';

export const taijijianRequirements = {
  "sword_techniques": {
    "required_count": 8,
    "movements": [
      {
        "chinese": "刺剑",
        "pinyin": "Cì Jiàn",
        "english": "Straight Sword Thrust",
        "description": "With the sword orientated vertically, the tip of the sword is thrust out forwards straight. The blade and the arm are aligned, and the focus of force is on the tip of the blade."
      },
      {
        "chinese": "左右挂剑",
        "pinyin": "Zuǒ Yòu Guà Jiàn",
        "english": "Straight Sword Hooking Parry to the Left and Right",
        "description": "With the sword orientated vertically and kept close to the body, the tip of the sword travels downwards from the front or to the rear with the focus of force on the upper portion of the blade."
      },
      {
        "chinese": "撩剑",
        "pinyin": "Liāo Jiàn",
        "english": "Straight Sword Uppercut",
        "description": "With the sword orientated vertically, the sword travels upwards from below to the front in an uppercutting arc with the focus of force on the upper portion of the blade."
      },
      {
        "chinese": "点剑",
        "pinyin": "Diǎn Jiàn",
        "english": "Straight Sword Pointing",
        "description": "With the sword orientated vertically, the wrist rises while the tip of the sword forcefully dot forward and downwards with the focus of force on the tip edge."
      },
      {
        "chinese": "劈剑",
        "pinyin": "Pī Jiàn",
        "english": "Straight Sword Chop",
        "description": "With the sword orientated vertically, the sword chops downwards with the focus of force on the edge of the blade."
      },
      {
        "chinese": "截剑",
        "pinyin": "Jié Jiàn",
        "english": "Straight Sword Intercept",
        "description": "The edge of the sword travels obliquely upwards or downwards to intercept, with the focus of force on the upper edge of the blade."
      },
      {
        "chinese": "抹剑",
        "pinyin": "Mǒ Jiàn",
        "english": "Straight Sword Slicing",
        "description": "With the blade of the sword orientated horizontally, the blade is drawn inwards to the left or the right in an arcing slicing motion at the height of the solar plexus."
      },
      {
        "chinese": "绞剑",
        "pinyin": "Jiǎo Jiàn",
        "english": "Straight Sword Enveloping",
        "description": "With the straight sword orientated horizontally, the tip of the sword rotates in a circle to the left or to the right on a vertical plane. The focus of force is on the tip section of the blade."
      }
    ]
  },
  // Import stances from taijiquan (same 3 stances required)
  "stances": taijiquanRequirements.stances
};