// Jianshu competition requirements based on IWUF rules
import { sharedRequirements } from './shared-requirements.js';

export const jianshuRequirements = {
  "sword_techniques": {
    "required_count": 8,
    "special_requirement": "One (1) of these must include one full set of Guà Jiàn (Straight Sword Hooking Parry) on the left and right connected with Chuān Guà Jiàn (Straight Sword Hooking Parry with Pierce) behind the back.",
    "movements": [
      {
        "chinese": "刺剑",
        "pinyin": "Cì Jiàn",
        "english": "Straight Sword Thrust",
        "description": "With the sword orientated vertically, the tip of the sword is thrust out forwards straight. The blade and the arm are aligned and the focus of force is on the tip of the blade."
      },
      {
        "chinese": "挂剑",
        "pinyin": "Guà Jiàn",
        "english": "Straight Sword Hooking Parry",
        "description": "With the sword orientated vertically and kept close to the body, the tip of the sword travels downwards from the front or to the rear with the focus of force on the upper portion of the blade."
      },
      {
        "chinese": "撩剑",
        "pinyin": "Liāo Jiàn",
        "english": "Straight Sword Uppercut",
        "description": "With the sword orientated vertically, the sword travels from low upwards ahead to the front in an uppercutting arc with the focus of force on the upper portion of the blade."
      },
      {
        "chinese": "点剑",
        "pinyin": "Diǎn Jiàn",
        "english": "Straight Sword Pointing",
        "description": "With the sword orientated vertically, the wrist rises while the tip of the sword forcefully points forward and downwards with the focus of force on the tip edge."
      },
      {
        "chinese": "劈剑",
        "pinyin": "Pī Jiàn",
        "english": "Straight Sword Chop",
        "description": "With the sword orientated vertically, the sword chops downwards with the focus of force on the edge of the blade."
      },
      {
        "chinese": "崩剑",
        "pinyin": "Bēng Jiàn",
        "english": "Upward Sword Tilt",
        "description": "With the sword orientated vertically, the wrist sinks while the tip of the blade travels upwards and forwards forcefully with the focus of force on the tip of the blade."
      },
      {
        "chinese": "截剑",
        "pinyin": "Jié Jiàn",
        "english": "Straight Sword Intercept",
        "description": "The edge of the sword travels obliquely upwards or downwards to intercept, with the focus of force on the upper edge of the blade."
      },
      {
        "chinese": "剪腕花",
        "pinyin": "Jiǎn Wàn Huā",
        "english": "Straight Sword Figure \"8\"",
        "description": "Utilizing the wrist as the rotational axis, the blade of the sword rotates forward on a vertical plane closely on either side of the arm. The focus of force is on the edge of the blade."
      }
    ]
  },
  "stances": sharedRequirements.stances,
  "balance_techniques": sharedRequirements.balance_techniques
};