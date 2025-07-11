// Daoshu competition requirements based on IWUF rules
import { sharedRequirements } from './shared-requirements.js';

export const daoshuRequirements = {
  "broadsword_techniques": {
    "required_count": 8,
    "special_requirement": "One (1) of these must include one full set of Chán Tóu Dāo (Broadsword Twining) Guǒ Nǎo Dāo (Wrapping with the Broadsword).",
    "movements": [
      {
        "chinese": "缠头刀",
        "pinyin": "Chán Tóu Dāo",
        "english": "Broadsword Twining",
        "description": "With the tip of the broadsword pointing downwards, the back of the broadsword on the back of the left shoulder, the broadsword circles to the right shoulder with the focus of force on the spine of the broadsword."
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
        "description": "With the sword orientated vertically, the sword chops downwards with the focus of force on the edge of the blade."
      },
      {
        "chinese": "扎刀",
        "pinyin": "Zhā Dāo",
        "english": "Broadsword Thrust",
        "description": "With the sword orientated vertically, the tip of the sword is thrust out forwards straight. The blade and the arm are aligned and the focus of force is on the tip of the blade."
      },
      {
        "chinese": "斩刀",
        "pinyin": "Zhǎn Dāo",
        "english": "Broadsword Hack",
        "description": "With the broadsword blade orientated horizontally, the broadsword hacks out to the left or to the right not higher than the head or lower than shoulder height. The focus of force is on the edge of the blade."
      },
      {
        "chinese": "挂刀",
        "pinyin": "Guà Dāo",
        "english": "Broadsword Hooking Parry",
        "description": "With the sword orientated vertically and kept close to the body, the tip of the sword travels downwards from the front or to the rear with the focus of force on the upper portion of the blade."
      },
      {
        "chinese": "云刀",
        "pinyin": "Yún Dāo",
        "english": "Broadsword Cloud Waving",
        "description": "The broadsword rotates on a horizontal plane above or above slightly ahead of the head. The focus of force is on the back of the blade."
      },
      {
        "chinese": "背花刀",
        "pinyin": "Bèi Huā Dāo",
        "english": "Broadsword Wrist Figure 8 Behind the Back",
        "description": "With the wrist as the axis of rotation, the broadsword rotates on a vertical plane travelling from the front of the body to behind the back of the performer while behind kept as close to the body as possible. The focus of force is on the blade."
      }
    ]
  },
  "stances": sharedRequirements.stances
};