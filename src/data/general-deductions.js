// General deductions applicable to all wushu events based on IWUF rules
export const generalDeductions = {
  "deduction_standards": {
    "cumulative_rule": "Should during a single technique, more than one 'other error' occurs, they will be deducted in a cumulative manner.",
    "occurrence_rule": "Other Errors will be deducted as they occur in a cumulative manner."
  },
  "失去平衡": {
    "chinese": "失去平衡",
    "english": "Loss of Balance",
    "deductions": [
      {
        "chinese": "躯干晃动",
        "english": "Torso sways",
        "code": "70A",
        "deduction": "0.05",
        "definition": "A sway is defined as an athlete's upper body is displaced (sways) in 2 different directions. For example, the athlete loses his center of balance and leans his or her upper body to maintain his balance, either left or right, forward and backwards, or in a circular motion ending upright, it is regarded as a sway."
      },
      {
        "chinese": "脚移动或跳动",
        "english": "Foot shuffles or skips",
        "code": "70B",
        "deduction": "0.1",
        "shuffle_definition": "This refers to a situation when standing or landing on both feet or on a single foot or on one foot and one leg. Should any supporting foot move or be displaced laterally it is considered as a shuffle.",
        "skip_definition": "This refers to a situation when standing or landing on both feet or on a single foot. Should any supporting foot leave the carpet in a skip or hop it is considered a skip."
      },
      {
        "chinese": "附加支撑",
        "english": "Additional Support",
        "code": "71",
        "deduction": "0.2",
        "definition": "Should an athlete during his/her performance, either when moving or in a set posture, lose balance and make use of a hand, elbow, knee, non-supporting leg (during a single leg posture) or the weapon as an additional support it is considered as an additional support. (Note: should the weapon hit the floor during the course of a movement without any force applied to it as additional support it should be considered as a weapon hitting the floor and points will be deducted for accordingly)."
      },
      {
        "chinese": "倒地",
        "english": "Fall",
        "code": "72",
        "deduction": "0.30",
        "definition": "Should an athlete during his/her performance, either when moving or in a set posture, lose balance and make use of both hands, the head, the upper arm (above the elbow), shoulder, torso, buttocks; or should any two or more parts of the body simultaneously make contact with the floor, or one part of the body and the weapon (the weapon is considered an extension of the arm), it is considered as a fall. (Note: In Choreographed Sparring events, intentional falls to the ground are neither considered as nor deducted for as falls)."
      }
    ]
  },
  "器械与服饰": {
    "chinese": "器械与服饰",
    "english": "Weapons & Apparel",
    "deductions": [
      {
        "chinese": "器械触地、脱把、碰身、变形，扇面与扇骨脱离",
        "english": "Weapon contact with floor, loss of grip, weapon strikes body, weapon deforms, fan surface detached",
        "code": "73",
        "deduction": "0.1",
        "definitions": {
          "weapon_touching_body": "Should an athlete during a technique with a weapon strike, tap or touch any part of his/her body, it will be considered as weapon-touching-body and be deducted accordingly. (Note: With exception of specific weapon techniques where contact is made intentionally with the body.)",
          "weapon_deformed": "This refers to when the weapon has been deformed to a degree more than 45° from its original intended shape."
        }
      },
      {
        "chinese": "器械折断",
        "english": "Weapon Broken",
        "code": "74",
        "deduction": "0.2",
        "includes": "Main or minor ribs of the fan breaks, nails on the ribs falls off/detached"
      },
      {
        "chinese": "器械掉地",
        "english": "Weapon dropped on the floor",
        "code": "75",
        "deduction": "0.3"
      },
      {
        "chinese": "刀彩、剑穗、枪缨、服饰、头饰掉地；刀彩、剑穗、软器械缠手（缠身）；服装开纽或撕裂；鞋脱落",
        "english": "Weapon accessories dropped, weapon entangles hand/body, costume issues, shoes dropped",
        "code": "76",
        "deduction": "0.1",
        "includes": [
          "Broad Sword Ribbon dropped on the floor",
          "Straight sword Tassel dropped on the floor", 
          "Spear Tassel dropped on the floor",
          "Garment Item dropped on the floor",
          "Headwear dropped on the floor",
          "Broad Sword Ribbon entangles hand or body",
          "Straight sword Tassel entangles hand or body",
          "Soft Weapon entangles hand or body",
          "Costume torn or button opened up",
          "Shoes dropped off"
        ]
      }
    ]
  },
  "其他": {
    "chinese": "其他",
    "english": "Other",
    "deductions": [
      {
        "chinese": "平衡动作未按项目特点有节奏快速完成",
        "english": "Balance technique not completed rhythmically and quickly according to the characteristics of the event",
        "code": "77",
        "deduction": "0.1",
        "timing_definition": "Calculation of time begins when the movement first stops in a static or motionless state. This applies to Changquan, Jianshu, Daoshu, Qiangshu & Gunshu events only."
      },
      {
        "chinese": "平衡动作静止时间不足2秒钟",
        "english": "Balance technique not maintained for at least 2 seconds",
        "code": "77",
        "deduction": "0.1"
      },
      {
        "chinese": "出界",
        "english": "Out-of-bounds",
        "code": "78",
        "deduction": "0.1",
        "definition": "Should an athlete during his/her performance, touch the floor outside of the boundary line of the competition arena with any part of his/her body, it is considered as out-of-bounds. Should the weapon touch the floor outside of the boundary line of the competition arena; or if any part of the performer's body is extended beyond the boundary line of the competition arena but does not make contact with the floor it is not considered as out-of-bounds."
      },
      {
        "chinese": "遗忘",
        "english": "Forgetting (Movement Forgotten)",
        "code": "79",
        "deduction": "0.1",
        "definition": "Should an athlete during his/her performance have a lapse of memory and be interrupted and pause unconventionally or have chaotic movements, it is considered as forgetting."
      }
    ]
  },
  "detailed_definitions": {
    "sway": {
      "chinese": "晃动",
      "english": "Sway",
      "definition": "A sway is defined as an athlete's upper body is displaced (sways) in 2 different directions. For example, the athlete loses his center of balance and leans his or her upper body to maintain his balance, either left or right, forward and backwards, or in a circular motion ending upright, it is regarded as a sway."
    },
    "shuffle": {
      "chinese": "移动",
      "english": "Shuffle", 
      "definition": "This refers to a situation when standing or landing on both feet or on a single foot or on one foot and one leg. Should any supporting foot move or be displaced laterally it is considered as a shuffle."
    },
    "skip": {
      "chinese": "跳动",
      "english": "Skip",
      "definition": "This refers to a situation when standing or landing on both feet or on a single foot. Should any supporting foot leave the carpet in a skip or hop it is considered a skip."
    },
    "additional_support": {
      "chinese": "附加支撑",
      "english": "Additional Support",
      "definition": "Should an athlete during his/her performance, either when moving or in a set posture, lose balance and make use of a hand, elbow, knee, non-supporting leg (during a single leg posture) or the weapon as an additional support it is considered as an additional support.",
      "note": "Should the weapon hit the floor during the course of a movement without any force applied to it as additional support it should be considered as a weapon hitting the floor and points will be deducted for accordingly."
    },
    "fall": {
      "chinese": "倒地",
      "english": "Fall",
      "definition": "Should an athlete during his/her performance, either when moving or in a set posture, lose balance and make use of both hands, the head, the upper arm (above the elbow), shoulder, torso, buttocks; or should any two or more parts of the body simultaneously make contact with the floor, or one part of the body and the weapon (the weapon is considered an extension of the arm), it is considered as a fall.",
      "note": "In Choreographed Sparring events, intentional falls to the ground are neither considered as nor deducted for as falls."
    },
    "weapon_touching_body": {
      "chinese": "器械碰身",
      "english": "Weapon-Touching-Body",
      "definition": "Should an athlete during a technique with a weapon strike, tap or touch any part of his/her body, it will be considered as weapon-touching-body and be deducted accordingly.",
      "note": "With exception of specific weapon techniques where contact is made intentionally with the body."
    },
    "weapon_deformed": {
      "chinese": "器械变形",
      "english": "Weapon Deformed",
      "definition": "This refers to when the weapon has been deformed to a degree more than 45° from its original intended shape."
    },
    "out_of_bounds": {
      "chinese": "出界",
      "english": "Out-of-bounds",
      "definition": "Should an athlete during his/her performance, touch the floor outside of the boundary line of the competition arena with any part of his/her body, it is considered as out-of-bounds.",
      "clarification": "Should the weapon touch the floor outside of the boundary line of the competition arena; or if any part of the performer's body is extended beyond the boundary line of the competition arena but does not make contact with the floor it is not considered as out-of-bounds."
    },
    "balance_timing": {
      "chinese": "平衡静止时间",
      "english": "Balance Technique Static/Motionless Timing",
      "definition": "Calculation of time begins when the movement first stops in a static or motionless state.",
      "applies_to": "This applies to Changquan, Jianshu, Daoshu, Qiangshu & Gunshu events only."
    },
    "forgetting": {
      "chinese": "遗忘",
      "english": "Forgetting",
      "definition": "Should an athlete during his/her performance have a lapse of memory and be interrupted and pause unconventionally or have chaotic movements, it is considered as forgetting."
    }
  },
  "deduction_principles": {
    "cumulative_within_technique": "Should during a single technique, more than one 'other error' occurs, they will be deducted in a cumulative manner.",
    "cumulative_overall": "Other Errors will be deducted as they occur in a cumulative manner."
  }
};