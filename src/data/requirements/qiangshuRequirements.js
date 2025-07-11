// Qiangshu competition requirements based on IWUF rules
import { sharedRequirements } from './shared-requirements.js';

export const qiangshuRequirements = {
  "spear_techniques": {
    "required_count": 8,
    "special_requirement": "One (1) of these must include a set of three continuous connected Lán Qiāng (Outward Blocking with the Spear), Ná Qiāng (Inward Blocking with the Spear), Zhā Qiāng (Spear Thrust) combinations.",
    "movements": [
      {
        "chinese": "拦枪",
        "pinyin": "Lán Qiāng",
        "english": "Outward Blocking with the Spear",
        "description": "The tip of the spear travels outwards in an arc, not higher than the head or lower than the hips. The focus of force is on the upper portion of the spear shaft."
      },
      {
        "chinese": "拿枪",
        "pinyin": "Ná Qiāng",
        "english": "Inward Blocking with the Spear",
        "description": "The tip of the spear travels inwards in an arc, not higher than the head or lower than the hips. The focus of force is on the upper portion of the spear shaft."
      },
      {
        "chinese": "扎枪",
        "pinyin": "Zhā Qiāng",
        "english": "Spear Thrust",
        "description": "The spear head is thrust out straight ahead forcefully, the rear hand makes contact with the front hand. The focus of force is on the tip of the spear."
      },
      {
        "chinese": "穿枪",
        "pinyin": "Chuān Qiāng",
        "english": "Spear Pierce",
        "description": "The spear shaft is held tightly close to the throat, or the waist or the arm, and pierces out straight."
      },
      {
        "chinese": "崩枪",
        "pinyin": "Bēng Qiāng",
        "english": "Spear Tilt",
        "description": "The spear head forcefully travels upwards or to the side. The focus of force is on the tip of the spear."
      },
      {
        "chinese": "点枪",
        "pinyin": "Diǎn Qiāng",
        "english": "Spear Pointing",
        "description": "The tip of the spear forcefully points forward and downwards with the focus of force on the tip of the spear head."
      },
      {
        "chinese": "舞花枪",
        "pinyin": "Wǔ Huā Qiāng",
        "english": "Vertical Figure \"8\" with the Spear",
        "description": "With the shaft of the spear held tightly close to the body, the spear revolves on a vertical plane on the left and right sides of the body."
      },
      {
        "chinese": "挑把",
        "pinyin": "Tiāo Bǎ",
        "english": "Upwards Handle Strike",
        "description": "The handle of the spear is forcefully flicked upwards. The focus of force is on the handle of the spear."
      }
    ]
  },
  "stances": sharedRequirements.stances
};