// Nangun competition requirements based on IWUF rules
import { nanquanRequirements } from './nanquan-requirements.js';

export const nangunRequirements = {
  "cudgel_techniques": {
    "required_count": 8,
    "movements": [
      {
        "chinese": "劈棍",
        "pinyin": "Pī Gùn",
        "english": "Cudgel Chop",
        "description": "The cudgel chops downwards with the focus of force on the upper section of the cudgel."
      },
      {
        "chinese": "崩棍",
        "pinyin": "Bēng Gùn",
        "english": "Cudgel Tilt",
        "description": "The tip of the cudgel forcefully travels upwards or to the side. The focus of force on the upper/tip section of the cudgel."
      },
      {
        "chinese": "绞棍",
        "pinyin": "Jiǎo Gùn",
        "english": "Cudgel Enveloping",
        "description": "The tip or the handle end of the cudgel rotates in a vertical plane either inwards or outwards, not higher than shoulder height and not lower than knee height. The focus of force is on the tip end section or handle end section."
      },
      {
        "chinese": "滚压棍",
        "pinyin": "Gǔn Yā Gùn",
        "english": "Cudgel Rolling Press",
        "description": "With the two hands gripping the cudgel it is drawn back inwards, the front arm forearm rotates outwards with the centre (heart) of the palm facing upwards, while the rear arm forearm rotates inwards with the centre (heart) of the palm facing downwards, with a fast motion the cudgel is pressed down onto the thighs. The focus of force is on the upper portion of the cudgel."
      },
      {
        "chinese": "格棍",
        "pinyin": "Gé Gùn",
        "english": "Cudgel Parry",
        "description": "With the cudgel orientated vertically, block out ahead to the left or to the right with the focus of force on the body of the cudgel."
      },
      {
        "chinese": "击棍",
        "pinyin": "Jī Gùn",
        "english": "Horizontal Cudgel Strike",
        "description": "The tip or the handle of the cudgel strikes out horizontally to the left or to the right. The focus of force is on the tip section or the handle section of the cudgel."
      },
      {
        "chinese": "顶棍",
        "pinyin": "Dǐng Gùn",
        "english": "Cudgel Handle Planting",
        "description": "The tip of the cudgel is nailed out and upwards direction with the handle firmly planted on the ground. The focus of force is on the tip section of the cudgel."
      },
      {
        "chinese": "抛棍",
        "pinyin": "Pāo Gùn",
        "english": "Upward Cudgel Strike",
        "description": "The cudgel is explosively struck out in an upward direction. The focus of force is on the tip section of the cudgel."
      }
    ]
  },
  // Import stances from nanquan (same 6 stances required)
  "stances": nanquanRequirements.stances,
  
  // Import footwork from nanquan (same Kirin Steps)
  "footwork_techniques": nanquanRequirements.footwork_techniques,
  
  // Import leg techniques from nanquan (same Horizontal Nail Kick)
  "leg_techniques": nanquanRequirements.leg_techniques
};