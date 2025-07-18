// Nanquan, Nandao, and Nangun deduction and non-conformity criteria based on IWUF rules
export const judgingCriteria = {
  "general_rules": {
    "deduction_amount": 0.1,
    "description": "Within a single technique, should there be 1 or more errors, 0.1 point will be deducted once.",
    "weapon_rule": "Within a single group of movements, should there be 2 or more occurrences of the same weapon technique errors, 0.1 point will only be deducted once."
  },
  "hand_forms": {
    "拳": {
      "chinese": "拳",
      "pinyin": "Quán",
      "english": "Fist",
      "code": "01",
      "deductions": [
        {
          "chinese": "拳面不平",
          "english": "Face of fist uneven"
        },
        {
          "chinese": "拇指未压在食指和中指第二指节上",
          "english": "The thumb is not pressing on the second segment of both the index and middle fingers"
        }
      ]
    },
    "虎爪": {
      "chinese": "虎爪",
      "pinyin": "Hǔ Zhǎo",
      "english": "Tiger's Claw",
      "code": "02",
      "deductions": [
        {
          "chinese": "五指未弯曲分开后张",
          "english": "Five fingers not separated with the first and second segment of each finger not hooked and flexed"
        },
        {
          "chinese": "掌心未凸出",
          "english": "Center of the palm not pushed out"
        }
      ]
    },
    "鹤嘴手": {
      "chinese": "鹤嘴（顶）手",
      "pinyin": "Hè Zuǐ",
      "english": "Crane's Beak",
      "code": "03",
      "deductions": [
        {
          "chinese": "五指未捏拢",
          "english": "Five Fingers not pinched together"
        },
        {
          "chinese": "屈腕",
          "english": "Wrist flexed (bent) when striking"
        }
      ]
    },
    "单指掌": {
      "chinese": "单指掌（手）",
      "pinyin": "Dān Zhǐ Zhǎng",
      "english": "Single Finger Palm",
      "code": "04",
      "deductions": [
        {
          "chinese": "食指未伸直",
          "english": "Index finger not Straight"
        },
        {
          "chinese": "其余四指未弯曲扣紧",
          "english": "The other 4 fingers not tightly bent/hooked"
        }
      ]
    }
  },
  "leg_techniques": {
    "前扫腿": {
      "chinese": "前扫腿",
      "pinyin": "Qián Sǎo Tuǐ",
      "english": "Front Sweep",
      "code": "20",
      "deductions": [
        {
          "chinese": "支撑腿大腿高于水平",
          "english": "The thigh of supporting leg is above horizontal level"
        },
        {
          "chinese": "扫转腿脚掌在扫转时触地后离地",
          "english": "The sole of sweeping foot leaves the ground after making contact for the sweeping action"
        },
        {
          "chinese": "扫转腿弯曲45°或超过45°",
          "english": "Sweeping leg bent 45° or more"
        }
      ],
      "non_conformity": [
        {
          "chinese": "扫转度数不足",
          "english": "Insufficient degree of sweeping rotation"
        }
      ]
    },
    "横踩腿": {
      "chinese": "横踩腿",
      "pinyin": "Héng Cǎi Tuǐ",
      "english": "Horizontal Stamping Kick",
      "code": "23",
      "deductions": [
        {
          "chinese": "腿由屈至伸摆动小于45°",
          "english": "The kicking leg does not transit from an obvious bent (45° or more) to completely straight"
        }
      ]
    },
    "蹬腿": {
      "chinese": "蹬腿",
      "pinyin": "Dēng Tuǐ",
      "english": "Heel Push Kick",
      "code": "23",
      "deductions": [
        {
          "chinese": "腿由屈至伸摆动小于45°",
          "english": "The kicking leg does not transit from an obvious bent (45° or more) to completely straight"
        }
      ]
    },
    "虎尾腿": {
      "chinese": "虎尾腿",
      "pinyin": "Hǔ Wěi Tuǐ",
      "english": "Tiger Tail Kick",
      "code": "23",
      "deductions": [
        {
          "chinese": "腿由屈至伸摆动小于45°",
          "english": "The kicking leg does not transit from an obvious bent (45° or more) to completely straight"
        }
      ]
    },
    "转身后摆腿": {
      "chinese": "转身后摆腿",
      "pinyin": "Zhuǎn Shēn Hòu Bǎi Tuǐ",
      "english": "Turning Back Crescent Kick",
      "code": "25",
      "deductions": [
        {
          "chinese": "后摆腿弯曲",
          "english": "Kicking leg bent"
        },
        {
          "chinese": "后摆腿脚尖未过腰",
          "english": "Toes of the kicking leg not above waist level"
        }
      ]
    },
    "横钉腿": {
      "chinese": "横钉腿",
      "pinyin": "Héng Dīng Tuǐ",
      "english": "Horizontal Nail Kick",
      "code": "27",
      "deductions": [
        {
          "chinese": "摆动腿由屈至伸摆动小于45°",
          "english": "The kicking leg does not transit from bent (angle less than 45°) to completely straight"
        },
        {
          "chinese": "未用摆动腿前脚掌向异侧横向钉击",
          "english": "The kicking leg does not travel horizontally across to the opposite side of the body"
        },
        {
          "chinese": "摆动腿脚尖未勾起",
          "english": "The toes of the kicking foot are not flexed inwards"
        }
      ]
    }
  },
  "stances": {
    "提膝独立": {
      "chinese": "提膝（独立）",
      "pinyin": "Tí Xī Dú Lì",
      "english": "Single Knee Raised Position",
      "code": "26",
      "deductions": [
        {
          "chinese": "提膝未过腰",
          "english": "Raised knee not above waist level"
        },
        {
          "chinese": "提起腿小腿未斜垂里扣",
          "english": "Raised shank/calf of the leg is not turning obliquely inwards"
        },
        {
          "chinese": "提起腿脚未崩平内收",
          "english": "Raised foot's toes not pointed and hooking inwards"
        }
      ]
    },
    "弓步": {
      "chinese": "弓步",
      "pinyin": "Gōng Bù",
      "english": "Bow Stance",
      "code": "50",
      "deductions": [
        {
          "chinese": "前腿大腿高于水平45°或低于水平",
          "english": "The thigh of the bending (front) leg is not held at a range from horizontal level to 45° (excluding 45°) above horizontal level"
        },
        {
          "chinese": "后腿脚尖未内扣",
          "english": "The rear foot is not hooked inwards with the toes pointing obliquely forwards"
        },
        {
          "chinese": "后腿脚掌任一部位明显离地",
          "english": "Any portion of the sole of the rear leg obviously off the floor"
        }
      ]
    },
    "马步": {
      "chinese": "马步",
      "pinyin": "Mǎ Bù",
      "english": "Horse Stance",
      "code": "51",
      "deductions": [
        {
          "chinese": "大腿高于水平45°或低于水平",
          "english": "The thigh/s not held at a range from horizontal level to 45° (excluding 45°) above horizontal level"
        },
        {
          "chinese": "两脚内侧间距小于本人肩宽",
          "english": "The distance between the inner portions of the two feet is narrower than performer's shoulder width"
        },
        {
          "chinese": "膝内跪",
          "english": "Knee/s buckling inwards"
        },
        {
          "chinese": "脚跟离地",
          "english": "Heel/s raised off the ground"
        }
      ]
    },
    "虚步": {
      "chinese": "虚步",
      "pinyin": "Xū Bù",
      "english": "Empty Stance",
      "code": "52",
      "deductions": [
        {
          "chinese": "屈蹲腿高于水平45°或低于水平",
          "english": "The thigh of the supporting leg is not held at a range from horizontal level to 45° (excluding 45°) above horizontal level"
        },
        {
          "chinese": "屈蹲腿脚跟离地",
          "english": "The heel of supporting foot is raised off the ground"
        }
      ]
    },
    "仆步": {
      "chinese": "仆步",
      "pinyin": "Pū Bù",
      "english": "Crouching Stance",
      "code": "53",
      "deductions": [
        {
          "chinese": "屈蹲腿未全蹲",
          "english": "The back of the thigh of the squatting leg is not in contact with the calf"
        },
        {
          "chinese": "平铺腿未伸直",
          "english": "The extended leg is not completely straight"
        },
        {
          "chinese": "平铺腿全脚掌未内扣着地",
          "english": "Extended legs foot is not turned inwards with the sole completely flat on the ground"
        }
      ]
    },
    "蝶步": {
      "chinese": "蝶步",
      "pinyin": "Dié Bù",
      "english": "Butterfly Stance",
      "code": "55",
      "deductions": [
        {
          "chinese": "后腿小腿内侧未着地",
          "english": "The inner part of the shank/calf of the splayed leg/s is not fully in contact with the ground"
        },
        {
          "chinese": "后腿脚踝内侧未着地",
          "english": "The inner part of the ankle/heel of the splayed leg/s is not fully in contact with the ground"
        }
      ]
    },
    "跪步": {
      "chinese": "跪步",
      "pinyin": "Guì Bù",
      "english": "Single Kneeling Stance",
      "code": "56",
      "deductions": [
        {
          "chinese": "后腿膝部着地",
          "english": "The knee of the lower kneeling leg touches the ground"
        },
        {
          "chinese": "臀部未坐在后腿小腿上",
          "english": "The buttock does not sit fully on the shank/calf of the lower kneeling leg"
        }
      ]
    },
    "骑龙步": {
      "chinese": "骑龙步",
      "pinyin": "Qí Lóng Bù",
      "english": "Dragon Riding Stance",
      "code": "57",
      "deductions": [
        {
          "chinese": "前腿大腿高于水平45°或低于水平",
          "english": "The thigh of the front leg is not held at a range from horizontal level to 45° (excluding 45°) above horizontal level"
        },
        {
          "chinese": "后腿膝部着地",
          "english": "The knee of the back leg makes contact with the ground"
        }
      ]
    }
  },
  "jumping_techniques": {
    "腾空飞脚": {
      "chinese": "腾空飞脚",
      "pinyin": "Téng Kōng Fēi Jiǎo",
      "english": "Jumping Front Slap Kick",
      "code": "30",
      "deductions": [
        {
          "chinese": "击响腿或摆动腿脚尖未过肩",
          "english": "Toes of the slapped foot or kicked leg not above shoulder level"
        },
        {
          "chinese": "未击响（腾空外摆腿可不击响）",
          "english": "Slap missed and/or inaudible (It is permitted to not slap the kicking foot during Téng Kōng Wài Bǎi Tuǐ)"
        }
      ],
      "non_conformity": [
        {
          "chinese": "助跑超过4步",
          "english": "Exceeding 4 run-up steps"
        },
        {
          "chinese": "未腾空",
          "english": "Not executed in the air"
        },
        {
          "chinese": "击响腿低于水平",
          "english": "Foot slapped lower than horizontal level"
        }
      ]
    },
    "旋风脚": {
      "chinese": "旋风脚",
      "pinyin": "Xuàn Fēng Jiǎo",
      "english": "Tornado Kick",
      "code": "30",
      "deductions": [
        {
          "chinese": "击响腿或摆动腿脚尖未过肩",
          "english": "Toes of the slapped foot or kicked leg not above shoulder level"
        },
        {
          "chinese": "未击响（腾空外摆腿可不击响）",
          "english": "Slap missed and/or inaudible (It is permitted to not slap the kicking foot during Téng Kōng Wài Bǎi Tuǐ)"
        }
      ],
      "non_conformity": [
        {
          "chinese": "助跑超过4步",
          "english": "Exceeding 4 run-up steps"
        },
        {
          "chinese": "未腾空",
          "english": "Not Executed in the air"
        },
        {
          "chinese": "转体度数不足",
          "english": "Insufficient degree of rotation"
        },
        {
          "chinese": "击响（外摆）腿低于水平",
          "english": "Slapped foot (Lotus Kick Leg) lower than horizontal level"
        }
      ]
    },
    "腾空外摆腿": {
      "chinese": "腾空外摆腿",
      "pinyin": "Téng Kōng Wài Bǎi Tuǐ",
      "english": "Jumping Outer Crescent Kick",
      "code": "30",
      "deductions": [
        {
          "chinese": "击响腿或摆动腿脚尖未过肩",
          "english": "Toes of the slapped foot or kicked leg not above shoulder level"
        },
        {
          "chinese": "未击响（腾空外摆腿可不击响）",
          "english": "Slap missed and/or inaudible (It is permitted to not slap the kicking foot during Téng Kōng Wài Bǎi Tuǐ)"
        }
      ],
      "non_conformity": [
        {
          "chinese": "助跑超过4步",
          "english": "Exceeding 4 run-up steps"
        },
        {
          "chinese": "未腾空",
          "english": "Not Executed in the air"
        },
        {
          "chinese": "转体度数不足",
          "english": "Insufficient degree of rotation"
        },
        {
          "chinese": "击响（外摆）腿低于水平",
          "english": "Slapped foot (Lotus Kick Leg) lower than horizontal level"
        }
      ]
    },
    "侧空翻": {
      "chinese": "侧空翻",
      "pinyin": "Cè Kōng Fān",
      "english": "Aerial Cartwheel",
      "code": "32",
      "deductions": [
        {
          "chinese": "空中腿弯曲45°或超过45°",
          "english": "Leg/s bent 45° or more while in the air"
        }
      ],
      "non_conformity": [
        {
          "chinese": "助跑超过2步",
          "english": "Exceeding 2 run-up steps"
        },
        {
          "chinese": "未腾空",
          "english": "Not Executed in the air"
        }
      ]
    },
    "腾空盘腿侧扑": {
      "chinese": "腾空盘腿360°侧扑",
      "pinyin": "Téng Kōng Pán Tuǐ 360° Cè Pū",
      "english": "Flying Cross Legged Kick 360° to landing on Side",
      "code": "40",
      "deductions": [
        {
          "chinese": "摆动腿脚尖未过头",
          "english": "Toes of the kicking leg not above head level"
        }
      ],
      "non_conformity": [
        {
          "chinese": "助跑超过4步",
          "english": "Exceeding 4 run-up steps"
        },
        {
          "chinese": "转体度数不足",
          "english": "Insufficient degree of rotation"
        }
      ]
    },
    "腾空双侧踹": {
      "chinese": "腾空双侧踹",
      "pinyin": "Téng Kōng Shuāng Cè Chuài",
      "english": "Jumping Double Side Kick",
      "code": "42",
      "deductions": [
        {
          "chinese": "踹出腿未并拢伸直",
          "english": "The legs are not held close together when kicked out and/or are obviously bent when kicked out"
        }
      ],
      "non_conformity": [
        {
          "chinese": "助跑超过4步",
          "english": "Exceeding 4 run-up steps"
        },
        {
          "chinese": "踹出腿低于水平",
          "english": "Legs below horizontal level when kicked out"
        }
      ]
    },
    "原地后空翻": {
      "chinese": "原地后空翻",
      "pinyin": "Yuán Dì Hòu Kōng Fān",
      "english": "No-Step Back Flip",
      "code": "32",
      "non_conformity": [
        {
          "chinese": "起跳前脚移动",
          "english": "Foot shuffles prior to jump"
        },
        {
          "chinese": "落地时手撑地",
          "english": "Use of hand for additional support when landing"
        }
      ]
    },
    "单跳后空翻": {
      "chinese": "单跳后空翻",
      "pinyin": "Dān Tiào Hòu Kōng Fān",
      "english": "Single Step Back Flip",
      "code": "32",
      "non_conformity": [
        {
          "chinese": "助跑超过2步",
          "english": "Exceeding 2 run-up steps"
        },
        {
          "chinese": "落地时手撑地",
          "english": "Use of hand for additional support when landing"
        }
      ]
    },
    "鲤鱼打挺": {
      "chinese": "鲤鱼打挺",
      "pinyin": "Lǐ Yú Dǎ Tǐng",
      "english": "Carp Kip-Up",
      "code": "32",
      "non_conformity": [
        {
          "chinese": "手撑扶地面",
          "english": "Hand or hands used on the floor for support or assistance"
        }
      ]
    }
  },
  "weapon_techniques": {
    "缠头": {
      "chinese": "缠头",
      "pinyin": "Chán Tóu",
      "english": "Broadsword Twining",
      "code": "62",
      "deductions": [
        {
          "chinese": "刀背远离身体",
          "english": "The back of the broadsword blade is not kept close to the body when wrapping or twining"
        }
      ]
    },
    "裹脑": {
      "chinese": "裹脑",
      "pinyin": "Guǒ Nǎo",
      "english": "Wrapping with the Broadsword",
      "code": "62",
      "deductions": [
        {
          "chinese": "刀背远离身体",
          "english": "The back of the broadsword blade is not kept close to the body when wrapping or twining"
        }
      ]
    },
    "顶棍": {
      "chinese": "顶棍",
      "pinyin": "Dǐng Gùn",
      "english": "Cudgel Handle Planting",
      "code": "67",
      "deductions": [
        {
          "chinese": "把端未拄地",
          "english": "The end of the cudgel handle is not planted firmly on the ground"
        },
        {
          "chinese": "梢端低于头",
          "english": "The tip of the cudgel is below the athlete's head level"
        }
      ]
    }
  }
};