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
        "definition": "晃动：是指由于身体失去平衡造成躯干双向或多向位移。\n\nSway: A sway is defined as an athlete's upper body is displaced (sways) in 2 different directions. For example, the athlete loses his center of balance and leans his or her upper body to maintain his balance, either left or right, forward and backwards, or in a circular motion ending upright, it is regarded as a sway."
      },
      {
        "chinese": "脚移动或跳动",
        "english": "Foot shuffles or skips",
        "code": "70B",
        "deduction": "0.1",
        "definition": "移动：是指双脚、单脚或一脚一腿支撑时，任何一脚出现的位移。\n\nShuffle: This refers to a situation when standing or landing on both feet or on a single foot or on one foot and one leg. Should any supporting foot move or be displaced laterally it is considered as a shuffle.\n\n跳动：支撑脚（单脚或双脚）出现悬空状态，判定为跳动。\n\nSkip: This refers to a situation when standing or landing on both feet or on a single foot. Should any supporting foot leave the carpet in a skip or hop it is considered a skip."
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
        "chinese": "平衡动作未按项目特点有节奏快速完成 / 平衡动作静止时间不足2秒钟",
        "english": "Balance technique not completed rhythmically and quickly according to the characteristics of the event / Balance technique not maintained for at least 2 seconds",
        "code": "77",
        "deduction": "0.1",
        "definition": "Calculation of time begins when the movement first stops in a static or motionless state. This applies to Changquan, Jianshu, Daoshu, Qiangshu & Gunshu events only."
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
  "规定动作": {
    "chinese": "规定动作",
    "english": "Compulsory/mandatory technique",
    "deductions": [
      {
        "chinese": "自选套路：每减少或改变一个规定动作",
        "english": "For each missing/altering compulsory/mandatory technique in optional routines",
        "code": "80",
        "deduction": "0.2"
      },
      {
        "chinese": "规定套路：每增加、减少或改变一个规定动作",
        "english": "For each missing/additional/altering compulsory/mandatory technique in compulsory routines",
        "code": "80",
        "deduction": "0.2"
      },
      {
        "chinese": "规定套路：每增加或减少一步",
        "english": "Compulsory Routines: Missing or additional step",
        "code": "81",
        "deduction": "0.1"
      },
      {
        "chinese": "南拳、南刀、南棍规定套路：未按规定发声或每增加或减少一次发声",
        "english": "Nanquan, Nandao, Nangun Compulsory Routines: For each missing or additional vocalization or did not vocalize in accordance with the requirement",
        "code": "82",
        "deduction": "0.2"
      }
    ]
  },
  "结构布局": {
    "chinese": "结构、布局",
    "english": "Structure & Composition",
    "deductions": [
      {
        "chinese": "静止姿势（平衡动作除外）停顿时间超过2秒",
        "english": "A static state (excluding balance techniques) which is held for longer than 2 seconds",
        "code": "83",
        "deduction": "0.1"
      },
      {
        "chinese": "太极拳、太极剑难度动作前出现停顿",
        "english": "During Taijiquan or Taijijian there is an obvious unmethodical pause prior to the execution of Degree of Difficulty technique",
        "code": "83",
        "deduction": "0.1"
      },
      {
        "chinese": "难度动作前出现影响套路节奏的无攻防动作演练",
        "english": "Performing non-offensive or non-defensive actions that disrupts the routine's rhythm before executing the Degree of Difficulty techniques",
        "code": "83",
        "deduction": "0.1"
      },
      {
        "chinese": "长拳、南拳及其器械动作每偏向超过90°",
        "english": "For Changquan type and Nanquan Type events (including weapon routines), movements done in averted directions exceeding 90 degrees",
        "code": "84",
        "deduction": "0.1"
      },
      {
        "chinese": "太极拳、太极剑、太极扇动作每偏向超过45°",
        "english": "For Taijiquan and Taijijian events, movements done in averted directions exceeding 45 degrees",
        "code": "84",
        "deduction": "0.1"
      },
      {
        "chinese": "两组难度之间少于两个完整的技术动作",
        "english": "Between 2 groups of Degree of Difficulty techniques, there are less than 2 complete technique movements",
        "code": "85",
        "deduction": "0.1"
      }
    ]
  },
  "音乐": {
    "chinese": "音乐",
    "english": "Music",
    "deductions": [
      {
        "chinese": "要求配乐的项目未配乐或配乐有有词说唱",
        "english": "Events Requiring Musical Accompaniment: No music or music which includes vocals/lyrics",
        "code": "86",
        "deduction": "0.50"
      }
    ]
  }
};