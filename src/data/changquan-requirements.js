// Changquan competition requirements based on IWUF rules
import { sharedRequirements } from './shared-requirements.js';

export const changquanRequirements = {
  "hand_forms": {
    "required_count": 3,
    "movements": [
      {
        "chinese": "拳",
        "pinyin": "Quán",
        "english": "Fist",
        "description": "The four fingers excluding the thumb are held together and curled into the grip. The thumb is clasped tightly on the 2nd section (intermediate phalanges) of the index and middle fingers. The fist must be held tightly with the face of the fist level, and the wrist and fist aligned (forming a straight line)."
      },
      {
        "chinese": "掌",
        "pinyin": "Zhǎng",
        "english": "Palm",
        "description": "The four fingers excluding the thumb are held together and straight, and the thumb is bent and held in tightly."
      },
      {
        "chinese": "勾",
        "pinyin": "Gōu",
        "english": "Hook",
        "description": "The wrist is fully bent and hooked with the five fingers clasped tightly together at their tips."
      }
    ]
  },
  "fist_techniques": {
    "required_count": 3,
    "movements": [
      {
        "chinese": "冲拳",
        "pinyin": "Chōng Quán",
        "english": "Thrust Punch",
        "description": "The fist is thrust out straight forward from the waist. The arm locks straight with the focus of force on the face of the fist."
      },
      {
        "chinese": "劈拳",
        "pinyin": "Pī Quán",
        "english": "Chopping Fist",
        "description": "The fist travels from up to down in a chopping action. The arm locks straight with the focus of force on the bottom of the fist."
      },
      {
        "chinese": "撩拳",
        "pinyin": "Liāo Quán",
        "english": "Upward Arc Punch",
        "description": "The fist travels from down to the upper front in an arc. The arm locks straight with the focus of force on the eye or center (heart) of the fist."
      },
      {
        "chinese": "贯拳",
        "pinyin": "Guàn Quán",
        "english": "Hook Punch",
        "description": "The fist travels from the lower side of the body diagonally upwards to the opposite side of the body horizontally in an arc. The arm is slightly bent, with the fist held vertically and the focus of force on the face of the fist."
      },
      {
        "chinese": "崩拳",
        "pinyin": "Bēng Quán",
        "english": "Crushing Punch",
        "description": "The arm transitions from bent to straight, with the fist thrusting out forwards from the abdomen with the focus of force on the face of the fist."
      },
      {
        "chinese": "砸拳",
        "pinyin": "Zá Quán",
        "english": "Pounding Fist",
        "description": "The fist travels from up to down, smashing as the arm bends with the center (heart) of the fist facing upwards and the focus of force on the back of the fist."
      }
    ]
  },
  "palm_techniques": {
    "required_count": 2,
    "movements": [
      {
        "chinese": "推掌",
        "pinyin": "Tuī Zhǎng",
        "english": "Pushing Palm",
        "description": "The palm is held vertically and pushed out straight forward from the waist. The arm locks straight with the focus of force on the outer edge of the palm."
      },
      {
        "chinese": "挑掌",
        "pinyin": "Tiāo Zhǎng",
        "english": "Upward Snapping Palm",
        "description": "The palm travels from down to up with the wrist flicking the palm upwards and the focus of force on the four fingers excluding the thumb."
      },
      {
        "chinese": "穿掌",
        "pinyin": "Chuān Zhǎng",
        "english": "Threading Palm",
        "description": "The arm transitions from bent to straight, following along a particular part of the body, with the focus of force on the finger tips."
      },
      {
        "chinese": "插掌",
        "pinyin": "Chā Zhǎng",
        "english": "Inserting Palm",
        "description": "The arm transitions from bent to straight, travelling downwards or obliquely downwards with the palm and the forearm aligned (forming a straight line) and the focus of force on the fingertips."
      },
      {
        "chinese": "撩掌",
        "pinyin": "Liāo Zhǎng",
        "english": "Upward Arcing Palm",
        "description": "The arm travels forward and upward in an arc with the center of the palm facing forward and upwards, and the focus of force on the center of the palm."
      },
      {
        "chinese": "劈掌",
        "pinyin": "Pī Zhǎng",
        "english": "Chopping Palm",
        "description": "The palm travels from up to down in a chopping action. The arm locks straight with the focus of force on the outer edge of the palm."
      },
      {
        "chinese": "砍掌",
        "pinyin": "Kǎn Zhǎng",
        "english": "Horizontal Palm Chop",
        "description": "With the palm facing upwards or downwards, chop either to the left or the right with the focus of force on the outer edge of the palm."
      },
      {
        "chinese": "按掌",
        "pinyin": "Àn Zhǎng",
        "english": "Pressing Palm",
        "description": "Press the palm downwards with the focus of force on the center of the palm."
      }
    ]
  },
  "elbow_techniques": {
    "required_count": 1,
    "movements": [
      {
        "chinese": "顶肘",
        "pinyin": "Dǐng Zhǒu",
        "english": "Nailing Elbow",
        "description": "The elbow is bent with the hand clenched into a fist with the center (heart) of the fist facing downwards. The tip of the elbow strikes forwards or to the side with the focus of force on the tip of the elbow.",
        "category": "offensive"
      }
    ]
  },
  "stances": sharedRequirements.stances,
  "leg_techniques": {
    "required_count": 3,
    "categories": [
      {
        "type": "straight_leg_swinging",
        "chinese": "直摆",
        "description": "Leg swinging techniques/methods with the leg straight",
        "movements": [
          {
            "chinese": "正踢腿",
            "pinyin": "Zhèng Tī Tuǐ",
            "english": "Front Stretch Kick",
            "description": "The supporting leg is straight with the sole of the foot completely flat on the floor, the other leg is kicked upwards while held straight and hooking the toes back close to the forehead at its apex. The upper body is kept upright."
          },
          {
            "chinese": "斜踢腿",
            "pinyin": "Xié Tī Tuǐ",
            "english": "Oblique Stretch Kick",
            "description": "The supporting leg is straight with the sole of the foot completely flat on the floor, the other leg is kicked obliquely upwards while held straight and hooking the toes back close to the opposite side ear at its apex. The upper body is kept upright."
          },
          {
            "chinese": "侧踢腿",
            "pinyin": "Cè Tī Tuǐ",
            "english": "Side Stretch Kick",
            "description": "The supporting leg is straight with the sole of the foot completely flat on the floor, the other leg is kicked upwards to the side of the body while held straight and hooking the toes back close to the back of the head at its apex. The upper body is kept upright."
          },
          {
            "chinese": "里合腿",
            "pinyin": "Lǐ Hé Tuǐ",
            "english": "Inward Crescent Kick",
            "description": "The supporting leg is straight with the sole of the foot completely flat on the floor, the other leg is kicked upwards and swung inwards to cross the face and return to the floor in a crescent motion while held straight and hooking the toes back. The upper body is kept upright."
          },
          {
            "chinese": "外摆腿",
            "pinyin": "Wài Bǎi Tuǐ",
            "english": "Outward Crescent Kick",
            "description": "The supporting leg is straight with the sole of the foot completely flat on the floor, the other leg is kicked upwards and swung outwards to cross the face and return to the floor in a crescent motion while held straight and hooking the toes back. The upper body is kept upright."
          },
          {
            "chinese": "后撩腿",
            "pinyin": "Hòu Liāo Tuǐ",
            "english": "Rear Arc Kick",
            "description": "The supporting leg is straight with the sole of the foot completely flat on the floor, the other leg's heel is kicked to the back and swung up in an arc. The upper body is bent forwards, with the head held up and the chest expanded."
          }
        ]
      },
      {
        "type": "flexion_extension",
        "chinese": "屈伸",
        "description": "Flexion to extension leg techniques",
        "movements": [
          {
            "chinese": "弹腿",
            "pinyin": "Tàn Tuǐ",
            "english": "Snap Spring Kick",
            "description": "The supporting leg is straight or slightly bent. The other leg transitions from bent to straight with the toes snapping out to the front not higher than the waist, the top of the foot extended flat horizontally and the focus of force reaching the toes."
          },
          {
            "chinese": "蹬腿",
            "pinyin": "Dēng Tuǐ",
            "english": "Heel Push Kick",
            "description": "The supporting leg is straight or slightly bent. The other leg transitions from bent to straight with the toes hooked back to the front not higher than the chest or lower than the waist. The focus of force is on the heel."
          },
          {
            "chinese": "踹腿",
            "pinyin": "Chuài Tuǐ",
            "english": "Side Kick",
            "description": "The supporting leg is straight or slightly bent. The other leg transitions from bent to straight out to the side with the toes hooked back. The focus of force is on the heel."
          }
        ]
      },
      {
        "type": "sweep_turn",
        "chinese": "扫转",
        "description": "Sweep type leg techniques",
        "movements": [
          {
            "chinese": "前扫腿",
            "pinyin": "Qián Sǎo Tuǐ",
            "english": "Front Sweep",
            "description": "The supporting leg is fully squatted with the front portion of the sole of its foot acting as the rotation axis. The sweeping leg is straight, with its foot hooked inwards, and the front portion of the sole in contact with the floor. The front sweep is executed with at least one full rotation."
          },
          {
            "chinese": "后扫腿",
            "pinyin": "Hòu Sǎo Tuǐ",
            "english": "Back Sweep",
            "description": "The supporting leg is fully squatted with the front portion of the sole of its foot acting as the rotation axis. The sweeping leg is straight, with its foot hooked inwards, and the front portion of the sole in contact with the floor. The back sweep is executed with one full rotation."
          }
        ]
      }
    ]
  },
  "balance_techniques": sharedRequirements.balance_techniques
};