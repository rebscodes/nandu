// Nandao competition requirements based on IWUF rules
import { nanquanRequirements } from './nanquan-requirements.js';

export const nandaoRequirements = {
  "broadsword_techniques": {
    "required_count": 8,
    "movements": [
      {
        "chinese": "缠头刀",
        "pinyin": "Chán Tóu Dāo",
        "english": "Broadsword Twining",
        "description": "With the tip of the broadsword pointing downwards, with the back of the broadsword on the back of the left shoulder, the broadsword circles to the right shoulder with the focus of force on the spine of the broadsword."
      },
      {
        "chinese": "裹脑刀",
        "pinyin": "Guǒ Nǎo Dāo",
        "english": "Wrapping with the Broadsword",
        "description": "With the tip of the broadsword pointing downwards, the back of the broadsword on the back of the right shoulder, the broadsword circles to the left shoulder with the focus of force on the spine of the broadsword."
      },
      {
        "chinese": "劈刀",
        "pinyin": "Pī Dāo",
        "english": "Broadsword Chop",
        "description": "With the sword orientated vertically, the sword chops downwards with the forearm and the blade aligned. The focus of force on the edge of the blade."
      },
      {
        "chinese": "抹刀",
        "pinyin": "Mǒ Dāo",
        "english": "Broadsword Slicing",
        "description": "With the blade of the sword orientated horizontally, the blade is drawn inwards to the left or the right in an arcing slicing motion at the height of the solar plexus. The focus of force is on the edge of the blade."
      },
      {
        "chinese": "格刀",
        "pinyin": "Gé Dāo",
        "english": "Broadsword Parry",
        "description": "With the blade of the sword is orientated vertically, block out to the left or to the right with the focus of force on the blade of the sword."
      },
      {
        "chinese": "截刀",
        "pinyin": "Jié Dāo",
        "english": "Broadsword Intercept",
        "description": "The edge of the sword travels obliquely upwards or downwards to intercept, with the focus of force on the upper edge of the blade."
      },
      {
        "chinese": "扫刀",
        "pinyin": "Sǎo Dāo",
        "english": "Broadsword Sweeping",
        "description": "With the sword orientated horizontally, it is sweeps to the left or to the right horizontally at the height of the ankles. The focus of force is on the edge of the blade."
      },
      {
        "chinese": "剪腕花刀",
        "pinyin": "Jiǎn Wàn Huā Dāo",
        "english": "Broadsword Figure 8",
        "description": "Utilizing the wrist as the rotational axis, the blade of the sword rotates forward on a vertical plane closely on either side of the arm. The focus of force is on the edge of the blade, and the edge and the back of the blade are clearly differentiated in the process."
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