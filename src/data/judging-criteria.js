// Changquan judging criteria and deductions based on IWUF rules
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
    "掌": {
      "chinese": "掌",
      "pinyin": "Zhǎng",
      "english": "Palm",
      "code": "02",
      "deductions": [
        {
          "chinese": "四指未伸直并拢",
          "english": "Four fingers not straight and held together"
        },
        {
          "chinese": "拇指未弯曲紧扣于虎口处",
          "english": "Thumb is not bent and held in tightly"
        }
      ]
    },
    "勾手": {
      "chinese": "勾手",
      "pinyin": "Gōu Shǒu",
      "english": "Hook",
      "code": "03",
      "deductions": [
        {
          "chinese": "五指未捏拢",
          "english": "The five fingers are not pinched together"
        },
        {
          "chinese": "腕未屈",
          "english": "Wrist not hooked completely"
        }
      ]
    },
    "剑指": {
      "chinese": "剑指",
      "pinyin": "Jiàn Zhǐ",
      "english": "Sword Fingers",
      "code": "04",
      "deductions": [
        {
          "chinese": "食指与中指未伸直并拢",
          "english": "Index finger and middle finger not kept straight and together"
        },
        {
          "chinese": "拇指未压在无名指与小指上",
          "english": "Thumb not pressing on the ring finger and little finger"
        }
      ]
    }
  },
  "balance_techniques": {
    "搬腿朝天直立": {
      "chinese": "搬腿朝天直立",
      "pinyin": "Bān Tuǐ Cháo Tiān Zhí Lì",
      "english": "Grasp the foot and bring it to head level with the leg held vertically while remaining standing",
      "code": "10",
      "deductions": [
        {
          "chinese": "支撑腿弯曲",
          "english": "Supporting Leg Bent"
        },
        {
          "chinese": "上举腿弯曲",
          "english": "Raised Leg Bent"
        }
      ],
      "non_conformity": [
        {
          "chinese": "上举腿未达垂直",
          "english": "Raised leg not completely vertical"
        }
      ]
    },
    "侧踢抱脚直立": {
      "chinese": "侧踢抱脚直立",
      "pinyin": "Cè Tī Bào Jiǎo Zhí Lì",
      "english": "Side kick up to catch the foot at head level with the leg held vertically while remaining standing",
      "code": "10",
      "deductions": [
        {
          "chinese": "支撑腿弯曲",
          "english": "Supporting Leg Bent"
        },
        {
          "chinese": "上举腿弯曲",
          "english": "Raised Leg Bent"
        }
      ],
      "non_conformity": [
        {
          "chinese": "上举腿未达垂直",
          "english": "Raised leg not completely vertical"
        }
      ]
    },
    "仰身平衡": {
      "chinese": "仰身平衡",
      "pinyin": "Yǎng Shēn Píng Héng",
      "english": "Backward Leaning Balance",
      "code": "12",
      "deductions": [
        {
          "chinese": "前举腿低于水平",
          "english": "The raised leg is held below horizontal level"
        }
      ],
      "non_conformity": [
        {
          "chinese": "躯干高于水平45°",
          "english": "Torso held at 45° or more above horizontal level"
        }
      ]
    },
    "十字平衡": {
      "chinese": "十字平衡",
      "pinyin": "Shí Zì Píng Héng",
      "english": "Forward Leaning Balance with Arms Outspread",
      "code": "13",
      "deductions": [
        {
          "chinese": "支撑腿弯曲",
          "english": "Supporting leg bent"
        },
        {
          "chinese": "躯干低于水平",
          "english": "The torso is below horizontal level"
        }
      ],
      "non_conformity": [
        {
          "chinese": "上举腿未达垂直",
          "english": "Raised leg not completely vertical"
        }
      ]
    },
    "扣腿平衡": {
      "chinese": "扣腿平衡",
      "pinyin": "Kòu Tuǐ Píng Héng",
      "english": "Rear Cross-legged Balance",
      "code": "14",
      "deductions": [
        {
          "chinese": "支撑腿大腿未达水平",
          "english": "Thigh of supporting leg is not at horizontal level"
        }
      ]
    },
    "盘腿平衡": {
      "chinese": "盘腿平衡",
      "pinyin": "Pán Tuǐ Píng Héng",
      "english": "Front Cross Legged Balance",
      "code": "14",
      "deductions": [
        {
          "chinese": "支撑腿大腿未达水平",
          "english": "Thigh of supporting leg is not at horizontal level"
        }
      ]
    },
    "侧身平衡": {
      "chinese": "侧身平衡",
      "pinyin": "Cè Shēn Píng Héng",
      "english": "Sideways Leaning Balance",
      "code": "15",
      "deductions": [
        {
          "chinese": "支撑腿弯曲",
          "english": "Supporting leg bent"
        },
        {
          "chinese": "后举腿弯曲",
          "english": "Raised leg bent"
        }
      ]
    },
    "探海平衡": {
      "chinese": "探海平衡",
      "pinyin": "Tàn Hǎi Píng Héng",
      "english": "Exploring the Ocean Balance",
      "code": "15",
      "deductions": [
        {
          "chinese": "支撑腿弯曲",
          "english": "Supporting leg bent"
        },
        {
          "chinese": "后举腿弯曲",
          "english": "Raised leg bent"
        }
      ],
      "non_conformity": [
        {
          "chinese": "两腿夹角不足135°",
          "english": "Angle formed between the two legs is smaller than 135°"
        }
      ]
    },
    "望月平衡": {
      "chinese": "望月平衡",
      "pinyin": "Wàng Yuè Píng Héng",
      "english": "Gazing at the Moon Balance",
      "code": "16",
      "deductions": [
        {
          "chinese": "躯干高于水平45°或超过45°",
          "english": "Torso held 45° or more above horizontal level"
        },
        {
          "chinese": "未向支撑腿侧拧腰后视",
          "english": "Waist not twisted toward the rear in the direction of the supporting leg"
        },
        {
          "chinese": "屈收腿脚背未绷平",
          "english": "Instep of the raised bent leg not extended flat"
        }
      ],
      "non_conformity": [
        {
          "chinese": "后举腿大腿低于水平45°",
          "english": "The rear (raised) leg's thigh is held at 45° or less below horizontal level"
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
    "后扫腿": {
      "chinese": "后扫腿",
      "pinyin": "Hòu Sǎo Tuǐ",
      "english": "Back Sweep",
      "code": "21",
      "deductions": [
        {
          "chinese": "扫转腿脚掌离地",
          "english": "The sole of sweeping foot leaves the ground after making contact for the sweeping action"
        },
        {
          "chinese": "扫转腿弯曲45°或超过45°",
          "english": "Sweeping leg bent 45° or more"
        }
      ]
    },
    "跌竖叉": {
      "chinese": "跌竖叉",
      "pinyin": "Diē Shù Chà",
      "english": "Falling Front Split",
      "code": "22",
      "deductions": [
        {
          "chinese": "前脚内扣触地",
          "english": "The sole of the front foot turns inward and touches the ground"
        },
        {
          "chinese": "两腿未前后形成两条平行直线",
          "english": "Front and rear legs did not form two parallel straight line"
        }
      ]
    },
    "弹腿": {
      "chinese": "弹腿",
      "pinyin": "Tàn Tuǐ",
      "english": "Snap/Spring Kick",
      "code": "23",
      "deductions": [
        {
          "chinese": "弹腿由屈到伸摆动小于45°",
          "english": "The kicking leg does not transit from obvious bent (45° or more) to completely straight"
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
          "chinese": "蹬腿由屈到伸摆动小于45°",
          "english": "The kicking leg does not transit from obvious bent (45° or more) to completely straight"
        }
      ]
    },
    "踹腿": {
      "chinese": "踹腿",
      "pinyin": "Chuài Tuǐ",
      "english": "Side Kick",
      "code": "23",
      "deductions": [
        {
          "chinese": "踹腿由屈到伸摆动小于45°",
          "english": "The kicking leg does not transit from obvious bent (45° or more) to completely straight"
        }
      ]
    },
    "正踢腿": {
      "chinese": "正踢腿",
      "pinyin": "Zhèng Tī Tuǐ",
      "english": "Front Stretch Kick",
      "code": "24",
      "deductions": [
        {
          "chinese": "膝关节弯曲",
          "english": "Knee/s bent at the apex of the kick"
        },
        {
          "chinese": "支撑腿脚跟离地",
          "english": "Heel of supporting leg off the floor"
        }
      ]
    },
    "侧踢腿": {
      "chinese": "侧踢腿",
      "pinyin": "Cè Tī Tuǐ",
      "english": "Side Stretch Kick",
      "code": "24",
      "deductions": [
        {
          "chinese": "膝关节弯曲",
          "english": "Knee/s bent at the apex of the kick"
        },
        {
          "chinese": "支撑腿脚跟离地",
          "english": "Heel of supporting leg off the floor"
        }
      ]
    },
    "里合拍脚": {
      "chinese": "里合拍脚",
      "pinyin": "Lǐ Hé Pāi Jiǎo",
      "english": "Inward Slap Kick",
      "code": "25",
      "deductions": [
        {
          "chinese": "击响腿脚尖未过肩",
          "english": "Toes of slapped foot not above shoulder height"
        },
        {
          "chinese": "未击响",
          "english": "Slap missed and/or inaudible"
        }
      ]
    },
    "摆莲拍脚": {
      "chinese": "摆莲拍脚",
      "pinyin": "Bǎi Lián Pāi Jiǎo",
      "english": "Lotus Slap Kick",
      "code": "25",
      "deductions": [
        {
          "chinese": "击响腿脚尖未过肩",
          "english": "Toes of slapped foot not above shoulder height"
        },
        {
          "chinese": "未击响",
          "english": "Slap missed and/or inaudible"
        }
      ]
    },
    "单拍脚": {
      "chinese": "单拍脚",
      "pinyin": "Dān Pāi Jiǎo",
      "english": "Front Slap Kick",
      "code": "25",
      "deductions": [
        {
          "chinese": "击响腿脚尖未过肩",
          "english": "Toes of slapped foot not above shoulder height"
        },
        {
          "chinese": "未击响",
          "english": "Slap missed and/or inaudible"
        }
      ]
    },
    "提膝独立": {
      "chinese": "提膝独立",
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
          "chinese": "击响腿脚尖未过肩",
          "english": "Toes of slapped foot not above shoulder level"
        },
        {
          "chinese": "未击响",
          "english": "Slap missed and/or inaudible"
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
    "腾空斜飞脚": {
      "chinese": "腾空斜飞脚",
      "pinyin": "Téng Kōng Xié Fēi Jiǎo",
      "english": "Jumping Slant Kick",
      "code": "30",
      "deductions": [
        {
          "chinese": "击响腿脚尖未过肩",
          "english": "Toes of slapped foot not above shoulder level"
        },
        {
          "chinese": "未击响",
          "english": "Slap missed and/or inaudible"
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
    "腾空双飞脚": {
      "chinese": "腾空双飞脚",
      "pinyin": "Téng Kōng Shuāng Fēi Jiǎo",
      "english": "Jumping Double Front Slap Kick",
      "code": "30",
      "deductions": [
        {
          "chinese": "击响腿脚尖未过肩",
          "english": "Toes of slapped foot not above shoulder level"
        },
        {
          "chinese": "未击响",
          "english": "Slap missed and/or inaudible"
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
          "chinese": "击响腿脚尖未过肩",
          "english": "Toes of slapped foot not above shoulder level"
        },
        {
          "chinese": "未击响",
          "english": "Slap missed and/or inaudible"
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
          "chinese": "转体度数不足",
          "english": "Insufficient degree of rotation"
        },
        {
          "chinese": "击响腿低于水平",
          "english": "Foot slapped lower than horizontal level"
        }
      ]
    },
    "腾空摆莲": {
      "chinese": "腾空摆莲",
      "pinyin": "Téng Kōng Bǎi Lián",
      "english": "Jumping Lotus Kick",
      "code": "30",
      "deductions": [
        {
          "chinese": "击响腿脚尖未过肩",
          "english": "Toes of slapped foot not above shoulder level"
        },
        {
          "chinese": "未击响",
          "english": "Slap missed and/or inaudible"
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
          "chinese": "转体度数不足",
          "english": "Insufficient degree of rotation"
        },
        {
          "chinese": "击响腿低于水平",
          "english": "Foot slapped lower than horizontal level"
        }
      ]
    },
    "腾空正踢腿": {
      "chinese": "腾空正踢腿",
      "pinyin": "Téng Kōng Zhèng Tī Tuǐ",
      "english": "Jumping Front Straight Kick",
      "code": "31",
      "deductions": [
        {
          "chinese": "踢腿脚触及或超过前额瞬间悬垂腿弯曲",
          "english": "The hanging leg is bent at the moment the toes of the kicking leg touches the forehead or above the forehead"
        },
        {
          "chinese": "踢腿脚触及或超过前额瞬间躯干与悬垂腿夹角小于135°",
          "english": "The angle between the torso and the hanging leg is less than 135° the moment the toes of the kicking leg touches the forehead or above the forehead"
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
          "chinese": "上踢腿脚尖未触及或未超过前额",
          "english": "The toes of the kicking leg do not touch or did not exceed the forehead"
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
          "chinese": "助跑超过4步",
          "english": "Exceeding 4 run-up steps"
        },
        {
          "chinese": "未腾空",
          "english": "Not executed in the air"
        }
      ]
    },
    "侧空翻转体": {
      "chinese": "侧空翻转体",
      "pinyin": "Cè Kōng Fān Zhuǎn Tǐ",
      "english": "Aerial Cartwheel Twist",
      "code": "32",
      "deductions": [
        {
          "chinese": "空中腿弯曲45°或超过45°",
          "english": "Leg/s bent 45° or more while in the air"
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
          "chinese": "转体度数不足",
          "english": "Insufficient degree of rotation"
        }
      ]
    },
    "旋子": {
      "chinese": "旋子",
      "pinyin": "Xuàn Zǐ",
      "english": "Butterfly Kick",
      "code": "33",
      "deductions": [
        {
          "chinese": "空中腿弯曲45°或超过45°",
          "english": "Leg/s obviously bent 45° or more while in the air"
        },
        {
          "chinese": "转体时躯干高于水平45°或超过45°",
          "english": "Angle of the torso is 45° or more above horizontal level during the twist"
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
        }
      ]
    },
    "旋子转体": {
      "chinese": "旋子转体",
      "pinyin": "Xuàn Zǐ Zhuǎn Tǐ",
      "english": "Butterfly Twist",
      "code": "33",
      "deductions": [
        {
          "chinese": "空中腿弯曲45°或超过45°",
          "english": "Leg/s obviously bent 45° or more while in the air"
        },
        {
          "chinese": "转体时躯干高于水平45°或超过45°",
          "english": "Angle of the torso is 45° or more above horizontal level during the twist"
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
          "chinese": "转体度数不足",
          "english": "Insufficient degree of rotation"
        }
      ]
    },
    "腾空箭弹": {
      "chinese": "腾空箭弹",
      "pinyin": "Téng Kōng Jiàn Tàn",
      "english": "Jumping Snap/Spring Kick",
      "code": "34",
      "deductions": [
        {
          "chinese": "弹腿由屈到伸摆动小于45°",
          "english": "Snap/Spring leg does not transit from an obvious bent (45° or more) to completely straight"
        },
        {
          "chinese": "弹出腿低于水平",
          "english": "Snap/Spring leg below horizontal level"
        }
      ]
    },
    "腾空蹬腿": {
      "chinese": "腾空蹬腿",
      "pinyin": "Téng Kōng Dēng Tuǐ",
      "english": "Jumping Heel Push Kick",
      "code": "34",
      "deductions": [
        {
          "chinese": "蹬腿由屈到伸摆动小于45°",
          "english": "Pushing leg does not transit from an obvious bent (45° or more) to completely straight"
        },
        {
          "chinese": "蹬出腿低于水平",
          "english": "Pushing leg below horizontal level"
        }
      ]
    }
  },
  "stances": {
    "弓步": {
      "chinese": "弓步",
      "pinyin": "Gōng Bù",
      "english": "Bow Stance",
      "code": "50",
      "deductions": [
        {
          "chinese": "前腿膝部未达脚背",
          "english": "The knee of the front leg is not above the instep"
        },
        {
          "chinese": "前腿大腿未达水平",
          "english": "The thigh of the bending (front) leg is not parallel to the ground"
        },
        {
          "chinese": "后腿脚掌任一部位明显离地",
          "english": "Any portion of the sole of the rear leg obviously off the floor"
        },
        {
          "chinese": "后腿脚尖未内扣",
          "english": "The rear foot is not hooked inwards with the toes pointing obliquely forwards"
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
          "chinese": "大腿未达水平",
          "english": "Thighs not horizontal"
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
          "english": "The heel/s raised off the ground"
        },
        {
          "chinese": "脚尖外展45°或超过45°",
          "english": "Toes of foot/feet pointing outward 45° or more"
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
          "chinese": "屈蹲腿大腿未达水平",
          "english": "Thigh of squatting leg is not parallel to the ground"
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
          "english": "Extended leg's foot is not turned inwards with the sole completely flat on the ground"
        }
      ]
    },
    "歇步": {
      "chinese": "歇步",
      "pinyin": "Xiē Bù",
      "english": "Cross-Legged Crouching Stance",
      "code": "54",
      "deductions": [
        {
          "chinese": "两腿未交叉靠拢",
          "english": "The two thighs are not crossed and closed together"
        },
        {
          "chinese": "臀部未贴坐小腿",
          "english": "The buttocks are not in contact with the calf of the sitting leg"
        }
      ]
    },
    "坐盘": {
      "chinese": "坐盘",
      "pinyin": "Zuò Pán",
      "english": "Cross-Legged Sitting",
      "code": "58",
      "deductions": [
        {
          "chinese": "臀部未贴坐地面",
          "english": "Neither one of the buttocks are in contact with the floor"
        },
        {
          "chinese": "脚离地",
          "english": "Either one of the feet is not in contact with the floor"
        }
      ]
    }
  },
  "weapon_techniques": {
    "挂剑": {
      "chinese": "挂剑",
      "pinyin": "Guà Jiàn",
      "english": "Straight sword Hooking Parry",
      "code": "60",
      "deductions": [
        {
          "chinese": "直腕",
          "english": "Straight sword and forearm/wrist are aligned"
        },
        {
          "chinese": "未明显呈立圆",
          "english": "No obvious vertical circle formed"
        }
      ]
    },
    "撩剑": {
      "chinese": "撩剑",
      "pinyin": "Liāo Jiàn",
      "english": "Straight sword Uppercut",
      "code": "60",
      "deductions": [
        {
          "chinese": "直腕",
          "english": "Straight sword and forearm/wrist are aligned"
        },
        {
          "chinese": "未明显呈立圆",
          "english": "No obvious vertical circle formed"
        }
      ]
    },
    "握剑": {
      "chinese": "握剑",
      "pinyin": "Wò Jiàn",
      "english": "Gripping the Straight sword",
      "code": "61",
      "deductions": [
        {
          "chinese": "手指触及剑刃",
          "english": "Any finger wraps around the top of the hand guard and touches the edge of the blade"
        }
      ]
    },
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
    "拦枪": {
      "chinese": "拦枪",
      "pinyin": "Lán Qiāng",
      "english": "Outward Blocking",
      "code": "63",
      "deductions": [
        {
          "chinese": "拦枪枪尖未明显划弧",
          "english": "Spear head not travelling in a clearly defined arc"
        },
        {
          "chinese": "后手留把",
          "english": "Rear handle of spear end protruding from grip (extending past rear grip)"
        },
        {
          "chinese": "平扎枪臂与枪身未成水平直线",
          "english": "The thrusting arm and the spear shaft do not form a straight line horizontally"
        }
      ]
    },
    "拿枪": {
      "chinese": "拿枪",
      "pinyin": "Ná Qiāng",
      "english": "Inward Blocking with the Spear",
      "code": "63",
      "deductions": [
        {
          "chinese": "拿枪枪尖未明显划弧",
          "english": "Spear head not travelling in a clearly defined arc"
        },
        {
          "chinese": "后手留把",
          "english": "Rear handle of spear end protruding from grip (extending past rear grip)"
        },
        {
          "chinese": "平扎枪臂与枪身未成水平直线",
          "english": "The thrusting arm and the spear shaft do not form a straight line horizontally"
        }
      ]
    },
    "扎枪": {
      "chinese": "扎枪",
      "pinyin": "Zhā Qiāng",
      "english": "Spear Thrust",
      "code": "63",
      "deductions": [
        {
          "chinese": "后手留把",
          "english": "Rear handle of spear end protruding from grip (extending past rear grip)"
        },
        {
          "chinese": "平扎枪臂与枪身未成水平直线",
          "english": "The thrusting arm and the spear shaft do not form a straight line horizontally"
        }
      ]
    },
    "平抡棍": {
      "chinese": "平抡棍",
      "pinyin": "Píng Lūn Gùn",
      "english": "Horizontal Cudgel Windmill Waving with one hand",
      "code": "64",
      "deductions": [
        {
          "chinese": "未明显呈平圆",
          "english": "No obvious horizontal circle formed"
        }
      ]
    },
    "立舞花枪": {
      "chinese": "立舞花枪",
      "pinyin": "Lì Wǔ Huā Qiāng",
      "english": "Vertical Figure '8' with the Spear",
      "code": "65",
      "deductions": [
        {
          "chinese": "未明显呈立圆",
          "english": "The spear does not rotate in an obvious vertical plane"
        }
      ]
    },
    "立舞花棍": {
      "chinese": "立舞花棍",
      "pinyin": "Lì Wǔ Huā Gùn",
      "english": "Vertical Figure '8' with the Cudgel",
      "code": "65",
      "deductions": [
        {
          "chinese": "未明显呈立圆",
          "english": "The cudgel does not rotate in an obvious vertical plane"
        }
      ]
    },
    "双手提撩花棍": {
      "chinese": "双手提撩花棍",
      "pinyin": "Shuāng Shǒu Tí Liāo Huā Gùn",
      "english": "Vertical Uppercutting Cudgel with Both Hands",
      "code": "65",
      "deductions": [
        {
          "chinese": "未明显呈立圆",
          "english": "The cudgel does not rotate in an obvious vertical plane"
        }
      ]
    },
    "器械抛接": {
      "chinese": "器械抛接",
      "pinyin": "Qì Xiè Pāo Jiē",
      "english": "Weapon Throwing & Catching Techniques",
      "code": "66",
      "deductions": [
        {
          "chinese": "抱接器械",
          "english": "Weapon caught in a hugging manner"
        },
        {
          "chinese": "未单手接握剑柄、刀柄、枪身、棍身",
          "english": "Failure to catch the straight sword/broadsword by the handle; the cudgel/spear shaft with a single hand"
        }
      ]
    }
  },
  "combo_criteria": {
    "COMBO_PAO_QIANG_JIE": {
      "chinese": "抛+抢背+接",
      "pinyin": "Pāo + Qiǎng Bèi + Jiē",
      "english": "Toss + Forward Dive Roll + Catch",
      "code": "套嵌",
      "non_conformity": [
        {
          "chinese": "抢背后，手、臀、膝未离地",
          "english": "When performing Forward Dive Roll, the hip/buttock, knee or single hand is not off the ground when catching the weapon"
        },
        {
          "chinese": "未接握住器械或接抓刀彩、剑穗",
          "english": "The catch is unsuccessful, or the weapon is caught by the broadsword ribbon/straight sword tassel"
        }
      ]
    },
    "COMBO_PAO_TENG_JIE": {
      "chinese": "抛+腾空飞脚+接",
      "pinyin": "Pāo + Téng Kōng Fēi Jiǎo + Jiē", 
      "english": "Toss + Jumping Front Slap Kick + Catch",
      "code": "套嵌",
      "non_conformity": [
        {
          "chinese": "抢背后，手、臀、膝未离地",
          "english": "When performing Forward Dive Roll, the hip/buttock, knee or single hand is not off the ground when catching the weapon"
        },
        {
          "chinese": "未接握住器械或接抓刀彩、剑穗",
          "english": "The catch is unsuccessful, or the weapon is caught by the broadsword ribbon/straight sword tassel"
        }
      ]
    },
    "COMBO_PAO_XUAN_JIE": {
      "chinese": "抛+旋风脚360°+接",
      "pinyin": "Pāo + Xuàn Fēng Jiǎo 360° + Jiē",
      "english": "Toss + Tornado Kick 360° + Catch", 
      "code": "套嵌",
      "non_conformity": [
        {
          "chinese": "抢背后，手、臀、膝未离地",
          "english": "When performing Forward Dive Roll, the hip/buttock, knee or single hand is not off the ground when catching the weapon"
        },
        {
          "chinese": "未接握住器械或接抓刀彩、剑穗",
          "english": "The catch is unsuccessful, or the weapon is caught by the broadsword ribbon/straight sword tassel"
        }
      ]
    },
    "COMBO_PAO_LIAN_JIE": {
      "chinese": "抛+腾空摆莲360°+接",
      "pinyin": "Pāo + Téng Kōng Bǎi Lián 360° + Jiē",
      "english": "Toss + Jumping Lotus Kick 360° + Catch",
      "code": "套嵌", 
      "non_conformity": [
        {
          "chinese": "抢背后，手、臀、膝未离地",
          "english": "When performing Forward Dive Roll, the hip/buttock, knee or single hand is not off the ground when catching the weapon"
        },
        {
          "chinese": "未接握住器械或接抓刀彩、剑穗",
          "english": "The catch is unsuccessful, or the weapon is caught by the broadsword ribbon/straight sword tassel"
        }
      ]
    },
    "COMBO_DD_FEIJIAO_BAILIANCOMBO": {
      "chinese": "腾空飞脚+腾空摆莲540°/630°/720°",
      "pinyin": "Téng Kōng Fēi Jiǎo + Téng Kōng Bǎi Lián",
      "english": "Jumping Front Slap Kick + Jumping Lotus Kick 540°/630°/720°",
      "code": "动动连接",
      "non_conformity": [
        {
          "chinese": "跳跃动作之间出现助跑",
          "english": "Occurrence of run-up step in between the 2 jumping techniques"
        }
      ]
    },
    "COMBO_DD_XUANFENG_BAILIAN": {
      "chinese": "旋风脚360°+腾空摆莲360°/540°",
      "pinyin": "Xuàn Fēng Jiǎo 360° + Téng Kōng Bǎi Lián",
      "english": "Tornado Kick 360° + Jumping Lotus Kick 360°/540°",
      "code": "动动连接",
      "non_conformity": [
        {
          "chinese": "跳跃动作之间出现助跑",
          "english": "Occurrence of run-up step in between the 2 jumping techniques"
        }
      ]
    },
    "COMBO_DD_XUANFENG540_BAILIAN": {
      "chinese": "旋风脚540°+腾空摆莲540°/630°/720°",
      "pinyin": "Xuàn Fēng Jiǎo 540° + Téng Kōng Bǎi Lián",
      "english": "Tornado Kick 540° + Jumping Lotus Kick 540°/630°/720°",
      "code": "动动连接",
      "non_conformity": [
        {
          "chinese": "跳跃动作之间出现助跑",
          "english": "Occurrence of run-up step in between the 2 jumping techniques"
        }
      ]
    },
    "COMBO_DD_FEIJIAO_CEKONGFAN": {
      "chinese": "腾空飞脚+侧空翻",
      "pinyin": "Téng Kōng Fēi Jiǎo + Cè Kōng Fān",
      "english": "Jumping Front Slap Kick + Aerial Cartwheel",
      "code": "动动连接",
      "non_conformity": [
        {
          "chinese": "跳跃动作之间的助跑步数超过1步",
          "english": "Exceeding 1 run-up step between the 2 jumping techniques"
        }
      ]
    },
    "COMBO_DD_XUANZI_XUANZIZHUANTI": {
      "chinese": "旋子+旋子转体",
      "pinyin": "Xuànzi + Xuàn Zǐ Zhuǎn Tǐ",
      "english": "Butterfly Kick + Butterfly Twist 360°",
      "code": "动动连接",
      "non_conformity": [
        {
          "chinese": "跳跃动作之间的助跑步数超过1步",
          "english": "Exceeding 1 run-up step between the 2 jumping techniques"
        }
      ]
    },
    "COMBO_DD_FEIJIAO_XUANFENG_2STEP": {
      "chinese": "腾空飞脚+旋风脚",
      "pinyin": "Téng Kōng Fēi Jiǎo + Xuàn Fēng Jiǎo",
      "english": "Jumping Front Slap Kick + Tornado Kick 360°/540°",
      "code": "动动连接",
      "non_conformity": [
        {
          "chinese": "跳跃动作之间的助跑步数超过2步",
          "english": "Exceeding 2 run-up step between the 2 jumping techniques"
        }
      ]
    },
    "COMBO_DD_FEIJIAO_BAILIANG360": {
      "chinese": "腾空飞脚+腾空摆莲360°",
      "pinyin": "Téng Kōng Fēi Jiǎo + Téng Kōng Bǎi Lián",
      "english": "Jumping Front Slap Kick + Jumping Lotus Kick 360°",
      "code": "动动连接",
      "non_conformity": [
        {
          "chinese": "跳跃动作之间的助跑步数超过2步",
          "english": "Exceeding 2 run-up step between the 2 jumping techniques"
        }
      ]
    },
    "COMBO_DD_FEIJIAO_XUANFENG_4STEP": {
      "chinese": "腾空飞脚+旋风脚630°/720°",
      "pinyin": "Téng Kōng Fēi Jiǎo + Xuàn Fēng Jiǎo",
      "english": "Jumping Front Slap Kick + Tornado Kick 630°/720°",
      "code": "动动连接",
      "non_conformity": [
        {
          "chinese": "跳跃动作之间的助跑步数超过4步",
          "english": "Exceeding 4 run-up step between the 2 jumping techniques"
        }
      ]
    },
    "COMBO_DD_FEIJIAO_XUANZIZHUANTI": {
      "chinese": "腾空飞脚+旋子转体360°/720°",
      "pinyin": "Téng Kōng Fēi Jiǎo + Xuàn Zǐ Zhuǎn Tǐ",
      "english": "Jumping Front Slap Kick + Butterfly Twist 360°/720°",
      "code": "动动连接",
      "non_conformity": [
        {
          "chinese": "跳跃动作之间的助跑步数超过4步",
          "english": "Exceeding 4 run-up step between the 2 jumping techniques"
        }
      ]
    },
    "COMBO_DD_XUANFENG_XUANZIZHUANTI": {
      "chinese": "旋风脚360°+旋子转体360°/720°",
      "pinyin": "Xuàn Fēng Jiǎo + Xuàn Zǐ Zhuǎn Tǐ",
      "english": "Tornado Kick 360° + Butterfly Twist 360°/720°",
      "code": "动动连接",
      "non_conformity": [
        {
          "chinese": "跳跃动作之间的助跑步数超过4步",
          "english": "Exceeding 4 run-up step between the 2 jumping techniques"
        }
      ]
    },
    "COMBO_DD_XUANZI_XUANZIZHUANTI720": {
      "chinese": "旋子+旋子转体720°",
      "pinyin": "Xuànzi + Xuàn Zǐ Zhuǎn Tǐ",
      "english": "Butterfly Kick + Butterfly Twist 720°",
      "code": "动动连接",
      "non_conformity": [
        {
          "chinese": "跳跃动作之间的助跑步数超过4步",
          "english": "Exceeding 4 run-up step between the 2 jumping techniques"
        }
      ]
    },
    "COMBO_DD_XUANZIZHUANTI_XUANFENG": {
      "chinese": "旋子转体360°+旋风脚540°/630°/720°",
      "pinyin": "Xuàn Zǐ Zhuǎn Tǐ + Xuàn Fēng Jiǎo",
      "english": "Butterfly Twist 360° + Tornado Kick 540°/630°/720°",
      "code": "动动连接",
      "non_conformity": [
        {
          "chinese": "跳跃动作之间的助跑步数超过4步",
          "english": "Exceeding 4 run-up step between the 2 jumping techniques"
        }
      ]
    },
    "COMBO_DD_CEKONGFAN_XUANFENG": {
      "chinese": "侧空翻+旋风脚540°/630°/720°",
      "pinyin": "Cè Kōng Fān + Xuàn Fēng Jiǎo",
      "english": "Aerial Cartwheel + Tornado Kick 540°/630°/720°",
      "code": "动动连接",
      "non_conformity": [
        {
          "chinese": "跳跃动作之间的助跑步数超过4步",
          "english": "Exceeding 4 run-up step between the 2 jumping techniques"
        }
      ]
    },
    "COMBO_DD_CEKONGFAN_XUANZIZHUANTI": {
      "chinese": "侧空翻+旋子转体360°/720°",
      "pinyin": "Cè Kōng Fān + Xuàn Zǐ Zhuǎn Tǐ",
      "english": "Aerial Cartwheel + Butterfly Twist 360°/720°",
      "code": "动动连接",
      "non_conformity": [
        {
          "chinese": "跳跃动作之间的助跑步数超过4步",
          "english": "Exceeding 4 run-up step between the 2 jumping techniques"
        }
      ]
    },
    "COMBO_DD_XUANZI_QIANSAOTUI": {
      "chinese": "旋子+前扫腿540°",
      "pinyin": "Xuànzi + Qián Sǎo Tuǐ",
      "english": "Butterfly Kick + Front Sweep 540°",
      "code": "动动连接",
      "non_conformity": [
        {
          "chinese": "动作之间明显停顿",
          "english": "Obvious pause between the 2 techniques"
        }
      ]
    },
    "COMBO_DS_XUANFENG_MABU": {
      "chinese": "旋风脚360°/540°/630°/720°+马步",
      "pinyin": "Xuàn Fēng Jiǎo + Mǎ Bù",
      "english": "Tornado Kick 360°/540°/630°/720° + Horse Stance",
      "code": "动静连接",
      "non_conformity": [
        {
          "chinese": "两脚依次落地",
          "english": "The feet land alternately (not simultaneously)"
        },
        {
          "chinese": "脚移动、跳动",
          "english": "Foot shuffles or skips"
        },
        {
          "chinese": "附加支撑",
          "english": "Use of additional support"
        },
        {
          "chinese": "倒地",
          "english": "Fall"
        }
      ]
    },
    "COMBO_DS_BAILIANCOMBO_MABU": {
      "chinese": "腾空摆莲360°/540°/630°/720°+马步",
      "pinyin": "Téng Kōng Bǎi Lián + Mǎ Bù",
      "english": "Jumping Lotus Kick 360°/540°/630°/720° + Horse Stance",
      "code": "动静连接",
      "non_conformity": [
        {
          "chinese": "两脚依次落地",
          "english": "The feet land alternately (not simultaneously)"
        },
        {
          "chinese": "脚移动、跳动",
          "english": "Foot shuffles or skips"
        },
        {
          "chinese": "附加支撑",
          "english": "Use of additional support"
        },
        {
          "chinese": "倒地",
          "english": "Fall"
        }
      ]
    },
    "COMBO_DS_BAILIANG360_GONGBU": {
      "chinese": "腾空摆莲360°+弓步",
      "pinyin": "Téng Kōng Bǎi Lián + Gōng Bù",
      "english": "Jumping Lotus Kick 360° + Bow Stance",
      "code": "动静连接",
      "non_conformity": [
        {
          "chinese": "两脚依次落地",
          "english": "The feet land alternately (not simultaneously)"
        },
        {
          "chinese": "脚移动、跳动",
          "english": "Foot shuffles or skips"
        },
        {
          "chinese": "附加支撑",
          "english": "Use of additional support"
        },
        {
          "chinese": "倒地",
          "english": "Fall"
        }
      ]
    },
    "COMBO_DS_BAILIANG540_PUBU": {
      "chinese": "腾空摆莲540°+仆步",
      "pinyin": "Téng Kōng Bǎi Lián + Pū Bù",
      "english": "Jumping Lotus Kick 540° + Crouching Stance",
      "code": "动静连接",
      "non_conformity": [
        {
          "chinese": "两脚依次落地",
          "english": "The feet land alternately (not simultaneously)"
        },
        {
          "chinese": "脚移动、跳动",
          "english": "Foot shuffles or skips"
        },
        {
          "chinese": "附加支撑",
          "english": "Use of additional support"
        },
        {
          "chinese": "倒地",
          "english": "Fall"
        }
      ]
    },
    "COMBO_DS_XUANFENG_DIESHUCHA": {
      "chinese": "旋风脚360°/540°/630°/720°+跌竖叉",
      "pinyin": "Xuàn Fēng Jiǎo + Diē Shù Chà",
      "english": "Tornado Kick 360°/540°/630°/720° + Falling Front Split",
      "code": "动静连接",
      "non_conformity": [
        {
          "chinese": "两脚依次落地",
          "english": "The feet land alternately (not simultaneously)"
        },
        {
          "chinese": "滑叉",
          "english": "Sliding into the splits"
        },
        {
          "chinese": "附加支撑",
          "english": "Use of additional support"
        },
        {
          "chinese": "倒地",
          "english": "Fall"
        }
      ]
    },
    "COMBO_DS_BAILIANG360_DIESHUCHA": {
      "chinese": "腾空摆莲360°+跌竖叉",
      "pinyin": "Téng Kōng Bǎi Lián + Diē Shù Chà",
      "english": "Jumping Lotus Kick 360° + Falling Front Split",
      "code": "动静连接",
      "non_conformity": [
        {
          "chinese": "两脚依次落地",
          "english": "The feet land alternately (not simultaneously)"
        },
        {
          "chinese": "滑叉",
          "english": "Sliding into the splits"
        },
        {
          "chinese": "附加支撑",
          "english": "Use of additional support"
        },
        {
          "chinese": "倒地",
          "english": "Fall"
        }
      ]
    },
    "COMBO_DS_XUANZIZHUANTI_DIESHUCHA": {
      "chinese": "旋子转体360°/720°+跌竖叉",
      "pinyin": "Xuàn Zǐ Zhuǎn Tǐ + Diē Shù Chà",
      "english": "Butterfly Twist 360°/720° + Falling Front Split",
      "code": "动静连接",
      "non_conformity": [
        {
          "chinese": "两脚依次落地",
          "english": "The feet land alternately (not simultaneously)"
        },
        {
          "chinese": "滑叉",
          "english": "Sliding into the splits"
        },
        {
          "chinese": "附加支撑",
          "english": "Use of additional support"
        },
        {
          "chinese": "倒地",
          "english": "Fall"
        }
      ]
    },
    "COMBO_DS_CEKONGFAN_DIESHUCHA": {
      "chinese": "侧空翻+跌竖叉",
      "pinyin": "Cè Kōng Fān + Diē Shù Chà",
      "english": "Aerial Cartwheel + Falling Front Split",
      "code": "动静连接",
      "non_conformity": [
        {
          "chinese": "两脚依次落地",
          "english": "The feet land alternately (not simultaneously)"
        },
        {
          "chinese": "滑叉",
          "english": "Sliding into the splits"
        },
        {
          "chinese": "附加支撑",
          "english": "Use of additional support"
        },
        {
          "chinese": "倒地",
          "english": "Fall"
        }
      ]
    },
    "COMBO_DS_XUANFENG_TIXIDULI": {
      "chinese": "旋风脚360°/540°+提膝独立",
      "pinyin": "Xuàn Fēng Jiǎo + Tí Xī Dú Lì",
      "english": "Tornado Kick 360°/540° + Single Raised-Knee Stance",
      "code": "动静连接",
      "non_conformity": [
        {
          "chinese": "击响脚未单脚落地",
          "english": "The kicking and slapped foot is not the same leg which is singerly landed on"
        },
        {
          "chinese": "落地时脚移动或跳动",
          "english": "When landing the foot shuffles or skips"
        },
        {
          "chinese": "提膝腿脚触地",
          "english": "The foot of the raised knee touches the ground"
        }
      ]
    },
    "COMBO_DS_BAILIANG_TIXIDULI": {
      "chinese": "腾空摆莲360°/540°+提膝独立",
      "pinyin": "Téng Kōng Bǎi Lián + Tí Xī Dú Lì",
      "english": "Jumping Lotus Kick 360°/540° + Single Raised-Knee Stance",
      "code": "动静连接",
      "non_conformity": [
        {
          "chinese": "击响脚未单脚落地",
          "english": "The kicking and slapped foot is not the same leg which is singerly landed on"
        },
        {
          "chinese": "落地时脚移动或跳动",
          "english": "When landing the foot shuffles or skips"
        },
        {
          "chinese": "提膝腿脚触地",
          "english": "The foot of the raised knee touches the ground"
        }
      ]
    },
    "COMBO_DS_FEIJIAO_ZUOPAN": {
      "chinese": "腾空飞脚+坐盘",
      "pinyin": "Téng Kōng Fēi Jiǎo + Zuò Pán",
      "english": "Jumping Front Slap Kick + Cross-Legged Sitting",
      "code": "动静连接",
      "non_conformity": [
        {
          "chinese": "动作之间明显停顿",
          "english": "Obvious pause between the 2 techniques"
        },
        {
          "chinese": "两大腿未交叉",
          "english": "The thighs are not crossed clearly"
        },
        {
          "chinese": "附加支撑",
          "english": "Use of additional support"
        },
        {
          "chinese": "倒地",
          "english": "Fall"
        }
      ]
    },
    "COMBO_DS_XUANFENG_ZUOPAN": {
      "chinese": "旋风脚360°/540°/630°/720°+坐盘",
      "pinyin": "Xuàn Fēng Jiǎo + Zuò Pán",
      "english": "Tornado Kick 360°/540°/630°/720° + Cross-Legged Sitting",
      "code": "动静连接",
      "non_conformity": [
        {
          "chinese": "动作之间明显停顿",
          "english": "Obvious pause between the 2 techniques"
        },
        {
          "chinese": "两大腿未交叉",
          "english": "The thighs are not crossed clearly"
        },
        {
          "chinese": "附加支撑",
          "english": "Use of additional support"
        },
        {
          "chinese": "倒地",
          "english": "Fall"
        }
      ]
    },
    "COMBO_DS_BAILIANG_ZUOPAN": {
      "chinese": "腾空摆莲360°/540°/630°/720°+坐盘",
      "pinyin": "Téng Kōng Bǎi Lián + Zuò Pán",
      "english": "Jumping Lotus Kick 360°/540°/630°/720° + Cross-Legged Sitting",
      "code": "动静连接",
      "non_conformity": [
        {
          "chinese": "动作之间明显停顿",
          "english": "Obvious pause between the 2 techniques"
        },
        {
          "chinese": "两大腿未交叉",
          "english": "The thighs are not crossed clearly"
        },
        {
          "chinese": "附加支撑",
          "english": "Use of additional support"
        },
        {
          "chinese": "倒地",
          "english": "Fall"
        }
      ]
    },
    "COMBO_DS_XUANZI_ZUOPAN": {
      "chinese": "旋子+坐盘",
      "pinyin": "Xuànzi + Zuò Pán",
      "english": "Butterfly Kick + Cross-Legged Sitting",
      "code": "动静连接",
      "non_conformity": [
        {
          "chinese": "动作之间明显停顿",
          "english": "Obvious pause between the 2 techniques"
        },
        {
          "chinese": "两大腿未交叉",
          "english": "The thighs are not crossed clearly"
        },
        {
          "chinese": "附加支撑",
          "english": "Use of additional support"
        },
        {
          "chinese": "倒地",
          "english": "Fall"
        }
      ]
    },
    "COMBO_DS_QIANSAOTUI_ZUOPAN": {
      "chinese": "前扫腿540°+坐盘",
      "pinyin": "Qián Sǎo Tuǐ + Zuò Pán",
      "english": "Front Sweep 540° + Cross-Legged Sitting",
      "code": "动静连接",
      "non_conformity": [
        {
          "chinese": "动作之间明显停顿",
          "english": "Obvious pause between the 2 techniques"
        },
        {
          "chinese": "两大腿未交叉",
          "english": "The thighs are not crossed clearly"
        },
        {
          "chinese": "附加支撑",
          "english": "Use of additional support"
        },
        {
          "chinese": "倒地",
          "english": "Fall"
        }
      ]
    }
  },
  "connection_criteria": {
    "dynamic_dynamic": {
      "description": "Connections between two jumping techniques",
      "deductions": [
        {
          "chinese": "跳跃动作之间出现助跑",
          "english": "Occurrence of run-up step in between the 2 jumping techniques"
        },
        {
          "chinese": "跳跃动作之间的助跑步数超过规定步数",
          "english": "Exceeding allowed run-up steps between the 2 jumping techniques"
        }
      ]
    },
    "dynamic_static": {
      "description": "Connections from jumping technique to static position",
      "deductions": [
        {
          "chinese": "两脚依次落地",
          "english": "The feet land alternately (not simultaneously)"
        },
        {
          "chinese": "脚移动、跳动",
          "english": "Foot shuffles or skips"
        },
        {
          "chinese": "附加支撑",
          "english": "Use of additional support"
        },
        {
          "chinese": "倒地",
          "english": "Fall"
        },
        {
          "chinese": "动作之间明显停顿",
          "english": "Obvious pause between the 2 techniques"
        }
      ]
    },
    "throw_catch": {
      "description": "Weapon throwing and catching techniques",
      "deductions": [
        {
          "chinese": "抢背后，手、臀、膝未离地",
          "english": "When performing Forward Dive Roll, the hip/buttock, knee or single hand is not off the ground when catching the weapon"
        },
        {
          "chinese": "未接握住器械或接抓刀彩、剑穗",
          "english": "The catch is unsuccessful, or the weapon is caught by the broadsword ribbon/straight sword tassel"
        }
      ]
    }
  },
  "execution_standards": {
    "rotation_calculation": {
      "two_feet_landing": "For jumping techniques with rotation landing on two feet; or landing into stances; the calculation of degree of rotation is based on the angle formed by the line between both feet at the time of takeoff and at the time of landing.",
      "single_foot_landing": "For jumping techniques with rotation that land on a single foot, the calculation of degree of rotation is based on the angle formed by the extended toe-to-heel line at the time of takeoff and that at the time of landing.",
      "leg_sweeping": "For leg sweeping techniques, the calculation of degree of rotation is based on the degree of rotation performed by the sweeping leg's foot from the start of the rotation to its completion."
    },
    "run_up_rules": {
      "counting": "Prior to the execution of a jumping technique, each time a foot is planted on the ground while running in a single direction (including in an arc), it will be counted as a run-up step.",
      "connections": "For jumping techniques, the number of connection steps between two techniques shall be counted from the first step taken after landing on a single foot or with both feet from the previous jumping technique."
    },
    "general_rules": {
      "difficulty_failure": "Should a Degree of Difficulty technique be unsuccessfully executed, then its preceding or the following Degree of Difficulty connection may not be confirmed.",
      "form_change": "Should an executed Degree of Difficulty connection differ from what was registered, then both the Degree of Difficulty technique and its connections may not be confirmed.",
      "weapon_support": "The Degree of Difficulty for a balance will not be confirmed as successful if the technique was completed with the use of a weapon for additional support.",
      "technique_requirement": "Upon completing a Dynamic + Static Degree of Difficulty connection technique, one must complete two or more technical movements prior to another set of Degree of Difficulty technique."
    }
  }
};